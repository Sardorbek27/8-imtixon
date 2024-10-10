import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/main/CartItem';
import { ToastContainer} from 'react-toastify'



const Cart = () => {
    const productData = useSelector((state)=> state.bazar.productData);
    const [totalAmt, setTotalAmt] = useState('');
//======= Total amount ===========================>
    useEffect(()=>{
        let price = 0;
        productData.map((item)=> {
            price += item.price * item.quantity
            return price
        })
        setTotalAmt(price.toFixed(2));
    },[productData])
//======= Total amount finished =================>

    return (
        <>
            <div>
                <img className='w-full h-60 object-cover' src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cartImg" />
                <div className='max-w-screen-xl mx-auto py-20 flex'>
                    <CartItem/>
                    <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
                        <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
                            <h2 className='text-2xl font-medium'>Cart Totals</h2>
                            <p className='flex items-center gap-4 text-base'>
                                Submital{': '}
                                <span className='font-semibold text-lg'>$ {totalAmt}</span>
                            </p>
                            <p className='flex items-start gap-4 text-base'>
                                Shipping{': '}
                                <span className='font-semibold cursor-pointer hover:underline'>Good luck!</span>
                            </p>
                        </div>

                        <p className='font-semibold flex justify-between mt-6'>
                            Total{': '}
                            <span className='tetx-xl  font-bold'>${totalAmt}</span>
                        </p>
                      
                    </div>
                </div>
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
        </>
    );
}

export default Cart;
