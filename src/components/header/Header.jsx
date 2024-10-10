
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import {Link} from "react-router-dom"
import logo from "../../assets/logo/294326457_714986263157339_4066215416885565506_n__1_-removebg-preview.png"

function Header() {
  return (
    <header className=' h-[200px] '>
        <div className=' h-[30px] border-b-gray-100 border-b-2'>
            <div className=' justify-between flex mt-2'>
                <div className=' text-[14px]'>100% Original products</div>
                <div className=' space-x-4 text-[14px]'>
                    <Link className=' text-red-500'>Actions</Link>
                    <Link>Delivery and Payment</Link>
                    <Link>About the store</Link>
                </div>
                <div className=' text-[14px]'>Beauty Club</div>
            </div>
        </div>
        <div className=' flex justify-between items-center'>
            <div >
                <CiSearch className=' size-[35px] text-gray-500' />
            </div>
            <div>
                <img src={logo} className=' w-[224px] h-[150px] ' alt="logo" />
            </div>
            <div className=' flex gap-[20px]'>
                <Link><CiUser className=' size-[35px] text-gray-500'/></Link>
                <Link to={'/cart'}><IoBagOutline className=' size-[35px] text-gray-500'/></Link>
            </div>

        </div>
        
    </header>
  )
}

export default Header


