'use client'

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

// Dynamically import the Image component
const Image = dynamic(() => import("next/image"), {
  ssr: false, // Disable server-side rendering for this import
  loading: () => <Skeleton className="min-h-[100vh] w-[400px] rounded-xl" />, // Show Skeleton as a loading indicator
});

const OnBoarding = () => {
  const router = useRouter();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageError, setIsImageError] = useState(false);

  useEffect(() => {
    // Create a new image to handle loading and error states
    const img = new window.Image();
    img.src = "/onboarding.jpg";
    img.onload = () => setIsImageLoaded(true); // Set state when image is loaded
    img.onerror = () => setIsImageError(true); // Set state when image fails to load
  }, []);

  return (
    <div className="w-full h-screen">
      {isImageError ? (
      
     
      <div
      className={`w-full h-full flex flex-col justify-center items-center ${
        isImageLoaded ? "bg-cover bg-no-repeat" : "animate-pulse rounded-md bg-primary/10"
      }`}
      style={{
        backgroundImage: isImageLoaded ? 'url("/onboarding.jpg")' : "animate-pulse rounded-md bg-primary/10",
      }}
    >
      <div className="flex flex-col justify-center items-center w-[350px] h-screen gap-5">
        <div className="flex flex-col items-center mt-[350px] mb-2">
          <Image
            src="/icon.svg"
            width={40}
            height={40}
            alt="icon"
            className="mt-6 mb-3"
          />
          <h1 className="font-semibold text-white text-[40px] leading-[29px] mb-4">
            Welcome 
          </h1>
          <h1 className="font-semibold text-white text-[40px] leading-[29px] mb-4">
            to our store 
          </h1>
          <p className="text-white leading-[15px]">
            Get your groceries in as fast as one hour
          </p>
        </div>

        <Button variant="default" className="bg-[#53B175] p-[25px] w-[350px]" onClick={() => router.push('/homeScreen')}>
          <h2 className="text-white text-[18px] leading-[18px]">Get Started</h2>
        </Button>
      </div>
    </div>
       
      ) : (
        <div
          className={`w-full h-full flex flex-col justify-center items-center ${
            isImageLoaded ? "bg-cover bg-no-repeat" : "animate-pulse rounded-md bg-primary/10"
          }`}
          style={{
            backgroundImage: isImageLoaded ? 'url("/onboarding.jpg")' : "animate-pulse rounded-md bg-primary/10",
          }}
        >
          <div className="flex flex-col justify-center items-center w-[350px] h-screen gap-5">
            <div className="flex flex-col items-center mt-[350px] mb-2">
              <Image
                src="/icon.svg"
                width={40}
                height={40}
                alt="icon"
                className="mt-6 mb-3"
              />
              <h1 className="font-semibold text-white text-[40px] leading-[29px] mb-4">
                Welcome 
              </h1>
              <h1 className="font-semibold text-white text-[40px] leading-[29px] mb-4">
                to our store 
              </h1>
              <p className="text-white leading-[15px]">
                Get your groceries in as fast as one hour
              </p>
            </div>

            <Button variant="default" className="bg-[#53B175] p-[25px] w-[350px]" onClick={() => router.push('/homeScreen')}>
              <h2 className="text-white text-[18px] leading-[18px]">Get Started</h2>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnBoarding;
