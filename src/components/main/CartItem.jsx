import React from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineArrowLeft } from 'react-icons/hi'; 
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteItem, increamentQuantity, resetCart } from '../../redux/bazarSlice';
import { ToastContainer} from 'react-toastify';
import { Link } from 'react-router-dom';

const CartItem = () => {
    //redux get data from database
    const productData = useSelector((state)=> state.bazar.productData);
    const dispatch = useDispatch()

    return (
        <div className='w-2/3 pr-10 bg-[#fafafa] px-4 mr-2'>
            <div className="w-full">
                <h2 className='text-2xl mt-5 font-medium'>#Shopping Cart</h2>
                <div>
                    {
                        productData.map((item)=>(

                            <div key={item._id} className='flex items-center justify-between gap-6 mt-6'>
                                <div className='flex items-center gap-2'>
                                    <MdDeleteOutline onClick={()=> dispatch(deleteItem(item._id))} className='tetx-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300'/>
                                    <img className='w-32 h-32 object-cover' src={item.image} alt="img" />
                                </div>

                                <div>
                                    <h2 className='w-52 mb-2 text-base'>{item.title}</h2>
                                    <p className='w-10 font-semibold'>${item.price}</p>
                                    <p className='w-10 font-semibold'>${item.quantity * item.price}</p>
                                </div>

                                <div className='flex justify-between'>
                                    <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                                        <p className="text-sm">Quantity</p>
                                        <div className='flex items-center gap-4 text-sm font-semibold'>
                                        <span
                                            onClick={() =>
                                                dispatch(
                                                    decrementQuantity({
                                                        _id: item._id,
                                                        title: item.title,
                                                        image: item.image,
                                                        price: item.price,
                                                        quantity: 1,
                                                        description: item.description,
                                                    })
                                                )
                                            }
                                            className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                                            >
                                            -
                                            </span>
                                                {item.quantity}
                                            <span
                                                onClick={() =>
                                                    dispatch(
                                                        increamentQuantity({
                                                            _id: item._id,
                                                            title: item.title,
                                                            image: item.image,
                                                            price: item.price,
                                                            quantity: 1,
                                                            description: item.description,

                                                        })
                                                        )
                                                    }
                                                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                                                >
                                                +
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                <button onClick={()=> dispatch(resetCart())} className='bg-gray-900 text-white mt-8 ml-6 py-1 px-6 hover:bg-gray-800 active:bg-gray-700'>Reset Cart</button>
                
                <Link to={'/'}>
                        <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-500'>
                            <span><HiOutlineArrowLeft/></span>
                            go shopping
                        </button>
                </Link>
                
                <ToastContainer
                        position= 'top-left'
                        autoClose= {2000}
                        hideProgressBar= {false}
                        newestOnTop= {false}
                        closeOnClick
                        rtl= {false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme= 'dark'
                    
                />
            </div>
        );
    }
    
    export default CartItem;
    