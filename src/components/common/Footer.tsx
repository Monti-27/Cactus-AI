import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-global-5 border-t border-[#e5e5e57f] py-8 sm:py-12 mt-12 sm:mt-16 lg:mt-20">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 justify-start items-center w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start w-full gap-8 sm:gap-0">
            <div className="flex flex-col gap-3 sm:gap-4 justify-start items-center order-2 sm:order-1">
              <img 
                src="/images/img_footer_logo.png" 
                alt="Cactus Footer Logo" 
                className="w-[90px] h-[25px] xs:w-[100px] xs:h-[28px] sm:w-[120px] sm:h-[34px] mx-auto"
              />
              <p className="text-xs xs:text-sm sm:text-base font-light leading-4 xs:leading-5 text-center text-global-4 whitespace-nowrap mx-auto">
                The fastest way to deploy AI models on mobile devices.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 sm:gap-4 justify-start items-center order-1 sm:order-2">
              <div className="flex flex-col gap-2 sm:gap-2.5 justify-start items-center w-full">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-light leading-6 xs:leading-7 sm:leading-8 text-center text-global-1">
                  Resources
                </h3>
                <ul className="flex flex-col gap-2 sm:gap-2.5 justify-start items-center w-full">
                  <li>
                    <a 
                      href="#" 
                      className="text-xs xs:text-sm sm:text-base font-light leading-4 xs:leading-5 text-center text-global-4 hover:text-global-1 transition-colors touch-manipulation py-1"
                    >
                      Get in touch
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-xs xs:text-sm sm:text-base font-light leading-4 xs:leading-5 text-center text-global-4 hover:text-global-1 transition-colors touch-manipulation py-1"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-xs xs:text-sm sm:text-base font-light leading-4 xs:leading-5 text-center text-global-4 hover:text-global-1 transition-colors touch-manipulation py-1"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-xs xs:text-sm sm:text-base font-light leading-4 xs:leading-5 text-center text-global-4 border-t border-[#e5e5e57f] pt-4 sm:pt-6 lg:pt-8 w-full">
            © 2025 Cactus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;