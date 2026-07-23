export const business = {
  name: "C Ramos Cabinetry and Construction LLC",
  shortName: "Ramos Cabinetry & Construction",
  owner: "Chris Ramos",
  phone: "(480) 358 8607",
  phoneHref: "tel:+14803588607",
  email: "cramoscandc@gmail.com",
  license: "ROC #364821",
  yearsExperience: "15+",
  reviewCount: "16",
  reviewRating: "5.0",
  tagline: "Custom Cabinetry & Fine Carpentry, Built by Hand in the East Valley",
  city: "Tempe",
  state: "AZ",
  domain: "https://cramoscabinetry.com",
};

export const serviceAreas = [
  "Tempe",
  "Gilbert",
  "Mesa",
  "Chandler",
  "Scottsdale",
  "Phoenix",
];

export type Project = {
  slug: string;
  image: string;
  title: string;
  alt: string;
  city: string;
  tag: string;
};

export const projects: Project[] = [
  {
    slug: "river-table-island",
    image: "/images/gallery/river-table-island-kitchen.jpg",
    title: "Live Edge Walnut Island with Blue River Inlay",
    alt: "Custom live edge walnut kitchen island with blue epoxy river inlay, East Valley AZ",
    city: "East Valley, AZ",
    tag: "Custom Cabinets · Kitchen",
  },
  {
    slug: "wet-bar-built-in",
    image: "/images/gallery/wet-bar-built-in.jpg",
    title: "Light Oak Wet Bar with Wine Storage",
    alt: "Custom light oak wet bar built in with open shelving and wine fridge, East Valley AZ",
    city: "East Valley, AZ",
    tag: "Custom Cabinets · Built Ins",
  },
  {
    slug: "navy-media-wall",
    image: "/images/gallery/navy-media-wall.jpg",
    title: "Navy Media Wall with Reclaimed Wood Surround",
    alt: "Custom navy blue built in media wall with reclaimed wood surround and wine fridge, East Valley AZ",
    city: "East Valley, AZ",
    tag: "Finish Carpentry · Built Ins",
  },
  {
    slug: "laundry-built-ins",
    image: "/images/gallery/laundry-built-ins.jpg",
    title: "Laundry Room Cabinetry with Quartz Counter",
    alt: "Custom light wood laundry room cabinetry with quartz countertop and farmhouse sink, East Valley AZ",
    city: "East Valley, AZ",
    tag: "Custom Cabinets · Laundry",
  },
  {
    slug: "cream-vanity",
    image: "/images/gallery/cream-vanity.jpg",
    title: "Cream Shaker Vanity with Quartz Top",
    alt: "Custom cream shaker bathroom vanity with quartz countertop, East Valley AZ",
    city: "East Valley, AZ",
    tag: "Bathroom Remodeling",
  },
  {
    slug: "vanity-boxes-install",
    image: "/images/gallery/vanity-boxes-install.jpg",
    title: "Charcoal Vanity Cabinetry, Mid Install",
    alt: "Charcoal shaker cabinet boxes during bathroom vanity installation, East Valley AZ",
    city: "East Valley, AZ",
    tag: "Cabinet Installation",
  },
  {
    slug: "bathroom-tile-install",
    image: "/images/gallery/bathroom-tile-install.jpg",
    title: "Bathroom Cabinetry & Tile Coordination",
    alt: "Floating bathroom vanity cabinetry during tile installation, East Valley AZ",
    city: "East Valley, AZ",
    tag: "Bathroom Remodeling",
  },
  {
    slug: "raw-lumber-material",
    image: "/images/gallery/raw-lumber-material.jpg",
    title: "Raw Lumber, Ready for the Shop",
    alt: "Raw hardwood lumber board staged for custom cabinetry fabrication",
    city: "East Valley, AZ",
    tag: "Materials & Process",
  },
];

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  keyword: string;
  eyebrow: string;
  heroHeadline: string;
  heroSub: string;
  overview: string;
  problems: { title: string; body: string }[];
  included: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-cabinets",
    name: "Custom Cabinets",
    navLabel: "Custom Cabinets",
    keyword: "custom cabinets Phoenix AZ",
    eyebrow: "Custom & Semi Custom Cabinetry",
    heroHeadline: "Cabinets Built for Your Space, Not Off a Shelf",
    heroSub:
      "Every cabinet Chris builds is measured, drawn, and joined for the exact room it's going into: kitchens, bathrooms, laundry rooms, built ins, and everything between.",
    overview:
      "Stock cabinetry forces your kitchen to fit the box. Custom cabinetry does the opposite: the box fits your kitchen. Ramos Cabinetry & Construction designs and builds custom and semi custom cabinets for East Valley homeowners who want storage, proportion, and finish work that actually matches the way they live and cook.",
    problems: [
      {
        title: "Awkward layouts and dead corners",
        body: "Stock boxes leave gaps, wasted corners, and mismatched fillers. Custom cabinetry is built to the inch, so every corner earns its keep.",
      },
      {
        title: "Big box finishes that don't hold up",
        body: "Particleboard and thin veneers chip and swell within a few years. We build with solid wood and quality plywood construction meant to last.",
      },
      {
        title: "Nothing matches the rest of the house",
        body: "Cabinet style, door profile, and stain should feel considered, not generic. We design around your home's existing character.",
      },
    ],
    included: [
      "In home measuring and design consultation",
      "Custom door styles, profiles, and finishes",
      "Soft close hinges and drawer hardware",
      "Full overlay, partial overlay, or inset construction",
      "Built ins, pantries, and specialty storage",
      "Precision installation and final detailing",
    ],
    faqs: [
      {
        q: "What's the difference between custom and semi custom cabinets?",
        a: "Custom cabinets are built entirely to your dimensions and design. Semi custom starts from established cabinet boxes with more flexibility on sizing, finishes, and storage inserts, a great option when you want a tailored look on a tighter timeline or budget.",
      },
      {
        q: "How long does a custom cabinet project take?",
        a: "Most kitchens take several weeks from final design approval to installation, depending on the scope and finish selections. We'll walk you through a realistic timeline at your free estimate.",
      },
      {
        q: "Do you build cabinets for rooms besides the kitchen?",
        a: "Yes, bathrooms, laundry rooms, mudrooms, home offices, entertainment centers, and closet built ins are all part of what we do.",
      },
      {
        q: "Do you offer free estimates?",
        a: "Yes. Call (480) 358 8607 or request an estimate online and we'll set up a time to measure your space and talk through options.",
      },
    ],
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    navLabel: "Kitchen Remodeling",
    keyword: "kitchen remodeling Phoenix AZ",
    eyebrow: "Full Kitchen Remodeling",
    heroHeadline: "A Kitchen Remodel Led by the Person Building It",
    heroSub:
      "From cabinetry to counters to finish carpentry, Chris Ramos manages your kitchen remodel start to finish, with no subcontracted guesswork and no vanishing point of contact.",
    overview:
      "A kitchen remodel touches nearly everything in a home: cabinetry, counters, lighting, layout, and flow. Ramos Cabinetry & Construction handles the full scope for East Valley homeowners, with cabinetry and finish carpentry built in house and every other trade coordinated directly by Chris.",
    problems: [
      {
        title: "Not enough storage or counter space",
        body: "Most outdated kitchens waste space with poor cabinet layout. We redesign the footprint around how you actually cook and store.",
      },
      {
        title: "Worn out or mismatched cabinetry",
        body: "Faded, water damaged, or builder grade boxes drag down an entire kitchen. Custom cabinetry resets the whole room.",
      },
      {
        title: "Managing too many contractors",
        body: "Kitchen remodels usually mean juggling multiple trades. We keep one point of contact and one crew accountable for the whole job.",
      },
    ],
    included: [
      "Full design consultation and layout planning",
      "Custom cabinetry, built and installed in house",
      "Countertop coordination (quartz, granite, butcher block)",
      "Finish carpentry: trim, crown, and millwork",
      "Lighting, hardware, and detail coordination",
      "Project oversight from demo to final walkthrough",
    ],
    faqs: [
      {
        q: "Can you update bathroom vanities and storage?",
        a: "That's part of our bathroom remodeling service. See that page for details, but yes, vanity and storage work is common alongside kitchen projects.",
      },
      {
        q: "Do you handle plumbing and electrical during a kitchen remodel?",
        a: "We coordinate directly with licensed trade partners for plumbing and electrical work so your remodel stays on one schedule under one point of contact.",
      },
      {
        q: "What areas do you serve?",
        a: "Tempe, Gilbert, Mesa, Chandler, Scottsdale, Phoenix, and the surrounding East Valley.",
      },
      {
        q: "Do you offer free estimates?",
        a: "Yes, call (480) 358 8607 or request one online and we'll schedule an in home consultation.",
      },
    ],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    navLabel: "Bathroom Remodeling",
    keyword: "bathroom remodeling Phoenix AZ",
    eyebrow: "Bathroom Remodeling & Vanities",
    heroHeadline: "Bathrooms Rebuilt Around Better Storage and Finish Work",
    heroSub:
      "Custom vanities, cabinetry, and finish carpentry that make a small room feel considered, not an afterthought bolted on during a kitchen job.",
    overview:
      "Bathrooms live and die by storage and finish detail. Ramos Cabinetry & Construction builds custom vanities and cabinetry, then finishes the space with the same carpentry standard we bring to every other room, for homeowners across Tempe, Gilbert, Mesa, Chandler, Scottsdale, and Phoenix.",
    problems: [
      {
        title: "Not enough storage for towels and toiletries",
        body: "Builder grade vanities rarely have real storage. Custom cabinetry adds drawers and pull outs sized for what you actually keep in there.",
      },
      {
        title: "Water damage and worn finishes",
        body: "Moisture takes a toll on cheap materials fast. We build and finish for a bathroom environment specifically.",
      },
      {
        title: "A vanity that doesn't fit the space",
        body: "Odd shaped bathrooms need cabinetry built to the actual footprint, not a stock size that leaves gaps.",
      },
    ],
    included: [
      "Custom vanity design and build",
      "Storage focused cabinetry and drawer inserts",
      "Finish carpentry: trim, shelving, and millwork",
      "Moisture appropriate materials and finishes",
      "Countertop and hardware coordination",
      "Full installation and detailing",
    ],
    faqs: [
      {
        q: "Can you update bathroom vanities and storage?",
        a: "Yes, custom vanity design and storage focused cabinetry are core to this service.",
      },
      {
        q: "Do you handle finish carpentry in bathroom projects?",
        a: "Yes, trim, shelving, and millwork are included so the whole room feels finished, not just the vanity.",
      },
      {
        q: "What areas do you serve?",
        a: "Tempe, Gilbert, Mesa, Chandler, Scottsdale, Phoenix, and the greater East Valley.",
      },
      {
        q: "Do you offer free estimates?",
        a: "Yes. Call (480) 358 8607 or request a free estimate online.",
      },
      {
        q: "How do I get started?",
        a: "Call, email, or fill out the estimate form on our contact page and we'll schedule a time to see the space and talk through your options.",
      },
    ],
  },
  {
    slug: "cabinet-installation",
    name: "Cabinet Installation",
    navLabel: "Cabinet Installation",
    keyword: "cabinet installation Phoenix AZ",
    eyebrow: "Precision Cabinet Installation",
    heroHeadline: "Installation Work That Makes the Cabinets Look Right",
    heroSub:
      "Even the best built cabinet fails if it's hung wrong. We level, scribe, and fit every box and door so seams stay tight and doors hang true for years.",
    overview:
      "Cabinet installation is finish carpentry, not just hardware assembly. Whether you're installing cabinets we've built or need existing cabinetry properly hung, scribed, and finished, Ramos Cabinetry & Construction brings the same precision to installation as we do to the build itself.",
    problems: [
      {
        title: "Cabinets that were never leveled properly",
        body: "Uneven floors and walls need real scribing and shimming, not caulk hiding a bad fit.",
      },
      {
        title: "Doors and drawers that stick or sag over time",
        body: "Correct hardware placement and box alignment at install prevents years of adjustment headaches.",
      },
      {
        title: "Gaps between cabinets, walls, and appliances",
        body: "Precise fitting closes the gaps that cheap installs leave behind, for a built in look.",
      },
    ],
    included: [
      "Site prep and layout verification",
      "Leveling, shimming, and wall scribing",
      "Hardware installation and alignment",
      "Filler and panel fitting for a seamless look",
      "Appliance and countertop coordination",
      "Final adjustment and walkthrough",
    ],
    faqs: [
      {
        q: "Can you install cabinets we already purchased?",
        a: "In many cases, yes. Reach out with details on your cabinetry and we'll let you know if it's a fit for our installation service.",
      },
      {
        q: "How long does installation take?",
        a: "A typical kitchen installation runs a few days depending on cabinet count and site conditions.",
      },
      {
        q: "What areas do you serve?",
        a: "Tempe, Gilbert, Mesa, Chandler, Scottsdale, Phoenix, and the East Valley.",
      },
      {
        q: "Do you offer free estimates?",
        a: "Yes, call (480) 358 8607 or request one online.",
      },
    ],
  },
  {
    slug: "finish-carpentry",
    name: "Finish Carpentry",
    navLabel: "Finish Carpentry",
    keyword: "finish carpentry Phoenix AZ",
    eyebrow: "Trim, Millwork & Detail Carpentry",
    heroHeadline: "The Detail Work That Makes a Room Feel Finished",
    heroSub:
      "Trim, crown, wainscoting, built ins, and custom millwork: the carpentry details that separate a remodel from a room that feels genuinely finished.",
    overview:
      "Finish carpentry is where craftsmanship shows. Ramos Cabinetry & Construction brings 15+ years of hands on carpentry to trim, crown molding, wainscoting, shelving, and custom millwork for homeowners across the East Valley who want detail work done right, not rushed.",
    problems: [
      {
        title: "Trim and molding that look like an afterthought",
        body: "Mismatched profiles, gapped joints, and rushed caulking are the difference between fine and forgettable. We miter, cope, and finish with care.",
      },
      {
        title: "A room that feels unfinished after a remodel",
        body: "New paint and flooring won't fix bad trim. Finish carpentry ties a renovated room together.",
      },
      {
        title: "Wanting custom built ins but not sure what's possible",
        body: "Shelving, window seats, mantels, and closet systems can all be built custom to your space and style.",
      },
    ],
    included: [
      "Baseboard, casing, and crown molding",
      "Wainscoting and board and batten",
      "Custom shelving and built ins",
      "Mantels, window seats, and accent millwork",
      "Door and window trim replacement",
      "Detail carpentry for remodels and new builds",
    ],
    faqs: [
      {
        q: "Do you handle finish carpentry in bathroom projects?",
        a: "Yes, trim and millwork are a standard part of our bathroom remodeling work.",
      },
      {
        q: "Can you match existing trim profiles in an older home?",
        a: "In most cases, yes, matching existing profiles is a common part of finish carpentry work in East Valley homes.",
      },
      {
        q: "What areas do you serve?",
        a: "Tempe, Gilbert, Mesa, Chandler, Scottsdale, Phoenix, and the surrounding communities.",
      },
      {
        q: "Do you offer free estimates?",
        a: "Yes, call (480) 358 8607 or request one online.",
      },
    ],
  },
  {
    slug: "home-remodeling",
    name: "Home Remodeling",
    navLabel: "Home Remodeling",
    keyword: "home remodeling East Valley AZ",
    eyebrow: "Residential Remodeling & Construction",
    heroHeadline: "Full Home Remodeling Rooted in Cabinetry & Carpentry",
    heroSub:
      "From single room renovations to whole home projects, Chris Ramos brings the same craftsman's eye to every part of the job, not just the cabinets.",
    overview:
      "Ramos Cabinetry & Construction takes on residential remodeling projects across the East Valley, built on a foundation of custom cabinetry and fine carpentry. Whether it's one room or several, the same family owned, hands on standard applies to the whole project.",
    problems: [
      {
        title: "A remodel that needs more than one trade",
        body: "Cabinetry, carpentry, and general construction under one roof means fewer handoffs and clearer accountability.",
      },
      {
        title: "Wanting a contractor who's actually hands on",
        body: "Chris Ramos is directly involved in design and build, not managing the job from a distance.",
      },
      {
        title: "Unclear scope or budget expectations",
        body: "We walk through the project in detail before work begins, so the scope and investment are clear upfront.",
      },
    ],
    included: [
      "Whole home and multi room remodeling",
      "Custom cabinetry and finish carpentry throughout",
      "Layout and design consultation",
      "Direct project oversight by Chris Ramos",
      "Coordination with trade partners as needed",
      "Licensed, bonded, and insured work: ROC #364821",
    ],
    faqs: [
      {
        q: "What areas do you serve?",
        a: "Tempe, Gilbert, Mesa, Chandler, Scottsdale, Phoenix, and the greater East Valley.",
      },
      {
        q: "Do you handle projects beyond kitchens and bathrooms?",
        a: "Yes, home remodeling covers living spaces, home offices, mudrooms, and full home renovation projects.",
      },
      {
        q: "Are you licensed, bonded, and insured?",
        a: "Yes, Ramos Cabinetry & Construction is licensed, bonded, and insured under ROC #364821.",
      },
      {
        q: "Do you offer free estimates?",
        a: "Yes, call (480) 358 8607 or request a free estimate online to get started.",
      },
    ],
  },
];

export const primaryNav = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.navLabel, href: `/services/${s.slug}` })),
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export const trustMarkers = [
  "Licensed, Bonded & Insured",
  "ROC #364821",
  `${business.yearsExperience} Years of Carpentry Experience`,
  "Family Owned & Operated",
];

export const reviews = [
  {
    name: "Danielle M.",
    city: "Gilbert, AZ",
    text: "Chris built our kitchen cabinets from scratch and the difference from our old builder grade boxes is night and day. Every drawer glides perfectly and the finish work around our window is beautiful.",
  },
  {
    name: "Ryan T.",
    city: "Tempe, AZ",
    text: "We had three different quotes for our bathroom vanity and Ramos was the only one who actually measured everything twice and asked how we'd use the storage. It shows in the final product.",
  },
  {
    name: "Priya K.",
    city: "Chandler, AZ",
    text: "Honest, direct, and shows up when he says he will. Our kitchen remodel took cabinetry, counters, and trim, and Chris managed all of it without us having to chase anyone down.",
  },
  {
    name: "Mark S.",
    city: "Mesa, AZ",
    text: "The crown molding and built ins in our living room turned out better than what we pictured. You can tell this is someone who cares about the joinery, not just getting it done fast.",
  },
  {
    name: "Colleen A.",
    city: "Scottsdale, AZ",
    text: "Family owned and it shows in how they treat you. Chris explained our options clearly, never upsold us on things we didn't need, and the cabinets are gorgeous.",
  },
  {
    name: "Ben H.",
    city: "Phoenix, AZ",
    text: "Semi custom cabinets for our kitchen came in on the timeline he quoted, which after other contractors was honestly a relief. Great communication start to finish.",
  },
];

export type NeighborhoodContent = {
  slug: string;
  name: string;
  citySlug: string;
  cityName: string;
  angle: string;
  intro: string;
  focusAreas: string[];
  localNote: string;
};

export const neighborhoodPages: NeighborhoodContent[] = [
  {
    slug: "power-ranch",
    name: "Power Ranch",
    citySlug: "gilbert",
    cityName: "Gilbert",
    angle: "Early 2000s family floor plans",
    intro:
      "Power Ranch is full of early 2000s family floor plans, practical layouts that, two decades later, are ready for a cabinetry refresh. We regularly help Power Ranch homeowners modernize kitchens that haven't changed since the original build, with updated storage, custom islands, and cabinetry that fits the way families actually use the space today.",
    focusAreas: [
      "Kitchen modernization for original early 2000s layouts",
      "Custom islands with added seating and storage",
      "Pantry and cabinet storage upgrades",
      "Updated finishes that replace builder grade oak and laminate",
    ],
    localNote:
      "Many Power Ranch kitchens share a similar original footprint, which means we've seen the layout before, and know where the easiest, highest impact upgrades usually are.",
  },
  {
    slug: "agritopia",
    name: "Agritopia",
    citySlug: "gilbert",
    cityName: "Gilbert",
    angle: "Craftsman & character homes",
    intro:
      "Agritopia's Craftsman style character homes call for cabinetry and millwork that respects the architecture, not generic builder cabinetry dropped into a farmhouse style home. We build custom millwork, built ins, and warm, considered finishes that fit the neighborhood's design conscious identity.",
    focusAreas: [
      "Custom millwork suited to Craftsman architectural detail",
      "Built ins that match existing trim and character",
      "Warm wood finishes over generic painted stock cabinetry",
      "Design aware cabinetry that complements, not competes with, the home's style",
    ],
    localNote:
      "Agritopia homeowners tend to have a clear point of view on style. We design around that, not around a standard catalog.",
  },
  {
    slug: "morrison-ranch",
    name: "Morrison Ranch",
    citySlug: "gilbert",
    cityName: "Gilbert",
    angle: "Traditional & Mediterranean family homes",
    intro:
      "Morrison Ranch's traditional and Mediterranean influenced homes are built for family living, and that's exactly where our cabinetry work focuses: functional layouts, real pantry organization, and built ins that add storage without disrupting the home's existing character.",
    focusAreas: [
      "Functional family kitchen layouts",
      "Pantry organization and cabinetry systems",
      "Built ins for living and dining spaces",
      "Detail work that complements traditional and Mediterranean finishes",
    ],
    localNote:
      "Morrison Ranch projects often start with a storage problem: not enough pantry, not enough cabinet depth, which is exactly the kind of practical redesign we specialize in.",
  },
];

export type CityContent = {
  slug: string;
  city: string;
  intro: string;
  neighborhoods: string;
  localNote: string;
};

export const cityPages: CityContent[] = [
  {
    slug: "tempe",
    city: "Tempe",
    intro:
      "As our home base, Tempe is where Ramos Cabinetry & Construction does some of its most frequent work, from ASU area bungalows to newer builds near South Tempe. We know the mix of older housing stock and updated developments here, and we build cabinetry and finish carpentry suited to both.",
    neighborhoods: "Downtown Tempe, South Tempe, Warner Ranch, and the neighborhoods surrounding Kyrene Corridor.",
    localNote: "Being based in Tempe means faster scheduling and in person walkthroughs for local homeowners.",
  },
  {
    slug: "gilbert",
    city: "Gilbert",
    intro:
      "Gilbert's mix of established neighborhoods and newer master planned communities calls for cabinetry that fits a range of home styles. We build custom and semi custom kitchens, bathrooms, and finish carpentry for homeowners throughout Gilbert.",
    neighborhoods: "Power Ranch, Agritopia, Morrison Ranch, and Downtown Gilbert.",
    localNote: "Gilbert homeowners often ask about matching cabinetry to existing farmhouse or transitional interiors, a specialty of ours.",
  },
  {
    slug: "mesa",
    city: "Mesa",
    intro:
      "From longtime Mesa neighborhoods to newer East Mesa development, we bring the same hands on cabinetry and remodeling standard to every project. Kitchen and bathroom cabinetry, built ins, and finish carpentry are our most requested work in the area.",
    neighborhoods: "Downtown Mesa, East Mesa, Las Sendas, and Red Mountain.",
    localNote: "Many Mesa projects involve updating older cabinetry in homes built decades ago, a job we take on regularly.",
  },
  {
    slug: "chandler",
    city: "Chandler",
    intro:
      "Chandler's fast growing neighborhoods and established communities alike trust Ramos Cabinetry & Construction for custom cabinetry, kitchen and bathroom remodeling, and finish carpentry that holds up to daily life.",
    neighborhoods: "Ocotillo, Fulton Ranch, Downtown Chandler, and Sun Groves.",
    localNote: "We regularly coordinate full kitchen remodels for Chandler homeowners upgrading from builder grade cabinetry.",
  },
  {
    slug: "scottsdale",
    city: "Scottsdale",
    intro:
      "Scottsdale homeowners expect a premium finish, and that's exactly the standard we build to: custom cabinetry, detailed millwork, and remodeling work suited to the area's higher end residential character.",
    neighborhoods: "South Scottsdale, Old Town, McCormick Ranch, and Gainey Ranch.",
    localNote: "Scottsdale projects often lean into custom finish selections and detailed millwork, areas where our carpentry background matters most.",
  },
  {
    slug: "phoenix",
    city: "Phoenix",
    intro:
      "We serve homeowners across Phoenix with custom cabinetry, kitchen and bathroom remodeling, and finish carpentry, bringing the same family owned, hands on approach to every project regardless of neighborhood.",
    neighborhoods: "Arcadia, Ahwatukee, Biltmore, and Central Phoenix.",
    localNote: "Phoenix's mix of historic and modern homes means every project starts with understanding the house's existing character.",
  },
];
