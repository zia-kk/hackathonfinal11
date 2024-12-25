import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { BiCart } from "react-icons/bi";
import { GrDown } from "react-icons/gr";
import { LuUser } from "react-icons/lu";

const Header = () => {
  return (
    <header className="bg-purple-600 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-4 space-y-2 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <CiMail className="w-5 h-5" />
            <span className="text-sm md:text-base font-medium">mhhasanul@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneVolume className="w-5 h-5" />
            <span className="text-sm md:text-base font-medium">(12345)67890</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center gap-1 text-sm md:text-base font-medium cursor-pointer">
            English <GrDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 text-sm md:text-base font-medium cursor-pointer">
            USD <GrDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 text-sm md:text-base font-medium cursor-pointer">
            Login <LuUser className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base font-medium cursor-pointer">
            Wishlist <FaRegHeart className="w-5 h-5" />
          </div>
          <BiCart className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
