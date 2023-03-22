import { useState, useRef } from "react";
import { useOnHoverOutside } from "./../hooks/useOnHoverOutside";
import Menu from "./menu";
import MenuStyles from './MenuStyles.css'

export function Header() {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <div class="flex justify-center header">
      <div class="container container-mobile flex justify-between laptop1280:py-[15px] py-[20px]">
        <div class="flex items-center">
          <a class="font-bold text-[30px]" href="/">
         
          </a>
          <div class="ml-[62px] mobile:hidden" ref={dropdownRef}>
            <button 
              class="text-dark-grey-100" className='dropdown'
              onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
            >
              alison park
            </button>

            {isMenuDropDownOpen && <Menu />} 
          </div>
        </div>
       
      </div>
    </div>
  );
}