import React, { useEffect, useState } from 'react';
import { MdOutlineStar } from "react-icons/md";
// import { useDispatch } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify'


import { useLocation } from 'react-router-dom';
// import { addToCart } from '../../redux/bazarSlice';

const ProductDetail = () => {
    // const dispatch = useDispatch()
    const [details, setDetails] = useState({})
    let [baseQty, setBaseQty] = useState(1)

    const location = useLocation();
    useEffect(()=>{
        setDetails(location.state.item);
    }, [location.state.item]);

    return (
        <>
        <div>
            <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
                <div className='w-2/5 relative'>
                    <img className='w-full h-[550px] object-cover' src={details.image_link} alt="img" />
                    <div className='absolute top-4 right-0 border-l-[1.5px]'>
                      {
                        details.isNew && (<p className='bg-black text-white px-6 py-1'>Sale</p>)
                      }
                    </div>
                </div>

                <div className='w-3/5 flex flex-col justify-center gap-12'>
                      <div>
                        <h2 className='text-4xl font-semibold'>{details.name}</h2>
                        
                      </div>

                      <div className='flex gap-2 items-center text-base'>
                          <div className='flex gap-1'>
                            <MdOutlineStar/>
                            <MdOutlineStar/>
                            <MdOutlineStar/>
                            <MdOutlineStar/>
                            <MdOutlineStar/>
                          </div>
                          <p className='text-xs text-gray-500'>(customer reviews)</p>
                      </div>

                      <p className='text-base text-gray-500 -mt-3 max-w-[600px]'>{details.description}</p>

                      <div className='flex gap-6'>
                        <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                            <p className="text-sm">Quantity</p>
                            <div className='flex items-center gap-4 text-sm font-semibold'>
                                <button onClick={()=> setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)} className='border px-2 hover:bg-gray-400 duration-500 hover:text-white active:bg-gray-500 active:text-white'>-</button>
                                <span>{baseQty}</span>
                                <button onClick={()=> setBaseQty(baseQty + 1)} className='border px-2 hover:bg-gray-400 duration-500 hover:text-white active:bg-gray-500 active:text-white'>+</button>
                            </div>
                        </div>
                        <div>
                            {/* <button onClick={()=>dispatch(addToCart({
                                                                _id: details.id,
                                                                title: details.title,
                                                                image: details.image,
                                                                price: details.price,
                                                                quantity: baseQty,
                                                                description: details.description
                                                            })
                                                        ) & toast.success(`${details.title} is added!`)
                                                    } className='bg-black font-semibold text-white py-3 px-6 active:bg-gray-800'>Add To Cart</button> */}
                        </div>
                      </div>
                      <div className=' flex gap-5'>
                        <p className='text-gray-500 text-sm'>{`Created: _${details.created_at}`}</p>
                      </div>
                        <p className='font-semibold'>${details.price}</p>
                </div>
            </div>
            {/* <ToastContainer
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
                
                /> */}
        </div>
        </>
    );
}

export default ProductDetail;

