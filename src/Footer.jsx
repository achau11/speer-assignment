import React from 'react';
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa"
import { IoKeypad, IoSettingsSharp } from "react-icons/io5";
import { VscRecord } from "react-icons/vsc";


const Footer = () => {
  return (
    <footer>
      <FaPhoneAlt className='ft_icon'/>
      <FaUserAlt className='ft_icon'/>
      <IoKeypad className='keypad'/>
      <IoSettingsSharp className='ft_icon'/>
      <VscRecord className='ft_icon'/>
    </footer>
  );
};

export default Footer;
