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
    image: "/assets/images/gallery/VIDHYUG 4.0_6.jpg",
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
    id: 2,
    title: "SEARCH",
    category: "featured",
    mainProject: true,
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3",
    shortDescription: "System for Emergency Assistance Response and Communication Hub",
    fullDescription: `SEARCH is a groundbreaking initiative designed to revolutionize emergency management
     and environmental monitoring. Developed by the Centre for System Design (CSD) at NITK Surathkal,
      SEARCH integrates cutting-edge UHF/VHF/HF radio stations with autonomous aerial and marine vehicles,
       creating a robust platform for disaster response, communication, and rescue operations. This initiative represents 
       a global first, setting new standards for how emergencies are managed.`,
    // technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    link: "https://example.com/ai-generator",
    featuredProject: true,
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3',
        title: 'PRECISION SURVEYING',
        description: 'Aerial LiDAR'
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        title: 'ADVANCED MAPPING',
        description: 'High-resolution terrain modeling'
      },
      {
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
        title: 'DATA ANALYSIS',
        description: 'Comprehensive geospatial insights'
      }
    ],
    impactTitle: "Environmental and Economic Impact",
    impact:
      "By implementing our Eco-Friendly Smart Home System, households can reduce their energy consumption by up to 30%, leading to significant cost savings and a substantial decrease in carbon footprint. The system's ability to optimize resource usage contributes to conservation efforts on a broader scale.",
    additionalImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1557821552-17105176677c"
    ],
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
    id: 4,
    title: "Financial Dashboard",
    category: ["consultancy"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    shortDescription: "Real-time financial data visualization dashboard",
    fullDescription: `A sophisticated financial dashboard built for a major fintech company,
    providing real-time insights and analytics.`,
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    link: "https://example.com/finance"
  },
  {
    id: 5,
    title: "Social Media Analytics",
    title2: "Social Media Analytics",
    category: ["student"],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    shortDescription: "Social media analytics and reporting tool",
    fullDescription: `A student project focused on analyzing social media trends and providing
    actionable insights for marketing teams.`,
    technologies: ["React", "Python", "Flask", "MongoDB"],
    link: "https://example.com/social-analytics"
  },
  {
    id: 6,
    title: "E-port",
    category: ["main"],
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
  
];