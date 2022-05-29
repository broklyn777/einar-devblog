import fs from 'fs'
import * as path from 'path'
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"
import Search from "/components/Search"
import { getPosts } from '@/lib/posts'




export default function einar({ posts }) {
    return (

        <>
            <h1 className="text-2xl text-teal-500 pl-4 text-left font-medium leading-9 tracking-tight text-teal-500sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Alla lekar
            </h1>
            <Search />


            <div className='mt-5'>
                {posts.map((post, index) => (

                    <Link href={'/blog/' + post.slug} passHref key={index}>
                        <div className="  bg-clip-border  rounded-md relative px-3 md:px-0 flex flex-col min-w-0 mb-3 cursor-pointer break-words  max-w-[540px]">
                            <div className="gap-y-4 flex w-full pl-3  bg-white rounded-lg shadow-md mt-6">
                                <div className="flex w-4/6 ">
                                    <div className="grow shrink basis-auto p-4">
                                        <h5 className="text-xl text-[#212529] font-medium mb-2">{post.frontmatter.title}</h5>
                                        <p className="text-base font-normal text-[#212529]">{post.frontmatter.description}</p>
                                        <p className="text-[#6c757d] text-base">
                                            <small className="text-[#6c757d] text-sm">{post.frontmatter.category}</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex w-1/3 basis-auto grow-0 shrink-0">
                                    <Image
                                        src={post.frontmatter.thumbnailUrl}
                                        className="relative rounded-md p-1 m-0 max-w-full inline-block overflow-hidden box-border"
                                        alt="thumbnail"
                                        width={500}
                                        height={400}
                                        objectFit="cover" />
                                </div>
                            </div>
                        </div>


                    </Link>
                )


                )} </div></>
    )
}



export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map(filename => {

        const markDownWithMeta = fs.readFileSync(path.join('posts', filename))

        const { data: frontmatter } = matter(markDownWithMeta)

        return {
            frontmatter,
            slug: filename.split('.')[0]
        }


    })
    return {
        props: {
            posts: getPosts().slice(0, 6),
        }
    }

}
