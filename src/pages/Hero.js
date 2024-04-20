const Hero = () => {
  return (
    <div className="hero flex flex-col px-[20px] sm:px[60px] lg:px-[100px] w-screen sm:h-screen h-[150dvh] bg-slate-200" id="hero">
      <div className="hero-top w-full h-[10%] sm:h-[15%]">
        {/* <div className="cambridge-text h-[50%] w-[100%]"></div> */}
      </div>

      <div className="hero-middle w-full sm:h-[60%] h-[60%] flex sm:gap-3 md:gap-4 gap-4 sm:flex-row flex-col">
        <div className="middle-left sm:w-[18%] w-full sm:h-full caudex-bold h-[20%] flex justify-center sm:items-center  sm:text-3xl md:text-4xl lg:text-6xl  text-7xl text-center sm:text-right">
        Youssef Eddafali
        </div>
        <div className="middle-center w-full sm:w-[65%] h-full relative">
          <div className="box-left absolute top-0 left-0 h-full w-[99%] bg-slate-500 z-10">
            {/* <iframe className="h-full w-full" src="https://www.youtube.com/embed/rYZSercMKJA?si=Kejw8Rb5Hdb40FIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe> */}
            </div>
          <div className="box-right absolute top-0 right-0 bg-slate-900 h-full w-[1%] shadow-lg z-0 "></div>
        </div>
        <div className="middle-right w-full sm:w-[15%]  text-lg sm:text-sm md:text-md lg:text-lg  sm:text-left text-center flex items-end">
        writer and story teller from Cambridge, Massachusetts, weaving diverse voices into powerful narratives.
        </div>
      </div>
      <div className="hero-bottom w-full h-[20%] py-4 flex justify-center items-center flex-col gap-2">
        <button className=" hero-button sm:w-[20%] w-[50%] sm:h-[50%] h-[40%] bg-black rounded-2xl text-white hover:bg-white hover:border transition ease-in-out lg:text-base sm:text-sm text-lg hover:text-black"><a href="https://gofund.me/7235a9f7" className="w-full h-full" target="_blank">
            Support Us
            </a>
        </button> 
      <h2 className="text-sm text-slate-800">Help us fund this project!</h2>
      </div>
    </div>
  );
};

export default Hero;
