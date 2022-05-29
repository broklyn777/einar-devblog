import fs from "fs"
import * as path from 'path'
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"








export default function einar({ posts, }) {
    return (

        <>
            <h1 className="text-2xl text-teal-500 pl-4 text-left font-medium leading-9 tracking-tight text-teal-500sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Alla lekar
            </h1>

            <div className="space-y-2 p-4 pt-6 pb-8 md:space-y-5">

                <div className="relative max-w-lg">
                    <input
                        aria-label="Sök lekar"
                        type="text"
                        // onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Sök lekar ..."
                        className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-teal-500 focus:ring-teal-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
                    />
                    <svg
                        className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>
            <div className='mt-5'>
                {posts.map((post, index) => (

                    <Link href={'/blog/' + post.slug} passHref key={index}>
                        <div className="  bg-clip-border  rounded-md relative px-3 md:px-0 flex flex-col min-w-0 mb-3 cursor-pointer break-words  max-w-[540px]">
                            <div className="gap-y-4 flex w-full pl-3  bg-white rounded-lg shadow-md mt-6">
                                <div className="flex w-4/6 ">
                                    <div className="grow shrink basis-auto p-4">
                                        <h5 className="text-xl text-[#212529] font-medium mb-2">{post.frontMatter.title}</h5>
                                        <p className="text-base font-normal text-[#212529]">{post.frontMatter.description}</p>

                                    </div>
                                </div>
                                <div className="flex w-1/3 basis-auto grow-0 shrink-0">
                                    <Image
                                        src={post.frontMatter.thumbnailUrl}
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

        const { data: frontMatter } = matter(markDownWithMeta)

        return {
            frontMatter,
            slug: filename.split('.')[0]
        }


    })
    return {
        props: {
            posts
        }
    }

}
