import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Dot, Video } from "lucide-react"
import Checkout from "./checkout"
import Reviews from "./reviews"
import Player from "./player"

type Module = {
    total: number;
    items: {
        title: string;
        duration: string;
        chaptersCollection: {
            total: number;
            items: [{
                title: string;
                duration: string;
            }];
        };
    }[];
}

export default function Details({ title, description, image, amount, currency, module, courseId }: { title: string, description: string, image: string, amount: number; currency: string; module: Module, courseId: string }) {

    const lessons = module.items.reduce((accumulator, currentValue) => accumulator + currentValue.chaptersCollection.total, 0);

    return (
        <div className="tab:p-[2.5rem_5.5rem_3.75rem] max-tab:pt-[2rem] max-tab:pb-[2.5rem] max-tab:px-11 max-phone:px-6 m-auto max-w-[90rem] flex w-full gap-10">
            <div className="flex flex-col w-full gap-10">
                <section className="tab:max-w-2xl flex flex-col gap-3">
                    <h2 className="text-3xl font-bold text-white/80">Course&apos;s Details</h2>
                    <p className="text-white/80">{description}</p>
                </section>
                <section className="tab:max-w-2xl flex flex-col gap-1">
                    <h2 className="text-3xl font-bold text-white/80">Tech Stack</h2>
                    <ul className="flex flex-col gap-2 list-inside list-decimal text-white/80 py-5">
                        <li><strong>Node</strong>.js for our backend code which would be running GraphQL server inside the node.js environment.</li>
                        <li><strong>GraphQL</strong> for our API, which provides a flexible and efficient way to define our data model and query it.</li>
                        <li><strong>Prisma</strong> ORM for our database ORM, which provides a type-safe and easy-to-use interface for interacting with our PostgreSQL database.</li>
                        <li><strong>PostgreSQL</strong> is our database, which is a powerful and reliable relational database system.</li>
                        <li><strong>Supabase</strong> for hosting and managing cloud Postgresql db.</li>
                        <li><strong>Redis</strong> for query caching on the server side and increasing query speeds</li>
                        <li><strong>Google</strong> OAuth for Sign in with Google</li>
                        <li><strong>JSON</strong> WEB TOKENS for authentication</li>
                        <li><strong>Next</strong>.js for our front, which is a popular framework for building React applications with server-side rendering and optimized performance.</li>
                        <li><strong>TailwindCSS</strong> for styling and reusable components.</li>
                        <li><strong>Codegen</strong> for typesafe GraphQL queries and mutations.</li>
                        <li><strong>Graphql</strong>-Request as API client for client-server communication</li>
                        <li><strong>React</strong>-Query for client-side data caching and query caching</li>
                        <li><strong>Typescript</strong> to maintain code quality and write type-safe code.</li>
                        <li><strong>Amazon</strong> Web Services for storage, deployments, and CDN.</li>
                    </ul>


                    <p className="text-white/80">Checkout detailed document on Twitter Clone Notion Page</p>
                    <p className="text-white/80">Join Discord Server http://localhost:3000/</p>
                </section>

                <section className="tab:max-w-2xl flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-white/80">Course&apos;s Content</h2>
                    <div className="flex justify-between">
                        <span className="flex items-center">{lessons} Lessons <Dot className="h-7 w-7" /> 8h 16m 13s </span>
                        <Player />
                    </div>
                    <Chapters module={module} />
                </section>

                <Reviews />
            </div>

            <Checkout title={title} courseId={courseId} amount={amount} currency={currency} image={image} />
        </div>
    )
}

export function Chapters({ module }: { module: Module }) {

    return (
        <Accordion type="single" collapsible className="w-full border border-prime/30">
            {module.items.map(({ title, duration, chaptersCollection }, i) => (
                <AccordionItem key={i} className="border-t border-prime/40" value={`item-${i + 1}`}>
                    <AccordionTrigger className="bg-second/40 px-5 font-bold text-sm">
                        <div className="flex max-sm:flex-col justify-between w-full items-start sm:items-center">
                            <span>{title}</span>
                            <span className="flex sm:ml-auto text-white/70 items-center pr-2">
                                <span>{chaptersCollection.total} Lessons</span>
                                <span className="flex items-center"><Dot className="h-7 w-7" />{duration}</span>
                            </span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 py-8 flex flex-col gap-6">
                        {chaptersCollection.items.map(({ duration, title }, i) => <div key={i} className="flex max-sm:flex-col gap-2 justify-between">
                            <span className="flex gap-2 sm:items-center">
                                <Video className="h-6 w-6" />
                                {title}
                            </span>
                            <span className="font-semibold text-muted-foreground">{duration}</span>
                        </div>)}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
