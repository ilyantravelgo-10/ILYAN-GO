// Seed Data for Visago Web Application Database
const DEFAULT_CATEGORIES = [
    { id: "schengen", name: "Visa Schengen" },
    { id: "evisa", name: "Visa Électronique (E-Visa)" },
    { id: "classic", name: "Visa Classique (Sur dossier)" }
];

const DEFAULT_COUNTRIES = [
    {
        id: "france",
        name: "France / فرنسا",
        flag: "fr",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 30 EUR (VFS)",
        servicePrice: 15000,
        requiresBiometrics: true,
        acceptanceRate: 85,
        processingTime: "10 - 15 Jours",
        requirements: [
            "Formulaire de demande de visa Schengen rempli.",
            "Passeport original valide au moins 3 mois.",
            "2 photos d'identité récentes aux normes OACI.",
            "Assurance médicale de voyage (couverture 30 000 EUR min).",
            "Justificatif d'hébergement.",
            "Relevés bancaires des 3 derniers mois."
        ],
        conditions: "Dépôt en personne sur rendez-vous chez VFS Global.",
        order: 1
    },
    {
        id: "espagne",
        name: "Espagne / إسبانيا",
        flag: "es",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 16 EUR (BLS)",
        servicePrice: 12000,
        requiresBiometrics: true,
        acceptanceRate: 80,
        processingTime: "7 - 12 Jours",
        requirements: [
            "Formulaire Schengen rempli.",
            "Passeport valide.",
            "Deux photos d'identité.",
            "Assurance voyage internationale.",
            "Réservation d'hôtel ou lettre d'invitation.",
            "Relevés de salaire et relevés bancaires."
        ],
        conditions: "Dépôt physique du dossier chez BLS International.",
        order: 2
    },
    {
        id: "italie",
        name: "Italie / إيطاليا",
        flag: "it",
        image: "https://images.unsplash.com/photo-1529260830199-445826f3fbf2?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 30 EUR (VFS)",
        servicePrice: 14000,
        requiresBiometrics: true,
        acceptanceRate: 78,
        processingTime: "15 Jours environ",
        requirements: [
            "Formulaire officiel.",
            "Passeport en cours de validité.",
            "Photos conformes aux normes Schengen.",
            "Preuves d'hébergement et de moyens financiers."
        ],
        conditions: "Dépôt du dossier chez VFS Global.",
        order: 3
    },
    {
        id: "allemagne",
        name: "Allemagne / ألمانيا",
        flag: "de",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 35 EUR (VFS)",
        servicePrice: 16000,
        requiresBiometrics: true,
        acceptanceRate: 82,
        processingTime: "10 - 20 Jours",
        requirements: [
            "Formulaire de demande de visa Schengen.",
            "Passeport valide + 2 copies.",
            "2 photos biométriques récentes.",
            "Assurance voyage (30 000 EUR minimum).",
            "Lettre de motivation manuscrite.",
            "Justificatifs de ressources financières.",
            "Réservation d'hôtel confirmée."
        ],
        conditions: "Dossier déposé au Centre de visa VFS Berlin.",
        order: 4
    },
    {
        id: "belgique",
        name: "Belgique / بلجيكا",
        flag: "be",
        image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 30 EUR (VFS)",
        servicePrice: 15000,
        requiresBiometrics: true,
        acceptanceRate: 75,
        processingTime: "15 Jours",
        requirements: [
            "Formulaire Schengen rempli et signé.",
            "Passeport original valide au moins 3 mois.",
            "2 photos d'identité récentes aux normes.",
            "Assurance médicale de voyage (30 000 EUR min).",
            "Relevés bancaires des 3 derniers mois.",
            "Justificatifs professionnels (titre de congé, attestation de travail, fiches de paie)."
        ],
        conditions: "Dépôt en personne sur rendez-vous chez VFS Global.",
        order: 5
    },
    {
        id: "paysbas",
        name: "Pays-Bas / هولندا",
        flag: "nl",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 32 EUR (VFS)",
        servicePrice: 15000,
        requiresBiometrics: true,
        acceptanceRate: 78,
        processingTime: "10 - 15 Jours",
        requirements: [
            "Formulaire de visa Schengen dûment rempli.",
            "Passeport valide et copies des visas précédents.",
            "Photos d'identité conformes aux normes Schengen.",
            "Assurance voyage couvrant les frais médicaux.",
            "Preuves de ressources financières suffisantes (relevés de compte).",
            "Réservation d'hébergement confirmée."
        ],
        conditions: "Dépôt de dossier chez VFS Global.",
        order: 6
    },
    {
        id: "suisse",
        name: "Suisse / سويسرا",
        flag: "ch",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 30 EUR (VFS)",
        servicePrice: 16000,
        requiresBiometrics: true,
        acceptanceRate: 80,
        processingTime: "10 - 15 Jours",
        requirements: [
            "Formulaire de demande officiel complété.",
            "Passeport en cours de validité (minimum 3 mois après séjour).",
            "Photos biométriques récentes.",
            "Assurance voyage internationale.",
            "Relevés de comptes bancaires et fiches de paie des 3 derniers mois.",
            "Réservation de vol aller-retour et d'hôtel."
        ],
        conditions: "Dépôt chez VFS Global.",
        order: 7
    },
    {
        id: "portugal",
        name: "Portugal / البرتغال",
        flag: "pt",
        image: "https://images.unsplash.com/photo-1509840144299-db975bc03943?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 28 EUR (VFS)",
        servicePrice: 14000,
        requiresBiometrics: true,
        acceptanceRate: 70,
        processingTime: "15 - 21 Jours",
        requirements: [
            "Formulaire Schengen rempli et signé.",
            "Passeport en cours de validité.",
            "Photos d'identité couleur récentes.",
            "Assurance médicale internationale.",
            "Justificatifs d'emploi et de ressources financières (salaires, banques).",
            "Justificatif d'hébergement (hôtel ou lettre d'invitation)."
        ],
        conditions: "Dépôt de dossier chez VFS Global.",
        order: 8
    },
    {
        id: "autriche",
        name: "Autriche / النمسا",
        flag: "at",
        image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 30 EUR (VFS)",
        servicePrice: 15000,
        requiresBiometrics: true,
        acceptanceRate: 76,
        processingTime: "15 Jours",
        requirements: [
            "Formulaire de demande Schengen.",
            "Passeport valide.",
            "Photos récentes conformes.",
            "Assurance voyage Schengen valide.",
            "Preuves de moyens financiers suffisants (compte bancaire).",
            "Justificatif professionnel ou d'études."
        ],
        conditions: "Dépôt chez VFS Global.",
        order: 9
    },
    {
        id: "grece",
        name: "Grèce / اليونان",
        flag: "gr",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 30 EUR (GVCW)",
        servicePrice: 13000,
        requiresBiometrics: true,
        acceptanceRate: 82,
        processingTime: "10 - 15 Jours",
        requirements: [
            "Formulaire Schengen dûment rempli.",
            "Passeport valide au moins 3 mois.",
            "Photos d'identité récentes conformes.",
            "Assurance médicale de voyage.",
            "Relevés de compte bancaire des 3 derniers mois.",
            "Preuve d'hébergement en Grèce."
        ],
        conditions: "Dépôt chez le centre de visa de la Grèce (GVCW).",
        order: 10
    },
    {
        id: "malte",
        name: "Malte / مالطا",
        flag: "mt",
        image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 30 EUR (VFS)",
        servicePrice: 13000,
        requiresBiometrics: true,
        acceptanceRate: 65,
        processingTime: "15 - 20 Jours",
        requirements: [
            "Formulaire de visa Schengen.",
            "Passeport valide.",
            "Photos d'identité récentes.",
            "Assurance de voyage Schengen.",
            "Justificatifs de fonds suffisants.",
            "Réservation d'hôtel confirmée."
        ],
        conditions: "Dépôt chez VFS Global.",
        order: 11
    },
    {
        id: "tcheque",
        name: "République Tchèque / التشيك",
        flag: "cz",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 25 EUR (VFS)",
        servicePrice: 14000,
        requiresBiometrics: true,
        acceptanceRate: 72,
        processingTime: "15 Jours",
        requirements: [
            "Passeport original valide.",
            "Formulaire de visa Schengen rempli.",
            "Assurance médicale.",
            "Relevés bancaires des 3 derniers mois.",
            "Justificatifs professionnels (employeur ou registre de commerce)."
        ],
        conditions: "Dépôt chez VFS Global.",
        order: 12
    },
    {
        id: "pologne",
        name: "Pologne / بولندا",
        flag: "pl",
        image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 20 EUR (VFS)",
        servicePrice: 14000,
        requiresBiometrics: true,
        acceptanceRate: 70,
        processingTime: "15 Jours",
        requirements: [
            "Formulaire de visa officiel.",
            "Passeport en cours de validité.",
            "Photos d'identité conformes.",
            "Assurance Schengen.",
            "Preuves de ressources financières suffisantes.",
            "Réservation d'hôtel confirmée."
        ],
        conditions: "Dépôt à l'Ambassade de Pologne ou centre VFS.",
        order: 13
    },
    {
        id: "hongrie",
        name: "Hongrie / المجر",
        flag: "hu",
        image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 30 EUR (VFS)",
        servicePrice: 13000,
        requiresBiometrics: true,
        acceptanceRate: 75,
        processingTime: "10 - 15 Jours",
        requirements: [
            "Formulaire Schengen rempli.",
            "Passeport valide.",
            "Photos d'identité conformes.",
            "Assurance voyage Schengen.",
            "Justificatifs professionnels et de ressources financières (3 relevés).",
            "Preuve d'hébergement."
        ],
        conditions: "Dépôt de dossier chez VFS Global.",
        order: 14
    },
    {
        id: "roumanie",
        name: "Roumanie / رومانيا",
        flag: "ro",
        image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire)",
        servicePrice: 13000,
        requiresBiometrics: true,
        acceptanceRate: 80,
        processingTime: "15 Jours",
        requirements: [
            "Formulaire Schengen officiel.",
            "Passeport valide et copies des pages importantes.",
            "Assurance médicale internationale.",
            "Preuves de ressources financières (50 EUR/jour min).",
            "Réservation d'hôtel ou lettre d'invitation approuvée."
        ],
        conditions: "Dépôt de dossier à l'Ambassade de Roumanie.",
        order: 15
    },
    {
        id: "irlande",
        name: "Irlande / أيرلندا",
        flag: "ie",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        category: "classic",
        fees: "60 EUR (Simple entrée) / 100 EUR (Multiples)",
        servicePrice: 18000,
        requiresBiometrics: false,
        acceptanceRate: 60,
        processingTime: "20 - 30 Jours",
        requirements: [
            "Formulaire de demande en ligne AVATS complété.",
            "Passeport valide et copies de tous les anciens passeports.",
            "Lettre de motivation signée détaillée.",
            "Relevés bancaires de 6 mois originaux et détaillés.",
            "Justificatif d'emploi/scolarité officiel.",
            "Assurance voyage internationale."
        ],
        conditions: "Soumission en ligne, puis dépôt physique du dossier ou envoi postal à l'Ambassade.",
        order: 16
    },
    {
        id: "suede",
        name: "Suède / السويد",
        flag: "se",
        image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 30 EUR (VFS)",
        servicePrice: 15000,
        requiresBiometrics: true,
        acceptanceRate: 74,
        processingTime: "15 - 20 Jours",
        requirements: [
            "Formulaire de demande Schengen.",
            "Passeport valide.",
            "Assurance médicale Schengen.",
            "Relevés bancaires originaux des 3 derniers mois.",
            "Justificatifs professionnels ou d'études.",
            "Réservation d'hôtel validée."
        ],
        conditions: "Dépôt chez VFS Global.",
        order: 17
    },
    {
        id: "norvege",
        name: "Norvège / النرويج",
        flag: "no",
        image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 30 EUR (VFS)",
        servicePrice: 16000,
        requiresBiometrics: true,
        acceptanceRate: 75,
        processingTime: "15 - 20 Jours",
        requirements: [
            "Lettre d'accompagnement imprimée du portail UDI.",
            "Passeport valide.",
            "2 photos d'identité récentes.",
            "Assurance voyage Schengen.",
            "Justificatifs de fonds financiers et d'activité professionnelle.",
            "Réservation d'hébergement."
        ],
        conditions: "Dépôt chez VFS Global.",
        order: 18
    },
    {
        id: "danemark",
        name: "Danemark / الدنمارك",
        flag: "dk",
        image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 30 EUR (VFS)",
        servicePrice: 16000,
        requiresBiometrics: true,
        acceptanceRate: 68,
        processingTime: "15 - 20 Jours",
        requirements: [
            "Formulaire Schengen rempli.",
            "Passeport en cours de validité.",
            "Assurance médicale internationale.",
            "Relevés bancaires des 3 derniers mois.",
            "Attestation de travail ou registre de commerce.",
            "Réservation d'hôtel confirmée."
        ],
        conditions: "Dépôt chez VFS Global.",
        order: 19
    },
    {
        id: "finlande",
        name: "Finlande / فنلندا",
        flag: "fi",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
        category: "schengen",
        fees: "80 EUR (Consulaire) + 30 EUR (VFS)",
        servicePrice: 15000,
        requiresBiometrics: true,
        acceptanceRate: 80,
        processingTime: "15 Jours",
        requirements: [
            "Formulaire Schengen officiel.",
            "Passeport valide (3 mois au-delà de la date de retour).",
            "Assurance médicale de voyage (30 000 EUR min).",
            "Preuves d'emploi et relevés bancaires récents.",
            "Réservation d'hôtel et billet d'avion."
        ],
        conditions: "Dépôt chez VFS Global.",
        order: 20
    },
    {
        id: "turquie",
        name: "Turquie / تركيا",
        flag: "tr",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
        category: "evisa",
        fees: "50 USD",
        servicePrice: 8000,
        requiresBiometrics: false,
        acceptanceRate: 98,
        processingTime: "24 - 48 Heures",
        requirements: [
            "Copie du passeport (valide au moins 6 mois).",
            "Adresse e-mail active.",
            "Carte bancaire pour paiement en ligne."
        ],
        conditions: "Valable pour les séjours touristiques de moins de 30 jours.",
        order: 21
    },
    {
        id: "emirats",
        name: "Émirats Arabes Unis / الإمارات",
        flag: "ae",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        category: "evisa",
        fees: "120 USD",
        servicePrice: 9000,
        requiresBiometrics: false,
        acceptanceRate: 99,
        processingTime: "3 - 5 Jours",
        requirements: [
            "Copie couleur claire du passeport.",
            "Une photo d'identité en couleur.",
            "Réservation d'un billet aller-retour."
        ],
        conditions: "Le visa électronique est valable pour une entrée de 30 jours.",
        order: 22
    },
    {
        id: "arabie",
        name: "Arabie Saoudite / السعودية",
        flag: "sa",
        image: "https://images.unsplash.com/photo-1617395743027-64e92a01e0cc?auto=format&fit=crop&w=800&q=80",
        category: "evisa",
        fees: "130 USD",
        servicePrice: 11000,
        requiresBiometrics: false,
        acceptanceRate: 99,
        processingTime: "1 - 24 Heures",
        requirements: [
            "Passeport en cours de validité (minimum 6 mois).",
            "Photo d'identité numérique.",
            "Adresse d'hébergement."
        ],
        conditions: "Permet d'effectuer le tourisme et la Omra.",
        order: 23
    },
    {
        id: "qatar",
        name: "Qatar / قطر",
        flag: "qa",
        image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80",
        category: "evisa",
        fees: "100 QAR (~27 USD)",
        servicePrice: 6000,
        requiresBiometrics: false,
        acceptanceRate: 99,
        processingTime: "24 - 48 Heures",
        requirements: [
            "Copie claire du passeport valide (min 6 mois).",
            "Photo d'identité numérique récente.",
            "Réservation d'hôtel confirmée.",
            "Billet d'avion de retour."
        ],
        conditions: "Demande de visa en ligne effectuée via la plateforme officielle Hayya.",
        order: 24
    },
    {
        id: "oman",
        name: "Oman / عُمان",
        flag: "om",
        image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=800&q=80",
        category: "evisa",
        fees: "20 OMR (~52 USD)",
        servicePrice: 6000,
        requiresBiometrics: false,
        acceptanceRate: 98,
        processingTime: "24 - 72 Heures",
        requirements: [
            "Copie couleur claire du passeport.",
            "Photo d'identité récente sur fond blanc.",
            "Réservation d'hôtel confirmée.",
            "Billet d'avion de retour."
        ],
        conditions: "Visa de tourisme électronique valable pour un séjour de 30 jours maximum.",
        order: 25
    },
    {
        id: "koweit",
        name: "Koweït / الكويت",
        flag: "kw",
        image: "https://images.unsplash.com/photo-1542849187-5ec6ea5e6a27?auto=format&fit=crop&w=800&q=80",
        category: "classic",
        fees: "3 KWD (~10 USD)",
        servicePrice: 10000,
        requiresBiometrics: false,
        acceptanceRate: 85,
        processingTime: "3 - 7 Jours",
        requirements: [
            "Passeport valide 6 mois minimum.",
            "Lettre d'invitation officielle ou sponsor koweïtien.",
            "Photo d'identité récente.",
            "Attestation de travail et justificatifs de profession."
        ],
        conditions: "Dépôt physique du dossier via notre agence de visa ou par votre sponsor direct.",
        order: 26
    },
    {
        id: "bahrein",
        name: "Bahreïn / البحرين",
        flag: "bh",
        image: "https://images.unsplash.com/photo-1549474843-edde3b65a905?auto=format&fit=crop&w=800&q=80",
        category: "evisa",
        fees: "29 BHD (~77 USD)",
        servicePrice: 6000,
        requiresBiometrics: false,
        acceptanceRate: 97,
        processingTime: "3 - 5 Jours",
        requirements: [
            "Copie couleur des pages de passeport.",
            "Réservation d'hôtel confirmée.",
            "Copie du billet d'avion de retour.",
            "Relevé bancaire des 3 derniers mois."
        ],
        conditions: "E-visa de tourisme valable pour 14 jours, extensible sur place.",
        order: 27
    },
    {
        id: "tunisie",
        name: "Tunisie / تونس",
        flag: "tn",
        image: "https://images.unsplash.com/photo-1530948990335-1eb93cbe6430?auto=format&fit=crop&w=800&q=80",
        category: "evisa",
        fees: "0 DZD (Exempté)",
        servicePrice: 1500,
        requiresBiometrics: false,
        acceptanceRate: 100,
        processingTime: "Instantané / Sans visa",
        requirements: [
            "Passeport en cours de validité.",
            "Ressortissants algériens exemptés de visa."
        ],
        conditions: "Aucune formalité de visa requise, voyage libre.",
        order: 28
    },
    {
        id: "egypte",
        name: "Égypte / مصر",
        flag: "eg",
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b31d468?auto=format&fit=crop&w=800&q=80",
        category: "classic",
        fees: "25 USD",
        servicePrice: 12000,
        requiresBiometrics: false,
        acceptanceRate: 90,
        processingTime: "7 - 15 Jours",
        requirements: [
            "Passeport valide au moins 6 mois.",
            "2 photos d'identité récentes.",
            "Copie de la carte d'identité nationale.",
            "Attestation de travail ou registre de commerce.",
            "Relevés bancaires des 3 derniers mois.",
            "Approbiation sécuritaire préalable."
        ],
        conditions: "Dépôt du dossier pour traitement sécuritaire de la demande de visa d'entrée.",
        order: 29
    },
    {
        id: "afriquesud",
        name: "Afrique du Sud / جنوب أفريقيا",
        flag: "za",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
        category: "classic",
        fees: "Gratuit (Dépôt à l'Ambassade)",
        servicePrice: 15000,
        requiresBiometrics: true,
        acceptanceRate: 75,
        processingTime: "10 - 15 Jours",
        requirements: [
            "Formulaire officiel BI-84 rempli en anglais.",
            "Passeport original valide.",
            "2 photos d'identité récentes.",
            "Justificatifs professionnels traduits en anglais.",
            "Relevés de comptes bancaires des 3 derniers mois traduits.",
            "Réservation d'hôtel et billet d'avion."
        ],
        conditions: "Dépôt physique requis à l'Ambassade d'Afrique du Sud à Alger.",
        order: 30
    },
    {
        id: "royaumeuni",
        name: "Royaume-Uni / المملكة المتحدة",
        flag: "gb",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
        category: "classic",
        fees: "115 GBP (Standard)",
        servicePrice: 18000,
        requiresBiometrics: true,
        acceptanceRate: 70,
        processingTime: "15 - 21 Jours",
        requirements: [
            "Formulaire de demande en ligne (Gov.uk).",
            "Passeport valide.",
            "Photo biométrique aux normes UK.",
            "Relevés bancaires des 6 derniers mois.",
            "Justificatif d'emploi ou attestation scolaire.",
            "Preuve d'hébergement au Royaume-Uni.",
            "Assurance voyage."
        ],
        conditions: "Prise de rendez-vous obligatoire chez TLScontact Alger.",
        order: 31
    },
    {
        id: "usa",
        name: "États-Unis / الولايات المتحدة",
        flag: "us",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80",
        category: "classic",
        fees: "185 USD (Visa B1/B2)",
        servicePrice: 22000,
        requiresBiometrics: true,
        acceptanceRate: 55,
        processingTime: "30 - 90 Jours",
        requirements: [
            "Formulaire DS-160 complété en ligne.",
            "Passeport valide 6 mois après séjour.",
            "Photo aux normes américaines.",
            "Reçu de paiement des frais consulaires.",
            "Preuve de liens avec l'Algérie (emploi, famille, bien).",
            "Relevés bancaires récents.",
            "Lettre d'invitation si applicable."
        ],
        conditions: "Entretien consulaire à l'ambassade obligatoire.",
        order: 32
    },
    {
        id: "canada",
        name: "Canada / كندا",
        flag: "ca",
        image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=800&q=80",
        category: "classic",
        fees: "100 CAD",
        servicePrice: 20000,
        requiresBiometrics: true,
        acceptanceRate: 60,
        processingTime: "15 - 45 Jours",
        requirements: [
            "Formulaire de demande de visa temporaire (IMM5257).",
            "Passeport valide.",
            "2 photos récentes.",
            "Empreintes digitales (Biométrie).",
            "Relevés bancaires prouvant ressources suffisantes.",
            "Lettre d'invitation si vous avez de la famille au Canada.",
            "Attestation de travail ou d'études."
        ],
        conditions: "Dépôt en ligne via le portail IRCC ou auprès du VAC.",
        order: 33
    },
    {
        id: "japon",
        name: "Japon / اليابان",
        flag: "jp",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        category: "classic",
        fees: "3000 DZD (Consulaire)",
        servicePrice: 15000,
        requiresBiometrics: false,
        acceptanceRate: 88,
        processingTime: "5 - 7 Jours",
        requirements: [
            "Formulaire de visa officiel rempli.",
            "Passeport valide.",
            "Photo d'identité récente.",
            "Itinéraire de séjour détaillé (Taizai Yoteisho).",
            "Attestation de travail et relevés bancaires récents."
        ],
        conditions: "Dépôt de dossier physique à l'Ambassade du Japon à Alger ou visa électronique.",
        order: 34
    },
    {
        id: "coreesud",
        name: "Corée du Sud / كوريا الجنوبية",
        flag: "kr",
        image: "https://images.unsplash.com/photo-1538669715515-5c3789c0900b?auto=format&fit=crop&w=800&q=80",
        category: "classic",
        fees: "40 USD",
        servicePrice: 14000,
        requiresBiometrics: false,
        acceptanceRate: 85,
        processingTime: "7 - 10 Jours",
        requirements: [
            "Formulaire officiel de visa de la Corée.",
            "Passeport en cours de validité.",
            "Photo d'identité récente.",
            "Relevés bancaires des 3 derniers mois.",
            "Attestation de travail ou de scolarité.",
            "Réservation de vol et d'hébergement."
        ],
        conditions: "Dépôt physique du dossier de visa à l'Ambassade de la République de Corée à Alger.",
        order: 35
    },
    {
        id: "chine",
        name: "Chine / الصين",
        flag: "cn",
        image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
        category: "classic",
        fees: "4000 DZD (Consulaire)",
        servicePrice: 14000,
        requiresBiometrics: true,
        acceptanceRate: 88,
        processingTime: "5 - 10 Jours",
        requirements: [
            "Formulaire de demande en ligne COVA rempli et signé.",
            "Passeport en cours de validité (minimum 6 mois) + copies.",
            "Photo d'identité numérique conforme aux normes.",
            "Lettre d'invitation officielle ou réservation d'hôtel et billet d'avion.",
            "Justificatifs d'activité professionnelle et financière."
        ],
        conditions: "Dépôt physique au Centre de demande de visa de Chine sur rendez-vous.",
        order: 36
    },
    {
        id: "singapour",
        name: "Singapour / سنغافورة",
        flag: "sg",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
        category: "evisa",
        fees: "30 SGD (~22 USD)",
        servicePrice: 8000,
        requiresBiometrics: false,
        acceptanceRate: 95,
        processingTime: "3 - 5 Jours",
        requirements: [
            "Passeport en cours de validité (au moins 6 mois).",
            "Photo d'identité récente sur fond blanc.",
            "Lettre d'invitation (Formulaire V39A) émanant d'un contact singapourien.",
            "Réservation d'hôtel et billet d'avion de retour."
        ],
        conditions: "Demande effectuée en ligne par le biais d'un partenaire local agréé.",
        order: 37
    },
    {
        id: "thaïlande",
        name: "Thaïlande / تايلاند",
        flag: "th",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
        category: "evisa",
        fees: "35 USD",
        servicePrice: 6000,
        requiresBiometrics: false,
        acceptanceRate: 97,
        processingTime: "3 - 7 Jours",
        requirements: [
            "Passeport valide (6 mois minimum).",
            "Photo récente en couleur.",
            "Réservation d'hôtel ou lettre d'hébergement.",
            "Billet d'avion aller-retour.",
            "Preuve de fonds suffisants."
        ],
        conditions: "E-Visa valable 60 jours, renouvelable une fois sur place.",
        order: 38
    },
    {
        id: "malaisie",
        name: "Malaisie / ماليزيا",
        flag: "my",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
        category: "evisa",
        fees: "25 USD",
        servicePrice: 5000,
        requiresBiometrics: false,
        acceptanceRate: 96,
        processingTime: "48 Heures",
        requirements: [
            "Copie scannée du passeport.",
            "Photo d'identité numérique.",
            "Réservation d'hôtel confirmée.",
            "Itinéraire de voyage."
        ],
        conditions: "eVisa valable 30 jours pour le tourisme. Demande 100% en ligne.",
        order: 39
    }
];

const DEFAULT_OFFERS = [];

const DEFAULT_SETTINGS = {
    siteName: "ILYAN GO",
    phone: "+213 559614849",
    email: "ilyantravel10@gmail.com",
    address: "promotion ouadah, Bouira 10000",
    social: {
        facebook: "https://www.facebook.com/share/1J3HkqqB3u/",
        instagram: "https://www.instagram.com/ilyan_travel_agency",
        twitter: "#",
        linkedin: "#"
    },
    colors: {
        primary: "#0284c7",
        secondary: "#ea580c"
    },
    sections: {
        hero: true,
        features: true,
        howItWorks: true,
        offers: true,
        destinations: true,
        demande: true,
        contact: true
    },
    hero: {
        title: "Simplifiez votre demande de visa avec ILYAN GO",
        subtitle: "La plateforme facile et rapide pour obtenir vos informations et déposer votre demande de visa en ligne.",
        bgType: "video",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-travel-destination-of-a-beautiful-historical-town-40084-large.mp4",
        bgImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
    }
};

const DEFAULT_FAQS = [
    { q: "Quelles sont les conditions pour un visa Schengen ?", a: "Vous devez présenter un passeport valide, une assurance voyage, une réservation d'hôtel et des justificatifs de ressources financières." },
    { q: "Combien de temps faut-il pour obtenir un E-visa ?", a: "Les visas électroniques (E-visa) pour la Turquie ou l'Arabie Saoudite sont généralement traités en 24 à 48 heures." },
    { q: "Dois-je me déplacer pour la prise d'empreintes ?", a: "Oui, pour les visas Schengen (France, Espagne, Italie), une présence physique est obligatoire lors du dépôt pour la collecte des données biométriques." }
];

const DEFAULT_BLOG = [
    { id: "blog-1", title: "Top 5 des destinations sans visa en 2026", content: "Découvrez la liste des pays qui accueillent les voyageurs algériens sans visa ou avec visa à l'arrivée cette année...", date: "2026-07-01", author: "Directeur ILYAN GO" },
    { id: "blog-2", title: "Comment réussir son dossier de visa Schengen", content: "Nos experts partagent avec vous les erreurs courantes à éviter lors de la préparation de vos justificatifs financiers...", date: "2026-06-25", author: "Conseiller Voyage" }
];

const DEFAULT_PROMO_CODES = [
    { id: "WELCOME10", code: "WELCOME10", discount: 10, type: "percent", active: true },
    { id: "ILYANGO2000", code: "ILYANGO2000", discount: 2000, type: "fixed", active: true }
];

const DEFAULT_STAFF = [
    { name: "Yacine Owner", username: "yacinemrf18@gmail.com", email: "yacinemrf18@gmail.com", password: "yacinelk", role: "super_admin" }
];

// Active render arrays variables
let activeCountries = [];
let activeCategories = [];
let activeOffers = [];
let uploadedFilesData = { passport: null, photo: null, pdf: null };

// Initialize database
function getDB() {
    let dbStr = localStorage.getItem('visago_db');
    if (!dbStr) {
        const initialDB = {
            settings: DEFAULT_SETTINGS,
            categories: DEFAULT_CATEGORIES,
            countries: DEFAULT_COUNTRIES,
            offers: DEFAULT_OFFERS,
            orders: [],
            customers: [],
            messages: [],
            staff: DEFAULT_STAFF,
            auditLogs: [],
            notifications: [],
            faqs: DEFAULT_FAQS,
            blog: DEFAULT_BLOG,
            promoCodes: DEFAULT_PROMO_CODES,
            liveChats: []
        };
        localStorage.setItem('visago_db', JSON.stringify(initialDB));
        return initialDB;
    }
    const db = JSON.parse(dbStr);
    
    let updated = false;
    if (!db.faqs) { db.faqs = DEFAULT_FAQS; updated = true; }
    if (!db.blog) { db.blog = DEFAULT_BLOG; updated = true; }
    if (!db.promoCodes) { db.promoCodes = DEFAULT_PROMO_CODES; updated = true; }
    if (!db.liveChats) { db.liveChats = []; updated = true; }
    // Ensure all promo codes have an ID
    if (db.promoCodes) {
        db.promoCodes.forEach(p => {
            if (!p.id) { p.id = p.code; updated = true; }
        });
    }
    // Preserve dynamic offers if any, otherwise seed with defaults
    if (!db.offers) {
        db.offers = DEFAULT_OFFERS;
        updated = true;
    }
    
    if (db.countries) {
        db.countries.forEach(c => {
            const defC = DEFAULT_COUNTRIES.find(dc => dc.id === c.id);
            if (defC) {
                if (c.order === undefined) { c.order = defC.order; updated = true; }
                if (c.requirements === undefined) { c.requirements = defC.requirements; updated = true; }
                if (c.fees === undefined) { c.fees = defC.fees; updated = true; }
                if (c.processingTime === undefined) { c.processingTime = defC.processingTime; updated = true; }
                if (c.conditions === undefined) { c.conditions = defC.conditions; updated = true; }
                if (c.category === undefined) { c.category = defC.category; updated = true; }
                if (c.name === undefined) { c.name = defC.name; updated = true; }
                if (c.flag === undefined) { c.flag = defC.flag; updated = true; }
                if (c.servicePrice === undefined) { c.servicePrice = defC.servicePrice; updated = true; }
                if (c.requiresBiometrics === undefined) { c.requiresBiometrics = defC.requiresBiometrics; updated = true; }
                if (c.acceptanceRate === undefined) { c.acceptanceRate = defC.acceptanceRate; updated = true; }
                if (!c.image || c.image.includes('1580618672591')) { c.image = defC.image; updated = true; }
            }
        });
        // Add any new default countries not yet in db
        DEFAULT_COUNTRIES.forEach(defC => {
            if (!db.countries.find(c => c.id === defC.id)) {
                db.countries.push(defC);
                updated = true;
            }
        });
        // Re-sort by order
        db.countries.sort((a, b) => (a.order || 0) - (b.order || 0));
    }

    if (db.settings && db.settings.siteName === "Visago") {
        db.settings.siteName = "ILYAN GO";
        if (db.settings.hero && db.settings.hero.title === "Simplifiez votre demande de visa avec Visago") {
            db.settings.hero.title = "Simplifiez votre demande de visa avec ILYAN GO";
        }
        updated = true;
    }
    
    if (updated) {
        localStorage.setItem('visago_db', JSON.stringify(db));
    }
    return db;
}

function saveDB(db) {
    try {
        localStorage.setItem('visago_db', JSON.stringify(db));
    } catch (e) {
        console.error("Failed to save to localStorage:", e);
    }
}

// Supabase client fetcher
let supabaseClient = null;
function getSupabase() {
    if (supabaseClient) return supabaseClient;

    // 1st priority: settings saved from the admin panel in localStorage (configured via Admin UI)
    const db = getDB();
    if (db.settings && db.settings.supabase && db.settings.supabase.active) {
        const url = db.settings.supabase.url;
        const key = db.settings.supabase.key;
        if (url && key) {
            supabaseClient = window.supabase.createClient(url, key);
            return supabaseClient;
        }
    }

    // 2nd priority: config.js (SUPABASE_CONFIG object) — shared fallback
    if (window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.active &&
        window.SUPABASE_CONFIG.url && window.SUPABASE_CONFIG.key) {
        supabaseClient = window.supabase.createClient(
            window.SUPABASE_CONFIG.url,
            window.SUPABASE_CONFIG.key
        );
        return supabaseClient;
    }
    return null;
}

// 1. Initial Data Loader (Supabase or local fallback)
async function loadInitialData() {
    const sb = getSupabase();
    if (sb) {
        try {
            // Fetch categories, countries, offers, settings and promo_codes in parallel
            const [catRes, countRes, offRes, settingsRes, promoRes] = await Promise.all([
                sb.from('categories').select('*'),
                sb.from('countries').select('*').order('order', { ascending: true }),
                sb.from('offers').select('*'),
                sb.from('settings').select('*').eq('id', 'global_settings').single(),
                sb.from('promo_codes').select('*')
            ]);

            // If tables are missing (PGRST205), fall back silently to local
            const isMissingTable = (r) => r.error && (r.error.code === 'PGRST205' || (r.error.message && r.error.message.includes('schema cache')));

            if (isMissingTable(catRes) || isMissingTable(countRes) || isMissingTable(offRes)) {
                console.warn('[ILYAN GO] Supabase tables not found, falling back to local data. Please run the SQL schema script.');
                loadLocalData();
                return;
            }

            if (catRes.error) throw catRes.error;
            if (countRes.error) throw countRes.error;
            if (offRes.error) throw offRes.error;

            // Load from Supabase - use local defaults as fallback for empty tables
            const db = getDB();
            activeCategories = (catRes.data && catRes.data.length > 0) ? catRes.data : (db.categories || DEFAULT_CATEGORIES);
            activeCountries  = (countRes.data && countRes.data.length > 0)
                ? countRes.data.sort((a,b) => (a.order || 0) - (b.order || 0))
                : (db.countries || DEFAULT_COUNTRIES).sort((a,b) => (a.order || 0) - (b.order || 0));
            activeOffers = (offRes.data && offRes.data.length > 0) ? offRes.data : (db.offers || DEFAULT_OFFERS);

            // Sync promo codes to localStorage for local reference
            if (!promoRes.error && promoRes.data) {
                db.promoCodes = promoRes.data;
                saveDB(db);
            }

            // If Supabase settings fetched successfully, merge with local settings
            if (settingsRes.data && settingsRes.data.data) {
                // Preserve supabase connection config from local so it isn't overwritten
                const localSbConfig = db.settings ? db.settings.supabase : null;
                db.settings = { ...db.settings, ...settingsRes.data.data };
                if (localSbConfig) db.settings.supabase = localSbConfig;
                saveDB(db);
            }
        } catch (err) {
            console.error('[ILYAN GO] Supabase load failed, falling back to LocalStorage:', err);
            loadLocalData();
        }
    } else {
        loadLocalData();
    }
}

function loadLocalData() {
    const db = getDB();
    activeCategories = db.categories || DEFAULT_CATEGORIES;
    activeCountries = (db.countries || DEFAULT_COUNTRIES).sort((a,b) => (a.order || 0) - (b.order || 0));
    activeOffers = db.offers || DEFAULT_OFFERS;
}

// 2. Apply Custom visual settings
function applySettings() {
    const db = getDB();
    const settings = db.settings || DEFAULT_SETTINGS;

    // Colors Theme
    if (settings.colors) {
        document.documentElement.style.setProperty('--primary', settings.colors.primary);
        document.documentElement.style.setProperty('--secondary', settings.colors.secondary);
    }

    // Header logo & names
    if (db.settings && db.settings.siteName) {
        document.title = `${db.settings.siteName} - Demande de Visa en Ligne`;
    }

    // Hero Customizations
    if (settings.hero) {
        const titleEl = document.getElementById('hero-title');
        const subEl = document.getElementById('hero-subtitle');
        const heroSection = document.getElementById('accueil');
        const videoEl = heroSection ? heroSection.querySelector('.hero-video') : null;

        if (titleEl) titleEl.innerText = settings.hero.title;
        if (subEl) subEl.innerText = settings.hero.subtitle;
        
        const mediaType = settings.hero.bgType || 'video';
        const fallbackImage = settings.hero.bgImage || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80';
        const videoUrl = settings.hero.videoUrl || 'https://assets.mixkit.co/videos/preview/mixkit-travel-destination-of-a-beautiful-historical-town-40084-large.mp4';
        
        if (heroSection) {
            // Always set fallback image as background behind video
            heroSection.style.backgroundImage = `url('${fallbackImage}')`;
            heroSection.style.backgroundSize = 'cover';
            heroSection.style.backgroundPosition = 'center';
            
            if (mediaType === 'image' || mediaType === 'gif') {
                const imgUrl = settings.hero.bgImage || fallbackImage;
                heroSection.style.backgroundImage = `url('${imgUrl}')`;
                if (videoEl) videoEl.style.display = 'none';
            } else if (mediaType === 'video') {
                if (videoEl) {
                    videoEl.style.display = 'block';
                    if (fallbackImage) {
                        videoEl.setAttribute('poster', fallbackImage);
                    }
                    const srcEl = videoEl.querySelector('source');
                    if (srcEl && srcEl.src !== videoUrl) {
                        srcEl.src = videoUrl;
                        videoEl.load();
                        videoEl.play().catch(()=>{});
                    }
                }
            }
        }
    }

    // Toggle active sections
    if (settings.sections) {
        const mapping = {
            hero: 'accueil',
            features: 'features',
            howItWorks: 'comment-ca-marche',
            offers: 'offers',
            destinations: 'destinations',
            demande: 'demande',
            contact: 'contact-form-section'
        };

        for (const [key, sectionId] of Object.entries(mapping)) {
            const el = document.getElementById(sectionId) || document.querySelector(`.${sectionId}`);
            if (el) {
                el.style.display = settings.sections[key] ? '' : 'none';
            }
        }
    }

    // Contacts info
    const footerEmail = document.getElementById('footer-email');
    const footerPhone = document.getElementById('footer-phone');
    const footerAddress = document.getElementById('footer-address');
    
    if (footerEmail) footerEmail.innerText = settings.email;
    if (footerPhone) footerPhone.innerText = settings.phone;
    if (footerAddress) footerAddress.innerText = settings.address;

    const contactPhone = document.getElementById('contact-info-phone');
    const contactEmail = document.getElementById('contact-info-email');
    const contactAddress = document.getElementById('contact-info-address');

    if (contactPhone) contactPhone.innerText = settings.phone;
    if (contactEmail) contactEmail.innerText = settings.email;
    if (contactAddress) contactAddress.innerText = settings.address;

    if (settings.social) {
        const fb = document.getElementById('social-fb');
        const tw = document.getElementById('social-tw');
        const ig = document.getElementById('social-ig');
        const ln = document.getElementById('social-ln');

        if (fb) fb.href = settings.social.facebook || '#';
        if (tw) tw.href = settings.social.twitter || '#';
        if (ig) ig.href = settings.social.instagram || '#';
        if (ln) ln.href = settings.social.linkedin || '#';
    }
}

// 3. Render Filters Tabs
function renderFilters() {
    const filterContainer = document.querySelector('.destinations-filter');
    if (!filterContainer) return;

    let html = `<button class="filter-btn active" data-category="all">Tous</button>`;
    activeCategories.forEach(cat => {
        html += `<button class="filter-btn" data-category="${cat.id}">${cat.name}</button>`;
    });

    filterContainer.innerHTML = html;

    const buttons = filterContainer.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCards(btn.getAttribute('data-category'));
        });
    });
}

// 4. Render Country Visa cards grid
function renderCards(filterCategory = 'all') {
    const gridContainer = document.querySelector('.destinations-grid');
    if (!gridContainer) return;

    const filteredCountries = filterCategory === 'all'
        ? activeCountries
        : activeCountries.filter(c => c.category === filterCategory);

    if (filteredCountries.length === 0) {
        gridContainer.innerHTML = `<div class="no-results">Aucune destination disponible.</div>`;
        return;
    }

    let html = '';
    filteredCountries.forEach(country => {
        const catObj = activeCategories.find(cat => cat.id === country.category);
        const catName = catObj ? catObj.name : '';
        const flagHTML = `<img src="https://flagcdn.com/w40/${country.flag.toLowerCase()}.png" class="flag-icon-badge" alt="${country.name}">`;

        html += `
            <div class="destination-card" data-id="${country.id}">
                <div class="card-img-container">
                    <img src="${country.image}" alt="${country.name}" class="card-img"
                         style="object-position: ${country.objectPosition || '50% 50%'};"
                         onerror="this.src='https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'">
                    <div class="card-overlay-gradient"></div>
                    <div class="flag-container">
                        ${flagHTML}
                    </div>
                    <span class="category-badge">${catName}</span>
                </div>
                <div class="card-body">
                    <h3 class="country-title">${country.name}</h3>
                    <div class="card-footer-info">
                        <span><i class='bx bx-time-five'></i> ${country.processingTime}</span>
                        <span><i class='bx bx-credit-card'></i> ${country.fees}</span>
                    </div>
                    <button class="btn btn-secondary btn-card-action" onclick="openVisaDetails('${country.id}')">Voir le dossier</button>
                </div>
            </div>
        `;
    });

    gridContainer.innerHTML = html;

    const cards = gridContainer.querySelectorAll('.destination-card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-card-action')) {
                openVisaDetails(card.getAttribute('data-id'));
            }
        });
    });
}

// 5. Render Dynamic Special Offers
function renderOffers() {
    const gridContainer = document.querySelector('.offers-grid');
    if (!gridContainer) return;

    const offers = activeOffers.filter(o => o.active === true);
    if (offers.length === 0) {
        const offersSec = document.getElementById('offers');
        if (offersSec) offersSec.style.display = 'none';
        return;
    }

    let html = '';
    offers.forEach(offer => {
        const badgeText = offer.badge === 'special' ? 'Offre Spéciale' : 'Plus Demandé';
        const badgeClass = offer.badge === 'special' ? '' : 'most-requested';

        html += `
            <div class="offer-card">
                <span class="offer-badge ${badgeClass}">${badgeText}</span>
                <span class="offer-price-tag">${offer.price}</span>
                <div class="card-img-container">
                    <img src="${offer.image}" alt="${offer.title}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'">
                    <div class="card-overlay-gradient"></div>
                </div>
                <div class="offer-body">
                    <h3 class="offer-title">${offer.title}</h3>
                    <p class="offer-desc">${offer.description}</p>
                    <div class="offer-dates">
                        <i class='bx bx-calendar'></i>
                        <span>Du ${formatDate(offer.startDate)} au ${formatDate(offer.endDate)}</span>
                    </div>
                    <a href="#demande" class="btn btn-secondary w-100" onclick="selectOfferDestination('${offer.title}')">Réserver l'offre</a>
                </div>
            </div>
        `;
    });

    gridContainer.innerHTML = html;
}

function selectOfferDestination(offerName) {
    const demandeSec = document.getElementById('demande');
    if (demandeSec) demandeSec.scrollIntoView({ behavior: 'smooth' });
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// 6. Populate Form Destinations select lists
function populateFormDestinations() {
    const searchDest = document.getElementById('destination');
    const visaDest = document.getElementById('visa-destination');

    let options = '<option value="">Sélectionnez votre destination</option>';
    activeCountries.forEach(country => {
        const displayName = country.name.split(' / ')[0];
        options += `<option value="${country.id}">${displayName}</option>`;
    });

    if (searchDest) searchDest.innerHTML = options;
    if (visaDest) visaDest.innerHTML = options;
}

// 7. Visa details modal controller
function openVisaDetails(countryId) {
    const country = activeCountries.find(c => c.id === countryId);
    if (!country) return;

    const modal = document.getElementById('visaDetailModal');
    if (!modal) return;

    document.getElementById('modalCountryName').innerText = country.name;
    document.getElementById('modalHeroImg').src = country.image;
    document.getElementById('modalHeroImg').style.objectPosition = country.objectPosition || '50% 50%';
    document.getElementById('modalFlagContainer').innerHTML = `
        <img src="https://flagcdn.com/w80/${country.flag.toLowerCase()}.png" alt="${country.name}">
    `;

    document.getElementById('modalFees').innerText = country.fees;
    document.getElementById('modalTime').innerText = country.processingTime;
    document.getElementById('modalConditions').innerText = country.conditions || 'Aucune condition spécifique.';

    const reqList = document.getElementById('modalRequirementsList');
    reqList.innerHTML = '';
    
    const requirements = country.requirements || [];
    if (requirements.length === 0) {
        reqList.innerHTML = '<li>Aucun document requis spécifié.</li>';
    } else {
        requirements.forEach(req => {
            reqList.innerHTML += `<li><i class='bx bx-check-circle'></i> <span>${req}</span></li>`;
        });
    }

    const modalCta = document.getElementById('modalCtaBtn');
    if (modalCta) {
        modalCta.onclick = function() {
            closeModal();
            const applySection = document.getElementById('demande');
            if (applySection) {
                applySection.scrollIntoView({ behavior: 'smooth' });
                const destSelect = document.getElementById('visa-destination');
                if (destSelect) destSelect.value = country.id;
            }
        };
    }

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('visaDetailModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// =============================================
// INTERACTIVE MAP TOOLTIP FUNCTIONS
// =============================================

let _tooltipHideTimeout = null;

function showMapTooltip(event, countryId) {
    if (_tooltipHideTimeout) {
        clearTimeout(_tooltipHideTimeout);
        _tooltipHideTimeout = null;
    }
    const country = activeCountries.find(c => c.id === countryId);
    if (!country) return;

    window._mapHoverId = countryId;

    // Highlight flight connection line
    document.querySelectorAll('.flight-path').forEach(el => el.classList.remove('active-line'));
    const pathEl = document.getElementById(`path-${countryId}`);
    if (pathEl) {
        pathEl.classList.add('active-line');
    }

    const tooltip = document.getElementById('mapTooltip');
    if (!tooltip) return;

    // Fill data
    document.getElementById('mapTooltipImg').src = country.image;
    document.getElementById('mapTooltipImg').style.objectPosition = country.objectPosition || '50% 50%';
    document.getElementById('mapTooltipFlag').src = `https://flagcdn.com/w80/${country.flag.toLowerCase()}.png`;
    document.getElementById('mapTooltipFlag').alt = country.name;
    document.getElementById('mapTooltipName').textContent = country.name;
    document.getElementById('mapTooltipTime').querySelector('span').textContent = country.processingTime;
    document.getElementById('mapTooltipRate').querySelector('span').textContent = `${country.acceptanceRate}% acceptation`;

    // Position tooltip
    const mapWrapper = document.querySelector('.world-map-wrapper');
    if (!mapWrapper) return;
    const wrapRect = mapWrapper.getBoundingClientRect();

    // Get marker position from SVG transform
    const markerEl = event.currentTarget;
    const svgEl = document.getElementById('worldMapSvg');
    const svgRect = svgEl.getBoundingClientRect();
    const svgVB = svgEl.viewBox.baseVal;

    // Get the transform translate values
    const tf = markerEl.getAttribute('transform');
    const match = tf.match(/translate\(([^,]+),([^)]+)\)/);
    if (!match) return;
    const svgX = parseFloat(match[1]);
    const svgY = parseFloat(match[2]);

    // Scale SVG coords to screen pixels
    const scaleX = svgRect.width / svgVB.width;
    const scaleY = svgRect.height / svgVB.height;

    const screenX = svgRect.left - wrapRect.left + svgX * scaleX;
    const screenY = svgRect.top  - wrapRect.top  + svgY * scaleY;

    tooltip.style.left = `${screenX}px`;
    tooltip.style.top  = `${screenY}px`;
    tooltip.style.display = 'block';
    tooltip.style.pointerEvents = 'auto';
}

function hideMapTooltip() {
    _tooltipHideTimeout = setTimeout(() => {
        const tooltip = document.getElementById('mapTooltip');
        if (tooltip) {
            tooltip.style.display = 'none';
            tooltip.style.pointerEvents = 'none';
        }
        window._mapHoverId = null;
        // Remove active class from all flight paths
        document.querySelectorAll('.flight-path').forEach(el => el.classList.remove('active-line'));
    }, 150);
}

function initMapCountryPills() {
    const pillsContainer = document.getElementById('mapCountryPills');
    if (!pillsContainer || !activeCountries) return;
    pillsContainer.innerHTML = '';
    activeCountries.forEach(country => {
        const pill = document.createElement('button');
        pill.className = 'map-pill';
        pill.innerHTML = `
            <img src="https://flagcdn.com/w40/${country.flag.toLowerCase()}.png" alt="${country.name}" />
            <span>${country.name.split('/')[0].trim()}</span>
            <span class="pill-rate">${country.acceptanceRate}%</span>
        `;
        pill.addEventListener('click', () => openVisaDetails(country.id));
        pillsContainer.appendChild(pill);
    });
}

// =============================================

// 8. Dynamic form submissions bound to Supabase and Local Mode

let captchaAnswer = 0;
let tempOrderData = null;

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 9) + 2;
    const num2 = Math.floor(Math.random() * 8) + 2;
    captchaAnswer = num1 + num2;
    const qEl = document.getElementById('captchaQuestion');
    if (qEl) qEl.innerText = `${num1} + ${num2}`;
}

function updateFormProgress() {
    const fields = [
        document.getElementById('visa-firstname'),
        document.getElementById('visa-lastname'),
        document.getElementById('visa-email'),
        document.getElementById('visa-phone'),
        document.getElementById('visa-destination'),
        document.getElementById('visa-type')
    ];
    let filled = 0;
    fields.forEach(f => {
        if (f && f.value.trim() !== '') filled++;
    });
    
    // Add file attachments counts to progress
    if (uploadedFilesData.passport) filled++;
    if (uploadedFilesData.photo) filled++;
    if (uploadedFilesData.pdf) filled++;
    
    const totalFields = fields.length + 3; // 6 text fields + 3 file fields
    const pct = Math.round((filled / totalFields) * 100);
    const progressFill = document.getElementById('formProgressBar');
    const progressText = document.getElementById('progressText');
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressText) progressText.innerText = pct + '%';
    
    // Save draft
    const draft = {
        firstName: document.getElementById('visa-firstname').value,
        lastName: document.getElementById('visa-lastname').value,
        email: document.getElementById('visa-email').value,
        phone: document.getElementById('visa-phone').value,
        destination: document.getElementById('visa-destination').value,
        visaType: document.getElementById('visa-type').value
    };
    localStorage.setItem('ilyango_form_draft', JSON.stringify(draft));
}

function restoreFormDraft() {
    const draftStr = localStorage.getItem('ilyango_form_draft');
    if (draftStr) {
        try {
            const draft = JSON.parse(draftStr);
            if (draft.firstName) document.getElementById('visa-firstname').value = draft.firstName;
            if (draft.lastName) document.getElementById('visa-lastname').value = draft.lastName;
            if (draft.email) document.getElementById('visa-email').value = draft.email;
            if (draft.phone) document.getElementById('visa-phone').value = draft.phone;
            if (draft.destination) document.getElementById('visa-destination').value = draft.destination;
            if (draft.visaType) document.getElementById('visa-type').value = draft.visaType;
            updateFormProgress();
        } catch(e) {}
    }
}

// File Readers mapping files to Base64 data urls
function setupFileReaders() {
    const passportInput = document.getElementById('visa-passport-file');
    const photoInput = document.getElementById('visa-photo-file');
    const pdfInput = document.getElementById('visa-pdf-file');

    const readFile = (input, key, typeName) => {
        if (input && input.files && input.files.length > 0) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
                uploadedFilesData[key] = {
                    name: file.name,
                    size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
                    type: typeName,
                    dataUrl: e.target.result
                };
                updateFormProgress();
            };
            reader.readAsDataURL(file);
        } else {
            uploadedFilesData[key] = null;
            updateFormProgress();
        }
    };

    if (passportInput) passportInput.addEventListener('change', () => readFile(passportInput, 'passport', 'Passport'));
    if (photoInput) photoInput.addEventListener('change', () => readFile(photoInput, 'photo', 'Photo d\'identité'));
    if (pdfInput) pdfInput.addEventListener('change', () => readFile(pdfInput, 'pdf', 'Justificatif PDF'));
}

// Custom Mock reCAPTCHA checkbox handler
function initRecaptcha() {
    const checkbox = document.getElementById('visaRecaptchaCheckbox');
    const text = document.getElementById('visaRecaptchaText');
    const verifiedInput = document.getElementById('visaRecaptchaVerified');

    if (checkbox && verifiedInput) {
        checkbox.addEventListener('click', function() {
            if (checkbox.classList.contains('loading') || checkbox.classList.contains('checked')) return;

            checkbox.classList.add('loading');
            setTimeout(() => {
                checkbox.classList.remove('loading');
                checkbox.classList.add('checked');
                verifiedInput.value = 'true';
                if (text) {
                    text.innerText = currentLanguage === 'ar' ? 'تم التحقق بنجاح' : 'Vérifié avec succès';
                    text.style.color = '#00aa66';
                    text.style.fontWeight = 'bold';
                }
            }, 1200);
        });
    }
}

function setupSubmissions() {
    const visaForm = document.getElementById('visaForm');
    if (visaForm) {
        // Track inputs for progress
        const inputs = ['visa-firstname', 'visa-lastname', 'visa-email', 'visa-phone', 'visa-destination', 'visa-type'];
        inputs.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('input', updateFormProgress);
                el.addEventListener('change', updateFormProgress);
            }
        });

        visaForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Verify reCAPTCHA Mock
            const recaptchaVerified = document.getElementById('visaRecaptchaVerified').value === 'true';
            if (!recaptchaVerified) {
                alert(currentLanguage === 'ar' ? 'يرجى التحقق من مربع reCAPTCHA (أنا لست برنامج روبوت).' : 'Vérifiez la case reCAPTCHA (Je ne suis pas un robot).');
                return;
            }

            const firstName = document.getElementById('visa-firstname').value.trim();
            const lastName = document.getElementById('visa-lastname').value.trim();
            const email = document.getElementById('visa-email').value.trim();
            const phone = document.getElementById('visa-phone').value.trim();
            const countryId = document.getElementById('visa-destination').value;
            const visaType = document.getElementById('visa-type').value;

            // Load real Base64 uploaded files
            const uploadedFiles = [];
            if (uploadedFilesData.passport) uploadedFiles.push(uploadedFilesData.passport);
            if (uploadedFilesData.photo) uploadedFiles.push(uploadedFilesData.photo);
            if (uploadedFilesData.pdf) uploadedFiles.push(uploadedFilesData.pdf);

            const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
            const clientName = `${firstName} ${lastName}`;
            const dateStr = new Date().toISOString().split('T')[0];

            tempOrderData = {
                id: orderId,
                clientName: clientName,
                email: email,
                phone: phone,
                countryId: countryId,
                visaType: visaType,
                status: 'new',
                date: dateStr,
                uploadedFiles: uploadedFiles,
                paymentMethod: 'CIB',
                logs: [
                    { status: 'new', date: new Date().toISOString(), note: 'Demande soumise en ligne par le client.' }
                ]
            };

            // Open Payment Modal
            const payModal = document.getElementById('paymentModal');
            if (payModal) payModal.classList.add('show');
        });
    }

    // Payment confirm trigger
    const paySubmitBtn = document.getElementById('paySubmitBtn');
    if (paySubmitBtn) {
        paySubmitBtn.addEventListener('click', async function() {
            if (!tempOrderData) return;
            
            const methodVal = document.querySelector('input[name="payment-method"]:checked').value;
            tempOrderData.paymentMethod = methodVal;
            
            // Fetch Country Service Price to populate receipt
            const country = activeCountries.find(c => c.id === tempOrderData.countryId);
            const servicePrice = country ? (country.servicePrice || 10000) : 10000;
            
            const sb = getSupabase();
            if (sb) {
                try {
                    // 1. Insert order to Supabase
                    const { error } = await sb.from('orders').insert([tempOrderData]);
                    if (error) throw error;

                    // 2. Fetch/update customer
                    const { data: customerData } = await sb.from('customers').select('*').or(`phone.eq.${tempOrderData.phone},email.eq.${tempOrderData.email}`);
                    if (customerData && customerData.length > 0) {
                        const cust = customerData[0];
                        const history = cust.history || [];
                        history.push(tempOrderData.id);
                        await sb.from('customers').update({ history: history }).eq('id', cust.id);
                    } else {
                        const newCust = {
                            id: 'cust-' + Date.now(),
                            name: tempOrderData.clientName,
                            email: tempOrderData.email,
                            phone: tempOrderData.phone,
                            status: 'active',
                            history: [tempOrderData.id]
                        };
                        await sb.from('customers').insert([newCust]);
                    }

                    // 3. Write System Audit Log
                    await sb.from('audit_logs').insert([{
                        userEmail: 'Client',
                        action: `Nouvelle demande de visa ${tempOrderData.id} soumise par ${tempOrderData.clientName} via paiement ${methodVal}`
                    }]);
                } catch (err) {
                    console.error("Supabase insert failed, saving locally:", err);
                    saveOrderLocally(tempOrderData, tempOrderData.clientName, tempOrderData.email, tempOrderData.phone, tempOrderData.id);
                }
            } else {
                saveOrderLocally(tempOrderData, tempOrderData.clientName, tempOrderData.email, tempOrderData.phone, tempOrderData.id);
            }

            // Close payment modal, clear drafts, reset form
            closeModal('paymentModal');
            localStorage.removeItem('ilyango_form_draft');
            if (visaForm) visaForm.reset();
            
            // Reset files cache and progress
            uploadedFilesData = { passport: null, photo: null, pdf: null };
            
            // Reset reCAPTCHA box
            const recaptchaCheckbox = document.getElementById('visaRecaptchaCheckbox');
            const recaptchaText = document.getElementById('visaRecaptchaText');
            const recaptchaVerifiedVal = document.getElementById('visaRecaptchaVerified');
            if (recaptchaCheckbox) recaptchaCheckbox.className = 'g-recaptcha-mock-checkbox';
            if (recaptchaText) {
                recaptchaText.innerText = currentLanguage === 'ar' ? 'أنا لست برنامج روبوت' : 'Je ne suis pas un robot';
                recaptchaText.style.color = '';
                recaptchaText.style.fontWeight = '';
            }
            if (recaptchaVerifiedVal) recaptchaVerifiedVal.value = 'false';

            const progressFill = document.getElementById('formProgressBar');
            if (progressFill) progressFill.style.width = '0%';
            const progressText = document.getElementById('progressText');
            if (progressText) progressText.innerText = '0%';

            // Populate & Open Receipt Modal
            document.getElementById('receiptOrderIdText').innerText = `ID Demande : ${tempOrderData.id}`;
            document.getElementById('receiptClientName').innerText = tempOrderData.clientName;
            document.getElementById('receiptCountry').innerText = country ? country.name.split(' / ')[0] : tempOrderData.countryId;
            document.getElementById('receiptType').innerText = tempOrderData.visaType;
            document.getElementById('receiptMethod').innerText = methodVal;
            document.getElementById('receiptAmount').innerText = servicePrice.toLocaleString() + ' DZD';
            
            const recModal = document.getElementById('receiptModal');
            if (recModal) recModal.classList.add('show');
        });
    }

    function saveOrderLocally(newOrder, clientName, email, phone, orderId) {
        const db = getDB();
        db.orders.push(newOrder);

        let customerObj = db.customers.find(c => c.phone === phone || c.email === email);
        if (!customerObj) {
            customerObj = {
                id: 'cust-' + Date.now(),
                name: clientName,
                email: email,
                phone: phone,
                status: 'active',
                history: [orderId]
            };
            db.customers.push(customerObj);
        } else {
            customerObj.history.push(orderId);
        }

        // Add Local audit log trace
        const logRecord = {
            user: 'Client',
            action: `Soumission de la demande ${orderId} par ${clientName}`,
            timestamp: new Date().toISOString()
        };
        db.auditLogs.unshift(logRecord);

        saveDB(db);
    }

    // Contact messages form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            const newMsg = {
                id: 'msg-' + Date.now(),
                name: name,
                email: email,
                message: message,
                date: new Date().toISOString(),
                replied: false,
                replies: []
            };

            const sb = getSupabase();
            if (sb) {
                try {
                    const { error } = await sb.from('messages').insert([newMsg]);
                    if (error) throw error;

                    await sb.from('audit_logs').insert([{
                        userEmail: 'Client',
                        action: `Envoi d'un message par le visiteur ${name}`
                    }]);
                } catch (err) {
                    console.error("Supabase messages sync failed:", err);
                    saveMessageLocally(newMsg, name);
                }
            } else {
                saveMessageLocally(newMsg, name);
            }

            alert(`Merci ${name}, votre message a été envoyé avec succès à l'agence.`);
            contactForm.reset();
        });
    }

    function saveMessageLocally(newMsg, name) {
        const db = getDB();
        db.messages.push(newMsg);

        const logRecord = {
            user: 'Client',
            action: `Envoi d'un message par le visiteur ${name}`,
            timestamp: new Date().toISOString()
        };
        db.auditLogs.unshift(logRecord);

        saveDB(db);
    }

    // Quick search form
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const destinationId = document.getElementById('destination').value;
            if (destinationId) {
                openVisaDetails(destinationId);
            }
        });
    }
}

// 9. Mobile nav toggling
function setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('mobile-active')) {
                    icon.className = 'bx bx-x';
                } else {
                    icon.className = 'bx bx-menu';
                }
            }
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'bx bx-menu';
            });
        });
    }
}

// 10. Scroll spy
function setupScrollSpy() {
    const sections = document.querySelectorAll('section, footer');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            if (section.style.display !== 'none') {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
}

// Theme management
function initTheme() {
    const isDark = localStorage.getItem('ilyan_go_theme') === 'dark';
    const themeIcon = document.getElementById('themeToggleIcon');
    if (isDark) {
        document.body.classList.add('dark-theme');
        if (themeIcon) themeIcon.className = 'bx bx-sun';
    } else {
        document.body.classList.remove('dark-theme');
        if (themeIcon) themeIcon.className = 'bx bx-moon';
    }
}

function toggleTheme() {
    const themeIcon = document.getElementById('themeToggleIcon');
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('ilyan_go_theme', 'light');
        if (themeIcon) themeIcon.className = 'bx bx-moon';
    } else {
        document.body.classList.add('dark-theme');
        localStorage.setItem('ilyan_go_theme', 'dark');
        if (themeIcon) themeIcon.className = 'bx bx-sun';
    }
}

// Translation System
const TRANSLATIONS = {
    fr: {
        nav_accueil: "Accueil",
        nav_offers: "Offres Spéciales",
        nav_destinations: "Pays & Destinations",
        nav_demande: "Demande de Visa",
        nav_contact: "Contact",
        nav_account: "Admin",
        nav_tracking: "Suivi de Demande",
        nav_tools: "Outils",
        hero_title: "Simplifiez votre demande de visa avec ILYAN GO",
        hero_subtitle: "La plateforme facile et rapide pour obtenir vos informations et déposer votre demande de visa en ligne.",
        hero_btn_search: "Rechercher un visa",
        hero_btn_apply: "Commencer ma demande",
        search_nationality_lbl: "Je suis citoyen de :",
        search_destination_lbl: "Je voyage vers :",
        search_select_country: "Sélectionnez votre pays",
        search_select_dest: "Sélectionnez votre destination",
        search_btn: "Vérifier",
        stat_visa: "+5000 Demandes Visa Complétées",
        stat_countries: "+120 Pays Couverts",
        stat_accept: "98% Taux d'Acceptation",
        feature_time_title: "Gain de Temps",
        feature_time_desc: "Processus optimisé pour vous faire gagner de précieuses heures dans vos démarches.",
        feature_easy_title: "Accès Facile",
        feature_easy_desc: "Plateforme 100% en ligne, accessible depuis n'importe quel appareil, 24h/24 et 7j/7.",
        feature_info_title: "Infos Centralisées",
        feature_info_desc: "Toutes les exigences et documents nécessaires regroupés en un seul endroit clair.",
        sec_how: "Comment ça Marche ?",
        sec_how_sub: "Votre visa en 4 étapes simples et rapides",
        step1_title: "Rechercher votre destination",
        step1_desc: "Vérifiez les exigences de visa pour votre nationalité.",
        step2_title: "Remplissez le formulaire",
        step2_desc: "Complétez vos informations personnelles de manière sécurisée.",
        step3_title: "Téléchargez vos documents",
        step3_desc: "Importez facilement les justificatifs demandés au format numérique.",
        step4_title: "Soumettez votre demande",
        step4_desc: "Nous nous occupons du reste. Suivez l'état de votre demande.",
        sec_offers: "Offres Spéciales",
        sec_offers_sub: "Profitez de nos offres exclusives et séjours tout compris",
        sec_dest: "Destinations & Visas",
        sec_dest_sub: "Découvrez nos destinations populaires et les exigences de visa correspondantes",
        sec_apply_title: "Formulaire de Demande de Visa",
        sec_apply_sub: "Remplissez vos informations pour initier votre dossier",
        form_firstname: "Prénom",
        form_lastname: "Nom de famille",
        form_email: "Email",
        form_phone: "Téléphone",
        form_dest: "Je voyage vers :",
        form_type: "Type de Visa souhaité",
        form_type_select: "Sélectionnez le type",
        form_type_tourist: "Tourisme / سياحة",
        form_type_business: "Affaires / أعمال",
        form_type_student: "Étudiant / دراسة",
        form_type_transit: "Transit / عبور",
        form_docs: "Pièces Jointes / Documents requis",
        form_passport: "Scan du Passeport (Optionnel)",
        form_photo: "Photo d'identité récente (Optionnel)",
        form_pdf_docs: "Relevés bancaires ou autres justificatifs PDF (Optionnel)",
        form_captcha_lbl: "Sécurité: Résolvez cette opération",
        form_submit: "Soumettre la demande",
        sec_contact_title: "Contactez-nous",
        sec_contact_sub: "Une question ? Un projet de voyage ? Écrivez-nous directement.",
        contact_coords: "Nos Coordonnées",
        contact_coords_sub: "N'hésitez pas à nous contacter via nos coordonnées directes ou en remplissant le formulaire.",
        contact_name: "Nom complet",
        contact_msg: "Message",
        contact_send: "Envoyer le message",
        footer_desc: "La plateforme numéro 1 pour simplifier vos demandes de visas internationaux en toute sécurité et rapidité.",
        footer_links: "Liens Rapides",
        footer_support: "Support",
        footer_contact: "Contact",
        sec_tracking_title: "Suivi de votre Demande",
        sec_tracking_sub: "Vérifiez en temps réel l'état d'avancement de votre dossier de visa",
        track_btn_text: "Rechercher",
        track_date_sub: "Date de soumission",
        track_state_new: "Soumis",
        track_state_review: "Revue",
        track_state_missing: "Attente docs",
        track_state_approved: "Accepté",
        tools_title: "Outils de Voyage Professionnels",
        tools_sub: "Calculez le budget estimé et comparez les conditions de visa entre les pays",
        tools_btn_calc: "Calculateur de Budget",
        tools_btn_compare: "Comparateur de Visas",
        calc_params: "Configuration du budget",
        calc_dest: "Pays de Destination",
        calc_travelers: "Nombre de Voyageurs",
        calc_options: "Services Extras",
        calc_opt_express: "Traitement Express (+5 000 DZD)",
        calc_opt_insurance: "Assurance Voyage (+3 000 DZD)",
        calc_opt_translation: "Traduction Documents (+2 000 DZD)",
        calc_summary: "Estimation des coûts",
        calc_consular: "Frais Consulaires :",
        calc_service: "Services ILYAN GO :",
        calc_extras: "Services Options :",
        calc_total_label: "Budget Total Estimé (Hors Consulaire)",
        calc_apply_btn: "Déposer le dossier",
        compare_country_a: "Sélectionnez Pays A",
        compare_country_b: "Sélectionnez Pays B",
        compare_criterion: "Critère",
        compare_price: "Tarif Service",
        compare_time: "Délai d'Obtention",
        compare_biometrics: "Empreintes (Biométrie)",
        compare_rate: "Taux de Réussite Approx.",
        compare_fees: "Frais Consulaires",
        compare_reqs: "Documents Requis",
        blog_title: "Blog Voyage & Conseils Visas",
        blog_sub: "Retrouvez les dernières actualités et conseils de nos experts",
        faq_title: "Questions Fréquentes",
        faq_sub: "Les réponses à toutes vos interrogations sur les procédures de visas",
        chat_welcome: "Bonjour ! Comment pouvons-nous vous aider aujourd'hui ?",
        map_title: "Carte Interactive des Destinations",
        map_sub: "Cliquez sur un pays pour voir les exigences de visa",
        chat_support: "Support ILYAN GO",
        chat_online: "Conseillers en ligne",
        pay_title: "Sélection du Paiement",
        pay_desc: "Choisissez comment vous désirez régler les frais de service de votre demande.",
        pay_method_card: "Carte Bancaire / Edahabia",
        pay_method_card_sub: "Débit en ligne instantané",
        pay_method_paypal_sub: "Transaction internationale sécurisée",
        pay_method_office: "Paiement au Bureau",
        pay_method_office_sub: "Régler sur place à l'agence (Espèces)",
        pay_confirm_btn: "Valider la Demande & Payer",
        receipt_confirmed: "Dossier créé avec succès !",
        receipt_header: "Reçu de Paiement - ILYAN GO",
        receipt_client: "Client :",
        receipt_dest: "Destination :",
        receipt_type: "Type Visa :",
        receipt_method: "Mode de Paiement :",
        receipt_total: "Total payé :",
        receipt_btn_print: "Imprimer",
        receipt_btn_close: "Fermer",
        receipt_btn_download: "Télécharger",
        receipt_btn_email: "Envoyer par Email",
        recaptcha_text: "Je ne suis pas un robot",
        testi_title: "Ce Que Disent Nos Clients",
        testi_sub: "Des milliers de voyageurs nous font confiance pour leurs démarches de visa",
        testi1_text: '"Grâce à ILYAN GO, j\'ai obtenu mon visa Schengen pour la France en moins de 2 semaines. Le processus était simple, clair et le suivi impeccable. Je recommande fortement !"',
        testi1_author: "Karim B. — Bouira",
        testi2_text: '"Service professionnel et réactif ! Mon visa Turquie E-Visa a été approuvé en 24h seulement. L\'équipe m\'a accompagnée du début à la fin sans aucun problème."',
        testi2_author: "Amira T. — Alger",
        testi3_text: '"J\'ai utilisé ILYAN GO pour ma demande de visa Espagne. Tout était numérique, rapide et sécurisé. Fini les files d\'attente ! Je suis maintenant en vacances à Madrid."',
        testi3_author: "Youssef M. — Sétif",
        testi4_text: '"Excellente expérience ! Visa Émirats obtenu rapidement. L\'interface du site est moderne et intuitive, et le support client est toujours disponible. Merci ILYAN GO !"',
        testi4_author: "Sonia R. — Oran",
        nav_testimonials: "Avis clients"
    },
    en: {
        nav_accueil: "Home",
        nav_offers: "Special Offers",
        nav_destinations: "Countries & Destinations",
        nav_demande: "Visa Application",
        nav_contact: "Contact",
        nav_account: "Admin",
        nav_tracking: "Track Visa",
        nav_tools: "Tools",
        hero_title: "Simplify your visa application with ILYAN GO",
        hero_subtitle: "The quick and easy platform to get information and submit your visa application online.",
        hero_btn_search: "Search visa",
        hero_btn_apply: "Start my application",
        search_nationality_lbl: "I am a citizen of:",
        search_destination_lbl: "I am traveling to:",
        search_select_country: "Select your country",
        search_select_dest: "Select your destination",
        search_btn: "Check",
        stat_visa: "+5000 Completed Visa Applications",
        stat_countries: "+120 Countries Covered",
        stat_accept: "98% Acceptance Rate",
        feature_time_title: "Time Saving",
        feature_time_desc: "Optimized process to save you valuable hours in your travel procedures.",
        feature_easy_title: "Easy Access",
        feature_easy_desc: "100% online platform, accessible from any device, 24/7.",
        feature_info_title: "Centralized Info",
        feature_info_desc: "All requirements and necessary documents grouped in one clear place.",
        sec_how: "How It Works?",
        sec_how_sub: "Your visa in 4 simple and fast steps",
        step1_title: "Search your destination",
        step1_desc: "Check visa requirements for your nationality.",
        step2_title: "Fill the form",
        step2_desc: "Complete your personal information securely.",
        step3_title: "Upload documents",
        step3_desc: "Easily import requested files in digital format.",
        step4_title: "Submit application",
        step4_desc: "We do the rest. Follow your application status.",
        sec_offers: "Special Offers",
        sec_offers_sub: "Enjoy our exclusive offers and all-inclusive packages",
        sec_dest: "Destinations & Visas",
        sec_dest_sub: "Discover our popular destinations and matching visa requirements",
        sec_apply_title: "Visa Application Form",
        sec_apply_sub: "Fill in your details to initiate your file",
        form_firstname: "First Name",
        form_lastname: "Last Name",
        form_email: "Email",
        form_phone: "Phone",
        form_dest: "I am traveling to:",
        form_type: "Visa Type",
        form_type_select: "Select type",
        form_type_tourist: "Tourism / سياحة",
        form_type_business: "Business / أعمال",
        form_type_student: "Student / دراسة",
        form_type_transit: "Transit / عبور",
        form_docs: "Attachments / Required Documents",
        form_passport: "Passport Scan (Optional)",
        form_photo: "Recent Photo (Optional)",
        form_pdf_docs: "Bank Statements or other PDF (Optional)",
        form_captcha_lbl: "Security: Solve this operation",
        form_submit: "Submit application",
        sec_contact_title: "Contact Us",
        sec_contact_sub: "A question? A travel project? Write to us directly.",
        contact_coords: "Our Coordinates",
        contact_coords_sub: "Do not hesitate to contact us directly or by filling out the form.",
        contact_name: "Full name",
        contact_msg: "Message",
        contact_send: "Send message",
        footer_desc: "The number 1 platform to simplify your international visa applications safely and quickly.",
        footer_links: "Quick Links",
        footer_support: "Support",
        footer_contact: "Contact",
        sec_tracking_title: "Track your Application",
        sec_tracking_sub: "Follow in real-time the status of your visa file",
        track_btn_text: "Search",
        track_date_sub: "Submission Date",
        track_state_new: "Submitted",
        track_state_review: "Review",
        track_state_missing: "Pending docs",
        track_state_approved: "Approved",
        tools_title: "Professional Travel Tools",
        tools_sub: "Calculate estimated budget and compare visa requirements between countries",
        tools_btn_calc: "Budget Calculator",
        tools_btn_compare: "Visa Comparison",
        calc_params: "Budget Configuration",
        calc_dest: "Destination Country",
        calc_travelers: "Number of Travelers",
        calc_options: "Extra Services",
        calc_opt_express: "Express Processing (+5,000 DZD)",
        calc_opt_insurance: "Travel Insurance (+3,000 DZD)",
        calc_opt_translation: "Document Translation (+2,000 DZD)",
        calc_summary: "Cost Summary",
        calc_consular: "Consular Fees:",
        calc_service: "ILYAN GO Fees:",
        calc_extras: "Optional Services:",
        calc_total_label: "Estimated Budget Total (Excl. Consular)",
        calc_apply_btn: "Apply now",
        compare_country_a: "Select Country A",
        compare_country_b: "Select Country B",
        compare_criterion: "Criterion",
        compare_price: "Service Price",
        compare_time: "Processing Time",
        compare_biometrics: "Requires Fingerprint",
        compare_rate: "Approx. Success Rate",
        compare_fees: "Consular Fees",
        compare_reqs: "Required Documents",
        blog_title: "Travel & Visa Blog",
        blog_sub: "Read the latest news and advice from our experts",
        faq_title: "Frequently Asked Questions",
        faq_sub: "Answers to all your questions about visa procedures",
        chat_welcome: "Hello! How can we help you today?",
        map_title: "Interactive Destinations Map",
        map_sub: "Click a country to view visa requirements",
        chat_support: "ILYAN GO Support",
        chat_online: "Agents online",
        pay_title: "Payment Selection",
        pay_desc: "Choose how you want to pay the service fees for your request.",
        pay_method_card: "Debit/Credit Card",
        pay_method_card_sub: "Instant online checkout",
        pay_method_paypal_sub: "Secure international transaction",
        pay_method_office: "Pay at Office",
        pay_method_office_sub: "Pay at agency counter in cash",
        pay_confirm_btn: "Validate & Pay",
        receipt_confirmed: "Application Created Successfully!",
        receipt_header: "Payment Receipt - ILYAN GO",
        receipt_client: "Client:",
        receipt_dest: "Destination:",
        receipt_type: "Visa Type:",
        receipt_method: "Payment Method:",
        receipt_total: "Total Paid:",
        receipt_btn_print: "Print",
        receipt_btn_close: "Close",
        receipt_btn_download: "Download",
        receipt_btn_email: "Send by Email",
        recaptcha_text: "I'm not a robot",
        testi_title: "What Our Clients Say",
        testi_sub: "Thousands of travelers trust us for their visa procedures",
        testi1_text: '"Thanks to ILYAN GO, I obtained my Schengen visa for France in less than 2 weeks. The process was simple, clear and the follow-up impeccable. I highly recommend!"',
        testi1_author: "Karim B. — Bouira",
        testi2_text: '"Professional and reactive service! My Turkey E-Visa was approved in only 24h. The team accompanied me from beginning to end without any problem."',
        testi2_author: "Amira T. — Algiers",
        testi3_text: '"I used ILYAN GO for my Spain visa application. Everything was digital, fast and secure. No more waiting lines! I am now on holiday in Madrid."',
        testi3_author: "Youssef M. — Setif",
        testi4_text: '"Excellent experience! Emirates visa obtained quickly. The website interface is modern and intuitive, and the customer support is always available. Thank you ILYAN GO!"',
        testi4_author: "Sonia R. — Oran",
        nav_testimonials: "Client Reviews"
    },
    ar: {
        nav_accueil: "الرئيسية",
        nav_offers: "العروض الخاصة",
        nav_destinations: "البلدان والوجهات",
        nav_demande: "طلب التأشيرة",
        nav_contact: "اتصل بنا",
        nav_account: "Admin",
        nav_tracking: "تتبع طلبك",
        nav_tools: "أدوات السفر",
        hero_title: "سهّل طلب تأشيرتك مع ILYAN GO",
        hero_subtitle: "المنصة السهلة والسريعة للحصول على المعلومات وتقديم طلب التأشيرة الخاص بك عبر الإنترنت.",
        hero_btn_search: "البحث عن تأشيرة",
        hero_btn_apply: "ابدأ طلبي",
        search_nationality_lbl: "أنا مواطن من:",
        search_destination_lbl: "أسافر إلى:",
        search_select_country: "اختر بلدك",
        search_select_dest: "اختر وجهتك",
        search_btn: "تحقق",
        stat_visa: "+5000 طلب تأشيرة مكتمل",
        stat_countries: "+120 دولة مغطاة",
        stat_accept: "98% نسبة القبول",
        feature_time_title: "توفير الوقت",
        feature_time_desc: "عملية تحسينية لتوفير ساعات قيمة في إجراءات السفر الخاصة بك.",
        feature_easy_title: "وصول سهل",
        feature_easy_desc: "منصة 100٪ عبر الإنترنت، يمكن الوصول إليها من أي جهاز، 24/7.",
        feature_info_title: "معلومات مركزية",
        feature_info_desc: "جميع المتطلبات والمستندات اللازمة مجمعة في مكان واحد واضح.",
        sec_how: "كيف تعمل المنصة؟",
        sec_how_sub: "تأشيرتك في 4 خطوات بسيطة وسريعة",
        step1_title: "ابحث عن وجهتك",
        step1_desc: "تحقق من متطلبات التأشيرة لجنسيتك.",
        step2_title: "املاً الاستمارة",
        step2_desc: "أكمل معلوماتك الشخصية بشكل آمن.",
        step3_title: "ارفع المستندات",
        step3_desc: "قم باستيراد المستندات المطلوبة بسهولة بالتنسيق الرقمي.",
        step4_title: "قدم طلبك",
        step4_desc: "نحن نهتم بالباقي. تتبع حالة طلبك.",
        sec_offers: "العروض الخاصة",
        sec_offers_sub: "استمتع عروضنا الحصرية وباقاتنا الشاملة كليًا",
        sec_dest: "الوجهات والتأشيرات",
        sec_dest_sub: "اكتشف وجهاتنا الشهيرة ومتطلبات التأشيرة المطابقة لها",
        sec_apply_title: "نموذج طلب التأشيرة",
        sec_apply_sub: "املاً بياناتك لإنشاء ملفك",
        form_firstname: "الاسم الشخصي",
        form_lastname: "اللقب (الاسم العائلي)",
        form_email: "البريد الإلكتروني",
        form_phone: "الهاتف",
        form_dest: "أسافر إلى:",
        form_type: "نوع التأشيرة المطلوب",
        form_type_select: "اختر النوع",
        form_type_tourist: "سياحة / Tourist",
        form_type_business: "أعمال / Business",
        form_type_student: "دراسة / Student",
        form_type_transit: "عبور / Transit",
        form_docs: "المرفقات / المستندات المطلوبة",
        form_passport: "مسح جواز السفر (اختياري)",
        form_photo: "صورة شخصية حديثة (اختياري)",
        form_pdf_docs: "كشف الحساب أو وثائق PDF إضافية (اختياري)",
        form_captcha_lbl: "الأمان: قم بحل هذه العملية الحسابية",
        form_submit: "إرسال الطلب",
        sec_contact_title: "اتصل بنا",
        sec_contact_sub: "لديك سؤال؟ مشروع سفر؟ اكتب إلينا مباشرة.",
        contact_coords: "معلومات الاتصال بنا",
        contact_coords_sub: "لا تتردد في الاتصال بنا مباشرة أو عن طريق ملء النموذج.",
        contact_name: "الاسم الكامل",
        contact_msg: "الرسالة",
        contact_send: "إرسال الرسالة",
        footer_desc: "المنصة رقم 1 لتبسيط طلبات التأشيرات الدولية بأمان وسرعة.",
        footer_links: "روابط سريعة",
        footer_support: "الدعم والمساعدة",
        footer_contact: "اتصل بنا",
        sec_tracking_title: "تتبع حالة طلبك",
        sec_tracking_sub: "تحقق في الوقت الحقيقي من حالة معالجة ملف التأشيرة الخاص بك",
        track_btn_text: "بحث",
        track_date_sub: "تاريخ إرسال الطلب",
        track_state_new: "تم الإرسال",
        track_state_review: "قيد المراجعة",
        track_state_missing: "بانتظار وثائق",
        track_state_approved: "تم القبول",
        tools_title: "أدوات السفر الاحترافية",
        tools_sub: "احسب التكلفة التقديرية وقارن شروط ومتطلبات التأشيرة بين مختلف الدول",
        tools_btn_calc: "حاسبة تكلفة الرحلة",
        tools_btn_compare: "مقارنة متطلبات التأشيرات",
        calc_params: "إعداد تكاليف الرحلة",
        calc_dest: "البلد الوجهة",
        calc_travelers: "عدد المسافرين",
        calc_options: "خدمات إضافية",
        calc_opt_express: "معالجة مستعجلة (+5000 د.ج)",
        calc_opt_insurance: "تأمين سفر (+3000 د.ج)",
        calc_opt_translation: "ترجمة المستندات (+2000 د.ج)",
        calc_summary: "تفاصيل التكلفة التقديرية",
        calc_consular: "الرسوم القنصلية :",
        calc_service: "رسوم الخدمة للموقع :",
        calc_extras: "رسوم الخدمات الإضافية :",
        calc_total_label: "التكلفة الكلية المقدرة (بدون الرسوم القنصلية)",
        calc_apply_btn: "تقديم الملف والطلب",
        compare_country_a: "اختر البلد أ",
        compare_country_b: "اختر البلد ب",
        compare_criterion: "وجه المقارنة",
        compare_price: "رسوم الخدمة",
        compare_time: "مدة المعالجة",
        compare_biometrics: "هل تحتاج بصمة؟",
        compare_rate: "نسبة القبول التقريبية",
        compare_fees: "الرسوم القنصلية",
        compare_reqs: "المستندات المطلوبة",
        blog_title: "مدونة السفر والتأشيرات",
        blog_sub: "اطلع على أحدث المقالات والنصائح من مستشاري السفر لدينا",
        faq_title: "الأسئلة الشائعة",
        faq_sub: "إجابات شاملة على أكثر الاستفسارات شيوعاً حول التأشيرات",
        chat_welcome: "مرحباً بك! كيف يمكننا مساعدتك اليوم؟",
        map_title: "الخريطة التفاعلية للوجهات",
        map_sub: "اضغط على أي دولة لمعرفة متطلبات التأشيرة الخاصة بها فوراً",
        chat_support: "دعم إيليان غو",
        chat_online: "المستشارون متصلون",
        pay_title: "اختيار طريقة الدفع",
        pay_desc: "اختر وسيلة الدفع المناسبة لك لإتمام سداد رسوم الخدمة لبدء معالجة طلبك.",
        pay_method_card: "بطاقة بنكية / الذهبية",
        pay_method_card_sub: "دفع إلكتروني آمن وفوري",
        pay_method_paypal_sub: "تحويل دولي آمن وسريع",
        pay_method_office: "الدفع عند المكتب / الوكالة",
        pay_method_office_sub: "سداد الرسوم نقداً في مقر وكالة السفر",
        pay_confirm_btn: "تأكيد الطلب والدفع",
        receipt_confirmed: "تم إنشاء طلبك بنجاح !",
        receipt_header: "وصل دفع الرسوم - ILYAN GO",
        receipt_client: "الزبون :",
        receipt_dest: "الوجهة :",
        receipt_type: "نوع التأشيرة :",
        receipt_method: "طريقة الدفع :",
        receipt_total: "المبلغ الإجمالي :",
        receipt_btn_print: "طباعة الوصل",
        receipt_btn_close: "إغلاق",
        receipt_btn_download: "تحميل الوصل",
        receipt_btn_email: "إرسال عبر البريد",
        recaptcha_text: "أنا لست برنامج روبوت",
        testi_title: "ما يقوله عملاؤنا",
        testi_sub: "آلاف المسافرين يثقون بنا في إجراءات الحصول على تأشيراتهم",
        testi1_text: '"بفضل ILYAN GO، حصلت على تأشيرة شينغن لفرنسا في أقل من أسبوعين. كانت العملية بسيطة وواضحة والمتابعة ممتازة. أنصح بالتعامل معهم بشدة!"',
        testi1_author: "كريم ب. — البويرة",
        testi2_text: '"خدمة احترافية وسريعة الاستجابة! تمت الموافقة على التأشيرة الإلكترونية لتركيا في غضون 24 ساعة فقط. لقد رافقني الفريق من البداية إلى النهاية دون أي مشاكل."',
        testi2_author: "أميرة ت. — الجزائر",
        testi3_text: '"استخدمت ILYAN GO لتقديم طلب تأشيرة إسبانيا. كان كل شيء رقمياً، سريعاً وآمناً. لا داعي للانتظار في الطوابير بعد الآن! أنا الآن في عطلة بمدريد."',
        testi3_author: "يوسف م. — سطيف",
        testi4_text: '"تجربة ممتازة! حصلت على تأشيرة الإمارات بسرعة. واجهة الموقع حديثة وسهلة الاستخدام، ودعم العملاء متوفر دائماً. شكراً ILYAN GO!"',
        testi4_author: "سونيا ر. — وهران",
        nav_testimonials: "آراء العملاء"
    }
};

let currentLanguage = 'fr';
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('ilyan_go_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    
    const selectEl = document.getElementById('langSelect');
    if (selectEl) selectEl.value = lang;

    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.classList.add('rtl-layout');
    } else {
        document.documentElement.removeAttribute('dir');
        document.body.classList.remove('rtl-layout');
    }
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = TRANSLATIONS[lang][key];
            } else {
                el.innerText = TRANSLATIONS[lang][key];
            }
        }
    });
}

// 11. Order tracking logic
function initTracking() {
    const trackBtn = document.getElementById('trackBtn');
    const trackInput = document.getElementById('trackInput');
    const trackResult = document.getElementById('trackResult');
    const trackError = document.getElementById('trackError');

    if (trackBtn && trackInput) {
        trackBtn.addEventListener('click', async () => {
            const orderId = trackInput.value.trim().toUpperCase();
            trackResult.style.display = 'none';
            trackError.style.display = 'none';

            if (!orderId) return;

            const db = getDB();
            let order = db.orders.find(o => o.id === orderId);

            if (!order) {
                // Try from Supabase if configured
                const sb = getSupabase();
                if (sb) {
                    try {
                        const { data, error } = await sb.from('orders').select('*').eq('id', orderId).single();
                        if (data) order = data;
                    } catch(e) {}
                }
            }

            if (!order) {
                trackError.innerText = currentLanguage === 'ar' ? 'عذراً، لم نتمكن من العثور على هذا الطلب.' : 'Dossier introuvable.';
                trackError.style.display = 'block';
                return;
            }

            // Populate tracking details
            document.getElementById('trackClientName').innerText = order.clientName;
            const country = activeCountries.find(c => c.id === order.countryId);
            document.getElementById('trackCountry').innerText = country ? country.name.split(' / ')[0] : order.countryId;
            document.getElementById('trackVisaType').innerText = order.visaType;
            document.getElementById('trackSubmitDate').innerText = formatDate(order.date);

            // Stepper timeline
            const steps = ['new', 'review', 'missing_docs', 'approved'];
            let activeIdx = steps.indexOf(order.status);
            if (order.status === 'completed') activeIdx = 3; // completed maps to approved visual
            if (order.status === 'rejected') activeIdx = 3; 

            // Highlight nodes
            const fillWidths = [0, 33, 66, 100];
            const fillPercent = fillWidths[activeIdx] !== undefined ? fillWidths[activeIdx] : 0;
            const fillBar = document.getElementById('timelineProgressFill');
            if (fillBar) fillBar.style.width = fillPercent + '%';

            steps.forEach((st, idx) => {
                const node = document.getElementById(`step-node-${st}`);
                if (node) {
                    if (idx <= activeIdx) {
                        node.classList.add('active');
                    } else {
                        node.classList.remove('active');
                    }
                }
            });

            // Set current state texts
            const statusBadge = document.getElementById('trackStatusBadge');
            const statusNote = document.getElementById('trackStatusNote');
            if (statusBadge) {
                statusBadge.innerText = order.status.toUpperCase();
                statusBadge.className = 'badge';
                if (order.status === 'new') statusBadge.classList.add('badge-new');
                if (order.status === 'review') statusBadge.classList.add('badge-review');
                if (order.status === 'missing_docs') statusBadge.classList.add('badge-missing');
                if (order.status === 'approved') statusBadge.classList.add('badge-approved');
                if (order.status === 'rejected') statusBadge.classList.add('badge-rejected');
                if (order.status === 'completed') statusBadge.classList.add('badge-completed');
            }

            const latestLog = order.logs && order.logs.length > 0 ? order.logs[order.logs.length - 1] : null;
            if (statusNote) {
                statusNote.innerText = latestLog ? latestLog.note : (currentLanguage === 'ar' ? 'طلبك قيد المعالجة.' : 'Votre demande est en cours de traitement.');
            }

            // Direct messages from admin
            const msgBox = document.getElementById('trackDirectMessages');
            const msgText = document.getElementById('trackDirectMsgText');
            if (order.messageForClient) {
                msgText.innerText = order.messageForClient;
                msgBox.style.display = 'block';
            } else {
                msgBox.style.display = 'none';
            }

            // Downloads from admin
            const dlBox = document.getElementById('trackClientDownloads');
            const dlList = document.getElementById('trackDownloadsList');
            if (order.clientFiles && order.clientFiles.length > 0) {
                dlList.innerHTML = '';
                order.clientFiles.forEach(f => {
                    dlList.innerHTML += `
                        <li style="display:flex; justify-content:space-between; align-items:center; background-color:var(--bg-gray); padding:8px 12px; border-radius:4px; border:1px solid var(--border-light);">
                            <span><i class='bx bx-file' style="color:var(--primary)"></i> <strong>${f.name}</strong></span>
                            <a class="btn btn-outline btn-sm" style="padding:4px 10px; font-size:0.75rem;" href="#" onclick="alert('Téléchargement de : ${f.name}')"><i class='bx bx-download'></i> Ouvrir</a>
                        </li>
                    `;
                });
                dlBox.style.display = 'block';
            } else {
                dlBox.style.display = 'none';
            }

            trackResult.style.display = 'block';
        });
    }
}

// 12. Travel Tools: Budget Calculator & Visa Compare
function initTravelTools() {
    // Tab switching
    const tabs = document.querySelectorAll('.tool-tab-btn');
    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.forEach(b => {
                b.classList.remove('active');
                b.classList.add('btn-outline');
            });
            btn.classList.add('active');
            btn.classList.remove('btn-outline');

            const toolName = btn.getAttribute('data-tool');
            document.querySelectorAll('.tool-content-box').forEach(box => {
                box.classList.remove('active');
            });
            document.getElementById(`tool-${toolName}`).classList.add('active');
        });
    });

    // Cost Calculator
    const calcDest = document.getElementById('calc-destination');
    const calcTravelers = document.getElementById('calc-travelers');
    const optExpress = document.getElementById('calc-opt-express');
    const optInsurance = document.getElementById('calc-opt-insurance');
    const optTranslation = document.getElementById('calc-opt-translation');

    function runCalculator() {
        if (!calcDest.value) return;
        const country = activeCountries.find(c => c.id === calcDest.value);
        if (!country) return;

        const travelers = parseInt(calcTravelers.value) || 1;
        const servicePrice = (country.servicePrice || 10000) * travelers;
        
        let extras = 0;
        if (optExpress && optExpress.checked) extras += 5000 * travelers;
        if (optInsurance && optInsurance.checked) extras += 3000 * travelers;
        if (optTranslation && optTranslation.checked) extras += 2000;

        const total = servicePrice + extras;

        document.getElementById('calc-res-consular').innerText = country.fees;
        document.getElementById('calc-res-service').innerText = servicePrice.toLocaleString() + ' DZD';
        document.getElementById('calc-res-options').innerText = extras.toLocaleString() + ' DZD';
        document.getElementById('calc-res-total').innerText = total.toLocaleString() + ' DZD';
    }

    if (calcDest) {
        // Populate destinations
        let options = '';
        activeCountries.forEach(c => {
            options += `<option value="${c.id}">${c.name.split(' / ')[0]}</option>`;
        });
        calcDest.innerHTML = options;

        calcDest.addEventListener('change', runCalculator);
        calcTravelers.addEventListener('input', runCalculator);
        if (optExpress) optExpress.addEventListener('change', runCalculator);
        if (optInsurance) optInsurance.addEventListener('change', runCalculator);
        if (optTranslation) optTranslation.addEventListener('change', runCalculator);

        runCalculator();
    }

    // Visa Comparison tool
    const cmp1 = document.getElementById('compare-country-1');
    const cmp2 = document.getElementById('compare-country-2');

    function runComparison() {
        const id1 = cmp1.value;
        const id2 = cmp2.value;
        if (!id1 || !id2) return;

        const c1 = activeCountries.find(c => c.id === id1);
        const c2 = activeCountries.find(c => c.id === id2);

        if (!c1 || !c2) return;

        document.getElementById('compare-name-1').innerText = c1.name.split(' / ')[0];
        document.getElementById('compare-name-2').innerText = c2.name.split(' / ')[0];

        document.getElementById('compare-price-1').innerText = (c1.servicePrice || 10000).toLocaleString() + ' DZD';
        document.getElementById('compare-price-2').innerText = (c2.servicePrice || 10000).toLocaleString() + ' DZD';

        document.getElementById('compare-time-1').innerText = c1.processingTime;
        document.getElementById('compare-time-2').innerText = c2.processingTime;

        document.getElementById('compare-bio-1').innerText = c1.requiresBiometrics ? (currentLanguage === 'ar' ? 'نعم (حضور شخصي)' : 'Oui (Dépôt physique)') : (currentLanguage === 'ar' ? 'لا (إلكتروني)' : 'Non (Électronique)');
        document.getElementById('compare-bio-2').innerText = c2.requiresBiometrics ? (currentLanguage === 'ar' ? 'نعم (حضور شخصي)' : 'Oui (Dépôt physique)') : (currentLanguage === 'ar' ? 'لا (إلكتروني)' : 'Non (Électronique)');

        document.getElementById('compare-rate-1').innerText = (c1.acceptanceRate || 95) + '%';
        document.getElementById('compare-rate-2').innerText = (c2.acceptanceRate || 95) + '%';

        document.getElementById('compare-fees-1').innerText = c1.fees;
        document.getElementById('compare-fees-2').innerText = c2.fees;

        // Requirements list bullet points
        const makeList = (reqs) => {
            let html = '<ul style="padding-left:15px; display:flex; flex-direction:column; gap:5px;">';
            reqs.forEach(r => { html += `<li>• ${r}</li>`; });
            html += '</ul>';
            return html;
        };
        document.getElementById('compare-reqs-1').innerHTML = makeList(c1.requirements || []);
        document.getElementById('compare-reqs-2').innerHTML = makeList(c2.requirements || []);
    }

    if (cmp1 && cmp2) {
        let options = '';
        activeCountries.forEach(c => {
            options += `<option value="${c.id}">${c.name.split(' / ')[0]}</option>`;
        });
        cmp1.innerHTML = options;
        cmp2.innerHTML = options;

        if (activeCountries.length > 1) {
            cmp2.selectedIndex = 1;
        }

        cmp1.addEventListener('change', runComparison);
        cmp2.addEventListener('change', runComparison);

        runComparison();
    }
}

function applyFromCalculator() {
    const calcDestVal = document.getElementById('calc-destination').value;
    const destSelect = document.getElementById('visa-destination');
    if (destSelect && calcDestVal) {
        destSelect.value = calcDestVal;
        updateFormProgress();
    }
}

// 13. Render Blog & FAQ accordion
function renderBlogAndFAQ() {
    const db = getDB();
    const blogContainer = document.getElementById('blog-articles-container');
    const faqContainer = document.getElementById('faq-accordion-container');

    // Blog
    if (blogContainer) {
        const blogList = db.blog || DEFAULT_BLOG;
        blogContainer.innerHTML = '';
        blogList.forEach(art => {
            blogContainer.innerHTML += `
                <article class="blog-card">
                    <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">${formatDate(art.date)} | Par ${art.author || 'ILYAN GO'}</span>
                    <h3 style="font-size:1.2rem; font-weight:700; margin:8px 0 12px 0;">${art.title}</h3>
                    <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.6;">${art.content}</p>
                </article>
            `;
        });
    }

    // FAQ Accordion
    if (faqContainer) {
        const faqList = db.faqs || DEFAULT_FAQS;
        faqContainer.innerHTML = '';
        faqList.forEach((faq, idx) => {
            faqContainer.innerHTML += `
                <div class="faq-item">
                    <div class="faq-header" onclick="toggleFaq(${idx})">
                        <span>${faq.q}</span>
                        <i class='bx bx-chevron-down' id="faq-chevron-${idx}"></i>
                    </div>
                    <div class="faq-body" id="faq-body-${idx}">
                        <p>${faq.a}</p>
                    </div>
                </div>
            `;
        });
    }
}

function toggleFaq(idx) {
    const body = document.getElementById(`faq-body-${idx}`);
    const chevron = document.getElementById(`faq-chevron-${idx}`);
    if (body) {
        const isVisible = body.style.display === 'block';
        body.style.display = isVisible ? 'none' : 'block';
        if (chevron) chevron.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
    }
}

// 14. Support Live Chat Client Side simulation
let visitorChatId = '';
function initLiveChatWidget() {
    const chatToggleBtn = document.getElementById('chatToggleBtn');
    const chatBox = document.getElementById('chatBox');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    if (!chatToggleBtn || !chatBox) return;

    // Retrieve unique visitor ID
    visitorChatId = localStorage.getItem('ilyan_visitor_chat_id');
    if (!visitorChatId) {
        visitorChatId = 'visit-' + Math.floor(100000 + Math.random() * 900000);
        localStorage.setItem('ilyan_visitor_chat_id', visitorChatId);
    }

    chatToggleBtn.addEventListener('click', () => {
        const isHidden = chatBox.style.display === 'none' || chatBox.style.display === '';
        if (isHidden) {
            chatBox.style.display = 'flex';
            loadChatMessages();
            chatInput.focus();
        } else {
            chatBox.style.display = 'none';
        }
    });

    closeChatBtn.addEventListener('click', () => {
        chatBox.style.display = 'none';
    });

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const msgText = chatInput.value.trim();
        if (!msgText) return;

        const db = getDB();
        let thread = db.liveChats.find(t => t.id === visitorChatId);
        if (!thread) {
            thread = {
                id: visitorChatId,
                clientName: 'Visiteur ' + visitorChatId.split('-')[1],
                messages: [],
                lastUpdated: new Date().toISOString(),
                active: true
            };
            db.liveChats.push(thread);
        }

        const msgObj = {
            sender: 'client',
            text: msgText,
            timestamp: new Date().toISOString()
        };
        thread.messages.push(msgObj);
        thread.lastUpdated = new Date().toISOString();
        thread.active = true;
        saveDB(db);

        chatInput.value = '';
        appendMessage('client', msgText);

        // Sync to Supabase if active
        const sb = getSupabase();
        if (sb) {
            try {
                await sb.from('live_chats').upsert([thread]);
            } catch(e) {}
        }
    });

    function loadChatMessages() {
        const db = getDB();
        const thread = db.liveChats.find(t => t.id === visitorChatId);
        chatMessages.innerHTML = `
            <div class="chat-msg system">
                <p data-i18n="chat_welcome">${TRANSLATIONS[currentLanguage].chat_welcome}</p>
            </div>
        `;
        if (thread && thread.messages) {
            thread.messages.forEach(msg => {
                appendMessage(msg.sender, msg.text);
            });
        }
    }

    function appendMessage(sender, text) {
        const isClient = sender === 'client';
        const align = isClient ? 'flex-end' : 'flex-start';
        const bg = isClient ? 'var(--primary)' : 'var(--bg-white)';
        const color = isClient ? 'white' : 'var(--text-dark)';
        const radius = isClient ? 'border-bottom-right-radius: 2px;' : 'border-bottom-left-radius: 2px; border: 1px solid var(--border-light);';
        
        chatMessages.innerHTML += `
            <div class="chat-msg ${sender}" style="align-self: ${align}; background-color: ${bg}; color: ${color}; ${radius} padding: 10px 14px; border-radius: var(--radius-lg); max-width: 80%; line-height: 1.4;">
                <p>${text}</p>
            </div>
        `;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Refresh replies simulation / sync
    setInterval(async () => {
        if (chatBox.style.display === 'flex') {
            const db = getDB();
            let thread = db.liveChats.find(t => t.id === visitorChatId);

            const sb = getSupabase();
            if (sb) {
                try {
                    const { data } = await sb.from('live_chats').select('*').eq('id', visitorChatId).single();
                    if (data) thread = data;
                } catch(e) {}
            }

            if (thread && thread.messages) {
                // Compare length to refresh view
                const currentMsgs = chatMessages.querySelectorAll('.chat-msg').length - 1; // subtract system welcome message
                if (thread.messages.length > currentMsgs) {
                    loadChatMessages();
                }
            }
        }
    }, 2500);
}

function printReceipt() {
    window.print();
}

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    getDB(); // Seed DB if empty
    setLanguage(localStorage.getItem('ilyan_go_lang') || 'fr');
    await loadInitialData();
    applySettings();
    renderFilters();
    renderCards();
    renderOffers();
    populateFormDestinations();
    setupMobileMenu();
    setupScrollSpy();
    setupSubmissions();
    setupFileReaders();
    initRecaptcha();
    restoreFormDraft();
    initTracking();
    initTravelTools();
    renderBlogAndFAQ();
    initLiveChatWidget();
    initMapCountryPills();


    // Modal keydown triggers
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal('visaDetailModal');
            closeModal('paymentModal');
            closeModal('receiptModal');
        }
    });

    // Close payment modal
    const closePay = document.getElementById('closePaymentModalBtn');
    if (closePay) {
        closePay.addEventListener('click', () => closeModal('paymentModal'));
    }

    // Close receipt modal
    const closeRec = document.getElementById('closeReceiptModalBtn');
    const recFinish = document.getElementById('receiptFinishBtn');
    if (closeRec) closeRec.addEventListener('click', () => closeModal('receiptModal'));
    if (recFinish) recFinish.addEventListener('click', () => closeModal('receiptModal'));

    // Print Receipt Btn
    const printRecBtn = document.getElementById('receiptPrintBtn');
    if (printRecBtn) {
        printRecBtn.addEventListener('click', printReceipt);
    }

    // Download Receipt Btn
    const downloadRecBtn = document.getElementById('receiptDownloadBtn');
    if (downloadRecBtn) {
        downloadRecBtn.addEventListener('click', function() {
            if (!tempOrderData) return;
            const country = activeCountries.find(c => c.id === tempOrderData.countryId);
            const countryName = country ? country.name.split(' / ')[0] : tempOrderData.countryId;
            const textContent = `
========================================
       RECU DE PAIEMENT - ILYAN GO
========================================
ID Demande : ${tempOrderData.id}
Date       : ${tempOrderData.date}
Client     : ${tempOrderData.clientName}
Email      : ${tempOrderData.email}
Téléphone  : ${tempOrderData.phone}
Destination: ${countryName}
Type Visa  : ${tempOrderData.visaType}
Mode de Paiement: ${tempOrderData.paymentMethod.toUpperCase()}
Frais de Service: ${document.getElementById('receiptAmount').innerText}
Statut-Paiement : CONFIRME
========================================
Merci pour votre confiance.
L'équipe ILYAN GO.
`;
            const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = `Recu_Paiement_${tempOrderData.id}.txt`;
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
            URL.revokeObjectURL(url);
        });
    }

    // Email Receipt Btn
    const emailRecBtn = document.getElementById('receiptEmailBtn');
    if (emailRecBtn) {
        emailRecBtn.addEventListener('click', function() {
            if (!tempOrderData) return;
            emailRecBtn.disabled = true;
            const originalText = emailRecBtn.innerHTML;
            emailRecBtn.innerHTML = `<i class='bx bx-loader-alt bx-spin'></i> Envoi...`;
            setTimeout(() => {
                emailRecBtn.innerHTML = `<i class='bx bx-check'></i> Envoyé !`;
                emailRecBtn.style.backgroundColor = 'var(--success)';
                alert(currentLanguage === 'ar' ? `تم إرسال إيصال الدفع بنجاح إلى البريد الإلكتروني: ${tempOrderData.email}` : `Le reçu a été envoyé avec succès à l'adresse: ${tempOrderData.email}`);
                setTimeout(() => {
                    emailRecBtn.disabled = false;
                    emailRecBtn.innerHTML = originalText;
                    emailRecBtn.style.backgroundColor = '';
                }, 2000);
            }, 1000);
        });
    }

    // Dynamic Payment Mode toggles
    const payRadioButtons = document.querySelectorAll('input[name="payment-method"]');
    payRadioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            const method = this.value;
            const cardBlock = document.getElementById('paymentDetailsCard');
            const paypalBlock = document.getElementById('paymentDetailsPaypal');
            const officeBlock = document.getElementById('paymentDetailsOffice');

            if (cardBlock) cardBlock.style.display = method === 'card' ? 'block' : 'none';
            if (paypalBlock) paypalBlock.style.display = method === 'paypal' ? 'block' : 'none';
            if (officeBlock) officeBlock.style.display = method === 'office' ? 'block' : 'none';
        });
    });

    const modal = document.getElementById('visaDetailModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal('visaDetailModal');
        });
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal('visaDetailModal'));
        }
    }

    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'admin.html';
        });
    }

    // Theme toggler bind
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Language dropdown select change
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
            renderBlogAndFAQ(); // Refresh FAQ labels
        });
    }
});

// ======================================================
// PREMIUM VISUAL EFFECTS & INTERACTIONS
// ======================================================

// --- 1. SCROLL REVEAL OBSERVER ---
function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right');
    if (!revealEls.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
}

// --- 2. ANIMATED COUNTERS ---
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-num[data-target]');
    if (!counters.length) return;
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                const isPercent = el.innerText.includes('%');
                const hasPlus = el.innerText.startsWith('+');
                let current = 0;
                const step = Math.ceil(target / 60);
                const interval = setInterval(() => {
                    current = Math.min(current + step, target);
                    el.innerText = (hasPlus ? '+' : '') + current + (isPercent ? '%' : '');
                    if (current >= target) clearInterval(interval);
                }, 25);
                countObserver.unobserve(el);
            }
        });
    }, { threshold: 0.6 });
    counters.forEach(el => countObserver.observe(el));
}

// --- 3. 3D TILT EFFECT FOR DESTINATION CARDS ---
function initTiltEffect() {
    document.querySelectorAll('.destination-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotX = ((y - cy) / cy) * -6;
            const rotY = ((x - cx) / cx) * 6;
            card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// --- 4. TESTIMONIALS CAROUSEL ---
function initTestimonialsCarousel() {
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    if (!track || !prevBtn || !nextBtn) return;
    const slides = track.querySelectorAll('.testimonial-slide');
    let current = 0;
    const total = slides.length;
    let autoTimer;

    function goTo(idx) {
        current = (idx + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
    }

    prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
    nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

    function startAuto() { autoTimer = setInterval(() => goTo(current + 1), 5000); }
    function resetAuto() { clearInterval(autoTimer); startAuto(); }
    startAuto();
}

// --- 5. WELCOME MODAL (first-visit only) ---
function initWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    const closeBtn = document.getElementById('welcomeCloseBtn');
    if (!modal) return;
    const hasVisited = localStorage.getItem('ilyan_go_visited');
    if (!hasVisited) {
        setTimeout(() => modal.classList.add('show'), 700);
    }
    const doClose = () => {
        modal.classList.remove('show');
        localStorage.setItem('ilyan_go_visited', 'true');
    };
    if (closeBtn) closeBtn.addEventListener('click', () => { doClose(); setTimeout(() => { window.location.href='#destinations'; }, 300); });
    modal.addEventListener('click', (e) => { if (e.target === modal) doClose(); });
}

// --- 6. BACK TO TOP BUTTON ---
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }, { passive: true });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- 7. CONFETTI CANVAS CELEBRATION ---
function triggerConfetti() {
    const canvas = document.getElementById('celebrationCanvas');
    if (!canvas) return;
    canvas.style.display = 'block';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const colors = ['#d4af37', '#fbbf24', '#2563eb', '#10b981', '#f43f5e', '#8b5cf6', '#0ea5e9'];
    for (let i = 0; i < 200; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 8 + 4,
            h: Math.random() * 5 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            rot: Math.random() * 360,
            vx: (Math.random() - 0.5) * 3,
            vy: Math.random() * 3 + 2,
            vr: (Math.random() - 0.5) * 8,
            alpha: 1
        });
    }
    let rafId;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.vr;
            if (p.y > canvas.height * 0.85) p.alpha -= 0.015;
            if (p.alpha > 0) {
                alive = true;
                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rot * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            }
        });
        if (alive) {
            rafId = requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.style.display = 'none';
        }
    }
    draw();
    setTimeout(() => { cancelAnimationFrame(rafId); canvas.style.display = 'none'; }, 5000);
}

// Patch receipt modal to trigger confetti on open
function patchReceiptForCelebration() {
    const receiptModal = document.getElementById('receiptModal');
    if (!receiptModal) return;
    const observer = new MutationObserver(() => {
        if (receiptModal.classList.contains('show')) {
            triggerConfetti();
        }
    });
    observer.observe(receiptModal, { attributes: true, attributeFilter: ['class'] });
}

// --- INIT PREMIUM EFFECTS ON DOM READY (second listener for effects) ---
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initAnimatedCounters();
    initTiltEffect();
    initTestimonialsCarousel();
    initWelcomeModal();
    initBackToTop();
    patchReceiptForCelebration();
});
