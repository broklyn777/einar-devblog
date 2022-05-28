import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { Nav, Button } from '../components'
import PageTitle from '../components/PageTitle'
import SectionContainer from '../components/SectionContainer'
import Link from 'next/link'
import Image from 'next/image'

const components = { Nav, Button, SyntaxHighlighter }

const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <SectionContainer>
      <div className="mt-4 ">

        <div className="prose">
          <PageTitle>{title}</PageTitle>
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </div>
    </SectionContainer>
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
