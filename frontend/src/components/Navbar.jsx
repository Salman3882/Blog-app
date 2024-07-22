import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../redux/auth';
import '../App.css'

const Navbar = () => {
    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false)
    const [login, setLogin] = useState(false)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const Navigate = useNavigate()
    // const logOut = () => {
    //     const userConfirm = confirm("Are you sure you want to log out?")
    //     if (userConfirm) {
    //         localStorage.clear()
    //         Navigate("/")
    //     }
        
    // }

    const handleLogOut = () =>{
        const userConfirm = confirm("Are you sure to Logout");
        if(userConfirm){
            dispatch(authActions.logOut());
            localStorage.clear();
            Navigate("/login")
        }
    }
    
    const [sidebar, setSidebar] = useState('closeSidebar')
    const toggleSidebar = () => {
        setMenu(!menu)
        if (menu == false) {
            setSidebar('openSidebar')
        }
        else {
            setSidebar('closeSidebar')
        }
    }
    const clickLink = () => {
        setSidebar('closeSidebar')
        setMenu(!menu)

    }
    const links = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Blogs",
            link: "/blogs"
        },
        {
            name: "My Blogs",
            link: "/myblogs"
        },

    ]

    return (
        <>
            <div className="nav font-sans bg-gray-900 text-white h-[80px] w-full flex justify-between px-5 items-center sticky">
                <div className="logo text-3xl font-bold px-3">BLOG APP</div>
                <div className={`navLinks ${sidebar} flex flex-col md:flex-row`}>
                    <ul className=' navList  lg:flex  text-2xl font-semibold gap-x-6 mr-5 '>
                        {links.map((link) => (
                            <li onClick={clickLink} className='navLink py-1 rounded-lg hover:bg-gray-700 transition-all duration-200' key={link.link}>
                                <Link to={link.link} className='w-full p-2 rounded-lg  '>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-x-4 items-center '>
                    {!isLoggedIn ?
                    
                        <Link to='/login' className='py-2 px-6 rounded-lg bg-gray-800 font-bold text-xl mt-1 hover:bg-gray-700 transition-all'>Login</Link>
                       
                        :  
                        <Link to='/login' onClick={handleLogOut} className='py-2 px-6 rounded-lg bg-gray-800 font-bold text-xl mt-1 hover:bg-gray-700 transition-all'>Logout</Link>
                    
                   }
                    <button onClick={toggleSidebar} className='font-bold lg:hidden text-2xl leading-[80px]'>
                        {!menu ? <GiHamburgerMenu /> : <RxCross2 />}
                    </button>

                </div>
            </div>
        </>
    )
}

export default Navbar