-- ================================================================
-- ILYAN GO — Schema de Base de Données Supabase Correct
-- Copiez et collez l'intégralité de ce script dans : Supabase > SQL Editor > New Query, puis cliquez sur "Run".
-- ================================================================

create table if not exists public.categories (
  id text primary key,
  name text not null
);

create table if not exists public.countries (
  id text primary key,
  name text not null,
  flag text not null,
  image text not null,
  category text not null,
  fees text not null,
  "processingTime" text not null,
  requirements text[] not null,
  conditions text not null,
  "order" integer not null default 1,
  "servicePrice" bigint not null default 10000,
  "requiresBiometrics" boolean not null default false,
  "acceptanceRate" integer not null default 99,
  "objectPosition" text not null default '50% 50%'
);

create table if not exists public.offers (
  id text primary key,
  title text not null,
  price text not null,
  image text not null,
  "startDate" text not null,
  "endDate" text not null,
  badge text not null,
  description text not null,
  active boolean not null default true
);

create table if not exists public.orders (
  id text primary key,
  "clientName" text not null,
  email text not null,
  phone text not null,
  "countryId" text not null,
  "visaType" text not null,
  status text not null,
  date text not null,
  "uploadedFiles" jsonb not null default '[]'::jsonb,
  logs jsonb not null default '[]'::jsonb,
  "paymentMethod" text
);

create table if not exists public.customers (
  id text primary key,
  name text not null,
  email text not null,
  phone text not null,
  status text not null default 'active',
  history text[] not null default '{}'::text[]
);

create table if not exists public.messages (
  id text primary key,
  name text not null,
  email text not null,
  message text not null,
  date text not null,
  replied boolean not null default false,
  replies jsonb not null default '[]'::jsonb
);

create table if not exists public.settings (
  id text primary key default 'global_settings',
  data jsonb not null
);

create table if not exists public.staff_profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  email text not null unique,
  role text not null check (role in ('super_admin', 'admin', 'employee')),
  status text not null default 'active'
);

create table if not exists public.audit_logs (
  id uuid default gen_random_uuid() primary key,
  "userEmail" text not null,
  action text not null,
  timestamp timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.live_chats (
  id text primary key,
  "clientName" text not null,
  messages jsonb not null default '[]'::jsonb,
  "lastUpdated" text not null,
  active boolean not null default true
);

create table if not exists public.promo_codes (
  id text primary key,
  code text not null unique,
  discount double precision not null,
  type text not null,
  active boolean not null default true
);

-- Désactivation de la sécurité Row Level Security (RLS) pour la synchronisation directe
alter table public.categories disable row level security;
alter table public.countries disable row level security;
alter table public.offers disable row level security;
alter table public.orders disable row level security;
alter table public.customers disable row level security;
alter table public.messages disable row level security;
alter table public.settings disable row level security;
alter table public.staff_profiles disable row level security;
alter table public.audit_logs disable row level security;
alter table public.live_chats disable row level security;
alter table public.promo_codes disable row level security;
