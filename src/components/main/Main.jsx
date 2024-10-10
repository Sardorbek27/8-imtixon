
import React from 'react';
import Slider from "react-slick";
import Adverts from './Adverts';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 
import Perfumery from './Perfumery';
import { RiErrorWarningLine } from "react-icons/ri";
import { MdOutlineStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";




import apaImg from "../../assets/apaimg.jpeg"
import pinkapaImg from "../../assets/pinkapaimg.jpeg"
// import { BsArrowRight } from "react-icons/bs";
import { addToCart } from '../../redux/bazarSlice';
import { useDispatch } from 'react-redux';

const Main = ({ products, perfumeryData }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDetails = (product)=> {
      navigate(`/product/${String(product.discription).toLowerCase().split(' ').join('')}`,{
          state: {
              item: product,
          }
      })
  }

    
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
        
      <div className="flex justify-center pt-[60px] pb-[40px]">
        <h1 className="text-2xl text-black py-2 w-80 text-center font-semibold">
          Brand Offers
        </h1>
      </div>


      <div>
        <div className="slider-container">
          <Slider {...settings}>
            {products?.map((product, index) => {
              return (
                <div onDoubleClick={()=>handleDetails(product)} key={index} className="w-[264px] h-[502px] relative p-2">
                  <div className="w-[210px] h-[280px] p-[20px] shadow-lg bg-white">
                    <div className=' relative left-[90%]'>
                      <p onClick={()=>dispatch(addToCart({
                                                                _id: product.id,
                                                                title: product.name,
                                                                image: product.image_link,
                                                                price: product.price,
                                                                quantity: 1,
                                                                description: product.description
                                                            })
                                                        ) & toast.success(`${product.name} is added!`)
                                                    }><FaRegHeart className=' text-gray-400 cursor-pointer active:bg-gray-400'/></p>
                    </div>
                    {product ? (
                      <img
                        className="w-full h-full object-contain"
                        src={product?.image_link}
                        alt={'Image not avialable'}
                      />
                    ) : null}
                  </div>
                  
                  <p className="text-[8px] text-gray-500 pt-2 pb-2">
                    🔘 Sponsored by
                  </p>
                  <ul className="space-y-3">
                    <li className="text-[20px] text-gray-600">{product.name.length > 20 ? product.name.substring(0, 19) : product.name}</li>
                    <li className="text-[16px] text-gray-400">
                      Brand: {product.brand}
                    </li>
                    <li className="text-[10px] text-gray-500">
                      Created at: {new Date(product.created_at).toDateString()}
                    </li>
                    <div className='flex gap-2 items-center text-[12px]'>
                          <div className='flex gap-1'>
                            <MdOutlineStar/>
                            <MdOutlineStar/>
                            <MdOutlineStar/>
                            <MdOutlineStar/>
                            <MdOutlineStar/>
                          </div>
                          <p className='text-[10px] text-gray-500'>(customer reviews)</p>
                      </div>
                    <li className="text-[16px] text-gray-600">
                      Price: {product.price} {product.price_sign}
                    </li>
                  </ul>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>


      <div className="pt-[50px]">
        <Adverts data={products} perfumeryData={perfumeryData}/>
      </div>
      <div>
      <div className=' pb-[30px] pt-[50px]'>
                        <div className="flex justify-center pt-[60px] pb-[40px]">
                            <h1 className="text-2xl text-black py-2 w-80 text-center font-semibold">
                            Perfumery
                            </h1>
                        </div>
                        <div>
                            <Perfumery perfumeryData={perfumeryData}/>
                        </div>
                    </div>

                    <div className=" w-[100%] h-[320px] pb-[50px] mt-[120px] flex items-center gap-[90px]">
                        <div className="w-[630px] flex flex-col gap-[5px] text-[12px] font-semibold ">
                            <img src={apaImg} alt="" />
                            <p className='text-purple-400 font-normal text-[14px] pl-[5px]'>До конца акции осталось: 21:54:32</p>
                            <p className='flex items-center gap-2 text-gray-400 pl-[5px]'><RiErrorWarningLine/> Спонсировано</p>
                        </div>
                        <div className="w-[630px] flex flex-col gap-[5px] text-[12px] font-semibold">
                            <img src={pinkapaImg} alt="" />
                            <p className='text-purple-400 font-normal text-[14px] pl-[5px]'>До конца акции осталось: 21:54:32</p>
                            <p className='flex items-center gap-2 text-gray-400 pl-[5px]'><RiErrorWarningLine/> Спонсировано</p>
                        </div>
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
  );
};

export default Main;
