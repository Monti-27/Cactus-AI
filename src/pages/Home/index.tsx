import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-5">
      <Header />
      
      {/* Main Content */}
      <div className="flex flex-col justify-start items-center w-full">
        {/* Hero Section */}
        <div className="flex flex-row justify-start items-center w-full border-b border-[#e5e5e57f]">
          <div className="flex flex-row justify-center items-start w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-14">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start w-full max-w-[1504px] gap-8 lg:gap-12 xl:gap-16">
              {/* Left Content */}
              <div className="flex flex-col justify-start items-start w-full lg:w-[58%] xl:w-[60%] order-2 lg:order-1">
                {/* Badges */}
                <div className="flex flex-col xs:flex-row justify-start items-start xs:items-center w-full mb-4 sm:mb-6 gap-2 xs:gap-0">
                  <img 
                    src="/images/img_container_orange_50.png" 
                    alt="Oxford Badge" 
                    className="w-[90px] h-[22px] xs:w-[100px] xs:h-[24px] sm:w-[126px] sm:h-[30px] rounded-[14px]"
                  />
                  <div className="flex flex-row flex-wrap gap-2 xs:ml-2">
                    <div className="bg-button-1 text-button-2 w-[119px] h-[22px] xs:w-[139px] xs:h-[24px] sm:w-[169px] sm:h-[30px] rounded-[14px] flex items-center justify-center text-sm font-medium whitespace-nowrap">
                      Oxford Seed Fund
                    </div>
                    <div className="bg-button-2 text-button-2 w-[119px] h-[22px] xs:w-[139px] xs:h-[24px] sm:w-[169px] sm:h-[30px] rounded-[14px] flex items-center justify-center text-sm font-medium whitespace-nowrap">
                      Google for Startups
                    </div>
                  </div>
                </div>

                {/* Main Heading */}
                <div className="relative w-full mb-4 sm:mb-6">
                  <div className="flex flex-col justify-start items-start w-full">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-global-1 w-full">
                      Deploy Mobile AI
                    </h1>
                    <div className='mt-7'></div>
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-global-1 w-full -mt-60 xs:-mt-3 sm:-mt-4 lg:-mt-5">
                      in React Native
                    </h1>
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 justify-start items-start w-full mb-6 sm:mb-8 mt-8 sm:mt-10 lg:mt-12">
                  <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-extralight leading-5 xs:leading-6 sm:leading-7 text-global-4">
                    Minimize latency, guarantee privacy, and decrease server costs.
                  </p>
                  <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-extralight leading-5 xs:leading-6 sm:leading-7 text-global-4">
                    Run AI on-device and cross-platform with our lightweight inference framework.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col xs:flex-row justify-start items-stretch xs:items-center w-full gap-3 sm:gap-4 mb-8 sm:mb-12">
                  <Button 
                    variant="primary"
                    size="medium"
                    className="bg-button-3 text-button-1 rounded-md px-4 sm:px-6 lg:px-8 py-3 sm:py-3 text-sm font-normal flex items-center justify-center gap-3 w-full xs:w-auto min-h-[44px] touch-manipulation"
                  >
                    Our GitHub
                    <img src="/images/img_svg.svg" alt="Arrow" className="w-4 h-4 flex-shrink-0" />
                  </Button>
                  <Button 
                    variant="outline"
                    size="medium"
                    className="border border-[#e5e5e5] text-global-1 bg-global-5 rounded-md px-4 sm:px-6 lg:px-8 py-3 sm:py-3 text-sm font-normal w-full xs:w-auto min-h-[44px] touch-manipulation"
                  >
                    Get in touch
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex flex-col sm:flex-row justify-start items-start w-full gap-6 sm:gap-8 lg:gap-12 xl:gap-[92px]">
                  <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[18px] justify-start items-start">
                    <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold leading-8 xs:leading-9 sm:leading-10 lg:leading-11 text-global-1">
                      &lt;50ms
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-base font-extralight leading-4 xs:leading-5 text-global-4">
                      Time to First Token
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[18px] justify-start items-start">
                    <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold leading-8 xs:leading-9 sm:leading-10 lg:leading-11 text-global-1">
                      Up to 300
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-base font-extralight leading-4 xs:leading-5 text-global-4">
                      Tokens / second
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[18px] justify-start items-start">
                    <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold leading-8 xs:leading-9 sm:leading-10 lg:leading-11 text-global-1">
                      Zero
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-base font-extralight leading-4 xs:leading-5 text-global-4">
                      Data Leaves the Device
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Code Example */}
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 justify-start items-center w-full lg:w-[42%] xl:w-[38%] order-1 lg:order-2">
                <div className="flex flex-row justify-start items-end w-full">
                  <div className="flex flex-row justify-start items-center w-full">
                    <div className="bg-global-2 p-2 xs:p-3 sm:p-4 flex flex-row justify-start items-center w-full border border-[#334155] rounded-lg overflow-hidden">
                      <div className="flex flex-col justify-start items-start w-full overflow-x-auto">
                        {/* Code Lines */}
                        <div className="flex flex-row justify-start items-center w-full min-w-max mb-1 xs:mb-2">
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">1</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-7 ml-2 xs:ml-4 font-mono">import</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">&#123;</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">CactusLM</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">&#125;</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-7 ml-1 xs:ml-2 font-mono">from</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-5 ml-1 xs:ml-2 font-mono">'cactus-react-native'</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 font-mono">;</span>
                        </div>
                        
                        <div className="flex flex-row justify-start items-center w-full min-w-max mb-1 xs:mb-2">
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">2</span>
                        </div>
                        
                        <div className="flex flex-row justify-start items-center w-full min-w-max mb-1 xs:mb-2">
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">3</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-7 ml-2 xs:ml-4 font-mono">const</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">&#123;</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">lm</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">&#125;</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-3 ml-1 xs:ml-2 font-mono">=</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-7 ml-1 xs:ml-2 font-mono">await</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">CactusLM</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">.</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-3 font-mono">init</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">(</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">&#123;</span>
                        </div>

                        {/* Additional code lines with proper mobile spacing */}
                        <div className="flex flex-col w-full">
                          <div className="flex flex-row justify-start items-center w-full min-w-max mb-1 xs:mb-2">
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">4</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-9 ml-6 xs:ml-8 sm:ml-12 font-mono">model</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-3 font-mono">:</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-5 ml-1 xs:ml-2 sm:ml-3 font-mono">'/path/to/model.gguf'</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 font-mono">,</span>
                          </div>
                          <div className="flex flex-row justify-start items-center w-full min-w-max mb-1 xs:mb-2">
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">5</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-9 ml-6 xs:ml-8 sm:ml-12 font-mono">n_ctx</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-3 font-mono">:</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-8 ml-1 xs:ml-2 font-mono">2048</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">,</span>
                          </div>
                        </div>

                        {/* Continue with remaining code lines... */}
                        <div className="flex flex-row justify-start items-center w-full min-w-max mb-1 xs:mb-2">
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">6</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-2 xs:ml-4 font-mono">&#125;</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">)</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">;</span>
                        </div>

                        <div className="flex flex-row justify-start items-center w-full min-w-max mb-1 xs:mb-2">
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">7</span>
                        </div>

                        {/* More code lines optimized for mobile */}
                        <div className="flex flex-col w-full">
                          <div className="flex flex-row justify-start items-center w-full min-w-max mb-1 xs:mb-2">
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">8</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-7 ml-2 xs:ml-4 font-mono">const</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">messages</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-3 ml-1 xs:ml-2 font-mono">=</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">[</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">&#123;</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-9 font-mono">role</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-3 font-mono">:</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-5 ml-1 xs:ml-2 sm:ml-3 font-mono">'user'</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 font-mono">,</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-9 ml-1 xs:ml-2 font-mono">content</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-3 font-mono">:</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-5 ml-1 xs:ml-2 sm:ml-3 font-mono">'Hi!'</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">&#125;</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">]</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">;</span>
                          </div>
                          <div className="flex flex-row justify-start items-center w-full min-w-max mb-1 xs:mb-2">
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">9</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-7 ml-2 xs:ml-4 font-mono">const</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">params</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-3 ml-1 xs:ml-2 font-mono">=</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">&#123;</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-9 font-mono">n_predict</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-3 font-mono">:</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-8 ml-1 xs:ml-2 font-mono">100</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">,</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-9 ml-1 xs:ml-2 font-mono">temperature</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-3 font-mono">:</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-8 ml-1 xs:ml-2 font-mono">0.7</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">&#125;</span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">;</span>
                          </div>
                        </div>

                        <div className="flex flex-row justify-start items-center w-full min-w-max mb-1 xs:mb-2">
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">10</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-7 ml-2 xs:ml-4 font-mono">const</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">response</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-3 ml-1 xs:ml-2 font-mono">=</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-7 ml-1 xs:ml-2 font-mono">await</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">lm</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">.</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-3 font-mono">completion</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">(</span>
                        </div>

                        <div className="flex flex-row justify-start items-center w-full min-w-max mb-1 xs:mb-2">
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">11</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-4 xs:ml-6 font-mono">messages</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-1 xs:ml-2 font-mono">,</span>
                        </div>

                        <div className="flex flex-row justify-start items-center w-full min-w-max mb-1 xs:mb-2">
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">12</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-4 xs:ml-6 font-mono">params</span>
                        </div>

                        <div className="flex flex-row justify-start items-center w-full min-w-max">
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-2 font-mono w-4 xs:w-5 text-right flex-shrink-0">13</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 ml-2 xs:ml-4 font-mono">)</span>
                          <span className="text-[10px] xs:text-xs sm:text-sm font-light leading-4 xs:leading-5 text-global-6 font-mono">;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Play Badge */}
                <div className="flex flex-col gap-2 sm:gap-3 justify-center items-center w-full px-4 sm:px-8 lg:px-14">
                  <p className="text-sm xs:text-base sm:text-lg font-extralight leading-5 xs:leading-6 text-center text-global-1">
                    See Cactus in action:
                  </p>
                  <img 
                    src="/images/img_get_it_on_google.svg" 
                    alt="Get it on Google Play" 
                    className="w-[120px] h-[36px] xs:w-[130px] xs:h-[38px] sm:w-[162px] sm:h-[48px] self-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-row justify-start items-center w-full">
          <div className="flex flex-col justify-center items-center w-full bg-global-4 border-b border-[#e5e5e57f] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-14">
            <div className="flex flex-col gap-8 sm:gap-12 lg:gap-15 xl:gap-[60px] justify-start items-center w-full max-w-[1504px]">
              {/* Section Header */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 justify-start items-center w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] text-center">
                <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold leading-7 xs:leading-8 sm:leading-9 lg:leading-10 xl:leading-11 text-global-1">
                  Built for Modern Mobile AI
                </h2>
                <p className="text-sm xs:text-base sm:text-lg font-extralight leading-5 xs:leading-6 sm:leading-7 text-global-4">
                  Cactus is designed for edge deployment, optimizing performance while maintaining model accuracy.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
                {/* Offline-ready */}
                <div className="flex flex-col gap-3 sm:gap-4 justify-start items-start w-full bg-global-5 border border-[#e5e5e57f] p-4 sm:p-6 lg:p-8 rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-global-1 rounded-lg p-2 sm:p-3 flex-shrink-0">
                    <img 
                      src="/images/img_container_gray_50_40x40.svg" 
                      alt="Offline Icon" 
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-light leading-6 xs:leading-7 sm:leading-8 lg:leading-9 text-global-1">
                    Offline-ready
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base font-extralight leading-4 xs:leading-5 sm:leading-6 text-global-4">
                    Perfect for unreliable networks or internet-disabled devices.
                  </p>
                </div>

                {/* Private */}
                <div className="flex flex-col gap-3 sm:gap-4 justify-start items-start w-full bg-global-5 border border-[#e5e5e57f] p-4 sm:p-6 lg:p-8 rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-global-1 rounded-lg p-2 sm:p-2.5 flex-shrink-0">
                    <img 
                      src="/images/img_container_40x40.svg" 
                      alt="Private Icon" 
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-light leading-6 xs:leading-7 sm:leading-8 lg:leading-9 text-global-1">
                    Private
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base font-extralight leading-4 xs:leading-5 sm:leading-6 text-global-4">
                    All processing happens on-device by default. No data transmission and complete user privacy.
                  </p>
                </div>

                {/* Multimodal */}
                <div className="flex flex-col gap-3 sm:gap-4 justify-start items-start w-full bg-global-5 border border-[#e5e5e57f] p-4 sm:p-6 lg:p-8 rounded-lg">
                  <img 
                    src="/images/img_container_1.svg" 
                    alt="Multimodal Icon" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex-shrink-0"
                  />
                  <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-light leading-6 xs:leading-7 sm:leading-8 lg:leading-9 text-global-1">
                    Multimodal
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base font-extralight leading-4 xs:leading-5 sm:leading-6 text-global-4">
                    Run text, image, and audio inference through a unified framework.
                  </p>
                </div>

                {/* Cloud fallback */}
                <div className="flex flex-col gap-3 sm:gap-4 justify-start items-start w-full bg-global-5 border border-[#e5e5e57f] p-4 sm:p-6 lg:p-8 rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-global-1 rounded-lg p-2 sm:p-2.5 flex-shrink-0">
                    <img 
                      src="/images/img_container_2.svg" 
                      alt="Cloud Fallback Icon" 
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-light leading-6 xs:leading-7 sm:leading-8 lg:leading-9 text-global-1">
                    Cloud fallback
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base font-extralight leading-4 xs:leading-5 sm:leading-6 text-global-4">
                    We support fallback to cloud inference for more complex tasks if needed. Get in touch for access.
                  </p>
                </div>

                {/* Lightning-fast */}
                <div className="flex flex-col gap-3 sm:gap-4 justify-start items-start w-full bg-global-5 border border-[#e5e5e57f] p-4 sm:p-6 lg:p-8 rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-global-1 rounded-lg p-2 sm:p-2.5 flex-shrink-0">
                    <img 
                      src="/images/img_container_3.svg" 
                      alt="Lightning Fast Icon" 
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-light leading-6 xs:leading-7 sm:leading-8 lg:leading-9 text-global-1">
                    Lightning-fast
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base font-extralight leading-4 xs:leading-5 sm:leading-6 text-global-4">
                    Hardware-accelerated inference using proprietary kernels.
                  </p>
                </div>

                {/* Easy to integrate */}
                <div className="flex flex-col gap-3 sm:gap-4 justify-start items-start w-full bg-global-5 border border-[#e5e5e57f] p-4 sm:p-6 lg:p-8 rounded-lg">
                  <img 
                    src="/images/img_container_4.svg" 
                    alt="Easy Integration Icon" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex-shrink-0"
                  />
                  <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-light leading-6 xs:leading-7 sm:leading-8 lg:leading-9 text-global-1">
                    Easy to integrate
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base font-extralight leading-4 xs:leading-5 sm:leading-6 text-global-4">
                    Simple, well-documented APIs. Get up and running in minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-row justify-center items-center w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-14 mt-8 sm:mt-12 lg:mt-16 xl:mt-20">
          <div className="flex flex-col gap-4 sm:gap-6 justify-start items-center w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[36%] text-center">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold leading-7 xs:leading-8 sm:leading-9 lg:leading-10 xl:leading-11 text-global-1">
              Ready to find your Edge?
            </h2>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-extralight leading-5 xs:leading-6 sm:leading-7 text-global-4">
              Join thousands of developers building the next generation of Edge AI applications.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-stretch xs:items-center w-full xs:w-auto">
              <Button 
                variant="primary"
                size="medium"
                className="bg-button-3 text-button-1 rounded-md px-4 sm:px-6 lg:px-8 py-3 sm:py-3 text-sm font-normal flex items-center justify-center gap-3 w-full xs:w-auto min-h-[44px] touch-manipulation"
              >
                Start Building Today
                <img src="/images/img_svg.svg" alt="Arrow" className="w-4 h-4 flex-shrink-0" />
              </Button>
              <Button 
                variant="outline"
                size="medium"
                className="border border-[#e5e5e5] text-global-1 bg-global-5 rounded-md px-4 sm:px-6 lg:px-8 py-3 sm:py-3 text-sm font-normal w-full xs:w-auto min-h-[44px] touch-manipulation"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;