import { BASE_URL } from '@/util/constants'
import prisma from '@/util/prismaClient'
import { MetadataRoute } from 'next'
import { cache } from 'react'

const staticMaps: MetadataRoute.Sitemap = [
    {
        url: 'https://30dayscoding.com',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    },
    {
        url: 'https://30dayscoding.com/mentorship',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/testimonials',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/wall-of-love',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/blog',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/resources',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/jobs',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/projects',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/privacy-policy',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/support',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/terms-conditions',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },
    {
        url: 'https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },
    {
        url: 'https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },
    {
        url: 'https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },
    {
        url: 'http://dsa.30dayscoding.com/',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },
    {
        url: 'http://resume.30dayscoding.com/',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },
    {
        url: 'https://courses.30dayscoding.com/products',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },
]

export const revalidate = 3600

export const getItem = cache(async () => {
    const item = await prisma.blog.findMany({
        select: {
            slug: true,
            createdAt: true
        }
    })
    return item
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const blogSlugs = await getItem()

    const dynamicMaps: MetadataRoute.Sitemap = blogSlugs.map((blog) => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: blog.createdAt,
        changeFrequency: 'monthly',
        priority: 0.5,
    }))

    return [...staticMaps, ...dynamicMaps]
}




