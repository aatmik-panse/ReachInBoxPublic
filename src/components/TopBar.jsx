import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

function TopBar() {
  return (
    <div className="h-14 pl-14 w-screen bg-white dark:bg-[#1F1F1F] fixed px-14 text-[#5B5F66] dark:text-white top-0 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0]">
      <div className=" pl-14">Onebox</div>

      <div className="pr-10 flex items-center">
        <ThemeToggle />
        My Workspace <MdOutlineKeyboardArrowDown className="text-3xl ml-3" />
      </div>
    </div>
  );
}

export default TopBar;
