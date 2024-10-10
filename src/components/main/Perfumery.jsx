
import React from 'react';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import { ToastContainer} from 'react-toastify'; 

const Perfumery = ({ perfumeryData }) => {
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
      <div>
        <div className="slider-container">
          <Slider {...settings}>
            {perfumeryData?.map((product, index) => {
              return (
                <div onDoubleClick={()=>handleDetails(product)} key={index} className="w-[264px] h-[502px] relative p-2">
                  <div className="w-[210px] h-[280px] p-[20px] shadow-lg bg-white">
                    {product ? (
                      <img
                        className="w-full h-full object-contain"
                        src={product?.image_link}
                        alt={product.name}
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
 
export default Perfumery;
