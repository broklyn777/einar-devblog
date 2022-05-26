import Link from 'next/link'

const Nav = () => {
  return (
    <nav className=" flex flex1  flex-wrap justify-between cursor-pointer p-3 py-8 space-x-5 ">
    {/* <nav className=" flex flex1  border-b flex-wrap justify-between cursor-pointer p-3 py-8 space-x-5 "> */}
      
      <Link href="/" passHref>
        <h2 className="text-3xl cursor-pointer">funny games</h2>
      </Link>
<div className='flex space-x-4 text-lg'>
      <Link href="/bio" passHref>
        <p className="ms-5 pointer lead my-auto">/om oss</p>
      </Link>
      <Link href="/einar" passHref>
        <p className="ms-5 pointer lead my-auto">/einar</p>
      </Link>
      </div>
<div className='flex space-x-4 text-lg'>
      <Link href="/bio" passHref>
        <p className="ms-5 pointer lead my-auto"></p>
      </Link>
      <Link href="/einar" passHref>
        <p className="ms-5 pointer lead my-auto"></p>
      </Link>
      </div>
    
    </nav>
  )
}

export default Nav


