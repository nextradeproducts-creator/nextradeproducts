var products = [
  // ============================================================
  // UROLOGY (16 products)
  // ============================================================
  {
    id: "bed-pan",
    name: "BED PAN",
    code: "OU-108",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/bed-pan-fiber-500x500-1-300x300.jpg",
    description: "A bedpan is used for both urinary & fecal discharge of bedridden patient.",
    features: [
      "Easy fit cover for hygiene and odorless",
      "Made from tough, high grade plastic",
      "Ergonomically designed for utmost human comfort",
      "Disposable & individually packed",
      "1000 ml capacity with graduation mark"
    ],
    related: ["urine-culture-bottle", "stool-container", "urine-collection-bag-paediatric", "urethral-red-rubber-catheter"]
  },
  {
    id: "foley-balloon-catheter",
    name: "FOLEY BALLOON CATHETER (2 WAY / 3 WAY)",
    code: "OU-109",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2022/02/foley-300x300.jpg",
    description: "A 2 way and 3 way silicone Foley balloon catheter for urinary drainage, bladder management and continuous irrigation.",
    features: [
      "Medical grade silicone construction",
      "Available in 2 way and 3 way configurations",
      "Smooth surface for easy insertion",
      "Self-retaining balloon for secure placement",
      "Size ranges from 6 FR to 24 FR"
    ],
    related: ["silicone-foley-balloon-catheter", "urine-collection-bag-bottom-outlet", "nelaton-catheter", "tur-set"]
  },
  {
    id: "gibbons-catheter",
    name: "GIBBON'S CATHETER",
    code: "OU-111",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/gibbon-catheter-300x300.jpg",
    description: "A PVC rectal/enema catheter designed for safe and effective bowel management.",
    features: [
      "Made from flexible medical grade PVC",
      "Smooth rounded tip for atraumatic insertion",
      "Available in multiple sizes",
      "Transparent tube for visual monitoring",
      "Single use disposable design"
    ],
    related: ["rectal-catheter", "nelaton-catheter", "stool-container", "urethral-red-rubber-catheter"]
  },
  {
    id: "male-external-catheter",
    name: "MALE EXTERNAL CATHETER",
    code: "OU-112",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/male-external-catheter-300x300.jpg",
    description: "Condom type urinary drainage catheter for male patients with urinary incontinence.",
    features: [
      "Latex-free medical grade silicone material",
      "Self-adhesive design for secure fit",
      "Anti-kink funnel for unrestricted flow",
      "Available in multiple sizes (S, M, L, XL)",
      "Skin-friendly adhesive reduces irritation"
    ],
    related: ["urine-collection-bag-bottom-outlet", "urine-collection-leg-bag", "nelaton-catheter", "foley-balloon-catheter-2-way"]
  },
  {
    id: "nelaton-catheter",
    name: "NELATON CATHETER",
    code: "OU-113",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/nelaton-catheter-300x300.jpg",
    description: "A straight urinary catheter for intermittent catheterization and bladder drainage.",
    features: [
      "Smooth atraumatic tip for gentle insertion",
      "Made from medical grade PVC",
      "Color coded connector for size identification",
      "Graduated markings for insertion depth",
      "Individually sterile packaged"
    ],
    related: ["foley-balloon-catheter-2-way", "urethral-red-rubber-catheter", "urine-culture-bottle", "male-external-catheter"]
  },
  {
    id: "rectal-catheter",
    name: "RECTAL CATHETER",
    code: "OU-114",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/rectal-catheter-300x300.jpg",
    description: "A PVC rectal catheter for enema administration and bowel evacuation procedures.",
    features: [
      "Flexible medical grade PVC construction",
      "Multiple side holes for effective flow",
      "Rounded tip for patient comfort",
      "Available in various French sizes",
      "Sterile and single use"
    ],
    related: ["gibbons-catheter", "stool-container", "nelaton-catheter", "urethral-red-rubber-catheter"]
  },
  {
    id: "silicone-foley-balloon-catheter",
    name: "SILICONE FOLEY BALLOON CATHETER",
    code: "OU-115",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2022/02/silicone-foley-300x300.jpg",
    description: "A long term indwelling silicone Foley catheter with superior biocompatibility for extended use.",
    features: [
      "100% medical grade silicone for long term use",
      "Latex-free and hypoallergenic",
      "Encrustation resistant for extended indwelling",
      "Soft balloon for patient comfort",
      "Recommend change interval up to 12 weeks"
    ],
    related: ["foley-balloon-catheter-2-way", "foley-balloon-catheter-3-way", "urine-collection-bag-bottom-outlet", "urine-collection-leg-bag"]
  },
  {
    id: "stool-container",
    name: "STOOL CONTAINER",
    code: "OU-116",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/stool-container-300x300.jpg",
    description: "A disposable specimen container for collection and transport of stool samples.",
    features: [
      "Leak-proof screw cap design",
      "Made from clear polypropylene",
      "Graduated markings for sample measurement",
      "Sterile and individually packaged",
      "Tamper evident seal for transport safety"
    ],
    related: ["urine-culture-bottle", "bed-pan", "rectal-catheter", "urine-pot-two-in-one"]
  },
  {
    id: "tur-set",
    name: "TUR SET",
    code: "OU-117",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/tur-set-300x300.jpg",
    description: "Transurethral resection irrigation set for continuous fluid delivery during TURP procedures.",
    features: [
      "Sterile disposable irrigation tubing set",
      "Compatible with standard resectoscopes",
      "Drip chamber for flow rate monitoring",
      "Roller clamp for precise flow adjustment",
      "Luer lock connectors for secure attachment"
    ],
    related: ["foley-balloon-catheter-3-way", "silicone-foley-balloon-catheter", "urine-collection-bag-bottom-outlet", "iv-set"]
  },
  {
    id: "urethral-red-rubber-catheter",
    name: "URETHRAL RED RUBBER CATHETER",
    code: "OU-118",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/red-rubber-catheter-300x300.jpg",
    description: "A traditional red rubber urethral catheter for general urinary drainage applications.",
    features: [
      "Natural red rubber latex construction",
      "Smooth finish for easy insertion",
      "Flexible yet firm for reliable drainage",
      "Reusable and autoclavable",
      "Available in multiple French sizes"
    ],
    related: ["nelaton-catheter", "foley-balloon-catheter-2-way", "rectal-catheter", "male-external-catheter"]
  },
  {
    id: "urine-collection-bag-bottom-outlet",
    name: "URINE COLLECTION BAG WITH BOTTOM OUTLET",
    code: "OU-119",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/urine-bag-bottom-outlet-300x300.jpg",
    description: "A urine collection bag with bottom outlet valve for convenient drainage and bedridden patient care.",
    features: [
      "Bottom outlet valve for easy emptying",
      "Anti-reflux valve prevents backflow",
      "Graduated measurement scale",
      "Inlet tube with connector for catheter attachment",
      "Perforated hanger for bed rail attachment"
    ],
    related: ["urine-collection-bag-top-outlet", "urine-collection-leg-bag", "foley-balloon-catheter-2-way", "male-external-catheter"]
  },
  {
    id: "urine-collection-bag-paediatric",
    name: "URINE COLLECTION BAG FOR PAEDIATRIC",
    code: "OU-120",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/paediatric-urine-bag-300x300.jpg",
    description: "A specially designed urine collection bag for pediatric patients with gentle adhesive attachment.",
    features: [
      "Pediatric specific size and capacity",
      "Gentle skin-friendly adhesive",
      "Hypoallergenic material prevents skin irritation",
      "Anti-reflux valve prevents sample contamination",
      "Graduated collection chamber for accurate measurement"
    ],
    related: ["urine-collection-bag-bottom-outlet", "urine-culture-bottle", "stool-container", "urine-pot-two-in-one"]
  },
  {
    id: "urine-collection-bag-top-outlet",
    name: "URINE COLLECTION BAG WITH TOP OUTLET",
    code: "OU-121",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/urine-bag-top-outlet-300x300.jpg",
    description: "A urine collection bag with top outlet for easy sampling and drainage management.",
    features: [
      "Top outlet design for efficient sample collection",
      "Anti-reflux valve for infection prevention",
      "Clear graduated chamber for accurate monitoring",
      "Flexible inlet tubing with universal connector",
      "Disposable and individually packaged"
    ],
    related: ["urine-collection-bag-bottom-outlet", "urine-collection-leg-bag", "urine-culture-bottle", "foley-balloon-catheter-2-way"]
  },
  {
    id: "urine-collection-leg-bag",
    name: "URINE COLLECTION LEG BAG WITH BOTTOM OUTLET",
    code: "OU-122",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/leg-bag-300x300.jpg",
    description: "A discreet leg worn urine collection bag with bottom outlet for ambulatory patients.",
    features: [
      "Low profile design for discreet wear",
      "Elastic leg straps for secure attachment",
      "Bottom outlet for easy emptying without removal",
      "Anti-kink tubing for uninterrupted flow",
      "Available in 500 ml and 750 ml capacities"
    ],
    related: ["urine-collection-bag-bottom-outlet", "male-external-catheter", "foley-balloon-catheter-2-way", "urine-collection-bag-top-outlet"]
  },
  {
    id: "urine-culture-bottle",
    name: "URINE CULTURE BOTTLE",
    code: "OU-123",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/urine-culture-bottle-300x300.jpg",
    description: "A sterile urine sample container for microbiology culture and sensitivity testing.",
    features: [
      "Sterile, leak-proof container",
      "Wide mouth for easy collection",
      "Graduated markings for sample volume",
      "Tamper-evident screw cap",
      "Includes patient labeling area"
    ],
    related: ["stool-container", "urine-pot-two-in-one", "urine-collection-bag-paediatric", "nelaton-catheter"]
  },
  {
    id: "urine-pot-two-in-one",
    name: "URINE POT (TWO IN ONE)",
    code: "OU-124",
    category: "urology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/urine-pot-300x300.jpg",
    description: "A two-in-one urine collection pot combining a specimen container with a measuring chamber.",
    features: [
      "Dual chamber design for collection and measurement",
      "Secure screw cap prevents spillage",
      "Clear graduated markings for accurate volume reading",
      "Durable polypropylene construction",
      "Individually wrapped for hygiene"
    ],
    related: ["urine-culture-bottle", "stool-container", "bed-pan", "urine-collection-bag-paediatric"]
  },

  // ============================================================
  // INFUSION & TRANSFUSION (5 products)
  // ============================================================
  {
    id: "iv-set",
    name: "IV INFUSION SET",
    code: "IT-101",
    category: "infusion-transfusion",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/iv-set-300x300.jpg",
    description: "A sterile intravenous infusion set for controlled delivery of fluids and medications.",
    features: [
      "15 micron in-line filter for particulate removal",
      "Transparent drip chamber for flow visualization",
      "Roller clamp for precise flow rate adjustment",
      "Universal spike with protective cap",
      "Latex-free injection port"
    ],
    related: ["scalp-vein-set", "blood-transfusion-set", "infusion-pump-tubing", "tur-set"]
  },
  {
    id: "blood-transfusion-set",
    name: "BLOOD TRANSFUSION SET",
    code: "IT-102",
    category: "infusion-transfusion",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/blood-transfusion-set-300x300.jpg",
    description: "A sterile blood transfusion set with integral filter for safe blood product administration.",
    features: [
      "170-200 micron blood filter for microaggregate removal",
      "Large bore tubing for optimal flow rate",
      "Precision drip chamber for accurate monitoring",
      "Luer slip connector for secure attachment",
      "Latex-free construction"
    ],
    related: ["iv-set", "scalp-vein-set", "infusion-pump-tubing", "surgical-blade"]
  },
  {
    id: "scalp-vein-set",
    name: "SCALP VEIN SET (BUTTERFLY NEEDLE)",
    code: "IT-103",
    category: "infusion-transfusion",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/scalp-vein-set-300x300.jpg",
    description: "A winged infusion set for peripheral venous access in pediatric and difficult vein patients.",
    features: [
      "Ultra-sharp bevel needle for smooth insertion",
      "Flexible winged design for secure taping",
      "Transparent tubing for flashback visualization",
      "Available in 18G to 27G sizes",
      "Color coded hub for gauge identification"
    ],
    related: ["iv-set", "blood-transfusion-set", "infusion-pump-tubing", "iv-cannula"]
  },
  {
    id: "infusion-pump-tubing",
    name: "INFUSION PUMP TUBING SET",
    code: "IT-104",
    category: "infusion-transfusion",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/infusion-pump-tubing-300x300.jpg",
    description: "A precision tubing set designed for use with volumetric infusion pumps.",
    features: [
      "Precision bore tubing for accurate flow delivery",
      "Compatible with major infusion pump brands",
      "Bubble trap chamber for air elimination",
      "Anti-siphon valve prevents free flow",
      "DEHP-free and latex-free construction"
    ],
    related: ["iv-set", "scalp-vein-set", "blood-transfusion-set", "iv-cannula"]
  },
  {
    id: "iv-cannula",
    name: "IV CANNULA (INTRAVENOUS CATHETER)",
    code: "IT-105",
    category: "infusion-transfusion",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/iv-cannula-300x300.jpg",
    description: "A sterile peripheral intravenous catheter for short-term venous access.",
    features: [
      "Triple bevel needle for smooth venipuncture",
      "Radiopaque catheter for X-ray visibility",
      "Flashback chamber for positive vein entry confirmation",
      "Winged design for secure fixation",
      "Available in 14G to 26G sizes"
    ],
    related: ["scalp-vein-set", "iv-set", "infusion-pump-tubing", "blood-transfusion-set"]
  },

  // ============================================================
  // GASTROENTEROLOGY (5 products)
  // ============================================================
  {
    id: "ryles-tube",
    name: "RYLES TUBE (NASOGASTRIC TUBE)",
    code: "GE-201",
    category: "gastroenterology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/ryles-tube-300x300.jpg",
    description: "A flexible nasogastric tube for gastric decompression, lavage and enteral feeding.",
    features: [
      "Medical grade PVC construction",
      "Radiopaque line for X-ray position confirmation",
      "Multiple lateral eyes for efficient drainage",
      "Graduated markings for insertion depth reference",
      "Color coded connector for size identification"
    ],
    related: ["infant-feeding-tube", "stomach-tube", "rectal-catheter", "gibbons-catheter"]
  },
  {
    id: "infant-feeding-tube",
    name: "INFANT FEEDING TUBE",
    code: "GE-202",
    category: "gastroenterology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/infant-feeding-tube-300x300.jpg",
    description: "A soft, fine-bore feeding tube designed for neonatal and pediatric enteral nutrition.",
    features: [
      "Ultra-soft silicone for neonatal safety",
      "Fine bore design for patient comfort",
      "Radiopaque tip for placement verification",
      "Luer connector for syringe attachment",
      "Available in 4 FR to 8 FR sizes"
    ],
    related: ["ryles-tube", "stomach-tube", "urine-collection-bag-paediatric", "nelaton-catheter"]
  },
  {
    id: "stomach-tube",
    name: "STOMACH TUBE (LARGE BORE NASOGASTRIC TUBE)",
    code: "GE-203",
    category: "gastroenterology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/stomach-tube-300x300.jpg",
    description: "A large bore gastric tube for lavage, gastric decompression and aspiration procedures.",
    features: [
      "Large bore design for rapid gastric emptying",
      "Flexible PVC with smooth rounded tip",
      "Multiple side openings for efficient aspiration",
      "Radiopaque stripe for position confirmation",
      "Color coded funnel connector"
    ],
    related: ["ryles-tube", "infant-feeding-tube", "rectal-catheter", "gibbons-catheter"]
  },
  {
    id: "gastric-lavage-kit",
    name: "GASTRIC LAVAGE KIT",
    code: "GE-204",
    category: "gastroenterology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/gastric-lavage-kit-300x300.jpg",
    description: "A complete gastric lavage kit including stomach tube, funnel and connecting tubing.",
    features: [
      "Complete kit for emergency gastric lavage",
      "Includes large bore stomach tube and funnel",
      "Collection bag for effluent measurement",
      "Sterile and ready to use",
      "Disposable single use design"
    ],
    related: ["stomach-tube", "ryles-tube", "infant-feeding-tube", "tur-set"]
  },
  {
    id: "pneumatic-dilator",
    name: "PNEUMATIC DILATOR",
    code: "GE-205",
    category: "gastroenterology",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/pneumatic-dilator-300x300.jpg",
    description: "A pneumatic balloon dilator for esophageal achalasia treatment and stricture dilation.",
    features: [
      "High pressure balloon for effective dilation",
      "Radiopaque markers for precise positioning",
      "Pressure gauge for controlled inflation",
      "Flexible catheter shaft for easy passage",
      "Single use sterile design"
    ],
    related: ["ryles-tube", "stomach-tube", "rectal-catheter", "foley-balloon-catheter-3-way"]
  },

  // ============================================================
  // ANESTHESIA CARE (5 products)
  // ============================================================
  {
    id: "anesthesia-mask",
    name: "ANESTHESIA MASK",
    code: "AC-301",
    category: "anesthesia-care",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/anesthesia-mask-300x300.jpg",
    description: "A transparent reusable anesthesia face mask for inhalation anesthesia and oxygen delivery.",
    features: [
      "Transparent medical grade PVC construction",
      "Anatomical shape for optimal facial seal",
      "Soft cushioned rim for patient comfort",
      "Universal 22 mm connector",
      "Available in neonatal to adult sizes"
    ],
    related: ["breathing-circuit", "airway-guedel", "oxygen-mask", "endotracheal-tube"]
  },
  {
    id: "breathing-circuit",
    name: "BREATHING CIRCUIT (ANESTHESIA CIRCUIT)",
    code: "AC-302",
    category: "anesthesia-care",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/breathing-circuit-300x300.jpg",
    description: "A corrugated breathing circuit for anesthesia machines and ventilators.",
    features: [
      "Lightweight corrugated tubing for flexibility",
      "22 mm female connector at patient end",
      "15 mm or 22 mm machine end connector",
      "Elbow and Y-piece included",
      "Available in pediatric and adult configurations"
    ],
    related: ["anesthesia-mask", "airway-guedel", "oxygen-mask", "endotracheal-tube"]
  },
  {
    id: "airway-guedel",
    name: "GUEDEL AIRWAY (OROPHARYNGEAL AIRWAY)",
    code: "AC-303",
    category: "anesthesia-care",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/guedel-airway-300x300.jpg",
    description: "An oropharyngeal airway device for maintaining a patent airway in unconscious patients.",
    features: [
      "Medical grade PE or PVC construction",
      "Anatomical curvature for proper tongue placement",
      "Reinforced bite block section",
      "Flanged end for lip protection and stability",
      "Color coded by size for easy identification"
    ],
    related: ["anesthesia-mask", "breathing-circuit", "oxygen-mask", "endotracheal-tube"]
  },
  {
    id: "oxygen-mask",
    name: "OXYGEN MASK",
    code: "AC-304",
    category: "anesthesia-care",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/oxygen-mask-300x300.jpg",
    description: "A transparent oxygen delivery mask with adjustable nose clip and tubing.",
    features: [
      "Soft, malleable design for facial fit",
      "Elastic strap for secure placement",
      "Oxygen tubing with 6 ft length",
      "Adjustable nose clip for comfort",
      "Available in pediatric and adult sizes"
    ],
    related: ["anesthesia-mask", "breathing-circuit", "airway-guedel", "nasal-cannula"]
  },
  {
    id: "endotracheal-tube",
    name: "ENDOTRACHEAL TUBE",
    code: "AC-305",
    category: "anesthesia-care",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/endotracheal-tube-300x300.jpg",
    description: "A cuffed endotracheal tube for airway management during general anesthesia and ventilation.",
    features: [
      "High volume low pressure cuff minimizes tracheal damage",
      "Radiopaque line for X-ray position verification",
      "Murphy eye for emergency ventilation",
      "15 mm universal connector",
      "Depth markings for accurate placement"
    ],
    related: ["airway-guedel", "anesthesia-mask", "breathing-circuit", "oxygen-mask"]
  },
  {
    id: "nasal-cannula",
    name: "NASAL CANNULA",
    code: "AC-306",
    category: "anesthesia-care",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/nasal-cannula-300x300.jpg",
    description: "A disposable nasal cannula for supplemental oxygen delivery.",
    features: [
      "Soft prongs for comfortable nasal fit",
      "Adjustable headband tubing",
      "Lightweight design for patient mobility",
      "Standard 6 ft oxygen tubing",
      "Latex-free hypoallergenic materials"
    ],
    related: ["oxygen-mask", "anesthesia-mask", "breathing-circuit", "airway-guedel"]
  },

  // ============================================================
  // SURGERY & WOUND CARE (5 products)
  // ============================================================
  {
    id: "surgical-blade",
    name: "SURGICAL BLADE",
    code: "SW-401",
    category: "surgery-wound-care",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/surgical-blade-300x300.jpg",
    description: "A sterile carbon steel surgical blade for precision incisions in surgical procedures.",
    features: [
      "High grade carbon steel for sharpness retention",
      "Sterile and individually foil packaged",
      "Fits standard surgical blade handles",
      "Available in sizes 10 to 24",
      "Silicon coated for smooth cutting"
    ],
    related: ["surgical-blade-handle", "wound-dressing", "bandage-rolled", "suture-set"]
  },
  {
    id: "surgical-blade-handle",
    name: "SURGICAL BLADE HANDLE",
    code: "SW-402",
    category: "surgery-wound-care",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/blade-handle-300x300.jpg",
    description: "A reusable surgical blade handle for use with standard surgical blades.",
    features: [
      "Stainless steel construction for durability",
      "Precision machined blade gripping mechanism",
      "Non-slip textured grip surface",
      "Autoclavable for repeated use",
      "Available in #3 and #4 handle sizes"
    ],
    related: ["surgical-blade", "wound-dressing", "bandage-rolled", "suture-set"]
  },
  {
    id: "wound-dressing",
    name: "WOUND DRESSING (STERILE GAUZE)",
    code: "SW-403",
    category: "surgery-wound-care",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/wound-dressing-300x300.jpg",
    description: "A sterile absorbent wound dressing for post-surgical and traumatic wound care.",
    features: [
      "Highly absorbent cotton gauze",
      "Sterile and individually wrapped",
      "Non-stick wound contact layer",
      "Breathable tape border for secure fixation",
      "Available in multiple sizes"
    ],
    related: ["bandage-rolled", "surgical-blade", "suture-set", "adhesive-bandage"]
  },
  {
    id: "bandage-rolled",
    name: "ROLLED BANDAGE (CREPE BANDAGE)",
    code: "SW-404",
    category: "surgery-wound-care",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/crepe-bandage-300x300.jpg",
    description: "A cotton crepe rolled bandage for wound dressing retention and compression support.",
    features: [
      "High quality cotton elastic crepe",
      "Uniform stretch for consistent compression",
      "Breathable fabric for skin comfort",
      "Secure edge to prevent fraying",
      "Available in 5 cm to 20 cm widths"
    ],
    related: ["wound-dressing", "surgical-blade", "adhesive-bandage", "arm-sling"]
  },
  {
    id: "suture-set",
    name: "SUTURE SET",
    code: "SW-405",
    category: "surgery-wound-care",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/suture-set-300x300.jpg",
    description: "A sterile disposable suture set for wound closure and minor surgical procedures.",
    features: [
      "Includes needle holder, tissue forceps and scissors",
      "Sterile blister packaging",
      "Disposable single use design",
      "Ergonomic instrument handles",
      "Complete set for emergency wound closure"
    ],
    related: ["surgical-blade", "surgical-blade-handle", "wound-dressing", "bandage-rolled"]
  },
  {
    id: "adhesive-bandage",
    name: "ADHESIVE BANDAGE (MICROPORE TAPE)",
    code: "SW-406",
    category: "surgery-wound-care",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/micropore-tape-300x300.jpg",
    description: "A hypoallergenic medical adhesive tape for wound dressing fixation and tubing securement.",
    features: [
      "Breathable non-woven fabric backing",
      "Hypoallergenic acrylic adhesive",
      "Easy to tear by hand",
      "Gentle removal with minimal residue",
      "Available in 1, 2, 3 and 4 inch widths"
    ],
    related: ["wound-dressing", "bandage-rolled", "surgical-blade", "suture-set"]
  },

  // ============================================================
  // MISCELLANEOUS RANGE (5 products)
  // ============================================================
  {
    id: "patient-gown",
    name: "PATIENT GOWN (EXAMINATION GOWN)",
    code: "MR-501",
    category: "miscellaneous-range",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/patient-gown-300x300.jpg",
    description: "A disposable or reusable patient examination gown for hospital and clinic use.",
    features: [
      "Soft, lightweight non-woven fabric",
      "Open back design with tie closures",
      "Generous sizing for patient comfort",
      "Available in disposable or washable options",
      "One size fits most design"
    ],
    related: ["bed-sheet", "examination-gloves", "surgical-cap", "patient-slippers"]
  },
  {
    id: "bed-sheet",
    name: "HOSPITAL BED SHEET",
    code: "MR-502",
    category: "miscellaneous-range",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/bed-sheet-300x300.jpg",
    description: "A durable hospital grade bed sheet for patient beds and examination tables.",
    features: [
      "High thread count cotton-polyester blend",
      "Stain resistant and easy to launder",
      "Fitted sheet design with elastic corners",
      "Available in multiple bed sizes",
      "White and pastel color options"
    ],
    related: ["patient-gown", "examination-gloves", "surgical-cap", "pillow-case"]
  },
  {
    id: "examination-gloves",
    name: "EXAMINATION GLOVES (NITRILE POWDER FREE)",
    code: "MR-503",
    category: "miscellaneous-range",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/examination-gloves-300x300.jpg",
    description: "Powder free nitrile examination gloves for medical examination and general protection.",
    features: [
      "Latex-free nitrile material",
      "Powder free for reduced allergy risk",
      "Textured fingertips for improved grip",
      "Beaded cuff for easy donning",
      "Available in S, M, L, XL sizes"
    ],
    related: ["patient-gown", "surgical-cap", "surgical-mask", "bed-sheet"]
  },
  {
    id: "surgical-cap",
    name: "SURGICAL CAP (DISPOSABLE BOUFFANT CAP)",
    code: "MR-504",
    category: "miscellaneous-range",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/surgical-cap-300x300.jpg",
    description: "A disposable bouffant style surgical cap for operating room and clean room use.",
    features: [
      "Lightweight non-woven polypropylene",
      "Elastic edge for secure fit",
      "One size fits most",
      "Breathable material for comfort",
      "Individually or bulk packaged"
    ],
    related: ["surgical-mask", "examination-gloves", "patient-gown", "surgical-gown"]
  },
  {
    id: "surgical-mask",
    name: "SURGICAL FACE MASK (3 PLY DISPOSABLE)",
    code: "MR-505",
    category: "miscellaneous-range",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/surgical-mask-300x300.jpg",
    description: "A 3 ply disposable surgical face mask for infection control and protection.",
    features: [
      "3 ply construction with melt-blown filter layer",
      "Adjustable nose clip for secure fit",
      "Soft ear loops for extended wear comfort",
      "High bacterial filtration efficiency (BFE > 98%)",
      "Fluid resistant outer layer"
    ],
    related: ["examination-gloves", "surgical-cap", "patient-gown", "surgical-gown"]
  },
  {
    id: "surgical-gown",
    name: "SURGICAL GOWN (STERILE DISPOSABLE)",
    code: "MR-506",
    category: "miscellaneous-range",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/surgical-gown-300x300.jpg",
    description: "A sterile disposable surgical gown for operating room personnel protection.",
    features: [
      "Fluid resistant SMS fabric",
      "Reinforced front and sleeve areas",
      "Sterile and individually packaged",
      "Adjustable tie closure at neck and waist",
      "Available in various sizes"
    ],
    related: ["surgical-cap", "surgical-mask", "examination-gloves", "patient-gown"]
  },

  // ============================================================
  // ORTHOPEDIC RANGE (5 products)
  // ============================================================
  {
    id: "cervical-collar",
    name: "CERVICAL COLLAR (SOFT FOAM)",
    code: "OR-601",
    category: "orthopedic-range",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/cervical-collar-300x300.jpg",
    description: "A soft foam cervical collar for immobilization and support of the cervical spine.",
    features: [
      "High density medical grade foam",
      "Adjustable Velcro closure for custom fit",
      "Breathable cotton cover for skin comfort",
      "Anatomical contour for proper neck alignment",
      "Available in multiple sizes"
    ],
    related: ["arm-sling", "back-support-belt", "knee-brace", "wrist-brace"]
  },
  {
    id: "arm-sling",
    name: "ARM SLING (UNIVERSAL SHOULDER IMMOBILIZER)",
    code: "OR-602",
    category: "orthopedic-range",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/arm-sling-300x300.jpg",
    description: "A universal arm sling for upper extremity immobilization and support.",
    features: [
      "Soft breathable fabric construction",
      "Adjustable shoulder strap for comfort",
      "Wide base for arm support and pressure distribution",
      "Quick release buckle for easy application",
      "Fits both left and right arms"
    ],
    related: ["cervical-collar", "knee-brace", "wrist-brace", "back-support-belt"]
  },
  {
    id: "knee-brace",
    name: "KNEE BRACE (HINGED SUPPORT)",
    code: "OR-603",
    category: "orthopedic-range",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/knee-brace-300x300.jpg",
    description: "A hinged knee brace for post-surgical recovery, ligament support and injury rehabilitation.",
    features: [
      "Aluminum hinges for medial and lateral support",
      "Adjustable flexion and extension stops",
      "Neoprene sleeve for warmth and compression",
      "Velcro straps for secure customized fit",
      "Breathable fabric reduces sweating"
    ],
    related: ["cervical-collar", "arm-sling", "back-support-belt", "wrist-brace"]
  },
  {
    id: "wrist-brace",
    name: "WRIST BRACE (COMFORT SUPPORT)",
    code: "OR-604",
    category: "orthopedic-range",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/wrist-brace-300x300.jpg",
    description: "A comfortable wrist brace for carpal tunnel syndrome, sprains and post-surgical support.",
    features: [
      "Contoured aluminum splint for immobilization",
      "Breathable neoprene and nylon construction",
      "Adjustable tension straps for custom compression",
      "Prevents wrist flexion and extension",
      "Available in left and right hand models"
    ],
    related: ["knee-brace", "arm-sling", "cervical-collar", "back-support-belt"]
  },
  {
    id: "ankle-support",
    name: "ANKLE SUPPORT (LACED BRACE)",
    code: "OR-605",
    category: "orthopedic-range",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/ankle-support-300x300.jpg",
    description: "A laced ankle brace for sprain prevention, post-injury support and chronic instability.",
    features: [
      "Lace-up design for customized compression",
      "Cotton and elastic blend for breathability",
      "Side stabilizers for medial and lateral support",
      "Low profile design fits in most shoes",
      "Universal fit for left or right ankle"
    ],
    related: ["knee-brace", "wrist-brace", "arm-sling", "cervical-collar"]
  },

  // ============================================================
  // BODY BELT & BRACES (5 products)
  // ============================================================
  {
    id: "back-support-belt",
    name: "BACK SUPPORT BELT (LUMBAR SUPPORT)",
    code: "BB-701",
    category: "body-belt-braces",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/back-support-belt-300x300.jpg",
    description: "An elastic lumbar support belt for lower back pain relief and spinal support.",
    features: [
      "Elastic neoprene construction for flexibility",
      "Contoured lumbar pad for targeted support",
      "Adjustable Velcro closure for custom fit",
      "Breathable mesh fabric reduces heat buildup",
      "Provides abdominal and lumbar compression"
    ],
    related: ["knee-brace", "cervical-collar", "arm-sling", "abdominal-binder"]
  },
  {
    id: "abdominal-binder",
    name: "ABDOMINAL BINDER (POST-SURGICAL SUPPORT)",
    code: "BB-702",
    category: "body-belt-braces",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/abdominal-binder-300x300.jpg",
    description: "A post-surgical abdominal binder for incision support, swelling reduction and comfort.",
    features: [
      "Wide elastic panel for abdominal compression",
      "Adjustable closure for desired pressure level",
      "Soft cotton backing for skin comfort",
      "Supports post-operative incision sites",
      "Universal fit design"
    ],
    related: ["back-support-belt", "knee-brace", "cervical-collar", "wrist-brace"]
  },
  {
    id: "maternity-support-belt",
    name: "MATERNITY SUPPORT BELT",
    code: "BB-703",
    category: "body-belt-braces",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/maternity-belt-300x300.jpg",
    description: "A prenatal elastic support belt for pregnancy related back pain and abdominal support.",
    features: [
      "Elastic band for growing belly support",
      "Adjustable straps for customized fit",
      "Relieves lower back pressure during pregnancy",
      "Breathable cotton blend fabric",
      "Worn under clothing discreetly"
    ],
    related: ["back-support-belt", "abdominal-binder", "knee-brace", "cervical-collar"]
  },
  {
    id: "rib-belt",
    name: "RIB BELT (CHEST SUPPORT)",
    code: "BB-704",
    category: "body-belt-braces",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/rib-belt-300x300.jpg",
    description: "A rib belt for chest wall support following rib fractures, contusions or thoracic surgery.",
    features: [
      "Elastic rib compression wrap",
      "Adjustable closure for controlled compression",
      "Breathable fabric for extended wear",
      "Provides support during coughing and movement",
      "Universal adult sizing"
    ],
    related: ["back-support-belt", "abdominal-binder", "cervical-collar", "knee-brace"]
  },
  {
    id: "posture-corrector",
    name: "POSTURE CORRECTOR BRACE",
    code: "BB-705",
    category: "body-belt-braces",
    image: "https://omexmedicaltechnology.co.in/wp-content/uploads/2021/07/posture-corrector-300x300.jpg",
    description: "A posture correction brace for upper back alignment and shoulder retraction.",
    features: [
      "Adjustable shoulder straps for gentle retraction",
      "Lightweight and discreet under clothing",
      "Memory foam pads for comfort",
      "Corrects rounded shoulder posture",
      "Suitable for daily wear during work or activities"
    ],
    related: ["back-support-belt", "cervical-collar", "rib-belt", "abdominal-binder"]
  }
];
