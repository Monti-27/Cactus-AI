import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-header-1 border-b border-[#e5e5e57f] py-3 sm:py-4">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-row justify-between items-center w-full">
          <img 
            src="/images/img_header_logo.png" 
            alt="Cactus Logo" 
            className="w-[100px] h-[28px] xs:w-[120px] xs:h-[34px] sm:w-[150px] sm:h-[42px] flex-shrink-0"
          />
          
          <div className="flex flex-row gap-2 sm:gap-3 lg:gap-4 justify-center items-center">
            <img 
              src="/images/img_container.svg" 
              alt="Social Link" 
              className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg cursor-pointer hover:opacity-80 transition-opacity touch-manipulation"
            />
            
            <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-global-1 rounded-lg p-1.5 xs:p-2 sm:p-2.5 cursor-pointer hover:opacity-80 transition-opacity touch-manipulation">
              <img 
                src="/images/img_container_gray_50.svg" 
                alt="Social Link" 
                className="w-full h-full"
              />
            </div>
            
            <img 
              src="/images/img_container_gray_900.svg" 
              alt="Social Link" 
              className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg cursor-pointer hover:opacity-80 transition-opacity touch-manipulation"
            />
            
            <img 
              src="/images/img_container_gray_900_40x40.svg" 
              alt="Social Link" 
              className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg cursor-pointer hover:opacity-80 transition-opacity touch-manipulation"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;