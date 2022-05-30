import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Nav from './Nav'
import Footer from './Footer'
// import Footer from './Footer'
// import MobileNav from './MobileNav'
// import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <SectionContainer>

        <div className="flex h-screen flex-col justify-between">
          <Nav />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer></>
  )
}

export default LayoutWrapper
