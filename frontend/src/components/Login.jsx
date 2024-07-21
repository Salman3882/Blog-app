import axios from 'axios'
import  { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../redux/auth'
const Login = () => {
    const [data, setData] = useState({username:"",password:""})
    const dispatch = useDispatch()

    const change = (e)=>{
        const {name,value} = e.target
        setData({...data,[name]:value})
    }
    const Navigate = useNavigate()
    const submit = async ()=>{
            if(data.username === "" || data.password === ""){
                alert("All fields are required")
            }
            else{
                try {
                    const response = await axios.post('http://localhost:3000/api/v1/log-in',data)
                    console.log(response)
                    localStorage.setItem("id",response.data.id)
                    localStorage.setItem("token",response.data.token)
                    dispatch(authActions.logOut)
                    Navigate('/myblogs')
                } catch (error) {
                    console.log(error.response.data)
                }
            }
    }
  return (
   <>
       
        <div className="flex flex-col  items-center justify-center h-[90VH] ">
                <div className="p-5 rounded-lg border border-gray-200 shadow-xl  flex flex-col justify-between w-5/6 md:w-4/6 lg:w-2/6 lg:h-[40vh]  ">
                    <h1 className="text-center font-bold text-4xl">LOGIN</h1>
                    <div>

                        <input
                            type="username"
                            required
                            placeholder="Name"
                            className="bg-transparent border my-3 rounded-lg  outline-none border-gray-300 py-2 px-3 w-full"
                            name="username"
                            autoComplete='off'
                            onChange={change}
                            value={data.username}
                        />

                        <input
                            type="password"
                            required
                            placeholder="Password"
                            className="bg-transparent border my-3 rounded-lg outline-none border-gray-300 py-2 px-3 w-full"
                            name="password"
                            autoComplete='off'
                            onChange={change}
                            value={data.password}
                        />
                    </div>
                    <button onClick={submit} className="font-semibold py-2 px-3 rounded-lg bg-gray-900 text-white w-2/6 mx-auto mt-4" >Login</button>
                    <Link to="/signup" className='mt-3 text-gray-700 opacity-[0.8] hover:opacity-[1] transition-all'>Not having an account? Sign up here...</Link>
                </div>
            </div>
    
   </>

  )
}

export default Login