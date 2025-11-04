import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: 'auto-cpap',
    name: 'Auto CPAP',
    slug: 'auto-cpap',
    shortDescription: 'Travancore Medical System offers advanced automatic continuous positive airway pressure devices for effective sleep apnea treatment. Premium quality Auto CPAP machines with intelligent pressure adjustment.',
    fullDescription: 'Our Auto CPAP machines automatically adjust pressure levels throughout the night to provide optimal therapy for sleep apnea. These intelligent devices monitor your breathing patterns and deliver the precise pressure needed for comfortable, effective treatment. Auto CPAP devices are ideal for patients who experience varying pressure needs throughout the night, adapting to positional changes, sleep stages, and varying airway resistance.',
    features: [
      'Automatic pressure adjustment throughout the night',
      'Advanced comfort features for enhanced therapy compliance',
      'Ultra-quiet operation (< 30 dBA)',
      'Comprehensive data recording and monitoring',
      'Integrated humidification options',
      'Travel-friendly compact models available',
      'SmartRamp technology for gradual pressure increase',
      'Leak compensation for optimal therapy'
    ],
    benefits: [
      'Improved sleep quality and daytime alertness',
      'Reduced snoring and breathing interruptions',
      'Lower risk of cardiovascular complications',
      'Enhanced therapy compliance through comfort features',
      'Better oxygen saturation throughout the night',
      'Customizable therapy settings for individual needs'
    ],
    whatsIncluded: [
      'Auto CPAP machine',
      'Standard tubing',
      'Power adapter and cable',
      'User manual and setup guide',
      'Travel case (selected models)',
      'SD card for data storage',
      '1-year warranty card'
    ],
    category: 'sleep-apnea',
    image: '/images/products/cpap.jpeg',
    position: 'top',
    images: [
      '/images/products/cpap.jpeg'
    ],
    price: 'On Request',
    inStock: true,
    manufacturer: 'ResMed',
    seoTitle: 'Auto CPAP Machine for Sleep Apnea | Travancore Medical System',
    seoDescription: 'Buy premium Auto CPAP machines for effective sleep apnea treatment. Automatic pressure adjustment, quiet operation, and advanced monitoring features.',
    metaKeywords: ['Auto CPAP', 'CPAP machine', 'Sleep apnea treatment', 'Auto adjusting CPAP', 'CPAP device India']
  },
  {
    id: 'bipap',
    name: 'BiPAP',
    slug: 'bipap',
    shortDescription: 'Travancore Medical System provides premium Bi-level positive airway pressure devices for comfortable respiratory support. Advanced BiPAP machines with dual pressure settings.',
    fullDescription: 'BiPAP (Bi-level Positive Airway Pressure) machines deliver two different pressure levels - a higher pressure during inhalation (IPAP) and a lower pressure during exhalation (EPAP). This makes breathing more natural and comfortable, especially for patients who need higher pressure support or have difficulty exhaling against CPAP pressure. Our BiPAP devices feature advanced algorithms for optimal patient-ventilator synchrony.',
    features: [
      'Dual pressure settings (IPAP/EPAP)',
      'Enhanced patient comfort and compliance',
      'Adjustable pressure support (PS)',
      'Advanced ventilation modes (S, ST, T, CPAP)',
      'Built-in heated humidifier',
      'Comprehensive patient monitoring capabilities',
      'Backup respiratory rate support',
      'Auto-adjusting trigger and cycle sensitivity'
    ],
    benefits: [
      'More comfortable breathing during therapy',
      'Reduced work of breathing',
      'Effective for high-pressure requirements',
      'Better tolerance than standard CPAP',
      'Suitable for complex respiratory conditions',
      'Flexible therapy modes for different needs'
    ],
    whatsIncluded: [
      'BiPAP machine',
      'Standard CPAP tubing (22mm)',
      'Power adapter and cable',
      'Comprehensive user manual',
      'Warranty card (2-3 years)',
      'Reusable air filter',
      'Carrying case (selected models)'
    ],
    category: 'respiratory-care',
    image: '/images/products/bipap.jpg',
    position: 'top',
    images: [
      '/images/products/bipap.jpg'
    ],
    price: 'On Request',
    inStock: true,
    manufacturer: 'Philips Respironics',
    seoTitle: 'BiPAP Machine for Respiratory Care | Travancore Medical System',
    seoDescription: 'Premium BiPAP machines with dual pressure settings. Ideal for patients requiring bi-level ventilation support. Advanced features and comfortable therapy.',
    metaKeywords: ['BiPAP', 'BiPAP machine', 'Bi-level ventilation', 'Respiratory support', 'BiPAP India']
  },
  {
    id: 'oxygen-concentrator',
    name: 'Oxygen Concentrator',
    slug: 'oxygen-concentrator',
    shortDescription: 'Travancore Medical System offers reliable stationary oxygen concentrators for continuous home oxygen therapy. High-purity oxygen delivery systems for long-term respiratory care.',
    fullDescription: 'Our stationary oxygen concentrators provide a continuous supply of high-purity oxygen for patients requiring long-term oxygen therapy. These devices filter nitrogen from ambient air using advanced molecular sieve technology to deliver concentrated oxygen up to 95% purity. Ideal for home use, they offer quiet operation, energy efficiency, and low maintenance requirements. Designed for 24/7 operation with reliable performance.',
    features: [
      'High oxygen purity (up to 95%)',
      'Quiet operation (< 45 dBA)',
      'Energy-efficient design',
      'Continuous oxygen delivery',
      'Easy maintenance with simple filter replacement',
      'Long-lasting filters (6-12 months)',
      'Oxygen concentration indicator',
      'Low oxygen alarm system',
      'Portable casters for easy movement'
    ],
    benefits: [
      'Improved quality of life for oxygen-dependent patients',
      'Cost-effective alternative to oxygen cylinders',
      'Safe and reliable home oxygen therapy',
      'No need for frequent oxygen cylinder refills',
      'Consistent oxygen delivery',
      'Low operating costs'
    ],
    whatsIncluded: [
      'Oxygen concentrator unit',
      'Nasal cannula',
      'Air filter set',
      'Power cord',
      'User manual and maintenance guide',
      'Warranty card (2-3 years)',
      'Tubing and accessories'
    ],
    category: 'respiratory-care',
    image: '/images/products/oxygen.jpg',
    position: 'center',
    images: [
      '/images/products/oxygen.jpg'
    ],
    price: 'On Request',
    inStock: true,
    manufacturer: 'Invacare',
    seoTitle: 'Oxygen Concentrator for Home Use | Travancore Medical System',
    seoDescription: 'Buy premium oxygen concentrators for home oxygen therapy. High purity oxygen delivery, quiet operation, and reliable performance. Best prices in India.',
    metaKeywords: ['Oxygen concentrator', 'Home oxygen therapy', 'Oxygen machine', 'Oxygen concentrator India', 'Medical oxygen']
  },
  {
    id: 'home-sleep-study',
    name: 'Home Sleep Study',
    slug: 'home-sleep-study',
    shortDescription: 'Travancore Medical System provides comprehensive home sleep testing solutions for convenient sleep apnea diagnosis. Professional-grade portable sleep study devices.',
    fullDescription: 'Our Home Sleep Study devices allow patients to be tested for sleep apnea in the comfort of their own home. These portable diagnostic devices monitor key parameters including breathing patterns, oxygen levels, heart rate, and body position during sleep. The data collected helps healthcare providers diagnose sleep disorders and determine appropriate treatment plans without requiring an overnight stay in a sleep lab.',
    features: [
      'Easy-to-use portable device',
      'Comprehensive multi-channel sleep monitoring',
      'Oxygen saturation (SpO2) tracking',
      'Breathing pattern and flow analysis',
      'Heart rate and pulse monitoring',
      'Body position detection',
      'Automated and professional data analysis',
      'Detailed comprehensive sleep reports',
      'One-night test capability'
    ],
    benefits: [
      'Comfortable testing in familiar environment',
      'More natural sleep patterns',
      'Cost-effective alternative to lab studies',
      'Quick diagnosis and treatment planning',
      'Reduced waiting times',
      'Easy to use without technical expertise'
    ],
    whatsIncluded: [
      'Sleep study device',
      'Nasal cannula with pressure transducer',
      'SpO2 finger sensor',
      'Chest and abdomen belts',
      'Device charger',
      'Carrying case',
      'User instruction manual',
      'Data download software'
    ],
    category: 'diagnostics',
    image: '/images/products/home-sleep-study.jpg',
    position: 'top',
    images: [
      '/images/products/home-sleep-study.jpg'
    ],
    price: 'On Request',
    inStock: true,
    manufacturer: 'Philips Respironics',
    seoTitle: 'Home Sleep Study Device | Travancore Medical System',
    seoDescription: 'Professional home sleep study equipment for sleep apnea diagnosis. Portable, easy-to-use devices with comprehensive monitoring and analysis.',
    metaKeywords: ['Home sleep study', 'Sleep apnea test', 'Portable sleep monitor', 'Sleep diagnostics', 'Polysomnography']
  },
  {
    id: 'niv-mask',
    name: 'NIV Mask',
    slug: 'niv-mask',
    shortDescription: 'Travancore Medical System offers comfortable and effective non-invasive ventilation masks for CPAP/BiPAP therapy. Premium quality NIV masks with advanced sealing technology.',
    fullDescription: 'NIV (Non-Invasive Ventilation) masks are essential accessories for CPAP and BiPAP therapy. Our comprehensive range includes nasal masks, full face masks, nasal pillow masks, and hybrid masks to suit different patient needs and preferences. All masks are designed with advanced sealing technology for maximum comfort, minimal leakage, and optimal therapy effectiveness. Made from medical-grade materials for durability and skin compatibility.',
    features: [
      'Multiple mask types available (Nasal, Full Face, Pillow, Hybrid)',
      'Soft silicone cushions for comfort',
      'Minimal air leakage design',
      'Adjustable headgear for secure fit',
      'Easy to clean and maintain',
      'Hypoallergenic materials',
      'Quiet operation with diffused venting',
      'Quick-release magnetic clips',
      'Multi-size options for perfect fit'
    ],
    benefits: [
      'Improved therapy compliance through comfort',
      'Reduced skin irritation and pressure marks',
      'Minimal mask leaks for effective therapy',
      'Better sleep quality',
      'Easy maintenance and cleaning',
      'Long-lasting durability'
    ],
    whatsIncluded: [
      'Mask frame',
      'Cushion (size as per order)',
      'Headgear assembly',
      'Connector and swivel',
      'Storage pouch',
      'Instruction guide',
      'Size fitting guide'
    ],
    category: 'accessories',
    image: '/images/products/niv-mask.jpg',
    position: 'top',
    images: [
      '/images/products/niv-mask.jpg'
    ],
    price: 'On Request',
    inStock: true,
    manufacturer: 'ResMed',
    seoTitle: 'NIV Masks for CPAP BiPAP | Travancore Medical System',
    seoDescription: 'Buy comfortable NIV masks for CPAP and BiPAP therapy. Nasal, full face, and nasal pillow masks available. Best fit and comfort guaranteed.',
    metaKeywords: ['NIV mask', 'CPAP mask', 'BiPAP mask', 'Sleep apnea mask', 'Full face mask', 'Nasal mask']
  },
  {
    id: 'travel-cpap',
    name: 'Travel CPAP',
    slug: 'travel-cpap',
    shortDescription: 'Travancore Medical System provides compact and portable CPAP machines perfect for travelers and frequent movers. Lightweight travel CPAP devices with full therapy features.',
    fullDescription: 'Travel CPAP machines are lightweight, compact versions of standard CPAP devices designed for people on the go. These portable units maintain therapy effectiveness while being small enough to fit in a carry-on bag. Ideal for business travelers, vacationers, or anyone who needs to maintain their sleep therapy while away from home. Despite their size, they deliver full therapy features including pressure adjustment, humidification, and data tracking.',
    features: [
      'Ultra-compact lightweight design',
      'Lightweight construction (< 1 kg)',
      'Battery powered options for off-grid use',
      'AC/DC power compatible',
      'Travel case included',
      'Quiet operation',
      'Full therapy features in portable form',
      'International voltage compatibility',
      'Quick setup and teardown'
    ],
    benefits: [
      'Maintain therapy while traveling',
      'No interruption in sleep apnea treatment',
      'Compact and easy to carry',
      'Battery operation for camping/remote locations',
      'Same effectiveness as home units',
      'Peace of mind while away'
    ],
    whatsIncluded: [
      'Travel CPAP machine',
      'Compact tubing',
      'Travel power adapter',
      'Battery pack (selected models)',
      'Travel case',
      'Quick start guide',
      'International plug adapters'
    ],
    category: 'sleep-apnea',
    image: '/images/products/travel-cpap.jpg',
    position: 'center',
    images: [
      '/images/products/travel-cpap.jpg'
    ],
    price: 'On Request',
    inStock: true,
    manufacturer: 'ResMed',
    seoTitle: 'Travel CPAP Machine | Portable CPAP | Travancore Medical System',
    seoDescription: 'Buy portable travel CPAP machines. Compact, lightweight, and battery-powered devices perfect for maintaining sleep therapy on the go.',
    metaKeywords: ['Travel CPAP', 'Portable CPAP', 'Mini CPAP', 'Travel sleep apnea machine', 'Battery CPAP']
  },
  {
    id: 'portable-oxygen-concentrator',
    name: 'Portable Oxygen Concentrator',
    slug: 'portable-oxygen-concentrator',
    shortDescription: 'Travancore Medical System offers lightweight portable oxygen concentrators for active lifestyle and mobility. Battery-powered POCs with long battery life for freedom on the go.',
    fullDescription: 'Portable oxygen concentrators (POCs) provide freedom and mobility for patients who require supplemental oxygen. These battery-powered devices deliver oxygen on the go, allowing users to maintain their active lifestyle. Modern POCs are lightweight, quiet, and offer multiple flow settings and battery options. They use pulse-dose or continuous flow technology to deliver concentrated oxygen, enabling patients to travel, exercise, and participate in daily activities.',
    features: [
      'Ultra-lightweight design (2-5 kg)',
      'Long battery life (4-8 hours)',
      'Multiple flow settings',
      'Pulse-dose and continuous flow modes',
      'Trolley and backpack carry options',
      'FAA approved for air travel',
      'Quiet operation',
      'Easy-to-read display',
      'Multiple battery options available'
    ],
    benefits: [
      'Freedom to travel and be active',
      'Improved quality of life',
      'Independence and mobility',
      'No need for oxygen cylinders',
      'Safe and reliable oxygen delivery',
      'Emergency backup oxygen source'
    ],
    whatsIncluded: [
      'Portable oxygen concentrator',
      'Battery pack',
      'Battery charger',
      'Carrying case or backpack',
      'Nasal cannula',
      'User manual',
      'AC adapter',
      'Warranty card'
    ],
    category: 'respiratory-care',
    image: '/images/products/portable-oxygen.jpeg',
    position: 'center',
    images: [
      '/images/products/portable-oxygen.jpeg'
    ],
    price: 'On Request',
    inStock: true,
    manufacturer: 'Inogen',
    seoTitle: 'Portable Oxygen Concentrator | POC | Travancore Medical System',
    seoDescription: 'Buy portable oxygen concentrators for active lifestyle. Lightweight, battery-powered POCs with long battery life. Travel-approved models available.',
    metaKeywords: ['Portable oxygen concentrator', 'POC', 'Portable oxygen', 'Travel oxygen', 'Battery oxygen concentrator']
  }
]

export const categories = [
  {
    id: 'sleep-apnea',
    name: 'Sleep Apnea Products',
    slug: 'sleep-apnea',
    description: 'Advanced CPAP and BiPAP solutions for effective sleep apnea treatment'
  },
  {
    id: 'respiratory-care',
    name: 'Respiratory Care',
    slug: 'respiratory-care',
    description: 'Oxygen concentrators and respiratory support devices'
  },
  {
    id: 'diagnostics',
    name: 'Diagnostics',
    slug: 'diagnostics',
    description: 'Home sleep study and diagnostic equipment'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Masks, tubing, and essential therapy accessories'
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

export function getAllProductSlugs(): string[] {
  return products.map(product => product.slug)
}
