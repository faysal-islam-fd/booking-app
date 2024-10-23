import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import {  useState } from "react";

const Header = () => {
    const [openMenu,setOpenMenu] = useState(false)
    const menuClasses = "hover:bg-blue-900 size-10 rounded-sm p-2 cursor-pointer hover:transition-all text-white sm:hidden"
  
  
    const linkClasses = `hover:transition-all text-blue-500 font-semibold px-4  py-2 ${openMenu ? "text-white hover:bg-stone-700 cursor-pointer " :"bg-gray-50 border border-blue-500 hover:bg-gray-100"}`
  return (
    <>
        <div className="bg-blue-800 py-6  ">
        <div className="container mx-auto">
          <div className="flex items-center px-4 sm:px-0 justify-between">
          <span className="text-3xl text-white font-bold tracking-tight">
                <Link to="/">Holidays.com</Link>
            </span>
            <span className={`space-x-2 bg-blue-800  sm:static absolute top-[80px] right-0 bottom-0  ${openMenu ? "-z-10 bg-stone-900 flex py-6 flex-col w-[50%]" :"hidden sm:block"}`}>
                <Link className={linkClasses} to="/register">Register</Link>
                <Link className={linkClasses} to="/login">Sign in</Link>
            </span>
                {
                    

                    openMenu ?
                    <RxCross2 size={24} className={menuClasses}  onClick={()=>setOpenMenu(false)}/> 
                        :
                    <GiHamburgerMenu onClick={()=>setOpenMenu(true)}   size={20} className={menuClasses} />
                    
                }
          </div>

        </div>        
    </div>
    {/* <Modal isOpen={openMenu}>
    <h1>Modal Content!!</h1>
    </Modal> */}
    </>
  )
}

export default Header