import React from 'react'
import Slider from "react-slick";
import oilImg from "../../assets/6oiyuaj5xii3.jpeg"
import marevImg from "../../assets/xbczw8fst1mu.jpeg"
import { RiErrorWarningLine } from "react-icons/ri";


function Adverts({data}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
  return (
    <div >
        <div className="slider-container pt-[20px] pb-[20px] ">
                <Slider {...settings}>
                    {data.map((product, index)=>{
                        return(
                            <>
                                <div key={index} className=' w-[560px] h-[320px] box-shadow-adv flex gap-[20px]'>
                                    <div className=' w-[500px] h-[500px] pt-[40px] pl-[20px]'>
                                        {product.image_link ? <img className=' w-[70%] items-center' src={product?.image_link} alt={ "Img" +product.name ? (product.name.length > 50 ? product.name.substring(0, 50) + '...' : product.name) : 'No description available'}/> : null}
                                    </div>
                                    <div>
                                        <h1 className=' text-[22px] pt-[30px] font-semibold '>{product.description ? (product.description.length > 40 ? product.description.substring(0, 40) + '...' : product.description) : 'No description available'}</h1>
                                    </div>
                                </div>

                                <div>
                                    <ul className="space-y-3">
                                        <li className="text-[20px] text-gray-600 space">{product.name.length > 20 ? product.name.substring(0, 19) : product.name}</li>
                                        <li className="text-[16px] text-gray-600">
                                        Brand: {product.brand}
                                        </li>
                                        <li className="text-[12px] text-gray-500">
                                        Created at: {new Date(product.created_at).toDateString()}
                                        </li>
                                        <li className="text-[12px] text-gray-500">
                                        Update: {product.updated_at}
                                        </li>
                                    </ul>
                                </div>

                                
                            </> 
                        )
                        })
                    }            
                </Slider>

                    
                    <div className=" w-[100%] h-[320px] flex pt-[30px] gap-[90px] pb-[50px]">
                        <div className="w-[630px] flex flex-col gap-[5px] text-[12px] font-semibold ">
                            <img src={marevImg} alt="" />
                            <p className='text-purple-400 font-normal text-[14px] pl-[5px]'>До конца акции осталось: 23:41:27</p>
                            <p className='flex items-center gap-2 text-gray-400 pl-[5px]'><RiErrorWarningLine/> Спонсировано</p>
                        </div>
                                            
                        <div className="w-[630px] flex flex-col gap-[5px] text-[12px] font-semibold">
                            <img src={oilImg} alt="" />
                            <p className='text-purple-400 font-normal text-[14px] pl-[5px]'>До конца акции осталось: 21:54:32</p>
                            <p className='flex items-center gap-2 text-gray-400 pl-[5px]'><RiErrorWarningLine/> Спонсировано</p>
                        </div>
                    </div>

                    

            </div> 
        
    </div>
  )
}

export default Adverts