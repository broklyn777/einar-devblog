import Link from 'next/link'

const Nav = () => {
  return (

   
    
    <nav className=" flex  flex1 py-10 flex-wrap justify-between cursor-pointer  space-x-8 ">
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

  )
}

export default Nav

