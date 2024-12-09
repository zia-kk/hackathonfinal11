
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { BiCart } from "react-icons/bi";
import { GrDown } from "react-icons/gr";
import { LuUser } from "react-icons/lu";

const Header = () => {
  return (
    <header className="bg-purple-600 text-white">
      <div className="container  mx-auto flex-col  justify-between sm:flex-row md:flex-row flex items-center  py-2 px-4">
        {/* Left Section */}
        <div className="flex my-2 items-center space-x-6 text-sm">
          <div className="flex items-center space-x-1">
         
            <CiMail className="w-4 h-4" />
            <span>mhhasanul@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaPhoneVolume className="w-4 h-4" />
            <span>(12345)67890</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex justify-center items-center gap-1">English<GrDown /></div>
          <div className="flex justify-center items-center gap-1">USD<GrDown /></div>
          <div className="flex justify-center items-center gap-1">Login<LuUser/></div>
          <div className="flex justify-center items-center gap-2">Whishlist<FaRegHeart className="w-5 h-5" /></div>
          <BiCart className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
