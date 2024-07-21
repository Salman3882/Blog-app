import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import BlogCards from './BlogCards'
import axios from 'axios'

const Blogs = () => {
  const [data, setData] = useState([])

  useEffect(() => {
      const fetchData = async ()=>{
        try {
         const response =    await axios.get('http://localhost:3000/api/v2/get-all-blogs')
         setData(response.data)
        } catch (error) {
            console.log("Cannot fetch the blogs",error)
        }
      }
      fetchData()
  
  }, [data])
  
//   const data = [
//     {
//         blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
//         title:"How to learn code",
//         description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
//     },
//     {
//         blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
//         title:"How to learn code",
//         description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
//     },
//     {
//         blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
//         title:"How to learn code",
//         description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
//     },
//     {
//         blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
//         title:"How to learn code",
//         description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
//     },
//     {
//         blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
//         title:"How to learn code",
//         description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
//     },
//     {
//         blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
//         title:"How to learn code",
//         description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
//     },
//     {
//         blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
//         title:"How to learn code",
//         description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
//     },
//     {
//         blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
//         title:"How to learn code",
//         description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
//     },
//     {
//         blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
//         title:"How to learn code",
//         description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
//     },
//     {
//         blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
//         title:"How to learn code",
//         description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
//     },
//     {
//         blogImage:"https://images.unsplash.com/photo-1689416794219-5db45ed8563c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPSVJQWl9DSzNaVXx8ZW58MHx8fHx8",
//         title:"How to learn code",
//         description:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab molestias necessitatibus sit obcaecati ipsa excepturi quo officia. Ut ea ducimus vel. Saepe, dicta quam iusto ipsa at consectetur nisi similique fugiat error in aut est totam suscipit eos cum."
//     },
//   ]
    return (
        <>
    
        <BlogCards data={data}/>
        </>
)
}

export default Blogs