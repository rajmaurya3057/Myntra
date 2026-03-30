/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const journeyStages = [
  {
    id: 1,
    title: "Awareness",
    actions: ["Browsing social media ads", "Seeing influencer recommendations", "Searching for specific brands"],
    touchpoints: "Instagram, YouTube, Google Search",
    emotion: "Curious",
    emoji: "😊",
    sentiment: "positive",
    painPoints: ["Ad fatigue", "Irrelevant recommendations"]
  },
  {
    id: 2,
    title: "Consideration",
    actions: ["Filtering products", "Reading reviews", "Comparing prices", "Checking size charts"],
    touchpoints: "Myntra App, Product Detail Page",
    emotion: "Confused",
    emoji: "😕",
    sentiment: "neutral",
    painPoints: ["Choice overload", "Conflicting reviews", "Size uncertainty"]
  },
  {
    id: 3,
    title: "Purchase",
    actions: ["Adding to cart", "Applying coupons", "Selecting payment method", "Completing checkout"],
    touchpoints: "Cart Page, Payment Gateway",
    emotion: "Anxious",
    emoji: "😰",
    sentiment: "negative",
    painPoints: ["Payment failure fears", "Hidden charges", "Coupon invalidity"]
  },
  {
    id: 4,
    title: "Usage",
    actions: ["Receiving the package", "Unboxing", "Trying on the product", "Checking quality"],
    touchpoints: "Delivery Personnel, Home Environment",
    emotion: "Disappointed",
    emoji: "😢",
    sentiment: "negative",
    painPoints: ["Size mismatch", "Color variation from photos", "Quality issues"]
  },
  {
    id: 5,
    title: "Post-Use",
    actions: ["Initiating return", "Writing a review", "Contacting support"],
    touchpoints: "Return Portal, Customer Support Chat",
    emotion: "Frustrated",
    emoji: "😡",
    sentiment: "negative",
    painPoints: ["Complex return process", "Delayed refunds", "Unhelpful support"]
  }
];

export const painPoints = [
  {
    id: 1,
    title: "Product Choice Overload",
    icon: "Layers",
    emotion: "Overwhelmed",
    emoji: "😰",
    hmw: [
      "How might we simplify the browsing experience to reduce decision fatigue?",
      "How might we help users narrow down choices based on their unique style profile?",
      "How might we use AI to curate a 'Top 3' selection for specific needs?"
    ]
  },
  {
    id: 2,
    title: "Trust & Authenticity Concerns",
    icon: "ShieldCheck",
    emotion: "Skeptical",
    emoji: "🤨",
    hmw: [
      "How might we verify the authenticity of high-end brands more transparently?",
      "How might we showcase real-life customer photos more prominently?",
      "How might we implement a 'Trust Score' for third-party sellers?"
    ]
  },
  {
    id: 3,
    title: "Size and Fit Uncertainty",
    icon: "Ruler",
    emotion: "Anxious",
    emoji: "😰",
    hmw: [
      "How might we provide more accurate size recommendations based on body measurements?",
      "How might we visualize how a garment fits different body types?",
      "How might we leverage AR to allow users to 'try on' clothes virtually?"
    ]
  },
  {
    id: 4,
    title: "Product Info & Review Reliability",
    icon: "Info",
    emotion: "Doubtful",
    emoji: "🤔",
    hmw: [
      "How might we filter out fake or incentivized reviews?",
      "How might we standardize product descriptions for better comparison?",
      "How might we highlight reviews from users with similar body profiles?"
    ]
  },
  {
    id: 5,
    title: "Checkout & Payment Anxiety",
    icon: "CreditCard",
    emotion: "Stressed",
    emoji: "😫",
    hmw: [
      "How might we make the checkout process feel more secure and transparent?",
      "How might we reduce the number of steps required to complete a purchase?",
      "How might we provide real-time updates on payment processing status?"
    ]
  },
  {
    id: 6,
    title: "Return & Refund Frustration",
    icon: "RefreshCcw",
    emotion: "Frustrated",
    emoji: "😡",
    hmw: [
      "How might we make the return request process a single-click experience?",
      "How might we provide instant refunds to the user's wallet?",
      "How might we use AI to predict and prevent returns before they happen?"
    ]
  }
];

export const teamIdeas = {
  "Raj": [
    { title: "AI Stylist Bot", description: "A chatbot that suggests outfits based on the user's calendar events.", category: "AI" },
    { title: "Virtual Trial Room", description: "Using AR to see how clothes look on a 3D avatar of the user.", category: "UX" },
    { title: "Authenticity QR Codes", description: "Scan a code on the product to see its journey from factory to doorstep.", category: "Trust" },
    { title: "One-Tap Checkout", description: "Bypassing the cart for immediate purchase of saved items.", category: "Checkout" },
    { title: "Instant Refund Wallet", description: "Refunds credited to Myntra Credit as soon as the courier picks up the item.", category: "Post-Purchase" }
  ],
  "Suyash": [
    { title: "Fit-Match Community", description: "Connect with users of similar body types to see their purchases.", category: "Trust" },
    { title: "Dynamic Size Charts", description: "Size charts that adjust based on the brand's specific fit history.", category: "UX" },
    { title: "Video Reviews Only", description: "A section dedicated to short-form video reviews from verified buyers.", category: "Trust" },
    { title: "Gamified Checkout", description: "Earn points for completing checkout within a certain time limit.", category: "Checkout" },
    { title: "Eco-Friendly Returns", description: "Discounts for users who choose to drop off returns at local hubs.", category: "Post-Purchase" }
  ],
  "Aquib": [
    { title: "Voice-Activated Search", description: "Search for products using natural language voice commands.", category: "AI" },
    { title: "Fabric Feel Descriptions", description: "Using haptic feedback or detailed texture videos to convey fabric feel.", category: "UX" },
    { title: "Seller Rating Transparency", description: "Detailed breakdown of seller performance over the last 12 months.", category: "Trust" },
    { title: "Biometric Payment", description: "Using FaceID or Fingerprint for ultra-secure and fast payments.", category: "Checkout" },
    { title: "Return Tracking Map", description: "Real-time map showing where the returned item is in the process.", category: "Post-Purchase" }
  ],
  "Muntazir": [
    { title: "Style Quiz Onboarding", description: "A visual quiz that determines the user's aesthetic upon first login.", category: "AI" },
    { title: "Comparison Matrix", description: "A tool to compare up to 4 items side-by-side with key specs.", category: "UX" },
    { title: "Verified Buyer Badges", description: "Special badges for reviews from users who have kept the item for 30+ days.", category: "Trust" },
    { title: "Price Drop Alerts", description: "Instant notifications when a cart item's price falls below a threshold.", category: "Checkout" },
    { title: "Home Pickup Scheduling", description: "Flexible 2-hour windows for return pickups chosen by the user.", category: "Post-Purchase" }
  ],
  "Fashatullah": [
    { title: "Occasion-Based Filters", description: "Filters like 'Wedding Guest', 'Job Interview', or 'Beach Day'.", category: "UX" },
    { title: "Size Recommender 2.0", description: "Uses photo analysis to suggest the perfect size.", category: "AI" },
    { title: "Blockchain Authenticity", description: "Using NFT-based certificates for luxury item authenticity.", category: "Trust" },
    { title: "Split Payment Options", description: "Allowing users to split the bill between two cards or UPI IDs.", category: "Checkout" },
    { title: "Review Reward System", description: "Incentivizing detailed reviews with photos through loyalty points.", category: "Post-Purchase" }
  ]
};

export const affinityClusters = [
  {
    title: "Trust & Authenticity Concerns",
    color: "bg-blue-100 border-blue-400",
    issues: ["Fake reviews", "Counterfeit products", "Seller reliability", "Image vs Reality"],
    insight: "Users need tangible proof of authenticity and real-world validation before committing to a purchase."
  },
  {
    title: "Product Selection Anxiety",
    color: "bg-yellow-100 border-yellow-400",
    issues: ["Too many options", "Decision paralysis", "Filtering complexity", "Style confusion"],
    insight: "The abundance of choice is a double-edged sword; users need curation to feel confident in their selection."
  },
  {
    title: "Information & Transparency Gaps",
    color: "bg-green-100 border-green-400",
    issues: ["Vague descriptions", "Size chart inconsistencies", "Fabric quality doubt", "Hidden costs"],
    insight: "Detailed, standardized, and honest information is the foundation of a low-anxiety shopping experience."
  },
  {
    title: "Delivery & Return Issues",
    color: "bg-orange-100 border-orange-400",
    issues: ["Slow refunds", "Complex return UI", "Pickup delays", "Packaging waste"],
    insight: "The post-purchase experience is just as critical for brand loyalty as the purchase itself."
  },
  {
    title: "Navigation & Purchase Friction",
    color: "bg-red-100 border-red-400",
    issues: ["Slow checkout", "Payment failures", "Coupon hunting", "App lag"],
    insight: "Any friction during the final steps of the journey significantly increases the likelihood of cart abandonment."
  }
];

export const solutions = [
  {
    id: "ai-size",
    title: "AI Size Recommender",
    description: "Personalized fit suggestions based on height, weight, and brand history.",
    linkedHmw: "How might we provide more accurate size recommendations based on body measurements?"
  },
  {
    id: "trust-badge",
    title: "Trust Score Badge",
    description: "A dynamic score for every product based on verified reviews and seller history.",
    linkedHmw: "How might we implement a 'Trust Score' for third-party sellers?"
  },
  {
    id: "simple-checkout",
    title: "Simplified Checkout",
    description: "A streamlined 3-step process to minimize anxiety and friction.",
    linkedHmw: "How might we reduce the number of steps required to complete a purchase?"
  },
  {
    id: "return-portal",
    title: "Easy Return Portal",
    description: "One-click return requests with instant progress tracking.",
    linkedHmw: "How might we make the return request process a single-click experience?"
  }
];
