import { Link } from 'react-router-dom'

const BlogCards = ({data}) => {
  return (
    <>
            <div className='w-full mt-5 px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 '>
            {
                data.map((blog)=>(
                    <div className="border p-4 m-3 border-gray-200 flex flex-col justify-evenly shadow-lg" key={blog}>
                        
                            <img className='rounded-lg' src={blog.blogImage} alt="" />
                        
                        <div className='font-bold text-2xl text-gray-900'>{blog.title}</div>
                        <div className='text-lg font-semibold '>{blog.description.length>90 ? blog.description.slice(0,90) + "..." : blog.description}</div>
                        <Link to='/' className=' text-center px-5 py-2 text-white bg-gray-900 my-2 lg:mt-4  rounded-lg font-semibold opacity-[0.9] hover:opacity-[1] transition-all'>Read more</Link>
                    </div>
                ))

            }

        </div>
      
    </>
)
}

export default BlogCards