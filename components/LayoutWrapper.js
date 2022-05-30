import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Nav from './Nav'
import Footer from './Footer'
import Search from './Search'
// import Footer from './Footer'
// import MobileNav from './MobileNav'
// import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>

      <div className="flex h-screen flex-col justify-between">
        <nav className=" flex flex1 py-8 flex-wrap justify-between cursor-pointer  space-x-8 ">
          {/* <nav className=" flex flex1  border-b flex-wrap justify-between cursor-pointer p-3 py-8 space-x-5 "> */}

          <Link href="/" passHref>
            <h2 className="text-3xl cursor-pointer">einars <span className='border-b-2'>devBlog</span> </h2>
          </Link>
          <div className='flex space-x-4  text-xl'>
            <Link href="/bio" passHref>
              <p className="ms-5 pointer lead my-auto">/om oss</p>
            </Link>
            <Link href="/einar" passHref>
              <p className="ms-5 pointer lead my-auto">/einar</p>
            </Link>
          </div>

          <div className='flex space-x-4 text-xl'>

            {/* <Link href="/dev" passHref>
        <p className="ms-5 pointer lead my-auto">/dev</p>
      </Link> */}

            <Link href="/blogga" passHref>
              <p className="ms-5 pointer lead my-auto">/blogga</p>
            </Link>
          </div>

        </nav>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
