import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const StepOne = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".animated-image");
    setTimeout(() => {
      images.forEach((image, index) => {
        image.classList.add("show");
      });
    }, 500);

    const images1 = document.querySelectorAll(".animated-image1");
    setTimeout(() => {
      images1.forEach((image, index) => {
        image.classList.add("show1");
      });
    }, 1000);
  }, []);

  
  return (
    <div className="p-4 flex items-center justify-center w-full pt-24 md:pt-20 pt-6 pb-12">
      <div className="flex flex-col gap-3 justify-between items-center">
        {/* <div className=" flex md:flex-row flex-col md:gap-6 gap-4 md:items-end items-center">
          <div className="flex md:flex-col flex-col-reverse gap-4">
            <Image
              src="/image4.png"
              width={50}
              height={30}
              alt="image"
              className="mb-3 ml-4"
            />
            <Image
              src="/image3.png"
              width={100}
              height={100}
              alt="image"
              className="rounded-2xl w-56 h-36"
              data-aos="zoom-in"
            />
          </div>
          <Image
            src="/image5.png"
            width={150}
            height={100}
            alt="image"
            className="md:w-[130px] md:h-[120px] w-[200px] pb-4"
          />
        </div>
        <div className="md:flex hidden gap-8">
          <Image
            src="/image2.png"
            width={130}
            height={100}
            alt="image"
            className="ml-20 "
          />
          <Image src="/image1.png" width={170} height={10} alt="image" />
        </div> */}

        <div>
          <p className="text-[36px] max-md:hidden ml-4 animated-image mont">I'm</p>
          <div className="flex items-center gap-2 max-md:flex-col">
            <div className="flex-1 md:flex-6 animated-image">
              <img src="https://placehold.co/300x200" className="w-full rounded-xl" />
            </div>
            <p className="text-[36px] md:hidden block leading-none text-left w-full mont">I'm</p>
            <div className="flex-1 md:flex-4 animated-image1">
              <p className="text-[240px] md:text-[150px] leading-none font-extrabold text-green eloquence">Pi</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-5 max-md:hidden">
            <div  className="text-right flex-6 animated-image">
              <p className="text-[36px] leading-none mont">Your</p>
              <p className="italic text-[36px] leading-none mont">Personal</p>
              <p className="text-[36px] leading-none mont">AI.</p>
            </div>
            <div className="flex-4 animated-image1">
              <img src="https://placehold.co/300x250" className="w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
