import { getContentfulData } from '@/lib/cotentful'
import { BASE_URL, templates } from '@/util/constants'
import { roadmapsData } from '@/util/globals'
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
        url: 'https://30dayscoding.com/links',
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
        url: 'https://30dayscoding.com/roadmaps',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/guides',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/explore',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/dsa',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/products',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://30dayscoding.com/live-cohort',
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
        url: '/courses',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },
    {
        url: 'https://resumebldr.vercel.app/app/personal-detail',
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

export const dynamic = 'force-dynamic'

export const getItem = cache(async () => {
    const item = await prisma.blog.findMany({
        select: {
            slug: true,
            createdAt: true
        }
    })
    return item
})

export const getCourses = async (): Promise<Record<string, string>[]> => {
    const data = await getContentfulData(`query {
        courseCollection(where: {publish: true, domain: "${process.env.DOMAIN}"}){
        items{
            slug
            }
        }
    }`)

    return data.data.courseCollection.items

}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const blogSlugs = await getItem()

    const courseSlugs = await getCourses()

    const dynamicMaps: MetadataRoute.Sitemap = blogSlugs.map((blog) => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: blog.createdAt,
        changeFrequency: 'monthly',
        priority: 0.5,
    }))

    const dynamicRoadmaps: MetadataRoute.Sitemap = roadmapsData.map((maps) => ({
        url: `${BASE_URL}/roadmaps/${maps.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    }))

    const dynamicTemplates: MetadataRoute.Sitemap = templates.map((template) => ({
        url: `${BASE_URL}/products/${template.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    }))

    const dynamicCourses: MetadataRoute.Sitemap = courseSlugs.map((courses) => ({
        url: `${BASE_URL}/courses/${courses.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    }))

    return [...staticMaps, ...dynamicCourses, ...dynamicRoadmaps, ...dynamicMaps, ...dynamicTemplates]
}