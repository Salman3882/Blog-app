import React from 'react'
import { Link } from 'react-router-dom'
const AddBlog = () => {
  return (
    <>
                 <div className="flex flex-col  items-center justify-center min-h-[80VH] mt-5  ">
                <div className="p-5 rounded-lg border border-gray-200 shadow-lg  flex flex-col justify-between w-5/6 lg:w-4/6  ">
                    <h1 className="text-center font-bold text-4xl mb-5">ADD BLOG</h1>
                    <div>
                        <label htmlFor="blogImage" className='text-gray-900 font-semibold text-lg'>Blog Image</label>
                        <input
                            type="file"
                            required
                            placeholder="Blog Image"
                            className="bg-transparent border mb-3 rounded-lg   border-gray-300 py-2 px-3 w-full"
                            name="username"
                            id='BlogImage'
                            autoComplete='off'
                            // onChange={change}
                            // value={Data.username}
                        />
                        <input
                            type="text"
                            required
                            placeholder="title"
                            className="bg-transparent border my-3 rounded-lg   border-gray-300 py-2 px-3 w-full"
                            name="username"
                            autoComplete='off'
                            // onChange={change}
                            // value={Data.username}
                        />

                        <textarea
                            type="text"
                            required
                            placeholder="Description"
                            className="bg-transparent border my-3 rounded-lg  border-gray-300 py-2 px-3 w-full"
                            name="password"
                            autoComplete='off'
                            // onChange={change}
                            // value={Data.password}
                        />
                    </div>
                    <Link className="font-semibold text-center py-2 px-3 rounded-lg bg-gray-900 text-white w-2/6 mx-auto mt-4" >Add</Link>
                
                </div>
            </div>
    </>
)
}

export default AddBlog