import Image from '@/components/Image'
import Link from '@/components/Link'
import { SiGoogleads, SiReact, SiWebdriverio } from 'react-icons/si'

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
      <div className="py-12 grid grid-cols-1 gap-8 grid-rows-3">
        <div className="grid gap-8 items-start my-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-sky-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Link href="/bio">
              <a className="relative px-7 py-4 bg-white dark:bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">
                  < SiGoogleads className=" text-rose-600 " />
                  <span className="pr-6 text-gray-900 dark:text-gray-500">
                    Vill du synas bättre på Google?
                  </span>
                </span>
                <span className="pl-6 text-amber-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition duration-200">
                  Kontakt &rarr;
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid gap-8 items-start my-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-teal-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Link href="/blogga">
              <a className="relative px-7 py-4 bg-white dark:bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">
                  <SiReact className="h-5 w-5 text-sky-600" />
                  <span className="pr-6 text-gray-900 dark:text-gray-100">
                    Skräddarsydda hemsidor!
                  </span>
                </span>
                <span className="pl-6 text-indigo-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition duration-200">
                  Portfolio &rarr;
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid gap-8 items-start my-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-primary-600  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Link href="/blogga">
              <a className="relative px-7 py-4 bg-white dark:bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-fuchsia-600 -rotate-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <span className="pr-6 text-gray-900 dark:text-gray-100">
                    För att du ska lyckas digitalt!
                  </span>
                </span>
                <span className="pl-6 text-primary-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition duration-200">
                  Blogg &rarr;
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
