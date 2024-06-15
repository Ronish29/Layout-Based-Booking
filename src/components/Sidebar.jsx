import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Sidebar = ({ selectedItem, setSelectedItem }) => {
  const sidebarLinks = ['Restaurants', 'Turfs', 'Banquets'];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const handleSelectedItem = (item) => {
    setSelectedItem(item);
    setIsDrawerOpen(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className='relative border-r-2 h-full'>
      {isMobile ? (
        <div className='p-4'>
          <FaBars
            className='text-2xl cursor-pointer'
            onClick={toggleDrawer}
          />
          {isDrawerOpen && (
            <div className='fixed inset-0 bg-gray-800 bg-opacity-50 z-40' onClick={toggleDrawer}>
              <div className='fixed left-0 top-0 bottom-0 w-64 bg-white p-5 z-50' onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-between items-center mb-5'>
                  <h2 className='text-lg font-semibold'>Menu</h2>
                  <IoMdClose className='text-2xl cursor-pointer' onClick={toggleDrawer} />
                </div>
                <div className='flex flex-col gap-y-5'>
                  {
                    sidebarLinks.map((item, index) => (
                      <p
                        key={index}
                        className={`p-2 rounded-md cursor-pointer ${selectedItem === item ? 'bg-blue-500 text-white' : 'text-black'}`}
                        onClick={() => handleSelectedItem(item)}
                      >
                        {item}
                      </p>
                    ))
                  }
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className='flex flex-col p-5 max-w-[240px]'>
          <div className='flex flex-col gap-y-5'>
            <h2 className='text-lg font-semibold'>Menu</h2>
            {
              sidebarLinks.map((item, index) => (
                <p
                  key={index}
                  className={`p-2 rounded-md cursor-pointer ${selectedItem === item ? 'bg-blue-500 text-white' : 'text-black'}`}
                  onClick={() => handleSelectedItem(item)}
                >
                  {item}
                </p>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
