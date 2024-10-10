
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import brands from '../../api/brands/brand'
import { Link } from 'react-router-dom';
import img1 from '../../assets/bgmbukjik7bt.jpeg'
import img2 from '../../assets/bywdy1vee96i.jpeg'
import img3 from '../../assets/q1k2xey9zxhm.jpeg'
import img4 from '../../assets/xbczw8fst1mu.jpeg'

export default function Banner() {
const [brand, setBrand] = useState([]);

    useEffect(()=> {
        setBrand(brands.brandItems)
    },[])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
        <Slider {...settings}>
      <div className=" w-screen">
        <img className=" w-full h-[520px]" src={img1}/>
      </div>
      <div>
        <img className=" w-full h-[520px]" src={img2}/>
      </div>
      <div>
        <img className=" w-full h-[520px]"  src={img3}/>
      </div>
      <div>
        <img className=" w-full h-[520px]"  src={img4}/>
      </div>
    </Slider>

    <div className="flex justify-center gap-[40px] items-center pt-[30px] ">
          {brand.map((item) => (
            <Link key={item.id}>
              <div>
                <div className="">
                  <img
                    src={item.cover}
                    className="rounded-full w-24 h-24 bg-gray-300 bg-cover border-2 border-purple-500"
                    alt={item.name}
                  />
                </div>
                <div>
                  <p className="text-center mt-[8px] text-[13px] font-semibold">
                    {item.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </div>
     
    
  );
}













