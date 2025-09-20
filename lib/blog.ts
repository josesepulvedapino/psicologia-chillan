import { client } from './sanity'
import { BlogPost } from '@/types/sanity'

// Función para obtener todos los posts del blog
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      body,
      author->{
        _id,
        name
      },
      mainImage,
      publishedAt,
      categories[]->{
        _id,
        title
      }
    }`
    
    const posts = await client.fetch<BlogPost[]>(query)
    
    return posts.map(post => ({
      ...post,
      readingTime: Math.max(1, Math.ceil((post.body?.length || 0) / 200)) // Mínimo 1 minuto
    }))
  } catch (error) {
    console.error('❌ Error fetching blog posts:', error)
    return []
  }
}

// Función para obtener un post específico por slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      body,
      author->{
        _id,
        name
      },
      mainImage,
      publishedAt,
      categories[]->{
        _id,
        title
      }
    }`
    
    const post = await client.fetch<BlogPost | null>(query, { slug })
    
    if (!post) return null
    
    return {
      ...post,
      readingTime: Math.max(1, Math.ceil((post.body?.length || 0) / 200))
    }
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error)
    return null
  }
}

// Función para obtener posts por categoría
export async function getBlogPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  try {
    const query = `*[_type == "post" && $categoryId in categories[]._ref] | order(publishedAt desc) {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      body,
      author->{
        _id,
        name
      },
      mainImage,
      publishedAt,
      categories[]->{
        _id,
        title
      }
    }`
    
    const posts = await client.fetch<BlogPost[]>(query, { categoryId })
    
    return posts.map(post => ({
      ...post,
      readingTime: Math.max(1, Math.ceil((post.body?.length || 0) / 200))
    }))
  } catch (error) {
    console.error('Error fetching blog posts by category:', error)
    return []
  }
}

// Función para obtener posts con paginación
export async function getBlogPostsPaginated(page: number = 1, limit: number = 9): Promise<{
  posts: BlogPost[]
  totalPosts: number
  totalPages: number
  currentPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
}> {
  try {
    const offset = (page - 1) * limit
    
    // Obtener total de posts - usando una consulta más robusta
    const allPostsQuery = `*[_type == "post"]`
    const allPosts = await client.fetch(allPostsQuery)
    const totalPosts = allPosts.length
    
    
    // Obtener posts paginados
    const postsQuery = `*[_type == "post"] | order(publishedAt desc) [${offset}...${offset + limit}] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      body,
      author->{
        _id,
        name
      },
      mainImage,
      publishedAt,
      categories[]->{
        _id,
        title
      }
    }`
    
    const posts = await client.fetch<BlogPost[]>(postsQuery)
    
    
    const totalPages = Math.ceil(totalPosts / limit)
    
    return {
      posts: posts.map(post => ({
        ...post,
        readingTime: Math.max(1, Math.ceil((post.body?.length || 0) / 200))
      })),
      totalPosts,
      totalPages,
      currentPage: page,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  } catch (error) {
    console.error('Error fetching paginated blog posts:', error)
    return {
      posts: [],
      totalPosts: 0,
      totalPages: 0,
      currentPage: 1,
      hasNextPage: false,
      hasPrevPage: false
    }
  }
}

// Función para obtener todos los slugs (para generateStaticParams)
export async function getAllBlogPostSlugs(): Promise<string[]> {
  try {
    const query = `*[_type == "post"].slug.current`
    return await client.fetch<string[]>(query)
  } catch (error) {
    console.error('Error fetching blog post slugs:', error)
    return []
  }
}
