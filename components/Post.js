
import Link from 'next/link'
import Image from 'next/image'
import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
  return (

    // ändrat bg-white
    <Link href={`/blog/${post.slug}`} passHref>
      <div className='w-full px-10 py-6 bg-white rounded-lg cursor-pointer shadow-md mt-6'>
        {!compact && (

          // ändrat height width 420- 600, fanns ingen objectFit=""
          <Image
            src={post.frontmatter.thumbnailUrl}
            alt=''
            height={400}
            width={500}
            className='mb-4 rounded'
            objectFit="cover"
          />
        )}


        <div className='flex justify-between items-center'>

          <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
        </div>



        <div className='mt-2'>

          <a className='text-2xl text-gray-700 font-bold hover:underline decoration-teal-500'>
            {post.frontmatter.title}
          </a>

          <p className='mt-2 text-gray-600'>{post.frontmatter.description}</p>
        </div>

        {!compact && (
          <div className='flex justify-between items-center mt-6'>



            <div className='flex items-center'>
              {/* <Image
              src={post.frontmatter.author_image}
              alt=''
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            /> */}
              <h3 className='text-gray-700 '>
                {post.frontmatter.author}
              </h3>
            </div>
          </div>
        )}
      </div>
    </Link>

  )
}
