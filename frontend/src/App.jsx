import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Myblogs from './components/Myblogs'
import Login from './components/Login'
import Signup from './components/Signup'
import AddBlog from './components/AddBlog'
const App = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/myblogs' element={<Myblogs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/addblog' element={<AddBlog/>}/>

        </Routes>
    </>
  )
}

export default App