import {
  Car,
  HeartPulse,
  Home,
  Truck,
  ShieldCheck,
  Users,
  Wallet,
  Briefcase,
  Plane,
} from "lucide-react";

// Each product gets its own landing page at /insurance/[slug]. Content is written
// to be genuinely useful (what it covers, who it's for) — insurance is YMYL, so
// accuracy matters more than keyword density.
export const products = [
  {
    slug: "motor",
    title: "Motor Insurance",
    subtitle: "Drive with Confidence",
    icon: Car,
    metaTitle: "Motor Insurance in Kenya",
    metaDescription:
      "Third-party, fire & theft and comprehensive motor insurance across Kenya. Compare cover and get a free car insurance quote from Datani Insurance Agency.",
    intro: [
      "Whether you drive a private car, a matatu, a lorry or a fleet, motor insurance keeps you on the road without the fear of a single accident wiping out your finances. Datani Insurance Agency helps you compare cover from Kenya's leading underwriters and pick the option that fits how — and how much — you actually drive.",
      "From the mandatory minimum to full comprehensive protection, we explain the trade-offs in plain language so you know exactly what you're paying for.",
    ],
    coverage: [
      "Third-Party Only — the legal minimum, covering injury and damage you cause to others",
      "Third-Party, Fire & Theft — adds cover if your vehicle is stolen or burnt",
      "Comprehensive Cover — protects your own vehicle too, including accidental damage",
      "Optional add-ons: windscreen protection, personal accident cover, roadside assistance",
    ],
    whoFor:
      "Private motorists, boda boda and PSV operators, businesses running delivery vehicles, and anyone financing a car who needs comprehensive cover.",
  },
  {
    slug: "medical",
    title: "Medical Insurance",
    subtitle: "Your Health Comes First",
    icon: HeartPulse,
    metaTitle: "Medical & Health Insurance in Kenya",
    metaDescription:
      "Inpatient, outpatient and maternity medical cover for individuals, families and groups in Kenya. Get a health insurance quote from Datani Insurance Agency.",
    intro: [
      "A single hospital admission can undo years of savings. Medical insurance means you and your family can seek treatment when you need it — not only when you can afford it. We arrange individual, family and group schemes with cashless access to a wide network of hospitals.",
      "We help you match the inpatient limit, outpatient benefit and add-ons to your family's real needs and budget.",
    ],
    coverage: [
      "Inpatient Cover for hospital admissions and surgery",
      "Outpatient Services including consultations, diagnostics and prescriptions",
      "Maternity Cover for antenatal, delivery and postnatal care",
      "Dental, Optical and Chronic Illness Benefits",
    ],
    whoFor:
      "Families wanting reliable healthcare, employers offering staff cover, self-employed professionals, and anyone managing a chronic condition.",
  },
  {
    slug: "property",
    title: "Property Insurance",
    subtitle: "Protect Your Home and Business Premises",
    icon: Home,
    metaTitle: "Property & Home Insurance in Kenya",
    metaDescription:
      "Fire, burglary and domestic package cover for homes and commercial premises in Kenya. Protect your property with Datani Insurance Agency.",
    intro: [
      "Your home or business premises is likely your largest single asset. Property insurance rebuilds and restocks after fire, floods, burglary and other perils, so a bad day doesn't become a permanent setback.",
      "We cover everything from a family home to a shop, godown or office block, and help you insure to the correct replacement value so you're never caught underinsured.",
    ],
    coverage: [
      "Fire & Allied Perils Cover",
      "Burglary & Theft Insurance",
      "Domestic Package (home, contents and personal liability)",
      "Commercial Property Cover for shops, offices and warehouses",
    ],
    whoFor:
      "Homeowners, landlords, retailers, and businesses that own or rent premises and stock.",
  },
  {
    slug: "marine",
    title: "Marine & Goods in Transit Insurance",
    subtitle: "Cover Your Goods While They Move",
    icon: Truck,
    metaTitle: "Marine Cargo & Goods in Transit Insurance in Kenya",
    metaDescription:
      "Marine cargo and goods-in-transit insurance for importers and businesses in Kenya. Cover your shipments by air, sea, road or rail with Datani Insurance Agency.",
    intro: [
      "Goods are at their most vulnerable while they move. Marine and goods-in-transit insurance protects your cargo against loss or damage from the moment it leaves the supplier to the moment it reaches your door.",
      "Importers need marine cover to clear cargo, and any business moving stock between locations should insure it in transit — we arrange both, per-shipment or on an annual basis.",
    ],
    coverage: [
      "Marine Cargo Insurance for imports and exports by air or sea",
      "Goods in Transit Insurance for movement by road or rail",
      "Single-transit or annual open cover options",
    ],
    whoFor:
      "Importers and exporters, distributors, manufacturers, and any business transporting goods.",
  },
  {
    slug: "liability",
    title: "Liability Insurance",
    subtitle: "Protect Your Business from Legal Risks",
    icon: ShieldCheck,
    metaTitle: "Liability Insurance for Businesses in Kenya",
    metaDescription:
      "Public liability, employer's liability, professional indemnity and D&O cover for Kenyan businesses. Manage legal risk with Datani Insurance Agency.",
    intro: [
      "A customer injured on your premises, an employee hurt at work, or a professional mistake can each lead to a costly claim. Liability insurance covers the legal costs and compensation, protecting your business and personal assets.",
      "We tailor cover to your industry and exposure — from a small shop needing public liability to a firm requiring professional indemnity.",
    ],
    coverage: [
      "Public Liability Insurance for injury or damage to third parties",
      "Employer's Liability for staff injured at work",
      "Professional Indemnity Cover for advice-based professions",
      "Directors & Officers Liability (D&O)",
    ],
    whoFor:
      "Shops and premises open to the public, employers, consultants, accountants, medics, and company directors.",
  },
  {
    slug: "life",
    title: "Life Insurance",
    subtitle: "Secure Their Future, Today",
    icon: Users,
    metaTitle: "Life Insurance & Assurance in Kenya",
    metaDescription:
      "Term, whole-life and endowment life assurance in Kenya. Provide for your family's future with a life insurance plan from Datani Insurance Agency.",
    intro: [
      "Life insurance answers one question: if you were no longer here, would your family be alright? A life policy pays out a lump sum that can settle debts, cover school fees and replace lost income — turning a tragedy into something your loved ones can weather.",
      "We help you choose between affordable term cover and plans that also build a cash value over time.",
    ],
    coverage: [
      "Term Life Cover — high protection at a low premium",
      "Whole Life Insurance — lifelong cover with a savings element",
      "Endowment Plans — protection plus a maturity payout",
      "Investment-Linked Plans",
    ],
    whoFor:
      "Parents and breadwinners, people with loans or a mortgage, and anyone who wants to leave their family financially secure.",
  },
  {
    slug: "pension",
    title: "Retirement & Pension Plans",
    subtitle: "Plan Now, Enjoy Later",
    icon: Wallet,
    metaTitle: "Retirement & Pension Plans in Kenya",
    metaDescription:
      "Individual retirement plans and group pension schemes in Kenya. Build a comfortable retirement with Datani Insurance Agency.",
    intro: [
      "The income you enjoy in retirement depends on the choices you make today. A pension plan lets you save steadily during your working years and draw a reliable income when you stop — with valuable tax advantages along the way.",
      "We set up plans for individuals as well as group schemes that employers can offer their teams.",
    ],
    coverage: [
      "Individual Retirement Plans you contribute to at your own pace",
      "Group Pension Schemes for employers and teams",
      "Tax-efficient, regulated retirement savings",
    ],
    whoFor:
      "Employed and self-employed savers planning ahead, and employers wanting to reward and retain staff.",
  },
  {
    slug: "investment",
    title: "Investment Plans",
    subtitle: "Grow Your Wealth",
    icon: Briefcase,
    metaTitle: "Investment Plans in Kenya",
    metaDescription:
      "Unit-linked plans, mutual funds and insurance-backed savings in Kenya. Grow your money with guidance from Datani Insurance Agency.",
    intro: [
      "Saving protects your money; investing grows it. Insurance-backed investment plans combine disciplined saving with market returns and a measure of protection, helping you build toward goals like a home, education or financial freedom.",
      "We explain the risk and return of each option so you can invest with confidence rather than guesswork.",
    ],
    coverage: [
      "Unit Linked Investment Plans",
      "Mutual Funds",
      "Fixed Deposits with Insurance Benefits",
    ],
    whoFor:
      "Anyone with medium- to long-term goals who wants their savings to work harder.",
  },
  {
    slug: "travel",
    title: "Travel Insurance",
    subtitle: "Travel with Peace of Mind",
    icon: Plane,
    metaTitle: "Travel Insurance in Kenya",
    metaDescription:
      "Travel insurance for medical emergencies, cancellations and lost luggage abroad. Get covered before your trip with Datani Insurance Agency.",
    intro: [
      "A medical emergency abroad — or a cancelled flight and lost luggage — can turn a trip into an expensive ordeal. Travel insurance covers you from the moment you book, and is often required for a visa.",
      "We arrange cover for single trips or frequent travellers, for business or holiday.",
    ],
    coverage: [
      "Trip Cancellation and Interruption",
      "Medical Emergencies Abroad, including evacuation",
      "Lost Luggage and Travel Delays",
      "Personal Liability while Traveling",
    ],
    whoFor:
      "Holidaymakers, business travellers, students going abroad, and anyone applying for a visa that requires cover.",
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
