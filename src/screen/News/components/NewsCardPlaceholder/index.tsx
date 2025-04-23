import React from "react";

const NewsCardPlaceholder = () => {
  return (
    <div className="col-lg-4 col-md-6 min-h-[400px] relative" key={"l"}>
      <div>
        <div className="bg-gray-300 w-full h-[300px] md:h-[270px] sm:h-[350px] xs:h-[300px] rounded-t-md animate-pulse"></div>
        <div className="h-full px-5 pt-5 shadow-[0px_7px_29px_rgba(100,100,111,0.2)] single-blog-item">
          <div className="flex items-center ps-2">
            <div className="bg-gray-300 w-[35px] h-[35px] rounded-full mr-5 animate-pulse"></div>
            <div className="bg-gray-300 w-[150px] h-[25px] animate-pulse"></div>
          </div>

          <div className="mt-5">
            <div>
              <div className="bg-gray-300 w-[95%] h-[20px] mt-2.5 animate-pulse"></div>
              <div className="bg-gray-300 w-[90%] h-[20px] mt-2.5 animate-pulse"></div>
            </div>

            <div className="mt-5 mb-[2.7rem]">
              <div className="bg-gray-300 w-[95%] h-[14px] mt-2.5 animate-pulse"></div>
              <div className="bg-gray-300 w-[95%] h-[14px] mt-2.5 animate-pulse"></div>
              <div className="bg-gray-300 w-[95%] h-[14px] mt-2.5 animate-pulse"></div>
            </div>
          </div>
          <div className="border-t border-gray-200 py-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center">
                  <div className="bg-gray-300 w-[70px] h-[20px] mr-5 animate-pulse"></div>
                  <div className="bg-gray-300 w-[25px] h-[25px] rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="bg-gray-300 w-[90px] h-[35px] rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCardPlaceholder;
