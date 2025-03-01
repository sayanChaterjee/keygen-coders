import { motion } from "framer-motion";
import Link from "next/link";

interface DropDownMenuProps {
  onClose: () => void;
  scrollToServices: () => void; // Add scrollToServices function to props
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose, scrollToServices }) => {
  return (
    <motion.div
      className="
    w-full
    h-screen
    bg-black
     bg-opacity-70
     text-white
     p-6
     space-y-4
     absolute
     top-0
     left-0
     right-0
     z-50
    "
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col flex items-center space-y-10 mt-20">
        <Link href="/" className=" text-2xl">
          Techtix Events
        </Link>
        <Link href="/" className=" text-2xl">
          Events
        </Link>

        <Link href="/" className=" text-2xl">
        Sponsors
        </Link>

        {/* Add onClick handler to Services link */}
        {/* <Link href='/#services'  className="cursor-pointer text-black text-2xl">
          Services
        </Link> */}
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
