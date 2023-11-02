import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () =>{
    
  const handleLogout = () => {
    localStorage.removeItem('officeToken');
    console.log("logout");
    window.location.href = '/';
  };

    return(
        <div className="bg-[#253061] py-2">
        <div className="container text-white">
        <div className="flex items-center justify-between">
            <div>
                <Link to="/">
                    <img src="https://www.alghawalimanpower.com/static/media/Group%202.bb033483138d53c80d39856edff45090.svg"/>
                </Link>
            </div>
            <div className="hidden sm:block">
                <p className="text-2xl lg:text-[2rem] font-bold">Welcome to Al Ghawali</p>
            </div>
            <div className="flex items-center">
                <select className='bg-transparent outline-none mr-10 sm:block hidden'
                    >
                        <option value="en">Eng</option>
                        <option value="ar">Ar</option>
                </select>
                <div onClick={handleLogout} className="text-[#FF5959] text-base font-bold flex items-center gap-1 cursor-pointer">
                 <span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H9" stroke="#FF5959" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 17L9 12L14 7" stroke="#FF5959" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12H21" stroke="#FF5959" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </span> Log out</div>
            </div>
           
        </div>
        <div className="flex items-center justify-between">
            <div className="inline-block sm:hidden">
                    <p className="text-sm font-bold">Welcome to Al Ghawali</p>
            </div>
            <select className='bg-transparent outline-none sm:hidden block'>
                <option value="en">Eng</option>
                <option value="ar">Ar</option>
            </select>
        </div>
        
        </div>
        </div>
    )
}


export default Navbar;