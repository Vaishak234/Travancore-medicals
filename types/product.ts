export interface Product {
  id: string
  name: string
  slug: string
  shortDescription: string
  fullDescription: string
  features: string[]
  benefits?: string[]
  whatsIncluded?: string[]
  category: string
  image: string
  position: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  images?: string[]
  price?: string
  inStock: boolean
  manufacturer?: string
  seoTitle?: string
  seoDescription?: string
  metaKeywords?: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
}

