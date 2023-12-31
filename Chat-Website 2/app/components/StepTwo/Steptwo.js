import Image from "next/image";
import { useEffect } from "react";

const StepTwo = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".animated-image");
    setTimeout(() => {
      images.forEach((image, index) => {
        image.classList.add("show");
      });
    }, 500);
  }, []);
  return (
    <div className="text-center p-5 relative flex items-center justify-center h-4/6 md:w-1/2 m-auto">
      <div className="flex items-center justify-center ">
        {/* <Image
          src="/text.png"
          alt="Description of the image"
          width={100}
          height={100}
          className="w-40"
        /> */}
        <div className="text-right flex-6">
          <p className="italic text-[36px] leading-none tracking-tighter mont">Together,</p>
          <p className="text-[36px] leading-none tracking-tighter mont">we can</p>
        </div>
      </div>
      <img
        src="https://placehold.co/300x250"
        alt="Image one"
        width={120}
        height={100}
        className="absolute top-4 right-56 animated-image rounded-xl"
      />
        <img
        src="https://placehold.co/300x250"
        alt="Image one"
        width={120}
        height={100}
        className="absolute top-36 right-24 animated-image rounded-xl"
      />
          <img
        src="https://placehold.co/300x250"
        alt="Image one"
        width={120}
        height={100}
        className="absolute top-32 left-16 animated-image rounded-xl"
      />
          <img
        src="https://placehold.co/300x250"
        alt="Image one"
        width={120}
        height={100}
        className="absolute bottom-10 animated-image rounded-xl"
      />
      <img
        src="https://placehold.co/300x250"
        alt="Image one"
        width={120}
        height={100}
        className="absolute bottom-24 left-28 animated-image rounded-xl"
      />
          <img
        src="https://placehold.co/300x250"
        alt="Image one"
        width={120}
        height={100}
        className="absolute top-10 left-52 animated-image rounded-xl"
      />
         <img
        src="https://placehold.co/300x250"
        alt="Image one"
        width={120}
        height={100}
        className="absolute right-24 bottom-6 animated-image rounded-xl"
      />
    </div>
  );
};

export default StepTwo;
