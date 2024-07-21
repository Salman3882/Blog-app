import React, { useEffect } from 'react'
import BlogCards from './BlogCards'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { authActions } from '../../redux/auth'


const Myblogs = () => {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem("id") && localStorage.getItem("token")){
      dispatch(authActions.logIn)
    }else if(!isLoggedIn){
      alert("You must login first...!")
      Navigate('/login')
    }
  }, [])
  
  const data = [
    {
        blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
        title:"How to learn code",
        description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
    },
    {
        blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
        title:"How to learn code",
        description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
    },
    {
        blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
        title:"How to learn code",
        description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
    },
    {
        blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
        title:"How to learn code",
        description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
    },
    {
        blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
        title:"How to learn code",
        description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
    },
    {
        blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
        title:"How to learn code",
        description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
    },
    {
        blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
        title:"How to learn code",
        description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
    },
    {
        blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
        title:"How to learn code",
        description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
    },
    {
        blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
        title:"How to learn code",
        description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
    },
    {
        blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
        title:"How to learn code",
        description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
    },
    {
        blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
        title:"How to learn code",
        description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
    },
  ]
  return (
    <>
        <div className="flex justify-center lg:justify-end mt-4">
        <Link className='w-4/6  lg:w-1/6 text-center px-5 py-2 text-white bg-gray-900 mt-4 lg:mt-4  rounded-full font-semibold opacity-[0.9] hover:opacity-[1] transition-all mx-3' to='/addblog'>Add Blog </Link>

        </div>
        <BlogCards data={data}/>
    </>
  )
}

export default Myblogs