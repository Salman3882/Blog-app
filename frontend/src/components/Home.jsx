import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (

        <>
            <div className="Home max-w-full  h-[90vh] flex   flex-col items-center justify-center lg:flex-row px-4 gap-y-4">
                <div className="left flex flex-col  justify-center items-center w-full  lg:w-4/6">
                    <div className=' ml-5 text-center lg:text-left'>
                        <div className=" text-2xl lg:text-[80px] lg:mb-4  font-bold text-gray-900">
                            WELCOME,
                        </div>
                        <div className=" text-xl lg:text-4xl font-semibold lg:ml-2 lg:mb-3 text-gray-900">To your blog app</div>
                        <div className="text-lg lg:ml-2  text-gray-700 font-semibold leading-none lg:w-4/6"> Discover captivating stories, insightful articles, and thought-provoking content in our blog app. Join our vibrant community, unleash your creativity, and explore endless possibilities</div>
                        <div className='mt-4 -z-10'>
                        <Link className='w-4/6  lg:w-3/6 text-center px-5 py-2 text-white bg-gray-900 my-2 lg:mt-4  rounded-lg font-semibold opacity-[0.9] hover:opacity-[1] transition-all' to='/blogs'>View Blogs</Link>

                        </div>
                    </div>
                </div>
                <div className="right flex items-center w-full lg:w-2/6 px-4">

                    <img src="../../public/Home.svg" alt="" />
                </div>


            </div>


        </>
    )
}

export default Home