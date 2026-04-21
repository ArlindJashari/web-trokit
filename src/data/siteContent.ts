export const siteData = {
  brand: {
    name: "Carrosserie Elite",
    slogan: "VOTRE CARROSSERIE PARTENAIRE EN VALAIS",
    subSlogan: "EXCELLENCE TECHNIQUE & PASSION",
    description: "Fondée en 2018, Carrosserie Elite met à disposition son expertise technique et des infrastructures modernes permettant la prise en charge complète de tous types de réparations automobiles, quelle que soit la marque ou le modèle du véhicule.",
    contact: {
      address: "Route de l'industrie 1, 1964 - Conthey - Valais - Suisse",
      phone: ["+41 27 346 07 01", "+41 79 366 29 95"],
      email: "info@carrosserie-elite.ch",
      googleMapLink: "https://maps.google.com/?q=Route+de+l’industrie+1,+1964+Conthey",
    },
    socials: {
      instagram: "https://www.instagram.com/carrosserie_elite",
      facebook: "https://www.facebook.com/people/Carrosserie-Elite/100059332610229/",
    },
    openingHours: [
      { day: "Lundi - Jeudi", time: "7:30-12:00 / 13:30-18:00" },
      { day: "Vendredi", time: "7:30-12:00 / 13:30-17:00" },
      { day: "Samedi/Dimanche", time: "Fermé" },
    ],
  },
  stats: [
    {
      value: 1,
      label: "Clients Satisfaits",
      suffix: "K+",
      subtext: "Une expertise reconnue et appréciée par notre fidèle clientèle en Valais depuis 2018."
    },
    {
      value: 100,
      label: "Avis Clients",
      suffix: "+",
      subtext: "Nous mettons un point d'honneur à fournir un travail d'orfèvre pour chaque véhicule."
    },
  ],
  services: [
    {
      id: "tolerie",
      title: "Tôlerie",
      description: "Redonnez à votre véhicule son état d’origine.\n\nNous réparons tous types de carrosseries, des véhicules particuliers aux utilitaires, poids lourds et voitures de collection.\n\nNos spécialistes interviennent sur tous les dommages, du choc léger aux sinistres importants, en respectant parfaitement les formes, matériaux et standards constructeurs.",
      fullDescription: "Redonnez à votre véhicule son état d’origine.\n\nNous réparons tous types de carrosseries, des véhicules particuliers aux utilitaires, poids lourds et voitures de collection.\n\nNos spécialistes interviennent sur tous les dommages, du choc léger aux sinistres importants, en respectant parfaitement les formes, matériaux et standards constructeurs.",
      image: "/services/tolerie.jpeg",
      icon: "Wrench",
    },
    {
      id: "peinture",
      title: "Peinture",
      description: "Une finition parfaite, comme à l’origine.\n\nTous travaux de peinture automobile sont réalisés avec une exigence maximale de précision afin de restituer l’aspect d’origine de votre véhicule.\n\nGrâce à des technologies de teintes assistées par ordinateur et à une cabine de peinture dernière génération, une correspondance parfaite des couleurs et une finition irréprochable sont garanties.",
      fullDescription: "Une finition parfaite, comme à l’origine.\n\nTous travaux de peinture automobile sont réalisés avec une exigence maximale de précision afin de restituer l’aspect d’origine de votre véhicule.\n\nGrâce à des technologies de teintes assistées par ordinateur et à une cabine de peinture dernière génération, une correspondance parfaite des couleurs et une finition irréprochable sont garanties.",
      image: "/services/peinture.jpeg",
      icon: "PaintBrush",
    },
    {
      id: "debosselage",
      title: "Débosselage sans peinture",
      description: "Une réparation rapide et invisible pour les impacts de grêle.\n\nLe débosselage sans peinture permet d’éliminer efficacement les bosses causées par les grêlons sur la carrosserie sans avoir recours à une intervention de peinture.\n\nGrâce à des techniques précises et des outils spécialisés, la tôle est délicatement remise en forme tout en conservant la peinture d’origine du véhicule.",
      fullDescription: "Une réparation rapide et invisible pour les impacts de grêle.\n\nLe débosselage sans peinture permet d’éliminer efficacement les bosses causées par les grêlons sur la carrosserie sans avoir recours à une intervention de peinture.\n\nGrâce à des techniques précises et des outils spécialisés, la tôle est délicatement remise en forme tout en conservant la peinture d’origine du véhicule.",
      image: "/services/debosselage.jpeg",
      icon: "Wrench",
    },
    {
      id: "pare-brise",
      title: "Pare-brise",
      description: "Réparation ou remplacement rapide de votre vitrage automobile.\n\nImpact, fissure ou pare-brise endommagé : une intervention rapide permet de garantir votre sécurité et votre visibilité sur la route.\n\nTous types de vitrages sont pris en charge, quelle que soit la marque ou le modèle du véhicule.",
      fullDescription: "Réparation ou remplacement rapide de votre vitrage automobile.\n\nImpact, fissure ou pare-brise endommagé : une intervention rapide permet de garantir votre sécurité et votre visibilité sur la route.\n\nTous types de vitrages sont pris en charge, quelle que soit la marque ou le modèle du véhicule.",
      image: "/services/pare-brise.jpeg",
      icon: "Eyeglasses",
    },
    {
      id: "reparations",
      title: "Réparations spécifiques",
      description: "Des solutions sur mesure pour chaque véhicule.\n\nNous réalisons une large gamme d’interventions destinées à restaurer, améliorer ou personnaliser votre véhicule avec un niveau d’exigence professionnel.\n\nNous intervenons aussi bien sur les véhicules automobiles que sur des équipements spécifiques, y compris dans le domaine aéronautique.",
      fullDescription: "Des solutions sur mesure pour chaque véhicule.\n\nNous réalisons une large gamme d’interventions destinées à restaurer, améliorer ou personnaliser votre véhicule avec un niveau d’exigence professionnel.\n\nNous intervenons aussi bien sur les véhicules automobiles que sur des équipements spécifiques, y compris dans le domaine aéronautique.",
      image: "/services/reparations.jpeg",
      icon: "Sparkle",
    },
    {
      id: "jantes",
      title: "Jantes",
      description: "Redonnez à vos jantes leur aspect d’origine ou personnalisez leur style.\n\nLes dommages causés par les trottoirs, impacts ou usure peuvent être réparés avec précision afin de retrouver une finition parfaite.\n\nIl est également possible de transformer l’esthétique de vos jantes grâce à une mise en peinture personnalisée selon vos envies.",
      fullDescription: "Redonnez à vos jantes leur aspect d’origine ou personnalisez leur style.\n\nLes dommages causés par les trottoirs, impacts ou usure peuvent être réparés avec précision afin de retrouver une finition parfaite.\n\nIl est également possible de transformer l’esthétique de vos jantes grâce à une mise en peinture personnalisée selon vos envies.",
      image: "/services/jantes.jpeg",
      icon: "Disc",
    },
    {
      id: "polissage",
      title: "Polissage & Lustrage",
      description: "Redonnez éclat et profondeur à votre carrosserie.\n\nLe polissage permet d’éliminer les micro-rayures, traces de lavage, oxydation et imperfections superficielles afin de retrouver une surface parfaitement lisse.\n\nLe lustrage vient ensuite sublimer la peinture en apportant brillance, protection et un effet miroir durable.",
      fullDescription: "Redonnez éclat et profondeur à votre carrosserie.\n\nLe polissage permet d’éliminer les micro-rayures, traces de lavage, oxydation et imperfections superficielles afin de retrouver une surface parfaitement lisse.\n\nLe lustrage vient ensuite sublimer la peinture en apportant brillance, protection et un effet miroir durable.",
      image: "/services/polissage.jpeg",
      icon: "Sparkle",
    },
  ],
  introduction: {
    title: "À Propos",
    subtitle: "Exigence, précision et qualité depuis 2018.",
    text: "Fondée en 2018, Carrosserie Elite met à disposition son expertise technique et des infrastructures modernes permettant la prise en charge complète de tous types de réparations automobiles, quelle que soit la marque ou le modèle du véhicule.\n\nChaque intervention est réalisée avec le souci du détail, dans le respect des standards constructeurs et des exigences de qualité les plus élevées.",
    aboutFeatures: [
      {
        title: "Expertise Technique",
        text: "Une équipe qualifiée assure un travail précis, soigné et durable, répondant aux normes professionnelles les plus strictes."
      },
      {
        title: "Mobilité Garantie",
        text: "Un véhicule de remplacement est mis à disposition durant toute la durée des réparations afin d’assurer votre mobilité."
      },
      {
        title: "Engagement Éco-Responsable",
        text: "Utilisation de peintures écologiques Sikkens AkzoNobel à base d’eau, réduisant l’impact environnemental tout en garantissant une finition premium."
      },
      {
        title: "Gestion Complète",
        text: "Prise en charge intégrale de votre sinistre, avec gestion directe des démarches auprès de votre assurance."
      }
    ]
  },
  features: [
    {
      title: "Expertise Technique",
      description: "Une équipe qualifiée assure un travail précis, soigné et durable, répondant aux normes professionnelles les plus strictes.",
      icon: "Wrench"
    },
    {
      title: "Mobilité Garantie",
      description: "Un véhicule de remplacement est mis à disposition durant toute la durée des réparations afin d’assurer votre mobilité.",
      icon: "Car"
    },
    {
      title: "Engagement Éco-Responsable",
      description: "Utilisation de peintures écologiques Sikkens AkzoNobel à base d’eau, réduisant l’impact environnemental.",
      icon: "Sparkle"
    },
    {
      title: "Gestion Complète",
      description: "Prise en charge intégrale de votre sinistre, avec gestion directe des démarches auprès de votre assurance.",
      icon: "ShieldCheck"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Restauration Complète",
      category: "Peinture & Tôlerie",
      description: "Transformation majeure d'un véhicule avec remise à neuf intégrale de la carrosserie.",
      image: "/galerie/Elite1.jpg",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: 2,
      title: "Design & Couleur",
      category: "Finition Premium",
      description: "Application de teintes exclusives et finitions de haute précision.",
      image: "/galerie/Elite2.jpg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      title: "Précision Technique",
      category: "Tôlerie",
      description: "Redressage et alignement parfait des éléments de carrosserie.",
      image: "/galerie/Elite3.jpg",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      id: 4,
      title: "Éclat & Brillance",
      category: "Polissage",
      description: "Traitement de surface pour un rendu miroir et une protection durable.",
      image: "/galerie/Elite4.jpg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 5,
      title: "Détails Finitions",
      category: "Expertise",
      description: "Souci du détail sur chaque centimètre carré du véhicule.",
      image: "/galerie/Elite5.jpg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 6,
      title: "Transformation Finale",
      category: "Peinture",
      description: "Résultat irréprochable après passage dans nos cabines de peinture.",
      image: "/galerie/Elite6.jpg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 7,
      title: "Passion Automobile",
      category: "Restauration",
      description: "Redonner vie aux classiques avec le plus grand soin.",
      image: "/galerie/Elite7.jpg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 8,
      title: "Excellence Valaisanne",
      category: "Service Premium",
      description: "La qualité Carrosserie Elite au service de votre véhicule.",
      image: "/galerie/Etlite8.jpg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 9,
      title: "Finition de Prestige",
      category: "Restauration",
      description: "Un souci du détail poussé à l'extrême pour des véhicules d'exception.",
      image: "/galerie/elite9.jpeg",
      span: "md:col-span-1 md:row-span-1"
    }
  ]
};
