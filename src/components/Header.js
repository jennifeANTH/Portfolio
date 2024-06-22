import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className= 'py-̣̣8 mt-10 mb-10'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img className='w-40 h-25 object-contain' src={Logo} alt='logo'></img>
          </a>
            <img className='' src=''/>
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header; 