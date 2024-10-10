import React from 'react'
import imageFlash1 from '../../assets/flags/bu5z5iixcg5x.svg';
import imageFlash2 from '../../assets/flags/hdc7jaamvgvs.svg';
import imageFlash3 from '../../assets/flags/hmkoawms4phh.svg';
import imageFlash4 from '../../assets/flags/l3spipyzgoxe.svg';
import imageFlash5 from '../../assets/flags/nvtbjuva6noy.svg';
import imageFlash6 from '../../assets/flags/smqgdveseaux.svg';
import imageFlash7 from '../../assets/flags/wvq2kpfnarex.svg';
import imageFlash8 from '../../assets/flags/zegh96kj2fsn.svg';


function Footer() {
  return (
    <>
      <div className=' w-full pb-[50px]  pt-[50px]'> 
      <div className=' w-full h-[230px] bg-[#eef4f4] flex-col p-[30px] mx-auto'>
          <div className=' items-center justify-center flex'>
            <h2 className=' text-[23px] font-semibold'>Be the first to know about sales and new products!</h2>
          </div>
          <div className=' items-center justify-center flex pt-8'>
            <ul className='border border-b-gray-950 flex justify-between w-[500px] text-gray-500 text-[13px]'>
              <li className=' pb-2'>E-mail</li>
              <li className=' pb-2'>SUBSCRIBE</li>
            </ul>
          </div>
      </div>
      </div>

      <div className=' w-full justify-between flex items-center gap-10 pt-[50px] pb-[50px] '>
        <div className=' flex gap-11'>
          <div className=' space-y-[20px] text-gray-600 cursor-pointer'>
              <p>About Us</p>
              <p>Contacts</p>
              <p>Terms of Use</p>
              <p>Application</p>
          </div>
          <div className=' space-y-[20px] text-gray-600 cursor-pointer'>
            <p>About Delevery</p>
            <p>Payment methods</p>
            <p>Orginality of products</p>
            <p>Exchange and return</p>
          </div>
          <div className=' space-y-[20px] text-gray-600 cursor-pointer'>
            <p>Articles</p>
            <p>News</p>
            <p>Beauty Club</p>
          </div>
        </div>
        <div className=' space-y-[20px] text-gray-600 cursor-pointer'>
            <p className=' text-[20px] font-bold'>+998 712 050 570</p>
            <div className=' space-y-4'>
              <p>You can write us a letter, can call us on the phone</p>
              <p>Daily from 7:55 to 20;05</p>
            </div>
            <p>Callback</p>
        </div>
      </div>

      <div className=' w-full justify-between flex items-center h-[80px] border border-t-gray-500 border-b-gray-600 '>
        <ul className=' flex gap-10 items-center w-full justify-center cursor-pointer'>
          <li><img className=' w-[25px]' src={imageFlash1} /></li>
          <li><img className=' w-[25px]' src={imageFlash2} /></li>
          <li><img className=' w-[25px]' src={imageFlash3} /></li>
          <li><img className=' w-[25px]' src={imageFlash4} /></li>
          <li><img className=' w-[25px]' src={imageFlash5} /></li>
          <li><img className=' w-[25px]' src={imageFlash6} /></li>
          <li><img className=' w-[25px]' src={imageFlash7} /></li>
          <li><img className=' w-[25px]' src={imageFlash8} /></li>
        </ul>
      </div>

      <div className=' pb-[70px] pt-[50px] flex-col space-y-[20px] items-center w-full justify-center'>
        <p className=' text-blue-600 text-center'>MAKEUP™. BEAUTY WITHOUT LIMITS</p>
        <p className=' text-[13px] text-center text-gray-500'>© MAKEUP 2021-2024</p>
      </div>
    </>
    
  )
}

export default Footer