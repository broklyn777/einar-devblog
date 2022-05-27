

const Search = () => {
  return (

    <div className='relative border-b-2 p-4'>
      <div className='container mx-auto flex items-center pt-10 justify-center md:justify-start'>
        <div className='relative text-gray-600 w-72'>
          <form>
            <input
              type='search'
              name='search'
              id='search'
              className='bg-white border-red-600 border-solid h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-72'
         
           
              placeholder='sök lekar...'
            />

           
          </form>
        </div>
      </div>

    
    </div>
  )
   
}

export default Search