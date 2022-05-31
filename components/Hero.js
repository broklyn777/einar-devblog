import Image from '@/components/Image'
import Link from '@/components/Link'
import { SiGoogleads } from 'react-icons/si'
import NewsletterForm from './NewsletterForm-d'
import siteMetadata from '@/data/siteMetadata'
import EmailCTA from './EmailCTA'




const Hero = () => {
  return (
    <section className="grid border-b-2 lg:grid-rows-1 lg:grid-cols-2 items-center justify-between mt-20 min-w-screen">
      <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 xl:mb-0">
        <div className="flex flex-col md:flex-row justify-start items-center">
          <Image
            src="/image/Bill_W.png"
            alt="bild på einar "
            className="border-2 border-gray-200 rounded-full w-32 h-32 shadow-md"
            width={72}
            height={72}
            layout="fixed"
            quality={60}
            priority
            loading="eager"
          />
          <h2 className="ml-2 text-3xl font-extrabold font-display leading-tight sm:text-4xl sm:leading-none md:text-5xl lg:text-5xl xl:text-6xl">
            I´m a <span className='text-sky-500' >FullStack</span> pro
          </h2>
        </div>
        <p className="mt-2 text-lg ">
          ...ett digitalt proffs som  skapar framtidens webbsidor och appar.        </p>


        <Link href="https://twitter.com">
          <a
            className="my-3 font-bold text-sm leading-6 text-sky-500 hover:underline flex flex-row items-center"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              fill="currentColor"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
            ...sprider även gädje på twitter
          </a>
        </Link>
      </div>
      <EmailCTA />






    </section>
  )
}

export default Hero
