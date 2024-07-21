import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    const [data, setData] = useState({username:"",email:"",password:""})
    const change = (e)=>{
        const {name,value} = e.target
        setData({...data,[name]:value})
    }
    const submit = async ()=>{
        if(data.username === "" || data.email === "" || data.password ===""){
            alert("All fields are required")
        }else{
            try {
                const response = await axios.post('http://localhost:3000/api/v1/sign-in',data)    
                setData({ username: "", email: "", password: "" })
                alert(response.data.message)           
            } catch (error) {
                console.log(error)
                alert(error.response.data.message)

            }
        }
    }
  return (
   <>
     <div className="flex flex-col  items-center justify-center h-[90VH] ">
                <div className="p-5 rounded-lg border border-gray-200 shadow-xl  flex flex-col justify-between w-5/6 md:w-4/6 lg:w-2/6 lg:h-[50vh]  ">
                    <h1 className="text-center font-bold text-4xl">SIGNUP</h1>
                    <div>

                        <input
                            type="username"
                            required
                            placeholder="Name"
                            className="bg-transparent border my-3 rounded-lg  border-gray-300 py-2 px-3 w-full"
                            name="username"
                            autoComplete='off'
                            onChange={change}
                            value={data.username}
                        />
                        <input
                            type="email"
                            required
                            placeholder="email"
                            className="bg-transparent border my-3 rounded-lg   border-gray-300 py-2 px-3 w-full"
                            name="email"
                            autoComplete='off'
                            onChange={change}
                            value={data.email}
                        />

                        <input
                            type="password"
                            required
                            placeholder="Password"
                            className="bg-transparent border my-3 rounded-lg  border-gray-300 py-2 px-3 w-full"
                            name="password"
                            autoComplete='off'
                            onChange={change}
                            value={data.password}
                        />
                    </div>
                    <button onClick={submit} className="font-semibold py-2 px-3 rounded-lg bg-gray-900 text-white w-2/6 mx-auto mt-4" >Signup</button>
                    <Link to="/login" className='py-3 text-gray-700 opacity-[0.8] hover:opacity-[1] transition-all'>Already having an account? Login here...</Link>
                </div>
            </div>
   </>
  )
}

export default Signup