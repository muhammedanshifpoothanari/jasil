import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const GetOtp = () => {
  return (
    <div className="relative w-full h-screen flex flex-col bg-[#FCFCFC] p-[10px] gap-10">
      {/* Background image container with custom height */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: '10%', 
          background: `url("/Group6806.svg") no-repeat center center`,
          backgroundSize: 'cover',
          opacity: 0.1,
        }}
      />
    

      <ArrowIcon/>

      <h2 className="text-black text-[26px] leading-[29px]">Enter your Otp From Mobile</h2>
      <div>
        <p className="font-semibold text-[#828282] text-[14px]">Enter Otp</p>
        <div className="flex items-center gap-2 mb-5">
         
          <Input placeholder="-----" className="flex-1" />
        </div>
        <div className="flex justify-end">
          <Button variant={'outline'} className="flex items-center bg-[#53B175] w-[67px] h-[67px] rounded-full">
            <ArrowIconRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetOtp;


const ArrowIcon = () => {
  return (
    <svg
      width="11"
      height="18"
      viewBox="0 0 11 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_404)">
        <path
          d="M10.3658 15.7263C10.6005 15.9835 10.7309 16.3218 10.7179 16.6737C10.7179 17.0256 10.5875 17.3504 10.3398 17.6075C10.1051 17.8511 9.77915 18 9.44016 18C9.10118 18 8.77523 17.8782 8.52752 17.6346L1.14812 9.97444C1.03078 9.85263 0.939511 9.70376 0.874322 9.54135C0.809133 9.37895 0.77002 9.20301 0.77002 9.02707C0.77002 8.85113 0.809133 8.67519 0.874322 8.49925C0.939511 8.33684 1.03078 8.18797 1.14812 8.06616L8.52752 0.406015C8.64486 0.284211 8.78827 0.17594 8.94473 0.108271C9.11422 0.0406015 9.28371 0 9.4532 0C9.62269 0 9.80522 0.0270677 9.96168 0.0947368C10.1181 0.162406 10.2615 0.270677 10.3919 0.392481C10.5093 0.514286 10.6005 0.676692 10.6657 0.839098C10.7439 1.0015 10.77 1.17744 10.77 1.36692C10.77 1.54286 10.7309 1.7188 10.6657 1.8812C10.6005 2.04361 10.4962 2.19248 10.3658 2.32782L3.91213 9.02707L5.13769 10.2857L10.3658 15.7263Z"
          fill="#181725"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_404">
          <rect width="10" height="18" fill="white" transform="translate(0.77002)" />
        </clipPath>
      </defs>
    </svg>
  );
};


const ArrowIconRight = () => {
  return (
    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_410)">
    <path d="M0.666502 2.67603C0.431822 2.41888 0.301445 2.08054 0.314482 1.72866C0.314482 1.37678 0.44486 1.05197 0.692579 0.794824C0.927259 0.551215 1.2532 0.402343 1.59219 0.402343C1.93117 0.402343 2.25712 0.524148 2.50483 0.767757L9.88423 8.42791C10.0016 8.54971 10.0928 8.69858 10.158 8.86099C10.2232 9.0234 10.2623 9.19934 10.2623 9.37528C10.2623 9.55122 10.2232 9.72716 10.158 9.9031C10.0928 10.0655 10.0016 10.2144 9.88423 10.3362L2.50483 17.9963C2.38749 18.1181 2.24408 18.2264 2.08762 18.2941C1.91813 18.3617 1.74864 18.4023 1.57915 18.4023C1.40966 18.4023 1.22713 18.3753 1.07067 18.3076C0.91422 18.2399 0.770803 18.1317 0.640426 18.0099C0.523086 17.8881 0.431821 17.7257 0.366632 17.5632C0.288405 17.4008 0.262329 17.2249 0.262329 17.0354C0.262329 16.8595 0.301443 16.6835 0.366632 16.5211C0.431821 16.3587 0.536123 16.2099 0.666501 16.0745L7.12022 9.37528L5.89466 8.11663L0.666502 2.67603Z" fill="#FFF9FF"/>
    </g>
    <defs>
    <clipPath id="clip0_1_410">
    <rect width="10" height="18" fill="white" transform="translate(10.2623 18.4023) rotate(-180)"/>
    </clipPath>
    </defs>
    </svg>
    
  );
};


