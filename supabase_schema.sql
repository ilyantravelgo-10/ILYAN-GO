-- ================================================================
-- ILYAN GO — Supabase Database Schema
-- Run this entire script in: Supabase > SQL Editor > New Query
-- ================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ================================================================
-- 1. SETTINGS
-- ================================================================
CREATE TABLE IF NOT EXISTS settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key TEXT UNIQUE NOT NULL,
    value JSONB,
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 2. STAFF PROFILES (linked to Supabase Auth users)
-- ================================================================
CREATE TABLE IF NOT EXISTS staff_profiles (
    id UUID PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    role TEXT DEFAULT 'employee',
    status TEXT DEFAULT 'active',
    phone TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 3. CATEGORIES
-- ================================================================
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    icon TEXT,
    color TEXT,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 4. COUNTRIES / DESTINATIONS
-- ================================================================
CREATE TABLE IF NOT EXISTS countries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    flag TEXT,
    image TEXT,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    description TEXT,
    visa_types JSONB,
    requirements JSONB,
    processing_time TEXT,
    price NUMERIC,
    currency TEXT DEFAULT 'DZD',
    featured BOOLEAN DEFAULT false,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 5. OFFERS / PROMOTIONS
-- ================================================================
CREATE TABLE IF NOT EXISTS offers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    image TEXT,
    country_id UUID REFERENCES countries(id) ON DELETE SET NULL,
    discount_percent NUMERIC DEFAULT 0,
    original_price NUMERIC,
    final_price NUMERIC,
    currency TEXT DEFAULT 'DZD',
    start_date DATE,
    end_date DATE,
    active BOOLEAN DEFAULT true,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 6. PROMO CODES
-- ================================================================
CREATE TABLE IF NOT EXISTS promo_codes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code TEXT UNIQUE NOT NULL,
    discount_percent NUMERIC DEFAULT 0,
    discount_fixed NUMERIC DEFAULT 0,
    max_uses INTEGER DEFAULT 100,
    used_count INTEGER DEFAULT 0,
    expires_at TIMESTAMPTZ,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 7. CUSTOMERS
-- ================================================================
CREATE TABLE IF NOT EXISTS customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    wilaya TEXT,
    address TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 8. ORDERS / VISA REQUESTS
-- ================================================================
CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_number TEXT UNIQUE,
    customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
    country_id UUID REFERENCES countries(id) ON DELETE SET NULL,
    offer_id UUID REFERENCES offers(id) ON DELETE SET NULL,
    visa_type TEXT,
    status TEXT DEFAULT 'pending',
    amount NUMERIC DEFAULT 0,
    currency TEXT DEFAULT 'DZD',
    payment_status TEXT DEFAULT 'unpaid',
    promo_code TEXT,
    notes TEXT,
    documents JSONB,
    assigned_to UUID REFERENCES staff_profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 9. MESSAGES / CONTACT INBOX
-- ================================================================
CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    subject TEXT,
    body TEXT,
    status TEXT DEFAULT 'unread',
    replied_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 10. LIVE CHATS
-- ================================================================
CREATE TABLE IF NOT EXISTS live_chats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    visitor_name TEXT,
    visitor_email TEXT,
    status TEXT DEFAULT 'open',
    messages JSONB DEFAULT '[]',
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 11. AUDIT LOGS
-- ================================================================
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_email TEXT,
    action TEXT NOT NULL,
    details TEXT,
    ip_address TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 12. NOTIFICATIONS
-- ================================================================
CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT,
    body TEXT,
    type TEXT DEFAULT 'info',
    read BOOLEAN DEFAULT false,
    target_role TEXT DEFAULT 'all',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 13. FAQs
-- ================================================================
CREATE TABLE IF NOT EXISTS faqs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question TEXT NOT NULL,
    answer TEXT,
    category TEXT,
    order_index INTEGER DEFAULT 0,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- 14. BLOG POSTS
-- ================================================================
CREATE TABLE IF NOT EXISTS blog (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE,
    content TEXT,
    image TEXT,
    author_id UUID REFERENCES staff_profiles(id) ON DELETE SET NULL,
    status TEXT DEFAULT 'draft',
    tags TEXT[],
    created_at TIMESTAMPTZ DEFAULT now(),
    published_at TIMESTAMPTZ
);

-- ================================================================
-- ROW LEVEL SECURITY
-- ================================================================
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE countries ENABLE ROW LEVEL SECURITY;
ALTER TABLE offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE promo_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE live_chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog ENABLE ROW LEVEL SECURITY;

-- Full access for authenticated (admin) users
CREATE POLICY "admin_settings"       ON settings       FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_staff"          ON staff_profiles FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_categories"     ON categories     FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_countries"      ON countries      FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_offers"         ON offers         FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_promo_codes"    ON promo_codes    FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_customers"      ON customers      FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_orders"         ON orders         FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_messages"       ON messages       FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_live_chats"     ON live_chats     FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_audit_logs"     ON audit_logs     FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_notifications"  ON notifications  FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_faqs"           ON faqs           FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_blog"           ON blog           FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Public read for website visitors
CREATE POLICY "anon_read_countries"   ON countries   FOR SELECT TO anon USING (active = true);
CREATE POLICY "anon_read_offers"      ON offers      FOR SELECT TO anon USING (active = true);
CREATE POLICY "anon_read_categories"  ON categories  FOR SELECT TO anon USING (true);
CREATE POLICY "anon_read_faqs"        ON faqs        FOR SELECT TO anon USING (active = true);
CREATE POLICY "anon_read_blog"        ON blog        FOR SELECT TO anon USING (status = 'published');
CREATE POLICY "anon_read_settings"    ON settings    FOR SELECT TO anon USING (true);
CREATE POLICY "anon_insert_messages"  ON messages    FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_insert_orders"    ON orders      FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_insert_customers" ON customers   FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_insert_chats"     ON live_chats  FOR INSERT TO anon WITH CHECK (true);

-- ================================================================
-- Done! All 14 tables created with RLS policies.
-- ================================================================
