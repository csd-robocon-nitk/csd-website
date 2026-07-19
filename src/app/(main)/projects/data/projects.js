"use client"


export const projects = [
  {
    id: 1,
    title: "E-Mobility",
    mainProject: true,
    category: "featured",
    slides: [
      {
        image: '/assets/images/gallery/VidhYug (3).png',
        title: 'Vidygyug 2.0',
        description: ''
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.0_6.jpg',
        title: 'vidygyug 4.0',
        description: 'High-resolution terrain modeling'
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.1.png',
        title: 'vidygyug 4.1',
        description: 'Comprehensive geospatial insights'
      }
    ],
    image: "/assets/images/gallery/Simple Modern Photo Collage Autumn Fashion Sale Banner (1).png",
    shortDescription: "Projects focused on developing electric vehicle technologies and solutions",
    fullDescription: `NITK Surathkal Campus Transportation with Innovative E-Mobility Initiatives
    National Institute of Technology Karnataka pioneers sustainable solutions and integrates AI for optimal electric vehicle usage.

    In a groundbreaking move, NITK Surathkal is leading the charge towards sustainable campus transportation through its E-Mobility initiatives. Spearheaded by Dr. Pruthviraj U and Prof. K V Gangadharan, the project aims to transform the way students and staff commute within the campus.
    The E-Mobility team at the Centre for System Design has engineered a diverse fleet of electric vehicles, including E-cycles, e-scooters, e-bikes, and specialised models for specific campus needs. AI algorithms are deployed to predict demand patterns and optimize the deployment and routing of these vehicles across the campus.

    Adding a green touch, the team has developed "URJA," a solar-based charging station. This innovative infrastructure is dynamically managed by AI, ensuring seamless charging experiences for users while considering historical data, real-time usage, and campus events.`,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://www.youtube.com/embed/IPepptEKgEk?si=Itf3JUF9RzYv4BYO",
    impactTitle: "Off-Road Electric Bike for Enhanced Emergency Response",
    impact: `A collaboration with the NITK Alumni Class of 1979 and SEG Automotive has led to the integration of an off-road electric bike into the SEARCH platform, significantly enhancing its reach and effectiveness.
      Designed for Rugged Terrain: This electric bike boasts exceptional off-road capabilities, making it ideal for navigating challenging environments like avalanche zones, landslide areas, and disaster-struck regions. This expands SEARCH's reach and allows for swift response in previously inaccessible areas.
      Empowering First Responders: The Impact 79_E Dirt Bike offers invaluable support to various emergency response teams, including:
          NDRF (National Disaster Response Force): Providing efficient access to disaster zones for rescue operations.
      Coastal Police, Military, and Coast Guard: Enabling efficient patrolling and operations in difficult terrains like sand and mud.
      Forest and Wildlife Authorities: Supporting anti-poaching efforts and wildlife protection activities.
      Sustainable Solution: Aligned with SEARCH's commitment to environmental responsibility, the electric bike boasts zero emissions and silent operation, minimising environmental impact during crucial operations.
      The NITK Class of 1979's financial support, SEG Automotive's technical expertise, and the collaborative efforts of CSDs at NITK Surathkal and the E MOBILITY team have resulted in a valuable addition to the SEARCH platform.
      The Impact 79 EDirt Bike embodies the spirit of continuous improvement and collaboration that drives SEARCH forward. Its integration further strengthens SEARCH's ability to respond to diverse emergencies in challenging environments, contributing to a more resilient and sustainable future.`,
    featured: true,
    // additionalImages: [
    //   "https://images.unsplash.com/photo-1557821552-17105176677c",
    //   "https://images.unsplash.com/photo-1557821552-17105176677c",
    //   "https://images.unsplash.com/photo-1557821552-17105176677c"
    // ],
    impactTitle: "Environmental and Economic Impact",
    impact:
      "By implementing our Eco-Friendly Smart Home System, households can reduce their energy consumption by up to 30%, leading to significant cost savings and a substantial decrease in carbon footprint. The system's ability to optimize resource usage contributes to conservation efforts on a broader scale.",
    objectives: [
      "Reduce household energy consumption",
      "Integrate renewable energy sources",
      "Enhance home comfort and convenience",
      "Promote sustainable living practices",
    ],
    keyFeatures: [
      {
        title: "AI-Powered Energy Management",
        description:
          "Utilizes machine learning algorithms to optimize energy usage based on user habits and preferences.",
      },
      {
        title: "Solar Integration",
        description: "Seamlessly integrates with solar panel systems to maximize renewable energy utilization.",
      },
      {
        title: "Smart Water Conservation",
        description: "Monitors and regulates water usage, detecting leaks and suggesting water-saving measures.",
      },
      {
        title: "Eco-Friendly Material Sensors",
        description: "Employs sensors made from biodegradable materials to reduce electronic waste.",
      },
    ],
    impactMetrics: [
      { metric: "30%", description: "Average reduction in household energy consumption" },
      { metric: "1,000 kg", description: "Annual CO2 emissions reduced per household" },
      { metric: "50,000", description: "Liters of water saved annually per household" },
      { metric: "€500", description: "Average yearly savings on utility bills" },
    ],
    testimonials: [
      {
        name: "Sarah L.",
        comment: "This system has transformed our home into an eco-warrior! Our energy bills have never been lower.",
      },
      {
        name: "Mark T.",
        comment: "The integration with our existing solar panels was seamless. Now our home is truly self-sustainable.",
      },
    ]
  },
  {
    id: 3,
    title: "SEARCH",
    category: "featured",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3",
    shortDescription: "System for Emergency Assistance Response and Communication Hub",
    fullDescription: "SEARCH is a groundbreaking initiative designed to revolutionize emergency management and environmental monitoring. Developed by the Centre for System Design (CSD) at NITK Surathkal, SEARCH integrates cutting-edge UHF/VHF/HF radio stations with autonomous aerial and marine vehicles, creating a robust platform for disaster response, communication, and rescue operations. This initiative represents a global first, setting new standards for how emergencies are managed.",
    link: "http://search.nitk.ac.in/#/",
    featuredProject: true,
    slides: [
      {
        image: "https://images.unsplash.com/photo-1547954575-855750c57bd3",
        title: "Autonomous Aerial Vehicles",
        description: "Equipped with thermal imaging, multispectral, RGB, and LiDAR capabilities for real-time monitoring."
      },
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        title: "Unmanned Marine Vessels",
        description: "Designed for rapid response, monitoring coastal erosion, and assessing water quality."
      },
      {
        image: "https://images.unsplash.com/photo-1557821552-17105176677c",
        title: "Control & Command Center",
        description: "A mobile hub ensuring seamless coordination and rapid deployment during crises."
      }
    ],
    impactTitle: "Impact on Disaster Management and Environmental Monitoring",
    impact: "SEARCH provides an integrated response system that enhances disaster preparedness, improves emergency coordination, and supports environmental sustainability by monitoring air and water quality, coastal erosion, and mangrove health.",
    additionalImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c"
    ],
    objectives: [
      "Enhance disaster response through real-time data collection and monitoring",
      "Improve emergency communication with advanced UHF/VHF/HF radio infrastructure",
      "Support environmental monitoring for sustainable coastal management",
      "Provide training and hands-on learning opportunities for professionals and students"
    ],
    keyFeatures: [
      {
        title: "Autonomous Aerial Vehicles",
        description: "Drones with multispectral imaging, LiDAR, and thermal cameras for situational awareness."
      },
      {
        title: "Unmanned Marine Vessels",
        description: "Capable of monitoring water quality, coastal erosion, and mangrove health."
      },
      {
        title: "Control & Command Center",
        description: "Mobile unit with integrated e-mobility for rapid deployment and coordination."
      },
      {
        title: "Advanced Communication Infrastructure",
        description: "Includes HEX Beam, Omni-directional Antennas, and Repeaters for uninterrupted communication."
      },
      {
        title: "Portable Container Cabins",
        description: "Solar-powered mobile units for setting up on-site command posts."
      }
    ],
    impactMetrics: [
      { metric: "100+ km", "description": "Coverage area of autonomous aerial and marine vehicles." },
      { metric: "24/7", "description": "Continuous real-time monitoring and emergency response." },
      { metric: "TRL 6", "description": "Proven technology demonstrated to stakeholders such as NMPA and Karnataka Forest Department." }
    ],
    testimonials: [
      {
        name: "New Mangalore Port Authority",
        comment: "SEARCH's advanced systems have significantly improved our coastal monitoring capabilities."
      },
      {
        name: "Karnataka Forest Department",
        comment: "The ability to monitor environmental factors in real-time is a game-changer for conservation efforts."
      }
    ]
},
  {
    id: 2,
    title: "Switched Reluctance Motor (SRM)",
    mainProject: true,
    slides: [
      {
        image: '/assets/images/gallery/VidhYug (3).png',
        title: 'Vidygyug 2.0',
        description: ''
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.0_6.jpg',
        title: 'vidygyug 4.0',
        description: 'High-resolution terrain modeling'
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.1.png',
        title: 'vidygyug 4.1',
        description: 'Comprehensive geospatial insights'
      }
    ],
    image: "/assets/images/gallery/srm.png",
    shortDescription: "This project aims to address the high costs associated with permanent magnet (PM)-based motors by developing innovative SRM solutions that are robust, fault-tolerant, and magnet-free.",
    fullDescription: `NITK Surathkal Campus Transportation with Innovative E-Mobility Initiatives
    National Institute of Technology Karnataka pioneers sustainable solutions and integrates AI for optimal electric vehicle usage.

    In a groundbreaking move, NITK Surathkal is leading the charge towards sustainable campus transportation through its E-Mobility initiatives. Spearheaded by Dr. Pruthviraj U and Prof. K V Gangadharan, the project aims to transform the way students and staff commute within the campus.
    The E-Mobility team at the Centre for System Design has engineered a diverse fleet of electric vehicles, including E-cycles, e-scooters, e-bikes, and specialised models for specific campus needs. AI algorithms are deployed to predict demand patterns and optimize the deployment and routing of these vehicles across the campus.

    Adding a green touch, the team has developed "URJA," a solar-based charging station. This innovative infrastructure is dynamically managed by AI, ensuring seamless charging experiences for users while considering historical data, real-time usage, and campus events.`,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://www.youtube.com/embed/IPepptEKgEk?si=Itf3JUF9RzYv4BYO",
    impactTitle: "Off-Road Electric Bike for Enhanced Emergency Response",
    impact: `A collaboration with the NITK Alumni Class of 1979 and SEG Automotive has led to the integration of an off-road electric bike into the SEARCH platform, significantly enhancing its reach and effectiveness.
      Designed for Rugged Terrain: This electric bike boasts exceptional off-road capabilities, making it ideal for navigating challenging environments like avalanche zones, landslide areas, and disaster-struck regions. This expands SEARCH's reach and allows for swift response in previously inaccessible areas.
      Empowering First Responders: The Impact 79_E Dirt Bike offers invaluable support to various emergency response teams, including:
          NDRF (National Disaster Response Force): Providing efficient access to disaster zones for rescue operations.
      Coastal Police, Military, and Coast Guard: Enabling efficient patrolling and operations in difficult terrains like sand and mud.
      Forest and Wildlife Authorities: Supporting anti-poaching efforts and wildlife protection activities.
      Sustainable Solution: Aligned with SEARCH's commitment to environmental responsibility, the electric bike boasts zero emissions and silent operation, minimising environmental impact during crucial operations.
      The NITK Class of 1979's financial support, SEG Automotive's technical expertise, and the collaborative efforts of CSDs at NITK Surathkal and the E MOBILITY team have resulted in a valuable addition to the SEARCH platform.
      The Impact 79 EDirt Bike embodies the spirit of continuous improvement and collaboration that drives SEARCH forward. Its integration further strengthens SEARCH's ability to respond to diverse emergencies in challenging environments, contributing to a more resilient and sustainable future.`,
    featured: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c"
    ],
    impactTitle: "Environmental and Economic Impact",
    impact:
      "By implementing our Eco-Friendly Smart Home System, households can reduce their energy consumption by up to 30%, leading to significant cost savings and a substantial decrease in carbon footprint. The system's ability to optimize resource usage contributes to conservation efforts on a broader scale.",
    objectives: [
      "Reduce household energy consumption",
      "Integrate renewable energy sources",
      "Enhance home comfort and convenience",
      "Promote sustainable living practices",
    ],
    keyFeatures: [
      {
        title: "AI-Powered Energy Management",
        description:
          "Utilizes machine learning algorithms to optimize energy usage based on user habits and preferences.",
      },
      {
        title: "Solar Integration",
        description: "Seamlessly integrates with solar panel systems to maximize renewable energy utilization.",
      },
      {
        title: "Smart Water Conservation",
        description: "Monitors and regulates water usage, detecting leaks and suggesting water-saving measures.",
      },
      {
        title: "Eco-Friendly Material Sensors",
        description: "Employs sensors made from biodegradable materials to reduce electronic waste.",
      },
    ],
    impactMetrics: [
      { metric: "30%", description: "Average reduction in household energy consumption" },
      { metric: "1,000 kg", description: "Annual CO2 emissions reduced per household" },
      { metric: "50,000", description: "Liters of water saved annually per household" },
      { metric: "€500", description: "Average yearly savings on utility bills" },
    ],
    testimonials: [
      {
        name: "Sarah L.",
        comment: "This system has transformed our home into an eco-warrior! Our energy bills have never been lower.",
      },
      {
        name: "Mark T.",
        comment: "The integration with our existing solar panels was seamless. Now our home is truly self-sustainable.",
      },
    ]
  },
  {
    "id": 7,
    "title": "E-Port – Shakti & Decarbonization Initiatives",
    "mainProject": true,
    "category": "featured",
    "slides": [
      {
        "image": "/assets/images/gallery/VidhYug (3).png",
        "title": "Vidygyug 2.0",
        "description": "Advancing sustainable port electrification solutions."
      },
      {
        "image": "/assets/images/gallery/VIDHYUG 4.0_6.jpg",
        "title": "Vidygyug 4.0",
        "description": "High-resolution terrain modeling for port infrastructure."
      },
      {
        "image": "/assets/images/gallery/VIDHYUG 4.1.png",
        "title": "Vidygyug 4.1",
        "description": "Comprehensive geospatial insights for port sustainability."
      }
    ],
    "image": "/assets/images/gallery/Eport.png",
    "shortDescription": "Leading the electrification of Indian ports to reduce carbon emissions.",
    "fullDescription": "The Centre for System Design (CSD) at NITK Surathkal is driving port decarbonization through electrification under the 'E-Port – Shakti' initiative. This project focuses on reducing emissions by integrating shore power solutions, renewable energy, and electrified transport systems at major Indian ports, including New Mangalore Port Authority (NMPA) and Mormugao Port Authority (MPA).\n\nKey activities include feasibility studies for solar-powered shore electricity, policy recommendations for green transport, and economic evaluations for renewable integration. CSD’s efforts align with national sustainability frameworks like the Harit Sagar Guidelines, reinforcing India's commitment to green port operations.",
    "technologies": ["Shore Power Integration", "Renewable Energy", "EV Infrastructure"],
    "link": "https://www.youtube.com/embed/IPepptEKgEk?si=Itf3JUF9RzYv4BYO",
    "impactTitle": "Decarbonizing Indian Ports for a Greener Future",
    "impact": "Through port electrification and renewable energy adoption, CSD is enabling significant reductions in maritime emissions. The implementation of shore power solutions minimizes reliance on diesel-powered ships, fostering a more sustainable shipping industry.",
    "objectives": [
      "Electrify major Indian ports to reduce carbon emissions.",
      "Support India's transition to net-zero maritime operations.",
      "Develop policies for green port logistics.",
      "Enhance industry-academia collaborations for sustainable port solutions."
    ],
    "keyFeatures": [
      {
        "title": "Shore Power Solutions",
        "description": "Reducing diesel dependency by enabling docked ships to use grid electricity."
      },
      {
        "title": "Solar and Renewable Energy Integration",
        "description": "Feasibility assessments for clean energy solutions at ports."
      },
      {
        "title": "Green Transport Policies",
        "description": "Developing economic incentives for sustainable logistics."
      },
      {
        "title": "Sustainable Infrastructure Development",
        "description": "Enhancing port operations through electrification and smart grid implementation."
      }
    ],
    "impactMetrics": [
      { "metric": "50%", "description": "Potential reduction in port-related diesel emissions." },
      { "metric": "100MW", "description": "Planned solar power capacity for port electrification." },
      { "metric": "4", "description": "Major ports undergoing electrification under E-Port – Shakti." },
      { "metric": "10+", "description": "Strategic industry and academic partnerships for sustainable port operations." }
    ],
    "testimonials": [
      {
        "name": "Dr. Pruthviraj U.",
        "comment": "CSD's E-Port initiative is revolutionizing port operations by reducing emissions and increasing sustainability."
      },
      {
        "name": "K V Gangadharan",
        "comment": "The integration of renewable energy and shore power solutions is a game-changer for India's maritime sector."
      }
    ],
    "fundingAgency": "ISEF",
    "partner": "Techmillenials",
    "projectStatus": "Completed"
  },
  {
    id: 7,
    title: "msme",
    category: ["featured"],
    slides: [
      {
        image: '/assets/images/gallery/VidhYug (3).png',
        title: 'E-port',
        description: ''
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.0_6.jpg',
        title: 'E-port',
        description: 'High-resolution terrain modeling'
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.1.png',
        title: 'E-port',
        description: 'Comprehensive geospatial insights'
      }
    ],
    image: "/assets/images/gallery/VIDHYUG 4.0_6.jpg",
    shortDescription: "This project aims to address the high costs associated with permanent magnet (PM)-based motors by developing innovative SRM solutions that are robust, fault-tolerant, and magnet-free.",
    fullDescription: `NITK Surathkal Campus Transportation with Innovative E-Mobility Initiatives
    National Institute of Technology Karnataka pioneers sustainable solutions and integrates AI for optimal electric vehicle usage.

    In a groundbreaking move, NITK Surathkal is leading the charge towards sustainable campus transportation through its E-Mobility initiatives. Spearheaded by Dr. Pruthviraj U and Prof. K V Gangadharan, the project aims to transform the way students and staff commute within the campus.
    The E-Mobility team at the Centre for System Design has engineered a diverse fleet of electric vehicles, including E-cycles, e-scooters, e-bikes, and specialised models for specific campus needs. AI algorithms are deployed to predict demand patterns and optimize the deployment and routing of these vehicles across the campus.

    Adding a green touch, the team has developed "URJA," a solar-based charging station. This innovative infrastructure is dynamically managed by AI, ensuring seamless charging experiences for users while considering historical data, real-time usage, and campus events.`,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://www.youtube.com/embed/IPepptEKgEk?si=Itf3JUF9RzYv4BYO",
    impactTitle: "Off-Road Electric Bike for Enhanced Emergency Response",
    impact: `A collaboration with the NITK Alumni Class of 1979 and SEG Automotive has led to the integration of an off-road electric bike into the SEARCH platform, significantly enhancing its reach and effectiveness.
      Designed for Rugged Terrain: This electric bike boasts exceptional off-road capabilities, making it ideal for navigating challenging environments like avalanche zones, landslide areas, and disaster-struck regions. This expands SEARCH's reach and allows for swift response in previously inaccessible areas.
      Empowering First Responders: The Impact 79_E Dirt Bike offers invaluable support to various emergency response teams, including:
          NDRF (National Disaster Response Force): Providing efficient access to disaster zones for rescue operations.
      Coastal Police, Military, and Coast Guard: Enabling efficient patrolling and operations in difficult terrains like sand and mud.
      Forest and Wildlife Authorities: Supporting anti-poaching efforts and wildlife protection activities.
      Sustainable Solution: Aligned with SEARCH's commitment to environmental responsibility, the electric bike boasts zero emissions and silent operation, minimising environmental impact during crucial operations.
      The NITK Class of 1979's financial support, SEG Automotive's technical expertise, and the collaborative efforts of CSDs at NITK Surathkal and the E MOBILITY team have resulted in a valuable addition to the SEARCH platform.
      The Impact 79 EDirt Bike embodies the spirit of continuous improvement and collaboration that drives SEARCH forward. Its integration further strengthens SEARCH's ability to respond to diverse emergencies in challenging environments, contributing to a more resilient and sustainable future.`,
    featured: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c"
    ]
  },
  {
    id: 8,
    title: "3D printing",
    category: ["consultancy"],
    slides: [
      {
        image: '/assets/images/gallery/VidhYug (3).png',
        title: 'E-port',
        description: ''
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.0_6.jpg',
        title: 'E-port',
        description: 'High-resolution terrain modeling'
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.1.png',
        title: 'E-port',
        description: 'Comprehensive geospatial insights'
      }
    ],
    image: "/assets/images/gallery/VIDHYUG 4.0_6.jpg",
    shortDescription: "This project aims to address the high costs associated with permanent magnet (PM)-based motors by developing innovative SRM solutions that are robust, fault-tolerant, and magnet-free.",
    fullDescription: `NITK Surathkal Campus Transportation with Innovative E-Mobility Initiatives
    National Institute of Technology Karnataka pioneers sustainable solutions and integrates AI for optimal electric vehicle usage.

    In a groundbreaking move, NITK Surathkal is leading the charge towards sustainable campus transportation through its E-Mobility initiatives. Spearheaded by Dr. Pruthviraj U and Prof. K V Gangadharan, the project aims to transform the way students and staff commute within the campus.
    The E-Mobility team at the Centre for System Design has engineered a diverse fleet of electric vehicles, including E-cycles, e-scooters, e-bikes, and specialised models for specific campus needs. AI algorithms are deployed to predict demand patterns and optimize the deployment and routing of these vehicles across the campus.

    Adding a green touch, the team has developed "URJA," a solar-based charging station. This innovative infrastructure is dynamically managed by AI, ensuring seamless charging experiences for users while considering historical data, real-time usage, and campus events.`,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://www.youtube.com/embed/IPepptEKgEk?si=Itf3JUF9RzYv4BYO",
    impactTitle: "Off-Road Electric Bike for Enhanced Emergency Response",
    impact: `A collaboration with the NITK Alumni Class of 1979 and SEG Automotive has led to the integration of an off-road electric bike into the SEARCH platform, significantly enhancing its reach and effectiveness.
      Designed for Rugged Terrain: This electric bike boasts exceptional off-road capabilities, making it ideal for navigating challenging environments like avalanche zones, landslide areas, and disaster-struck regions. This expands SEARCH's reach and allows for swift response in previously inaccessible areas.
      Empowering First Responders: The Impact 79_E Dirt Bike offers invaluable support to various emergency response teams, including:
          NDRF (National Disaster Response Force): Providing efficient access to disaster zones for rescue operations.
      Coastal Police, Military, and Coast Guard: Enabling efficient patrolling and operations in difficult terrains like sand and mud.
      Forest and Wildlife Authorities: Supporting anti-poaching efforts and wildlife protection activities.
      Sustainable Solution: Aligned with SEARCH's commitment to environmental responsibility, the electric bike boasts zero emissions and silent operation, minimising environmental impact during crucial operations.
      The NITK Class of 1979's financial support, SEG Automotive's technical expertise, and the collaborative efforts of CSDs at NITK Surathkal and the E MOBILITY team have resulted in a valuable addition to the SEARCH platform.
      The Impact 79 EDirt Bike embodies the spirit of continuous improvement and collaboration that drives SEARCH forward. Its integration further strengthens SEARCH's ability to respond to diverse emergencies in challenging environments, contributing to a more resilient and sustainable future.`,
    featured: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c"
    ]
  },
  {
    id: 9,
    title: "laser cutting",
    category: ["consultancy"],
    slides: [
      {
        image: '/assets/images/gallery/VidhYug (3).png',
        title: 'E-port',
        description: ''
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.0_6.jpg',
        title: 'E-port',
        description: 'High-resolution terrain modeling'
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.1.png',
        title: 'E-port',
        description: 'Comprehensive geospatial insights'
      }
    ],
    image: "/assets/images/gallery/VIDHYUG 4.0_6.jpg",
    shortDescription: "This project aims to address the high costs associated with permanent magnet (PM)-based motors by developing innovative SRM solutions that are robust, fault-tolerant, and magnet-free.",
    fullDescription: `NITK Surathkal Campus Transportation with Innovative E-Mobility Initiatives
    National Institute of Technology Karnataka pioneers sustainable solutions and integrates AI for optimal electric vehicle usage.

    In a groundbreaking move, NITK Surathkal is leading the charge towards sustainable campus transportation through its E-Mobility initiatives. Spearheaded by Dr. Pruthviraj U and Prof. K V Gangadharan, the project aims to transform the way students and staff commute within the campus.
    The E-Mobility team at the Centre for System Design has engineered a diverse fleet of electric vehicles, including E-cycles, e-scooters, e-bikes, and specialised models for specific campus needs. AI algorithms are deployed to predict demand patterns and optimize the deployment and routing of these vehicles across the campus.

    Adding a green touch, the team has developed "URJA," a solar-based charging station. This innovative infrastructure is dynamically managed by AI, ensuring seamless charging experiences for users while considering historical data, real-time usage, and campus events.`,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://www.youtube.com/embed/IPepptEKgEk?si=Itf3JUF9RzYv4BYO",
    impactTitle: "Off-Road Electric Bike for Enhanced Emergency Response",
    impact: `A collaboration with the NITK Alumni Class of 1979 and SEG Automotive has led to the integration of an off-road electric bike into the SEARCH platform, significantly enhancing its reach and effectiveness.
      Designed for Rugged Terrain: This electric bike boasts exceptional off-road capabilities, making it ideal for navigating challenging environments like avalanche zones, landslide areas, and disaster-struck regions. This expands SEARCH's reach and allows for swift response in previously inaccessible areas.
      Empowering First Responders: The Impact 79_E Dirt Bike offers invaluable support to various emergency response teams, including:
          NDRF (National Disaster Response Force): Providing efficient access to disaster zones for rescue operations.
      Coastal Police, Military, and Coast Guard: Enabling efficient patrolling and operations in difficult terrains like sand and mud.
      Forest and Wildlife Authorities: Supporting anti-poaching efforts and wildlife protection activities.
      Sustainable Solution: Aligned with SEARCH's commitment to environmental responsibility, the electric bike boasts zero emissions and silent operation, minimising environmental impact during crucial operations.
      The NITK Class of 1979's financial support, SEG Automotive's technical expertise, and the collaborative efforts of CSDs at NITK Surathkal and the E MOBILITY team have resulted in a valuable addition to the SEARCH platform.
      The Impact 79 EDirt Bike embodies the spirit of continuous improvement and collaboration that drives SEARCH forward. Its integration further strengthens SEARCH's ability to respond to diverse emergencies in challenging environments, contributing to a more resilient and sustainable future.`,
    featured: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c"
    ]
  },
  {
    id: 10,
    title: "SARV- Semi - Autonomous Research vessel",
    category: ["student"],
    slides: [
      {
        image: '/assets/images/gallery/VidhYug (3).png',
        title: 'E-port',
        description: ''
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.0_6.jpg',
        title: 'E-port',
        description: 'High-resolution terrain modeling'
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.1.png',
        title: 'E-port',
        description: 'Comprehensive geospatial insights'
      }
    ],
    image: "/assets/images/gallery/Sarv.png",
    shortDescription: "This project aims to address the high costs associated with permanent magnet (PM)-based motors by developing innovative SRM solutions that are robust, fault-tolerant, and magnet-free.",
    fullDescription: `NITK Surathkal Campus Transportation with Innovative E-Mobility Initiatives
    National Institute of Technology Karnataka pioneers sustainable solutions and integrates AI for optimal electric vehicle usage.

    In a groundbreaking move, NITK Surathkal is leading the charge towards sustainable campus transportation through its E-Mobility initiatives. Spearheaded by Dr. Pruthviraj U and Prof. K V Gangadharan, the project aims to transform the way students and staff commute within the campus.
    The E-Mobility team at the Centre for System Design has engineered a diverse fleet of electric vehicles, including E-cycles, e-scooters, e-bikes, and specialised models for specific campus needs. AI algorithms are deployed to predict demand patterns and optimize the deployment and routing of these vehicles across the campus.

    Adding a green touch, the team has developed "URJA," a solar-based charging station. This innovative infrastructure is dynamically managed by AI, ensuring seamless charging experiences for users while considering historical data, real-time usage, and campus events.`,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://www.youtube.com/embed/IPepptEKgEk?si=Itf3JUF9RzYv4BYO",
    impactTitle: "Off-Road Electric Bike for Enhanced Emergency Response",
    impact: `A collaboration with the NITK Alumni Class of 1979 and SEG Automotive has led to the integration of an off-road electric bike into the SEARCH platform, significantly enhancing its reach and effectiveness.
      Designed for Rugged Terrain: This electric bike boasts exceptional off-road capabilities, making it ideal for navigating challenging environments like avalanche zones, landslide areas, and disaster-struck regions. This expands SEARCH's reach and allows for swift response in previously inaccessible areas.
      Empowering First Responders: The Impact 79_E Dirt Bike offers invaluable support to various emergency response teams, including:
          NDRF (National Disaster Response Force): Providing efficient access to disaster zones for rescue operations.
      Coastal Police, Military, and Coast Guard: Enabling efficient patrolling and operations in difficult terrains like sand and mud.
      Forest and Wildlife Authorities: Supporting anti-poaching efforts and wildlife protection activities.
      Sustainable Solution: Aligned with SEARCH's commitment to environmental responsibility, the electric bike boasts zero emissions and silent operation, minimising environmental impact during crucial operations.
      The NITK Class of 1979's financial support, SEG Automotive's technical expertise, and the collaborative efforts of CSDs at NITK Surathkal and the E MOBILITY team have resulted in a valuable addition to the SEARCH platform.
      The Impact 79 EDirt Bike embodies the spirit of continuous improvement and collaboration that drives SEARCH forward. Its integration further strengthens SEARCH's ability to respond to diverse emergencies in challenging environments, contributing to a more resilient and sustainable future.`,
    featured: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c"
    ]
  },
  {
    id: 10,
    title: "UAV - Unmanned Aerial Vehicle",
    category: ["consultancy"],
    slides: [
      {
        image: '/assets/images/gallery/VidhYug (3).png',
        title: 'E-port',
        description: ''
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.0_6.jpg',
        title: 'E-port',
        description: 'High-resolution terrain modeling'
      },
      {
        image: '/assets/images/gallery/VIDHYUG 4.1.png',
        title: 'E-port',
        description: 'Comprehensive geospatial insights'
      }
    ],
    image: "/assets/images/gallery/2.png",
    shortDescription: "This project aims to address the high costs associated with permanent magnet (PM)-based motors by developing innovative SRM solutions that are robust, fault-tolerant, and magnet-free.",
    fullDescription: `NITK Surathkal Campus Transportation with Innovative E-Mobility Initiatives
    National Institute of Technology Karnataka pioneers sustainable solutions and integrates AI for optimal electric vehicle usage.

    In a groundbreaking move, NITK Surathkal is leading the charge towards sustainable campus transportation through its E-Mobility initiatives. Spearheaded by Dr. Pruthviraj U and Prof. K V Gangadharan, the project aims to transform the way students and staff commute within the campus.
    The E-Mobility team at the Centre for System Design has engineered a diverse fleet of electric vehicles, including E-cycles, e-scooters, e-bikes, and specialised models for specific campus needs. AI algorithms are deployed to predict demand patterns and optimize the deployment and routing of these vehicles across the campus.

    Adding a green touch, the team has developed "URJA," a solar-based charging station. This innovative infrastructure is dynamically managed by AI, ensuring seamless charging experiences for users while considering historical data, real-time usage, and campus events.`,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://www.youtube.com/embed/IPepptEKgEk?si=Itf3JUF9RzYv4BYO",
    impactTitle: "Off-Road Electric Bike for Enhanced Emergency Response",
    impact: `A collaboration with the NITK Alumni Class of 1979 and SEG Automotive has led to the integration of an off-road electric bike into the SEARCH platform, significantly enhancing its reach and effectiveness.
      Designed for Rugged Terrain: This electric bike boasts exceptional off-road capabilities, making it ideal for navigating challenging environments like avalanche zones, landslide areas, and disaster-struck regions. This expands SEARCH's reach and allows for swift response in previously inaccessible areas.
      Empowering First Responders: The Impact 79_E Dirt Bike offers invaluable support to various emergency response teams, including:
          NDRF (National Disaster Response Force): Providing efficient access to disaster zones for rescue operations.
      Coastal Police, Military, and Coast Guard: Enabling efficient patrolling and operations in difficult terrains like sand and mud.
      Forest and Wildlife Authorities: Supporting anti-poaching efforts and wildlife protection activities.
      Sustainable Solution: Aligned with SEARCH's commitment to environmental responsibility, the electric bike boasts zero emissions and silent operation, minimising environmental impact during crucial operations.
      The NITK Class of 1979's financial support, SEG Automotive's technical expertise, and the collaborative efforts of CSDs at NITK Surathkal and the E MOBILITY team have resulted in a valuable addition to the SEARCH platform.
      The Impact 79 EDirt Bike embodies the spirit of continuous improvement and collaboration that drives SEARCH forward. Its integration further strengthens SEARCH's ability to respond to diverse emergencies in challenging environments, contributing to a more resilient and sustainable future.`,
    featured: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c"
    ]
  }
  
];