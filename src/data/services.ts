// ───────────────────────────────────────────────────────────────────────────
// Jack's Garage — 26 services (all preserved from jacksgarage.co.uk).
// Where the source page carried real body copy (EV Conversions, Classic VW
// Specialist, VW Bodywork, MOT) it is reproduced verbatim. The remaining
// services use faithful expanded copy in the same warm VW-specialist tone.
// ───────────────────────────────────────────────────────────────────────────

// Shared closing note — verbatim boilerplate from every source service page.
export const SERVICE_CLOSING =
  "At Jack's Garage we love Volkswagens and we're happy to work on all models, regardless of age - we love the classics too! We've got a talented, experienced team that can always be relied on to provide top quality work, so for all your VW repair and maintenance needs, get in touch with Jack's Garage.";

export interface Service {
  slug: string;
  name: string;        // verbatim service name
  tagline: string;     // short descriptor
  category: string;
  icon: string;        // Lucide name (see Icon.astro)
  image: string;
  featured?: boolean;  // one of the 6 homepage quick-links
  intro: string;       // lead paragraph
  body?: string[];     // further paragraphs
  includes: string[];  // "what's included" bullets
  related?: string[];  // related service slugs
}

export const serviceCategories = [
  'Servicing & MOT',
  'Mechanical Repairs',
  'Electrical & Diagnostics',
  'Classic VW & Restoration',
  'Bodywork',
  'Electric & EV',
  'Tyres & Wheels',
];

export const services: Service[] = [
  {
    slug: 'car-servicing', name: 'Car Servicing', tagline: 'Get your car serviced by the professionals',
    category: 'Servicing & MOT', icon: 'Settings', image: '/images/workshop/ws-11.jpg',
    intro: "Regular servicing keeps your Volkswagen reliable, safe and efficient. We service every VW to the manufacturer schedule using genuine parts and lubricants - which keeps your warranty safe and your VW running sweetly for many years to come.",
    includes: ['Oil and oil filter change', 'Air, fuel and pollen filters as needed', 'Brakes, steering and suspension checks', 'Full safety inspection', 'Serviced to the VW schedule - warranty safe'],
    related: ['mot', 'engine-diagnostics', 'classic-vw-car-service'],
  },
  {
    slug: 'mot', name: 'MOT', tagline: 'MOT preparation and arrangement, hassle-free', featured: true,
    category: 'Servicing & MOT', icon: 'ShieldCheck', image: '/images/workshop/ws-28.jpg',
    intro: "The MOT test is an annual test of a vehicle's safety, roadworthiness and exhaust emissions. A valid MOT certificate is a legal requirement in the UK for most vehicles over three years old.",
    body: [
      "Although we don't carry out MOT tests at our workshop, we can carry out all the preparation work and can arrange an MOT for your vehicle so you don't have to. Your MOT test must be done annually and can be carried out up to a month before the expiry date (the expiry date will never change). If your car passes its MOT you will receive an MOT certificate valid for 12 months, after which your vehicle must be tested again. If your car should fail, our qualified and experienced technicians will make light work of any repairs needed for the retest.",
      "If your car or van needs an MOT test, or you are unsure when your MOT test is due, give our friendly team at Jack's Garage in London a call and we'll take care of the rest.",
    ],
    includes: ['Full MOT preparation', 'MOT arranged on your behalf', 'In-house repairs for any failures', 'Pre-MOT safety inspection', 'Reminders so your MOT never lapses'],
    related: ['vw-campervan-mot', 'car-servicing', 'car-brakes'],
  },
  {
    slug: 'vw-campervan-mot', name: 'VW Campervan MOT', tagline: 'MOT preparation for VW campervans',
    category: 'Servicing & MOT', icon: 'ShieldCheck', image: '/images/workshop/ws-19.jpg',
    intro: "Your VW camper deserves to be road-legal for every adventure. We prepare and arrange MOTs for VW campervans - Splitscreens, Bay windows, T25s, T4s and T5s - and handle any repairs needed to earn that pass.",
    includes: ['Campervan MOT preparation', 'MOT arranged for you', 'Repairs for any advisories or failures', 'Brakes, lights and emissions checks', 'Classic and modern campers welcome'],
    related: ['vw-campervan-repairs-servicing-2', 'mot', 'classic-vw-car-service'],
  },
  {
    slug: 'vw-campervan-repairs-servicing-2', name: 'VW Campervan Repairs & Servicing', tagline: 'Keep your VW camper road-trip ready',
    category: 'Servicing & MOT', icon: 'BusFront', image: '/images/workshop/ws-30.jpg',
    intro: "From Splitscreens and Bays to modern Transporters, we service and repair VW campervans of every era - mechanicals, electrics and all the quirks that come with a home on wheels - so yours is ready whenever the road calls.",
    includes: ['Camper servicing to schedule', 'Engine and gearbox repairs', 'Leisure and vehicle electrics', 'Brakes, steering and suspension', 'Pre-trip safety checks'],
    related: ['vw-campervan-mot', 'classic-vw-car-repairs', 'vw-van-repairs-servicing'],
  },
  {
    slug: 'vw-van-repairs-servicing', name: 'VW Van Repairs & Servicing', tagline: 'Servicing and repair for VW vans',
    category: 'Servicing & MOT', icon: 'Truck', image: '/images/workshop/ws-33.jpg',
    intro: "Your VW van earns its keep, so downtime costs. We service and repair Transporters, Caddys and Crafters to keep them working hard - with honest advice and a quick turnaround.",
    includes: ['Van servicing to the VW schedule', 'Mechanical and engine repairs', 'Clutch, brakes and suspension', 'Diagnostics and electrics', 'Fast, fair turnaround'],
    related: ['car-servicing', 'clutch-replacement', 'mechanical-repairs'],
  },
  {
    slug: 'mechanical-repairs', name: 'Mechanical Repairs', tagline: 'The full breadth of VW mechanical work',
    category: 'Mechanical Repairs', icon: 'Cog', image: '/images/workshop/ws-03.jpg',
    intro: "Mechanical repairs are the heart of what we do. Engines, gearboxes, clutches, cooling, brakes and beyond - if it's mechanical and it's a Volkswagen, our specialists have it covered, on every era of VW.",
    includes: ['Engine and gearbox repair', 'Clutch and drivetrain work', 'Cooling and heating systems', 'Brakes, steering and suspension', 'Diagnostics-led repairs'],
    related: ['car-repairs', 'engine-diagnostics', 'clutch-replacement'],
  },
  {
    slug: 'car-repairs', name: 'Car Repairs', tagline: 'General mechanical repairs by VW specialists',
    category: 'Mechanical Repairs', icon: 'Wrench', image: '/images/workshop/ws-10.jpg',
    intro: "Whatever the fault, if it's a Volkswagen we can fix it. From the small jobs that nag away to the big mechanical work, our team repairs every era of VW with the same care we'd give our own.",
    includes: ['Engine and gearbox repairs', 'Cooling and heating system work', 'Steering and suspension repairs', 'Drivetrain and transmission faults', 'Honest diagnosis and upfront estimates'],
    related: ['mechanical-repairs', 'engine-diagnostics', 'car-servicing'],
  },
  {
    slug: 'cambelts', name: 'Cambelts', tagline: 'Timing belt replacement before it lets go',
    category: 'Mechanical Repairs', icon: 'Cog', image: '/images/workshop/ws-04.jpg',
    intro: "A snapped cambelt can write off an engine. We replace VW timing belts and tensioners to the manufacturer interval using quality parts, so your Golf, Polo or Transporter keeps its timing - and its engine - intact.",
    includes: ['Cambelt replacement to VW schedule', 'Tensioner and idler pulley renewal', 'Water pump replacement where recommended', 'Auxiliary and serpentine belt checks', 'Reset and road test'],
    related: ['car-servicing', 'mechanical-repairs', 'engine-diagnostics'],
  },
  {
    slug: 'car-batteries', name: 'Car Batteries', tagline: 'Testing, replacement and charging-system checks',
    category: 'Mechanical Repairs', icon: 'Battery', image: '/images/workshop/ws-05.jpg',
    intro: "Won't turn over on a cold morning? We test your battery, alternator and charging circuit, then supply and fit the correct battery for your VW - from classic 6-volt set-ups to modern stop-start units.",
    includes: ['Battery and charging-system test', 'Supply and fit of the correct VW battery', 'Classic 6V and modern 12V set-ups', 'Terminal, earth-strap and copper-slip checks', 'Safe disposal of the old battery'],
    related: ['auto-electrics', 'car-servicing', 'engine-diagnostics'],
  },
  {
    slug: 'car-brakes', name: 'Car Brakes', tagline: 'Pads, discs, drums and hydraulics for safe stopping',
    category: 'Mechanical Repairs', icon: 'Disc3', image: '/images/workshop/ws-08.jpg',
    intro: "Brakes are not the place to cut corners. We inspect, repair and renew VW braking systems - discs, pads, drums, cylinders and fluid - so your Volkswagen pulls up straight, quiet and confident.",
    includes: ['Brake pad and disc replacement', 'Drum brake overhaul on classics', 'Brake fluid change and bleeding', 'Caliper and wheel-cylinder repair', 'Handbrake adjustment and safety check'],
    related: ['car-servicing', 'mot', 'suspension'],
  },
  {
    slug: 'car-exhausts', name: 'Car Exhausts', tagline: 'Exhaust repair and replacement for every VW',
    category: 'Mechanical Repairs', icon: 'Wind', image: '/images/workshop/ws-17.jpg',
    intro: "A blowing exhaust is louder, dirtier and won't pass an MOT. We repair and replace VW exhaust systems from the manifold back, sourcing the right parts for classic air-cooled and modern VWs alike.",
    includes: ['Full or section exhaust replacement', 'Manifold, downpipe and back-box repair', 'Catalytic converter and lambda checks', 'Classic VW exhaust sourcing', 'Emissions and blow checks'],
    related: ['mot', 'car-repairs', 'classic-vw-car-repairs'],
  },
  {
    slug: 'clutch-replacement', name: 'Clutch Replacement', tagline: 'Clutch repair and replacement for VWs',
    category: 'Mechanical Repairs', icon: 'Cog', image: '/images/workshop/ws-24.jpg',
    intro: "Slipping, biting high or just worn out? We replace VW clutches - plate, cover and release bearing - on classic and modern Volkswagens, getting your gear changes crisp and your drivetrain reliable again.",
    includes: ['Full clutch kit replacement', 'Release bearing and spigot', 'Flywheel inspection', 'Cable and hydraulic clutch repair', 'Gear-change and road test'],
    related: ['mechanical-repairs', 'car-repairs', 'car-servicing'],
  },
  {
    slug: 'steering', name: 'Steering', tagline: 'Steering repair and overhaul for every VW',
    category: 'Mechanical Repairs', icon: 'LifeBuoy', image: '/images/workshop/ws-49.jpg',
    intro: "Vague, heavy or knocking steering takes the joy out of driving a VW. We diagnose and repair steering racks, boxes, joints and linkages on classic and modern Volkswagens for tight, predictable control.",
    includes: ['Steering rack and box repair', 'Track rod and joint renewal', 'Power-steering faults', 'Classic steering-box overhaul', 'Alignment after repair'],
    related: ['suspension', 'wheel-alignment', 'mechanical-repairs'],
  },
  {
    slug: 'suspension', name: 'Suspension', tagline: 'Springs, dampers and a ride that is right',
    category: 'Mechanical Repairs', icon: 'ArrowDownUp', image: '/images/workshop/ws-20.jpg',
    intro: "Whether it's a crashy ride or a sagging classic, we put your VW's suspension back where it should be - dampers, springs, bushes and ball joints - for comfort, control and even tyre wear.",
    includes: ['Shock absorber and strut replacement', 'Spring and torsion-bar work', 'Bush and ball-joint renewal', 'Classic VW suspension', 'Geometry check after work'],
    related: ['steering', 'wheel-alignment', 'car-brakes'],
  },
  {
    slug: 'auto-electrics', name: 'Auto Electrics', tagline: 'Fault-finding and repair for VW electrical systems',
    category: 'Electrical & Diagnostics', icon: 'Cable', image: '/images/workshop/ws-02.jpg',
    intro: "From a gremlin in the wiring loom to a temperamental starter or a dashboard full of warnings, our auto electricians trace VW electrical faults back to the source - the right way. Air-cooled or modern, we know where Volkswagens hide their wiring.",
    includes: ['Wiring loom diagnosis and repair', 'Starter motor and alternator faults', 'Lighting, indicators and dashboard warnings', 'Battery charging and earth-strap checks', 'Sensor and electrical component replacement'],
    related: ['engine-diagnostics', 'car-batteries', 'electric-cars-repairs-and-servicing'],
  },
  {
    slug: 'engine-diagnostics', name: 'Engine Diagnostics', tagline: 'Fast, accurate fault-finding for VW engines',
    category: 'Electrical & Diagnostics', icon: 'Gauge', image: '/images/workshop/ws-27.jpg',
    intro: "A warning light doesn't have to mean a mystery. We plug into your VW's management system, read the codes and interpret them properly - so you fix the actual fault first time, not by trial and error.",
    includes: ['Full diagnostic scan', 'Engine-management light investigation', 'Live data and sensor analysis', 'A clear explanation of what we find', 'A straightforward repair plan with upfront pricing'],
    related: ['auto-electrics', 'car-repairs', 'car-servicing'],
  },
  {
    slug: 'classic-vw-specialist', name: 'Classic VW Specialist', tagline: 'A team of expert, specialist VW technicians', featured: true,
    category: 'Classic VW & Restoration', icon: 'Car', image: '/images/workshop/ws-01.jpg',
    intro: "A classic VW is a thing of beauty - under the bonnet and above. When your classic or vintage VW needs a little bit of TLC, bring it into Jack's Garage in London, where you will find a team of expert, specialist technicians who can look after every aspect of your car. We carry out general repairs, classic VW servicing and maintenance and of course, we have dedicated VW body specialists. In fact, our specialist knowledge and our reputation for excellence in workmanship brings us customers from all corners of the country.",
    body: [
      "Our incredibly talented VW body specialists are able to assist you with all and any of your body needs whether that be welding, panel replacements, resprays or insurance estimates and repairs, at Jack's Garage, we've got it all covered.",
      "When you choose Jack's Garage, you're bringing your VW to a garage with up to date technology and IMI qualified technicians who carry out all work with commitment and professionalism to make sure that your classic VW rolls on and turns heads for many years to come.",
    ],
    includes: ['General classic VW repairs', 'Classic VW servicing and maintenance', 'Welding and panel replacement', 'Resprays and insurance repairs', 'IMI qualified technicians'],
    related: ['classic-vw-car-restoration', 'classic-vw-car-repairs', 'vw-bodywork'],
  },
  {
    slug: 'classic-vw-car-repairs', name: 'Classic VW Car Repairs', tagline: 'Sympathetic repairs for air-cooled and classic VWs',
    category: 'Classic VW & Restoration', icon: 'Wrench', image: '/images/workshop/ws-21.jpg',
    intro: "Classic Volkswagens need a specialist who understands them. We carry out mechanical repairs on Beetles, Buses, Type 3s, Karmann Ghias and more - keeping these icons on the road the way the factory intended.",
    includes: ['Air-cooled engine repairs', 'Gearbox and clutch work', 'Brakes, steering and suspension', 'Fuel system and carburettor work', 'Sourcing of genuine and quality classic parts'],
    related: ['classic-vw-specialist', 'classic-vw-car-service', 'classic-vw-car-restoration'],
  },
  {
    slug: 'classic-vw-car-restoration', name: 'Classic VW Car Restoration', tagline: 'Full and partial restoration of classic Volkswagens',
    category: 'Classic VW & Restoration', icon: 'Sparkles', image: '/images/workshop/ws-47.jpg',
    intro: "Whether your project needs a little love or a complete nut-and-bolt rebuild, our restoration team brings tired classic VWs back to their best - mechanically, structurally and cosmetically - so they turn heads for years to come.",
    includes: ['Full and partial restorations', 'Welding and structural repair', 'Panel and bodywork restoration', 'Respray and colour matching', 'Mechanical rebuild and recommissioning'],
    related: ['classic-vw-specialist', 'vw-bodywork', 'classic-vw-car-repairs'],
  },
  {
    slug: 'classic-vw-car-service', name: 'Classic VW Car Service', tagline: 'Servicing tailored to air-cooled and classic VWs',
    category: 'Classic VW & Restoration', icon: 'Settings', image: '/images/workshop/ws-48.jpg',
    intro: "Classic VWs thrive on regular, sympathetic servicing. We tailor each service to your car's age, history and mileage - tappets, points, oil and all - to keep your air-cooled Volkswagen happy and dependable.",
    includes: ['Oil change and engine service', 'Valve clearances and timing on air-cooled', 'Brakes, steering and suspension checks', 'Electrical and charging checks', 'Tailored to history and mileage'],
    related: ['classic-vw-car-repairs', 'classic-vw-specialist', 'car-servicing'],
  },
  {
    slug: 'vw-bodywork', name: 'VW Bodywork', tagline: 'The best car body repairs for VWs in the area', featured: true,
    category: 'Bodywork', icon: 'Hammer', image: '/images/workshop/ws-35.jpg',
    intro: "Based in London, we are certain that at Jack's Garage we provide the best car body repairs for VWs in the area. From bumper damage to scratch and dent repairs, our team are experienced in all areas of vehicle body repair and will advise you on how much work is needed and all the costs involved. We will only ever do as much you want us to.",
    body: [
      "As well as the smaller jobs, we're happy to carry out bigger projects such as full resprays and full car rebuilds including welding and repairing structural damage. We'll look over your car to see what work is required and will always give you an estimate before starting any work.",
    ],
    includes: ['Insurance Estimates', 'Insurance Repairs', 'Panel Beating', 'Panel Replacements', 'Welding', 'Full Resprays', 'Bumper Repairs / Replacement', 'Undersealing', 'Colour Matching', 'Rust Inspections'],
    related: ['classic-vw-car-restoration', 'classic-vw-specialist', 'car-repairs'],
  },
  {
    slug: 'car-tyres', name: 'Car Tyres', tagline: 'Tyre supply and fitting for all VW models', featured: true,
    category: 'Tyres & Wheels', icon: 'CircleDot', image: '/images/workshop/ws-14.jpg',
    intro: "From a single replacement to a full set, we supply and fit the right tyres for your Volkswagen - the correct size, rating and budget - and balance them properly so the ride stays smooth.",
    includes: ['Supply and fitting of all tyre sizes', 'Computerised wheel balancing', 'Puncture assessment and repair', 'Tread depth and pressure checks', 'Valve replacement'],
    related: ['wheel-balancing', 'wheel-alignment', 'mot'],
  },
  {
    slug: 'wheel-alignment', name: 'Wheel Alignment', tagline: 'Precise tracking and alignment for your VW',
    category: 'Tyres & Wheels', icon: 'Crosshair', image: '/images/workshop/ws-33.jpg',
    intro: "Pulling to one side or wearing your tyres unevenly? We align your VW's wheels to the correct geometry, protecting your tyres, your handling and your fuel economy.",
    includes: ['Front and rear tracking', 'Geometry set to VW spec', 'Tyre-wear diagnosis', 'Steering-pull correction', 'Road test'],
    related: ['wheel-balancing', 'car-tyres', 'suspension'],
  },
  {
    slug: 'wheel-balancing', name: 'Wheel Balancing', tagline: 'Smooth, vibration-free running',
    category: 'Tyres & Wheels', icon: 'Disc3', image: '/images/workshop/ws-04.jpg',
    intro: "A vibration through the wheel or seat usually means a wheel out of balance. We balance your VW's wheels on computerised equipment so the ride stays smooth at every speed.",
    includes: ['Computerised wheel balancing', 'Vibration diagnosis', 'Weight correction', 'Paired with tyre fitting', 'Road test'],
    related: ['car-tyres', 'wheel-alignment', 'car-servicing'],
  },
  {
    slug: 'electric-cars-repairs-and-servicing', name: 'Electric Car Repairs & Servicing', tagline: 'Servicing and repair for VW electric vehicles',
    category: 'Electric & EV', icon: 'PlugZap', image: '/images/ev/ev-05.jpg',
    intro: "Volkswagen's electric era is here, and we've moved with it. We service and repair VW EVs - the e-Golf, ID.3, ID.4 and ID.5 - looking after the high-voltage systems, brakes, tyres and software that keep them efficient and safe.",
    includes: ['EV servicing to the VW schedule', 'High-voltage system checks', 'Brake and tyre servicing', 'Software and diagnostic checks', 'Charging system inspection'],
    related: ['electric-vehicle-conversions', 'engine-diagnostics', 'car-servicing'],
  },
  {
    slug: 'electric-vehicle-conversions', name: 'Electric Vehicle Conversions', tagline: 'Give your beloved VW a new bionic body', featured: true,
    category: 'Electric & EV', icon: 'Zap', image: '/images/ev/ev-01.jpg',
    intro: "At Jack's Garage, we now provide an electric vehicle conversion service for your beloved Volkswagens. Give your beloved VW a new bionic body that requires significantly less servicing. New parts are cheaper and the cost per mile is much cheaper. By having your VW converted to electric, you eliminate the pollution that the fuel version would have created, and the pollution that manufacturing a new electric vehicle would produce.",
    body: [
      "As the UK distributor of eClassics' EV conversion kits for classic VWs, we use Volkswagen's very latest EV components - direct from Volkswagen Group Components - to future-proof these iconic vehicles while keeping every bit of their classic character.",
    ],
    includes: ['Structural chassis assessment', 'Removal of engine, gearbox and fuel tank', 'Conversion unit install and wiring', 'Software loading and commissioning', 'Steering, suspension and brake upgrades as required'],
    related: ['electric-cars-repairs-and-servicing', 'classic-vw-specialist', 'classic-vw-car-restoration'],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const featuredServices = services.filter((s) => s.featured);
export const servicesByCategory = serviceCategories
  .map((cat) => ({ category: cat, items: services.filter((s) => s.category === cat) }))
  .filter((g) => g.items.length > 0);

// Alphabetical list for the mega-menu (matches the source-site footer ordering).
export const servicesAZ = [...services].sort((a, b) => a.name.localeCompare(b.name));
