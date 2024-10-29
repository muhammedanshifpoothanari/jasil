import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-[#FCFCFC]">
      {/* Background Image for Top Section */}
      <div
        className="h-[350px] w-full"
        style={{
          backgroundImage: 'url("/signGroup.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Main Content */}
      <div className="flex flex-col p-4">
        {/* Headings */}
        <div className="flex flex-col mb-4 text-center">
          <h1 className="font-semibold text-[#030303] text-[24px] leading-[35px]">
            Get your groceries
          </h1>
          <h1 className="font-semibold text-[#030303] text-[24px] leading-[35px]">
            with Bake ‘n’ joy
          </h1>
        </div>

        {/* Input Section */}
        <div className="flex items-center gap-2 mb-5">
          <Image src={'/india.svg'} width={20} height={10} alt="india" />
          <Input placeholder="+91" className="flex-1" />
        </div>

        {/* Button */}
        <Button variant="default" className="bg-[#53B175] p-[15px] w-full max-w-[350px] mx-auto">
          <h2 className="text-white text-[18px] leading-[18px]">Get Otp</h2>
        </Button>
        

        {/* Footer Text */}
        <div className="mt-5 text-center w-full">
          <p className="font-semibold text-[#828282] text-[14px]">
            @Bakenjoy, Kazhakkutum, Trivandrum - 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
