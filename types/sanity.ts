export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface BlogPost {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    current: string
  }
  body: any[] // Sanity Portable Text
  author: {
    _ref?: string
    _type?: 'reference'
    _id?: string
    name?: string
  }
  mainImage?: SanityImage
  publishedAt: string
  categories: Array<{
    _ref?: string
    _type?: 'reference'
    _id?: string
    title?: string
  }>
  readingTime: number
}
