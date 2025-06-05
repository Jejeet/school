import { FaApple } from "react-icons/fa";
import { ImWindows } from "react-icons/im";
import Playstore from "../../assets/assets/Playstore.svg";
import Appstore from "../../assets/assets/Appstore.svg"
import Desktop from "../../assets/assets/desktop.png";
import Device from "../../assets/assets/laptop-schoolv.png";
import { Link } from "react-router-dom";
import "./Hero.css";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"



const Hero = () => {

  return (
    <div className="Hero w-full px-4 py-6">

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4 ">

        <div >
          <h1 className="text-4xl  ">EMPOWER YOUR LEARNING JOURNEY</h1>
          <p className="text-base md:text-lg mt-4 px-2">Join multiple students using our platform to catch up on news updates about their preferred institutions and get ahead in their
            studies.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">

          <Link to="#">
            <Button className="btn1 cursor-pointer flex items-center gap-2"><span >Get Started For Free</span><ArrowRight /></Button>
          </Link>
          <span className="text-sm md:text-base"> Or </span>

          <Link to="#" className="underline cursor-pointer  text-sm md:text-base"> Continue website </Link>

        </div>

        <div className="pt-4">
          <div>
            <img src={Device} alt="" className="w-full max-w-md md:max-w-xl" />
          </div>
        </div>
      </div>

      <div className="Secondary flex flex-col  md:flex-row items-center  md:justify-around w-full max-w-screen-2xl overflow-x-hidden mx-auto py-6   ">
        <div className="text-center md:text-left">
          <h1 className="App text-2xl md:text-3xl font-semibold ">Download the App</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center ">
          <Button className="btn2 cursor-pointer">
            <span className="flex items-center gap-2">
              <img src={Appstore} alt="" />
              <span className="flex flex-col text-left">
                <span className="text-sm">Get it on</span>
                <span className="text-lg font-semibold">App Store</span>
              </span>
            </span>
          </Button>

          <Button className="btn2 cursor-pointer">
            <span className="flex items-center gap-2 " >
              <img src={Playstore} alt="" />
              <span className="flex flex-col text-left">
                <span className="text-sm">Available in</span>
                <span className="text-lg font-semibold">Google Play </span>
              </span>
            </span>
          </Button>

          <div className=" relative group w-full">
            <Button className=" hidden md:flex cursor-pointer  btn2 transition-opacity duration-300 group-hover:opacity-0 items-center gap-2">
              <span className="flex flex-row gap-2">
                <img src={Desktop} />
                <span className="flex flex-col text-left">
                  <span className="text-sm">Get the</span>
                  <span className="text-lg font-semibold" >Desktop App</span>
                </span>
              </span>
            </Button>

            <div className="flex flex-row gap-2 ">
              <Button className="flex flex-col 
              md:flex-row items-center
              gap-4 cursor-pointer btn2 
              w-full md:absolute md:inset-0 
             opacity-100 md:opacity-0 
              transition-opacity duration-300 
              group-hover:md:opacity-100">
                <Link to="#" className="flex flex-col items-center">
                  <FaApple />
                  <span className="text-sm">For Macbook</span>
                </Link>

                <Link to="#" className="flex flex-col items-center">
                  <ImWindows />
                  <span className="text-sm" >For Windows</span>
                </Link>
              </Button>

            </div>
          </div>

        </div>

      </div>





    </div>

  )
}

export default Hero