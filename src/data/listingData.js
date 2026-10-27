export const listingData = {
  id: "grand-himalayan-chalet-manali",
  title: "The Grand Himalayan Chalet & Spa | Whispering Pines Estate",
  type: "Entire luxury mountain chalet in Manali, Himachal Pradesh, India",
  location: "Manali, Himachal Pradesh, India",
  coordinates: { lat: 32.2432, lng: 77.1892 },
  guestCount: 4,
  bedroomCount: 1,
  bedCount: 2,
  bathroomCount: 1,
  rating: 4.98,
  reviewCount: 128,
  isGuestFavorite: true,
  isSuperhost: true,
  pricePerNight: 5499,
  cleaningFee: 950,
  serviceFeeRate: 0.14,
  currencySymbol: "₹",
  
  host: {
    name: "Whispering Pines Mountain Estate",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    isSuperhost: true,
    yearsHosting: 5,
    responseRate: "100%",
    responseTime: "within an hour",
    badge: "Superhost",
    about: "We at Whispering Pines craft bespoke alpine luxury retreats in the Himalayas. Our Manali Grand Chalet was designed especially for couples and travelers seeking mountain tranquility, warm hydrotherapy jacuzzi evenings overlooking snow peaks, and direct access to scenic pine trails, alpine skiing, and local Himachali cuisine.",
    coHosts: ["Vikram (Estate Concierge)", "Sunita (Guest Experience Lead)"]
  },

  highlights: [
    {
      icon: "Sparkles",
      title: "Mountain-View Heated Jacuzzi Experience",
      description: "Unwind in your private warm-water hydrotherapy jacuzzi on the cedar terrace with panoramic views of snow-dusted Himalayan peaks."
    },
    {
      icon: "Award",
      title: "Whispering Pines is a Superhost",
      description: "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests."
    },
    {
      icon: "Dumbbell",
      title: "Resort Fitness Gym & Yoga Studio Access",
      description: "Complimentary access to the on-site panoramic mountain-view gym with treadmills, free weights, and yoga mats."
    },
    {
      icon: "KeyRound",
      title: "Seamless check-in experience",
      description: "98% of recent guests gave the check-in process a 5-star rating with keyless smart-lock access."
    },
    {
      icon: "Wifi",
      title: "Ultra-Fast Starlink Wi-Fi at 200 Mbps",
      description: "Verified mountain-proof satellite internet suited for 4K streaming, remote work, and Zoom video calls."
    },
    {
      icon: "CalendarCheck",
      title: "Free cancellation before check-in",
      description: "Full refund up to 48 hours before check-in date. Flexible alpine weather cancellation policy."
    }
  ],

  sleepingArrangements: [
    {
      room: "Master Bedroom Suite",
      bedType: "1 king bed",
      icon: "BedDouble",
      description: "Orthopedic memory foam mattress, goose-down duvets, 400-thread count Egyptian cotton sheets, and panoramic sunrise mountain views."
    },
    {
      room: "Living room 1",
      bedType: "1 plush sofa bed",
      icon: "Sofa",
      description: "Plush convertible velvet sofa bed next to the hearth fireplace, comfortably accommodating extra guests."
    }
  ],

  description: `Welcome to The Grand Himalayan Chalet & Spa, an exquisite mountain sanctuary managed by Whispering Pines Mountain Estate in Manali, Himachal Pradesh.

Perched amidst towering deodar and cedar forests with dramatic vistas of snow-capped Pir Panjal peaks, this bespoke timber-and-stone chalet blends European alpine warmth with contemporary Himalayan luxury.

★ PRIVATE HEATED JACUZZI & ALPINE BALCONY
Step onto your expansive cedar wood deck to enjoy a warm hydrotherapy jacuzzi tub overlooking the misty mountain pine valleys. Designed with multi-jet massage, hydro-temperature control, and ambient starlight illumination—pure bliss after a brisk day hiking or skiing.

★ TWO DISTINCT LIVING AREAS
- Living Area 1 (Fireside Grand Lounge): Handcrafted timber vaulted ceilings, natural river-stone fireplace hearth, deep velvet lounge seating, and a 55" Samsung 4K Smart TV with premium streaming.
- Living Area 2 (Sunlit Glass Atrium & Reading Library): An ethereal glass-enclosed relaxation conservatory with bespoke rattan armchairs, indoor alpine botanicals, chess table, and panoramic mountain vistas.

★ MASTER BEDROOM & ENSUITE SPA BATHROOM
- King-size bed with premium orthopedic mattress, feather-light duvets, and bedside copper reading sconces.
- Ensuite designer bathroom featuring a hot-water glass rain shower, heated towel rails, and luxury organic Himalayan herbal toiletries.

★ COMPREHENSIVE RESORT & RECREATION FACILITIES
- Heated indoor & infinity swimming pool overlooking pine forests and snow ridges.
- State-of-the-art panoramic fitness center with treadmills, elliptical machines, free weights, and dedicated yoga deck.
- Dedicated Table Tennis (TT) room with tournament-grade ping pong table.
- Outdoor lawn tennis court set against towering mountain pines.
- Indoor Games & Billiards Lounge with pool table, board game library, and arcade console.
- 24/7 power backup with dedicated silent generator to ensure uninterrupted warmth and fast Starlink Wi-Fi.`,

  // Section-wise photos: Exterior view, Living area 1, Living area 2, Bedroom, Bathroom interior, Kitchen, Balcony, Pool, Gym, Games / Indoor games, Table Tennis (TT), Tennis court, Walking lobby & Grounds
  photos: [
    // 1. Exterior view (Main Hero 1)
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
      title: "Chalet Exterior — Alpine Mountain Vista",
      category: "Exterior view",
      caption: "Breathtaking panoramic view of The Grand Himalayan Chalet nestled among snow-capped peaks and pine forests."
    },
    // 2. Bathroom interior (Hero 2)
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
      title: "Bathroom Interior — Private Heated Jacuzzi",
      category: "Bathroom interior",
      caption: "Private heated hydrotherapy jacuzzi tub with multi-jet massage and chromotherapy ambient lighting."
    },
    // 3. Bedroom (Hero 3)
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      title: "Master Bedroom Suite — Panoramic Mountain View",
      category: "Bedroom",
      caption: "King master suite with plush orthopedic mattress, luxury linens, and floor-to-ceiling windows overlooking the valley."
    },
    // 4. Living area 1 (Hero 4)
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      title: "Living Area 1 — Mountain Hearth Fireplace Lounge",
      category: "Living area 1",
      caption: "Spacious grand lounge featuring vaulted cedar timber ceilings, stone fireplace, and deep velvet sectional seating."
    },
    // 5. Pool (Hero 5)
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85",
      title: "Heated Mountain Swimming Pool",
      category: "Pool",
      caption: "Year-round heated indoor/outdoor infinity pool with uninterrupted views of the Himalayan forest and mountain ridges."
    },

    // --- SECTION: EXTERIOR VIEW ---
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85",
      title: "Exterior View — Twilight Mountain Glow",
      category: "Exterior view",
      caption: "Warmly lit timber chalet architecture as dusk falls over the snow-covered pine ridges."
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=85",
      title: "Exterior View — Mountain Valley Panorama",
      category: "Exterior view",
      caption: "Sweeping views of the surrounding Manali mountain ranges and morning alpine mist."
    },

    // --- SECTION: LIVING AREA 1 ---
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
      title: "Living Area 1 — Fireside Evening Ambience",
      category: "Living area 1",
      caption: "Cozy evenings by the roaring fireplace with warm alpine lighting and bespoke timber woodwork."
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",
      title: "Living Area 1 — 4K Cinema & Entertainment Console",
      category: "Living area 1",
      caption: "55-inch 4K Smart TV with premium surround soundbar, Starlink Wi-Fi, and Netflix access."
    },

    // --- SECTION: LIVING AREA 2 ---
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85",
      title: "Living Area 2 — Sunlit Glass Conservatory",
      category: "Living area 2",
      caption: "Secondary relaxation living space with botanical greenhouse accents, velvet chairs, and daylight reading nook."
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
      title: "Living Area 2 — Alpine Reading Library",
      category: "Living area 2",
      caption: "Curated book collection, handcrafted wooden study desk, and plush armchairs facing snowy pine peaks."
    },

    // --- SECTION: BEDROOM ---
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
      title: "Bedroom — King Suite & Private Mountain Balcony",
      category: "Bedroom",
      caption: "Direct glass sliding doors opening to the private mountain balcony with fresh Himalayan cedar air."
    },

    // --- SECTION: BATHROOM INTERIOR ---
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
      title: "Bathroom Interior — Glass Rain Shower & Double Vanity",
      category: "Bathroom interior",
      caption: "Luxurious stone finishes, thermostatic glass rain shower enclosure, and organic Himalayan bath products."
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85",
      title: "Bathroom Interior — Evening Jacuzzi Mood Soak",
      category: "Bathroom interior",
      caption: "Deep soaking warm hydrotherapy spa bath with soothing underwater LED lighting and aroma salts."
    },

    // --- SECTION: KITCHEN ---
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
      title: "Kitchen — Gourmet Chef's Kitchenette",
      category: "Kitchen",
      caption: "Fully equipped modern kitchen with induction cooktop, microwave oven, refrigerator, and RO water purification."
    },
    {
      id: 16,
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
      title: "Kitchen — Solid Wood Breakfast Bar",
      category: "Kitchen",
      caption: "Artisan wood counter with bar stools, Italian espresso machine, and complete dining dinnerware."
    },

    // --- SECTION: BALCONY ---
    {
      id: 17,
      url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85",
      title: "Balcony — Panoramic Pine Deck",
      category: "Balcony",
      caption: "Expansive cedar wood deck overlooking misty pine valleys and towering Himalayan peaks."
    },
    {
      id: 18,
      url: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=85",
      title: "Balcony — Evening Fire Pit Lounge",
      category: "Balcony",
      caption: "Outdoor heated seating area with fire pit for stargazing under crystal-clear alpine skies."
    },

    // --- SECTION: POOL ---
    {
      id: 19,
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
      title: "Pool — Heated Mountain Thermal Pool",
      category: "Pool",
      caption: "Year-round temperature-controlled swimming pool with glass skylights and comfortable sun loungers."
    },

    // --- SECTION: GYM ---
    {
      id: 20,
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
      title: "Gym — Panoramic Mountain Fitness Center",
      category: "Gym",
      caption: "Modern fitness studio with cardio treadmills, ellipticals, free weights, and scenic forest views."
    },
    {
      id: 21,
      url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=85",
      title: "Gym — Free Weights & Yoga Studio",
      category: "Gym",
      caption: "Dedicated floor space for yoga, stretching mats, dumbbells, and strength training equipment."
    },

    // --- SECTION: GAMES / INDOOR GAMES ---
    {
      id: 22,
      url: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=85",
      title: "Games / Indoor Games — Billiards & Game Room",
      category: "Games / Indoor games",
      caption: "Full-sized custom billiards pool table, foosball, darts, and comfortable fireside seating."
    },
    {
      id: 23,
      url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=85",
      title: "Games / Indoor Games — Arcade & Board Game Lounge",
      category: "Games / Indoor games",
      caption: "Classic board games library, PlayStation 5 gaming station, and plush beanbags for evening fun."
    },

    // --- SECTION: TABLE TENNIS (TT) ---
    {
      id: 24,
      url: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=1200&q=85",
      title: "Table Tennis (TT) — Tournament Ping Pong Arena",
      category: "Table Tennis (TT)",
      caption: "Dedicated table tennis arena with competition-grade table, professional paddles, and spectator benches."
    },

    // --- SECTION: TENNIS COURT ---
    {
      id: 25,
      url: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=85",
      title: "Tennis Court — Mountain Lawn Tennis Court",
      category: "Tennis court",
      caption: "All-weather outdoor tennis court bordered by towering deodar trees and majestic mountain ridges."
    },
    {
      id: 26,
      url: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=85",
      title: "Tennis Court — Valley View Court Surface",
      category: "Tennis court",
      caption: "Well-maintained court with complimentary rackets, balls, and mountain fresh breeze."
    },

    // --- SECTION: WALKING LOBBY & GROUNDS ---
    {
      id: 27,
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
      title: "Walking Lobby & Grounds — Pine Forest Trail",
      category: "Walking lobby & Grounds",
      caption: "Illuminated stone walking paths winding through ancient Himalayan cedar and apple orchards."
    },
    {
      id: 28,
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85",
      title: "Walking Lobby & Grounds — Grand Chalet Atrium",
      category: "Walking lobby & Grounds",
      caption: "Grand timber reception foyer with soaring wooden trusses and 24/7 guest concierge."
    }
  ],

  amenityCategories: [
    {
      category: "Recreation & Wellness Facilities",
      items: [
        { name: "Heated indoor/outdoor swimming pool", icon: "Waves" },
        { name: "Private hydrotherapy hot tub / Jacuzzi", icon: "Sparkles" },
        { name: "Resident fitness gym & yoga studio", icon: "Dumbbell" },
        { name: "Dedicated Table Tennis (TT) room", icon: "Activity" },
        { name: "Outdoor mountain tennis court", icon: "Award" },
        { name: "Indoor games lounge (Billiards & board games)", icon: "Trophy" }
      ]
    },
    {
      category: "Bathroom",
      items: [
        { name: "Private hydrotherapy jacuzzi tub", icon: "Sparkles" },
        { name: "Thermostatic glass rain shower", icon: "Droplets" },
        { name: "Hair dryer", icon: "Wind" },
        { name: "Organic Himalayan herbal toiletries", icon: "Sparkle" },
        { name: "Continuous instant geyser hot water", icon: "Flame" },
        { name: "Heated plush bath towels & robes", icon: "Check" }
      ]
    },
    {
      category: "Bedroom & Laundry",
      items: [
        { name: "Washer & dryer in chalet (free)", icon: "Disc" },
        { name: "Essentials (Towels, bed sheets, soap, toilet paper)", icon: "Check" },
        { name: "Hangers & custom wooden closet", icon: "Archive" },
        { name: "Goose-down duvets & extra fleece blankets", icon: "BedDouble" },
        { name: "Room-darkening thermal velvet curtains", icon: "SunDim" },
        { name: "Steam iron & ironing board", icon: "Check" }
      ]
    },
    {
      category: "Entertainment",
      items: [
        { name: "55-inch 4K Smart TV in living lounge", icon: "Tv" },
        { name: "Netflix, Prime Video, Apple TV+ included", icon: "Film" },
        { name: "High-fidelity Bluetooth soundbar", icon: "Volume2" },
        { name: "Alpine books and board games library", icon: "BookOpen" }
      ]
    },
    {
      category: "Heating & Cooling",
      items: [
        { name: "Indoor wood-burning fireplace", icon: "Flame" },
        { name: "Central underfloor radiant heating", icon: "Flame" },
        { name: "Split air conditioning for warm summer days", icon: "Snowflake" },
        { name: "Ceiling fans in living & bedroom suites", icon: "Fan" }
      ]
    },
    {
      category: "Home Safety",
      items: [
        { name: "Smoke & fire alarms installed", icon: "Bell" },
        { name: "Fire extinguisher & emergency fire blanket", icon: "Flame" },
        { name: "First aid medical kit", icon: "Cross" },
        { name: "24/7 Gated security & estate guard", icon: "ShieldCheck" }
      ]
    },
    {
      category: "Internet & Office",
      items: [
        { name: "High-speed Starlink Wi-Fi – 200 Mbps (verified)", icon: "Wifi" },
        { name: "Dedicated workspace with desk & scenic mountain view", icon: "Laptop" },
        { name: "24/7 Silent generator power backup", icon: "Zap" }
      ]
    },
    {
      category: "Kitchen & Dining",
      items: [
        { name: "Full kitchen where guests can cook meals", icon: "Utensils" },
        { name: "Refrigerator with freezer", icon: "Refrigerator" },
        { name: "Microwave oven & toaster", icon: "Radio" },
        { name: "Cooking essentials (Pots, pans, oil, spices)", icon: "Check" },
        { name: "Italian espresso coffee machine", icon: "Coffee" },
        { name: "Induction cooktop & electric kettle", icon: "Flame" },
        { name: "RO Water Purifier", icon: "Droplets" },
        { name: "Solid wood dining bar with stools", icon: "UtensilsCrossed" }
      ]
    },
    {
      category: "Location Features",
      items: [
        { name: "Panoramic Himalayan snow peaks view", icon: "Compass" },
        { name: "Private pine forest estate & walking trails", icon: "Building" },
        { name: "Direct access to hiking & ski slopes", icon: "Navigation" }
      ]
    },
    {
      category: "Outdoor",
      items: [
        { name: "Private cedar mountain balcony & terrace", icon: "Sun" },
        { name: "Outdoor fire pit with plush seating", icon: "Flame" },
        { name: "Lawn tennis court & landscaped gardens", icon: "Award" }
      ]
    },
    {
      category: "Parking & Facilities",
      items: [
        { name: "Free covered parking on premises", icon: "Car" },
        { name: "EV electric vehicle charger available", icon: "Zap" }
      ]
    },
    {
      category: "Services",
      items: [
        { name: "Self check-in with keypad smart lock", icon: "Key" },
        { name: "Luggage drop-off allowed", icon: "Luggage" },
        { name: "Daily housekeeping available upon request", icon: "Sparkles" },
        { name: "Personal estate concierge service", icon: "User" }
      ]
    }
  ],

  ratingsBreakdown: {
    cleanliness: 5.0,
    accuracy: 4.9,
    checkIn: 5.0,
    communication: 5.0,
    location: 4.9,
    value: 4.9
  },

  reviews: [
    {
      id: "r1",
      author: "Priyanka S.",
      location: "Bengaluru, India",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      date: "October 2026",
      staySummary: "Stayed about a week",
      comment: "The Grand Himalayan Chalet exceeded every possible dream! Sitting in the warm private jacuzzi on the balcony while watching the sun set over snow-capped peaks was pure magic. The high-speed Starlink Wi-Fi was flawless for remote work, and having a heated pool, tennis court, and gym right on the grounds made this our best mountain trip ever."
    },
    {
      id: "r2",
      author: "David & Sarah",
      location: "London, UK",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      date: "September 2026",
      staySummary: "Stayed 4 nights",
      comment: "A tranquil mountain sanctuary. Both living rooms gave us abundant space to relax—we loved reading in the sunlit glass conservatory during the day and sitting by the stone fireplace at night. The table tennis and billiards lounge provided great evening entertainment."
    },
    {
      id: "r3",
      author: "Rohit Verma",
      location: "Mumbai, India",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      date: "August 2026",
      staySummary: "Stayed 3 nights",
      comment: "Spotlessly clean chalet. Self check-in with the smart lock was effortless. The mountain air, pine forest trails, and views from the bedroom are breathtaking. Soaking in the private jacuzzi under starry Himalayan skies was an unforgettable memory."
    },
    {
      id: "r4",
      author: "Elena Rostova",
      location: "Berlin, Germany",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      date: "July 2026",
      staySummary: "Stayed a week",
      comment: "Everything looks even better than the photos! The high timber ceilings, stone craftsmanship, underfloor heating, and peaceful mountain setting made our holiday unforgettable. 10/10 hospitality from the Whispering Pines team."
    },
    {
      id: "r5",
      author: "Aditya & Neha",
      location: "Delhi, India",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      date: "June 2026",
      staySummary: "Stayed 2 nights",
      comment: "Celebrated our anniversary here and it couldn't have been more romantic. The team even helped us with a campfire on the balcony and fresh local apple pie. The tennis court and heated pool were world-class."
    },
    {
      id: "r6",
      author: "Marcus Aurel",
      location: "Sydney, Australia",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      date: "May 2026",
      staySummary: "Stayed 5 nights",
      comment: "Superhost status is thoroughly deserved. Immediate communication, spotless hygiene, and top-tier amenities. Having a private jacuzzi, gym, tennis court, and table tennis room in a Himalayan chalet at this price point is unbeatable."
    }
  ],

  houseRules: [
    { title: "Check-in", detail: "After 2:00 PM" },
    { title: "Checkout", detail: "Before 11:00 AM" },
    { title: "Self check-in", detail: "Keypad smart lock" },
    { title: "Guests", detail: "Maximum 4 guests" },
    { title: "Quiet hours", detail: "10:00 PM - 8:00 AM" },
    { title: "Smoking", detail: "Smoking allowed on outdoor terrace only, no indoor smoking" },
    { title: "Pets", detail: "Pets allowed upon advance request" }
  ],

  safetyAndProperty: [
    { title: "Carbon monoxide alarm", detail: "Installed with certified sensors" },
    { title: "Smoke alarm installed", detail: "Dual sensors present in living areas & bedroom" },
    { title: "Security camera in common areas", detail: "CCTV in parking and exterior grounds only (zero indoor cameras)" },
    { title: "First aid kit available", detail: "Located in the kitchen and wellness center" }
  ],

  cancellationPolicy: {
    title: "Flexible alpine cancellation",
    detail: "Cancel up to 48 hours before check-in and receive a full refund. Cancel within 48 hours and receive a 50% refund minus the first night and service fee."
  },

  // Exactly matching the user's screenshot for "More stays nearby"
  moreStaysNearby: [
    // Page 1 (Items 1 to 5 exactly as shown in screenshot)
    {
      id: "stay-1",
      title: "Beautiful Studio with a view to die for",
      price: "₹23,600",
      rating: 4.91,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "stay-2",
      title: "NAQAB - 1bhk with private pool",
      price: "₹42,218",
      rating: 4.95,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "stay-3",
      title: "Greentique Luxury Flat with plunge pool, Calangute",
      price: "₹44,506",
      rating: 4.94,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "stay-4",
      title: "The Tropical Studio | 5 mins to Beach",
      price: "₹22,824",
      rating: 4.96,
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "stay-5",
      title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
      price: "₹39,942",
      rating: 4.95,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
    },
    // Page 2
    {
      id: "stay-6",
      title: "The Himalayan Cedar Chalet & Hot Tub, Manali",
      price: "₹28,500",
      rating: 4.98,
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "stay-7",
      title: "Solang Valley Glasshouse Penthouse",
      price: "₹34,200",
      rating: 4.96,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "stay-8",
      title: "Wildflower Alpine Villa & Heated Pool",
      price: "₹48,000",
      rating: 4.99,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "stay-9",
      title: "Pine Ridge Stone Cottage | Mountain View",
      price: "₹21,500",
      rating: 4.92,
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "stay-10",
      title: "The Cloud Peak Mountain Lodge & Spa",
      price: "₹36,900",
      rating: 4.97,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
