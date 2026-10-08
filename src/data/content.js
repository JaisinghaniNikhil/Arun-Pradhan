
export const content = {
  ConsultantName: "Arun Pradhan",
  tagline: "LIC & Health Insurance Consultant",
  navButton: "Contact Arun",
  phone: "9819488447",                 
  whatsappNumber: "9819488447",

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    
  ],

  hero: {
    headline: "A clear conversation about",
    accent: "your family's cover",
    text: "A home loan, school fees, hospital bills. Let's talk through what your family may need and what fits your budget.",
    button: "Talk with Arun",
  },

  stats: [
    { value: 25, suffix: "+", label: "Years in the field" },
    { value: 6000, suffix: "+", label: "Families served" },
    { value: 11, suffix: "x", label: "MDRT qualifier" },
  ],

  whyArun: [
    {
      tab: "Experience",
      image: "/images/why-experience.webp",
      imageAlt: "An Consultant meeting a couple in a calm office",
      heading: "A conversation shaped by experience",
      text: "Arun has worked in insurance for over 25 years and has qualified for MDRT 11 times. He has spoken with more than 6,000 families about the cover they need and the premium they can manage.",
    },
    {
      tab: "Guidance",
      image: "/images/why-guidance.webp",
      imageAlt: "Two people reviewing a document together at a table",
      heading: "Start with what matters at home",
      text: "A parent saving for college has different needs from a couple with a new home loan. Arun asks about your responsibilities and budget, then explains the options in everyday language.",
    },
    {
      tab: "Support",
      image: "/images/why-support.webp",
      imageAlt: "A woman relaxing at home while on a phone call",
      heading: "Help when you have a question",
      text: "If you need help understanding a renewal or the insurer's claim process, you can speak with Arun. The insurer reviews and decides every claim under the policy terms.",
    },
  ],

  mentoring: {
    headline: "Sharing what he has learned with",
    accent: "Consultants",
    text: "Arun also trains new insurance Consultants in finding clients and building a practice, drawing on his own experience in the field.",
    button: "Learn About Mentoring",
  },

  servicesPreview: {
    label: "Our Services",
    heading: "Cover for the life",
    accent: "you're living",
    text: "A young family, a home loan, parents to care for, or retirement on the horizon. Each changes the questions to ask before choosing a policy.",
    button: "View All Plans",
    image: "/images/services-family.webp",
    imageAlt: "A family laughing together on a sofa at home",
    items: [
      { title: "Life cover", text: "Term insurance can help replace income for dependants. Check the cover period, exclusions and premium before you decide." },
      { title: "Savings plans", text: "Endowment and money-back plans combine insurance with savings. Review the benefit illustration and when money is payable." },
      { title: "Retirement", text: "Pension and annuity options may suit people planning an income after work. Check payout choices and access rules." },
      { title: "For children", text: "If school or college fees are a concern, compare when benefits are paid with the years your child may need them." },
      { title: "Whole life", text: "These plans can keep life cover in place for longer. Look closely at premium duration and policy conditions." },
      { title: "Health cover", text: "Care Health policies can help with eligible hospital bills. Check waiting periods, exclusions, room limits and co-payments." },
    ],
  },

  whyArunHeading: {
    label: "Why Arun",
    heading: "Start with your family's",
    accent: "questions",
    linkText: "Meet Arun ›",
  },

  resources: {
    label: "Resources",
    heading: "Read up before",
    accent: "you decide",
    button: "View All Resources",
    readMore: "Read More ›",
    items: [
      {
        category: "Insurance Basics",
        image: "/images/resource-1.webp",
        imageAlt: "A father carrying his son on his shoulders in a park",
        title: "Term Plan or Whole Life: Which Cover Fits Your Family?",
        text: "A parent with a home loan may need cover for different years than someone planning for retirement.",
        href: "/resources",
      },
      {
        category: "Health Insurance",
        image: "/images/resource-2.webp",
        imageAlt: "A mother and her daughter resting on a park bench",
        title: "How to Choose a Health Plan for Your Family",
        text: "Waiting periods, room limits and exclusions can affect what you pay during a hospital stay.",
        href: "/resources",
      },
      {
        category: "Financial Planning",
        image: "/images/resource-3.webp",
        imageAlt: "An elderly couple having tea together on a balcony",
        title: "Why Starting Early Makes Retirement Easier",
        text: "Start by listing the monthly costs you expect and the income you may have after work.",
        href: "/resources",
      },
    ],
  },

  achievements: {
    label: "Achievements",
    heading: "A record of work",
    accent: "over the years",
    items: [
      { title: "MDRT", value: "11x", text: "Arun has qualified for the Million Dollar Round Table 11 times." },
      { title: "Experience", value: "25+", text: "Years advising families on life and health insurance." },
      { title: "Mentorship", value: "Mentor", text: "He also trains new Consultants in finding clients and building a practice." },
    ],
  },
  // =========================================================
// PASTE THIS BLOCK into src/data/content.js, just before the
// final closing "};"  (top level, same level as hero / about / contact).
// =========================================================

  licSpotlight: {
    label: "LIC at a glance",
    heading: "A Name Families Have Trusted for",
    accent: "70 Years",

    // the big "70" panel is built from text, so it needs no image
    anniversary: {
      value: 70,
      valueLabel: "Years of LIC of India",
      title: "Serving Indian families since 1956",
      text: "LIC of India was established in 1956 and completes 70 years in 2026. For more than 20 years, Arun has helped families choose LIC plans that fit their needs.",
    },

    // OPTIONAL poster row. It stays hidden while this list is empty.
    // Add a poster ONLY if it is an official LIC creative that LIC allows agents to publish.
    // =========================================================
// In src/data/content.js, inside  licSpotlight: { ... },
// REPLACE the three lines/blocks  creativesTitle,  creatives: [ ... ],
// with everything below. Leave label, heading, accent, anniversary and disclaimer alone.
// =========================================================

    creativesTitle: "LIC in focus",
    creativesButton: "View Plans",   // used when a poster has no buttonText of its own

    // Each poster is a card with a button underneath. Clicking anywhere on the card goes to /services.
    //   note       = optional small caution line shown under the caption
    //   buttonText = optional, e.g. "View Savings Plans"
    //   href       = optional, defaults to "/services"
    creatives: [
      {
        image: "/images/70-years.webp",
        title: "LIC celebrates 70 years",
        caption: "1956 to 2026.",
        buttonText: "Explore LIC Plans",
        alt: "LIC 70 years of trust and commitment celebration poster",
      },
      {
        image: "/images/jeevan-utsav.webp",
        title: "Jeevan Utsav, single premium",
        caption: "Please read the official brochure for benefits and terms.",
        note: "Benefits are as per the official brochure and policy terms.",
        buttonText: "View Savings Plans",
        alt: "LIC Jeevan Utsav single premium plan poster in Marathi",
      },
      {
        image: "/images/nivesh-plus.webp",
        title: "Nivesh Plus, unit-linked plan",
        caption: "A market-linked plan with life cover.",
        note: "Market-linked plan: fund value is not guaranteed and depends on market performance. Please read the official brochure before buying.",
        buttonText: "View Unit Linked Plans",
        alt: "LIC Nivesh Plus unit-linked plan poster",
      },
    ],
  },

  closingCta: {
    heading: "Have a question about",
    accent: "your cover?",
    text: "Bring your existing policy or tell Arun what you're planning for. He can explain the options and what to check in the policy documents.",
    primaryButton: "Talk to Arun",
    secondaryButton: "Send an enquiry",
  },

  testimonials: {
    label: "Client feedback",
    heading: "What clients",
    accent: "say",
    intro: "Reviews will appear here once clients approve the wording and attribution.",
    cardTitle: "Approved client review goes here.",
    cardText: "Replace this slot with a real client’s words. Confirm their approval and how they want their name shown before publishing.",
    cardFooter: "Review wording and attribution pending approval",
    note: "These are placeholders, not client reviews. Add only genuine feedback approved for publication.",
    reviewSlots: Array.from({ length: 10 }, (_, index) => ({
      id: `review-${index + 1}`,
      label: `Review slot ${String(index + 1).padStart(2, "0")} / 10`,
      status: "Awaiting approved review",
    })),
  },

  
  footer: {
    quote: "Protect what matters today. Plan thoughtfully for tomorrow.",
    quickLinksTitle: "Quick Links",
    contactTitle: "+91 98194 88447",
    address: "LIC Br. 928, Metropol Building, 1st Floor, Next to Jhunjhunwala College, Ghatkopar (West), Mumbai – 400 086.",
    email: "arunisukuri@yahoo.co.in",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5180.525909636652!2d72.91141653645228!3d19.084633408817503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLIC%20Br.%20928%2C%20Metropol%20Building%2C%201st%20Floor%2C%20Next%20to%20Jhunjhunwala%20College%2C%20Ghatkopar%2C%20Mumbai%20%E2%80%93%20400%20086.!5e0!3m2!1sen!2sin!4v1791444310107!5m2!1sen!2sin",
    disclaimer: "Insurance is the subject matter of solicitation. Arun Pradhan is an authorized agent of LIC and Care Health Insurance, not an insurer. Read the relevant policy documents for terms, exclusions, limits and risks before buying. The insurer decides on all claims.",
  },

    servicesPage: {
    label: "Our Services",
    heading: "Find the Right Cover for Your",
    accent: "Family",
    text: "Compare life and health insurance options from LIC and Care Health. Read the policy details carefully, and ask Arun about anything you would like explained.",
    askButton: "Ask Arun",
    knowMore: "Know More ›",
    showMore: "Show More Plans",
    empty: "Plans in this category will be added soon.",
    image: "/images/services-hero.webp",                                  // <- add
    imageAlt: "A family walking together along a quiet path at dusk",        // <- add
  },

  insurers: {
    label: "Insurance partners",
    heading: "LIC and Care Health",
    accent: "insurance options",
    linkText: "View Plans ›",
    
    items: [
      {
        name: "Life Insurance Corporation of India",
        short: "LIC",
        type: "Life insurance",
        logo: "/images/lic.webp",
        text: "India's largest life insurer, offering plans for protection, savings, retirement and your children's future.",
      },
      {
        name: "Care Health Insurance",
        short: "Care Health",
        type: "Health insurance",
        logo: "/images/care.webp",
        text: "A dedicated health insurer offering medical cover for individuals, families and senior citizens.",
      },
    ],
  },

  about: {

    header: {
      label: "About Arun",
      heading: "The Story Behind",
      accent: "Arun Pradhan",
      text: "Arun came to Mumbai from Odisha in 1999 and began work as a cloth factory helper. Today, he advises families on life and health insurance.",
      image: "/images/about-hero.webp",   
      imageAlt: "The Mumbai skyline at dusk",
    },

    story: {
      label: "Who is Arun",
      heading: "An Insurance Consultant in",
      accent: "Mumbai",
      image: "",   // swap for a different photo of Arun when you have one
      imageAlt: "Arun Pradhan, LIC and health insurance Consultant",
      paragraphs: [
        "Arun Pradhan is a life and health insurance Consultant in Mumbai. He is associated with LIC of India and Care Health Insurance, and has worked with families for more than 25 years.",
        "He has guided over 6,000 families, qualified for MDRT 11 times, and is a member of LIC's Galaxy Club. In a meeting, he starts by asking what the family needs to protect and what premium fits the monthly budget.",
        "Arun also trains new insurance Consultants in client acquisition and building a practice. His story began in a cloth factory after he came to Mumbai from Odisha.",
      ],
    },

    // Only 1999 is a confirmed year. Replace "Early 2000s" with the exact year once Arun confirms it.
    journey: {
      label: "Arun's story",
      heading: "A career built",
      accent: "step by step",
      items: [
        { when: "1999", title: "A new start in Mumbai", text: "Arun came from Odisha and began work as a cloth factory helper, earning ₹1,200 a month." },
        { when: "Early years", title: "Saving for a course", text: "He set aside part of his wages and enrolled in a management course in Mumbai." },
        { when: "Corporate career", title: "Working at Reliance", text: "He joined Reliance on a monthly salary of ₹40,000, then decided to build a practice of his own." },
        { when: "Early 2000s", title: "Starting as an LIC Consultant", text: "Arun chose life insurance and began advising families. The early years took patience and persistence." },
        { when: "Growth years", title: "Meeting families, one by one", text: "His practice grew through conversations with families and the people they referred." },
        { when: "Recognition", title: "MDRT and LIC Galaxy Club", text: "Arun has qualified for MDRT 11 times and is a member of LIC's Galaxy Club." },
        { when: "Today", title: "Advising and teaching", text: "He advises families on insurance and trains new Consultants." },
      ],
    },

    mentoring: {
      heading: "Training the Next Generation of",
      accent: "Consultants",
      text: "Arun trains new insurance Consultants in finding clients and running their practice. He shares lessons from his own work in the field.",
      button: "Talk to Arun",
    },
    gallery: {
      label: "Achievements",
      heading: "Awards and Recognition",
      accent: "Earned Over the Years",
      note: "Tap any image to view it larger.",

      items: [
        {
          image: "/images/awards/lic-pooja-utsav-2016.webp",
          type: "certificate",
          title: "LIC Pooja Utsav Qualification",
          year: "2016",
          by: "LIC of India, Branch 928",
          caption: "Recognised for qualifying in the Pooja Utsav competition; certificate dated 9 January 2016.",
          alt: "LIC Pooja Utsav Qualification certificate awarded to Arun Kumar Pradhan"
        },
        {
          image: "/images/awards/lic-big-business-day-2025.webp",
          type: "certificate",
          title: "LIC Big Business Day",
          year: "2025",
          by: "LIC of India, Mumbai Division II",
          caption: "Recognised for participation and contribution of new business on 21 July 2025.",
          alt: "LIC Big Business Day certificate awarded to Arun Kumar Pradhan"
        },
        {
          image: "/images/awards/lic-galaxy-club-2024-25.webp",
          type: "certificate",
          title: "LIC Galaxy Club Membership",
          year: "2024–25",
          by: "LIC of India",
          caption: "Awarded Galaxy Club membership for contributions to promoting life insurance business in 2024–25.",
          alt: "LIC Galaxy Club Membership certificate awarded to Arun Kumar Pradhan"
        },
        {
          image: "/images/awards/lic-shatakveer-2022-23.webp",
          type: "certificate",
          title: "LIC Shatakveer Agent",
          year: "2022–23",
          by: "LIC of India, Mumbai Division II",
          caption: "Certificate of appreciation recognising Shatakveer Agent status for financial year 2022–23.",
          alt: "LIC Shatakveer Agent certificate awarded to Arun Kumar Pradhan"
        },
        {
          image: "/images/awards/lic-flag-off-corporate-trophy-2015.webp",
          type: "certificate",
          title: "LIC Flag Off Corporate Trophy",
          year: "2015",
          by: "LIC of India, Branch 928",
          caption: "Recognised as a winner of the Flag Off Corporate Trophy 2015; certificate dated 2 July 2015.",
          alt: "LIC Flag Off Corporate Trophy certificate awarded to Arun Kumar Pradhan"
        },
        {
          image: "/images/awards/lic-shatakveer-108-policies-2015-16.webp",
          type: "certificate",
          title: "LIC Shatakveer Agent - 108 Policies",
          year: "2015–16",
          by: "LIC of India, Branch 928",
          caption: "Recognised for completing 108 policies during financial year 2015–16.",
          alt: "LIC Shatakveer Agent - 108 Policies certificate awarded to Arun Kumar Pradhan"
        },
        {
          image: "/images/awards/lic-branch-928-60th-anniversary.webp",
          type: "certificate",
          title: "LIC Certificate of Excellence",
          year: "",
          by: "LIC of India, Branch 928",
          caption: "Recognised for service and dedication on the occasion of Branch 928’s 60th anniversary.",
          alt: "LIC Certificate of Excellence certificate awarded to Arun Kumar Pradhan"
        },
        {
          image: "/images/awards/lic-shatakveer-110-policies-2016-17.webp",
          type: "certificate",
          title: "LIC Shatakveer Outstanding Achievement",
          year: "2016–17",
          by: "LIC of India, Mumbai Division II",
          caption: "Recognised for completing 110 policies as of 31 December 2016; certificate dated 5 January 2017.",
          alt: "LIC Shatakveer Outstanding Achievement certificate awarded to Arun Kumar Pradhan"
        },
        {
          image: "/images/awards/lic-guru-purnima-appreciation.webp",
          type: "certificate",
          title: "LIC Guru Purnima Appreciation",
          year: "",
          by: "LIC of India, Branch 928",
          caption: "Gratitude Towards Guru certificate recognising service and dedication on Guru Purnima.",
          alt: "LIC Guru Purnima Appreciation certificate awarded to Arun Kumar Pradhan"
        },
        {
          image: "/images/awards/lic-number-one-nop-2024-25.webp",
          type: "certificate",
          title: "LIC No. 1 on NOP",
          year: "2024–25",
          by: "LIC of India, Branch 928",
          caption: "Certificate of appreciation for No. 1 on NOP for financial year 2024–25, as of 22 November 2024.",
          alt: "LIC No. 1 on NOP certificate awarded to Arun Kumar Pradhan"
        },
        {
          image: "/images/awards/lic-branch-928-presentation.webp",
          type: "photo",
          title: "LIC Branch 928 Presentation",
          year: "",
          by: "LIC of India, Branch 928",
          caption: "Group presentation photograph at LIC Branch 928, Ghatkopar East.",
          alt: "Group presentation at LIC Branch 928, Ghatkopar East"
        },
        {
          image: "/images/awards/lic-guinness-record-participation-2025.webp",
          type: "certificate",
          title: "LIC Guinness World Records Attempt Participation",
          year: "2025",
          by: "LIC of India",
          caption: "Recognised for contributing to LIC’s record effort of 588,107 life insurance policies sold across India in 24 hours on 20 January 2025.",
          alt: "LIC Guinness World Records Attempt Participation certificate awarded to Arun Kumar Pradhan"
        }
      ]
    },
  },

  contact: {
    header: {
      label: "Contact",
      heading: "Let's Talk About Your",
      accent: "Family's Cover",
      text: "Call, message or visit Arun in Ghatkopar. Tell him what you are planning for, or bring a question about an existing policy.",
      image: "/images/contact-hero.webp",
      imageAlt: "A desk with a notebook and phone in warm window light",
    },

    detailsTitle: "Reach Arun",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    whatsappText: "Chat with Arun",
    emailLabel: "Email",
    visitLabel: "Visit the office",
    hours: "TODO office hours, e.g. Monday to Saturday, 10 am to 6 pm", 
    directionsButton: "Get Directions",

    form: {
      title: "Send Arun a message",
      intro: "Tell Arun what you would like to discuss. Your message will open in WhatsApp.",
      nameLabel: "Your name",
      phoneLabel: "Phone number",
      topicLabel: "I am interested in",
      topics: ["Life insurance", "Health insurance", "Retirement planning", "Children's plan", "Not sure yet"],
      messageLabel: "Message (optional)",
      button: "Send on WhatsApp",
      note: "Your details are used to reply to this enquiry. The message opens in WhatsApp; you choose whether to send it. Please do not include policy or bank details.",
      
    },

    steps: {
      label: "How it works",
      heading: "A Consultation, Made",
      accent: "Straightforward",
      items: [
        { title: "Tell Arun what's on your mind", text: "Share what you are planning for and what your family already has in place." },
        { title: "Go through the details", text: "Arun can explain the options, premiums and policy conditions in plain language." },
        { title: "Take time to decide", text: "Read the documents and ask questions before you choose. You are not required to buy a policy." },
      ],
    },
  },

};
