import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import siteMetadata from '@/data/siteMetadata'
import { Nav, Button } from '../../components'
import PageTitle from '../../components/PageTitle'
import SectionContainer from '../../components/SectionContainer'
import Image from 'next/image'
import { BlogSEO } from '@/components/SEO'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
// import Link from 'next/link'
// import Image from 'next/image'


const components = { Nav, Button, SyntaxHighlighter }
const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (

    <SectionContainer>
      {/* Blog seo */}
      <ScrollTopAndComment />
      <article>


        <div className="">
          {/* 
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <h3>Time</h3>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header> */}

          <div className="pt-6 pb-10 border-b text-center xl:pt-11 ">
            <div className='pb-10'>
              <PageTitle>{title}</PageTitle>
            </div>
            <div className="sr-only">Skribent</div>
            <dd>
              <ul className="flex space-x-8 justify-center sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">

                <li className="flex items-center space-x-2">

                  <Image
                    src="/image/Bill_W.png"
                    width="38px"
                    height="38px"
                    alt="avatar"
                    className="h-10 w-10 rounded-full"
                  />

                  <div className="whitespace-nowrap text-sm font-medium leading-5">
                    {/* <dt className="sr-only">Namn</dt> */}
                    <dd className="text-gray-900 dark:text-gray-700">Einar Lofgren</dd>
                    <dt className="sr-only">Twitter</dt>

                    <dd>
                      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/sparrowhawk" className="text-[#14B8A6] hover:text-primary-600 dark:hover:text-primary-400">@einar_lofgren</a>



                    </dd>

                  </div>
                </li>

              </ul>
            </dd>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose pt-8 pb-8">

              <MDXRemote {...mdxSource} components={components} />
            </div>
          </div>
        </div>


      </article>
    </SectionContainer >

  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'))

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
