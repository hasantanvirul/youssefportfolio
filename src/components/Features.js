import ArticleCollage from "./articleCollage";
import Microlink from "@microlink/react";
import "../App.css";
// import { LinkPreview } from '@dhaiwat10/react-link-preview';
// import LinkPreview from "@ashwamegh/react-link-preview"

const Features = () => {
  return (
    <div className="features sm:h-[150dvh] h-[350dvh] w-screen  py-10 z-50 bg-slate-200" id="features">
      <div className="features-title h-[5%] sm:h-[15%] w-full flex justify-center items-center caudex-bold text-black text-5xl">
        Features
      </div>
      <div className="features-grid  h-[95%] sm:h-[80%] p-4">
        <div className="grid-frames h-full sm:grid sm:grid-col-14 sm:grid-rows-7 gap-3 flex flex-wrap justify-center">
          {/* <div className=" flex flex-wrap justify-center"> */}
          <div className="theCinemaholic sm:col-start-2 sm:col-end-5 sm:row-start-1 sm:row-end-3 transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer rounded-md bg-slate-950 w-full">
            <a href="https://thecinemaholic.com/youssef-eddafali-where-is-dzhokhar-tsarnaevs-friend-now/">
               <div className="grid-div h-full w-full flex items-end">
                  <div className="grid-div-content h-[50%] w-full flex flex-wrap text-white flex-col justify-between">
                   <div className="content-info">
                   <div className="content-title">Youssef Eddafali: Where is Dzhokhar Tsarnaev’s Friend Now?</div>
                   <div className="content-subtitle"></div>
                   </div>
                   <div className="content-link text-xs">www.thecinemaholic.com</div>
                  </div>
               </div>
            </a>
            </div>

          <div className="theNewYorkTimes col-start-5 col-end-8 row-start-1 row-end-3 bg-yellow-600 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer rounded-md w-full">
          <a href="https://www.nytimes.com/2023/04/15/us/friend-boston-marathon-bomber.html">
               <div className="grid-div h-full w-full flex items-end" id="theCinemaholic">
                  <div className="grid-div-content h-[50%] w-full flex flex-wrap text-white flex-col justify-between">
                   <div className="content-info">
                   <div className="content-title">For Former Friend of Boston Marathon Bomber, a Burden of Shame and Betrayal</div>
                   <div className="content-subtitle"></div>
                   </div>
                   <div className="content-link text-xs">www.nytimes.com</div>
                  </div>
               </div>
            </a>
          </div>
          <div className="bostonGlobe col-start-8 col-end-11 row-start-2 row-end-4 bg-red-500 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer rounded-md w-full">
          <a href="https://www.bostonglobe.com/magazine/2018/09/25/was-friends-with-boston-marathon-bomber-and-his-crimes-haunt-still/HfTlpG00VgYFYyNTtOwVRN/story.html">
               <div className="grid-div h-full w-full flex items-end" id="theCinemaholic">
                  <div className="grid-div-content h-[50%] w-full flex flex-wrap text-white flex-col justify-between">
                   <div className="content-info">
                   <div className="content-title">I was friends with the Boston Marathon bomber, and his crimes haunt me still</div>
                   <div className="content-subtitle"></div>
                   </div>
                   <div className="content-link text-xs">www.bostonglobe.com</div>
                  </div>
               </div>
            </a>
          </div>
          <div className="netflix col-start-1 col-end-4 row-start-3 row-end-5 bg-emerald-600 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer rounded-md w-full">
          <a href="https://www.netflix.com/bd/title/81580822">
               <div className="grid-div h-full w-full flex items-end" id="theCinemaholic">
                  <div className="grid-div-content h-[50%] w-full flex flex-wrap text-white flex-col justify-between">
                   <div className="content-info">
                   <div className="content-title">American Manhunt: The Boston Marathon Bombing</div>
                   <div className="content-subtitle"></div>
                   </div>
                   <div className="content-link text-xs">www.netflix.com</div>
                  </div>
               </div>
            </a>
          </div>
          <div className="netflixTulum col-start-4 col-end-8 row-start-3 row-end-5 bg-slate-900 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer rounded-md w-full">
          <a href="https://www.netflix.com/tudum/articles/boston-marathon-bombing-timeline">
               <div className="grid-div h-full w-full flex items-end" id="theCinemaholic">
                  <div className="grid-div-content h-[50%] w-full flex flex-wrap text-white flex-col justify-between">
                   <div className="content-info">
                   <div className="content-title">What Happened in the 100 Hours Following the Boston Bombing</div>
                   <div className="content-subtitle"></div>
                   </div>
                   <div className="content-link text-xs">www.netflix.com/tudum</div>
                  </div>
               </div>
            </a>
          </div>
          <div className="bostonDotCom col-start-8 col-end-11 row-start-4 row-span-3 bg-amber-800 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer rounded-md w-full">
          <a href="https://www.boston.com/news/local-news/2018/09/26/high-school-friend-boston-marathon-bomber-dzhokhar-tsarnaev-globe-magazine-essay/">
               <div className="grid-div h-full w-full flex items-end" id="theCinemaholic">
                  <div className="grid-div-content h-[50%] w-full flex flex-wrap text-white flex-col justify-between">
                   <div className="content-info">
                   <div className="content-title">High school friend of Boston Marathon bomber Dzhokhar Tsarnaev says his classmate’s crimes ‘haunt’ him</div>
                   <div className="content-subtitle"></div>
                   </div>
                   <div className="content-link text-xs">www.boston.com</div>
                  </div>
               </div>
            </a>
          </div>
          <div className="unilad col-start-2 col-end-5 row-start-5 row-span-2 bg-green-950 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer rounded-md w-full">
          <a href="https://www.unilad.com/film-and-tv/boston-marathon-bombings-netflix-american-manhunt-836657-20230418">
               <div className="grid-div h-full w-full flex items-end" id="theCinemaholic">
                  <div className="grid-div-content h-[50%] w-full flex flex-wrap text-white flex-col justify-between">
                   <div className="content-info">
                   <div className="content-title">Student who discovered his friend was behind the Boston Marathon Bombings says it 'destroyed' him</div>
                   <div className="content-subtitle"></div>
                   </div>
                   <div className="content-link text-xs">www.theunilad.com</div>
                  </div>
               </div>
            </a>
          </div>
          <div className="theIndependent col-start-5 col-end-8 row-start-5 row-span-2 bg-purple-600 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer rounded-md">
          <a href="https://www.independent.co.uk/news/world/americas/boston-marathon-bombing-netflix-suspect-victims-b2321051.html">
               <div className="grid-div h-full w-full flex items-end" id="theCinemaholic">
                  <div className="grid-div-content h-[50%] w-full flex flex-wrap text-white flex-col justify-between">
                   <div className="content-info">
                   <div className="content-title">Boston Marathon Bombing full story uncovered in Netflix documentary, ten years on</div>
                   <div className="content-subtitle"></div>
                   </div>
                   <div className="content-link text-xs">www.independent.co.uk</div>
                  </div>
               </div>
            </a>
          </div>
          {/* <ArticleCollage/> */}
          {/* <Microlink url="https://www.nytimes.com/2023/04/15/us/friend-boston-marathon-bomber.html"  size="large" className="theNewYorkTimes col-start-5 col-end-8 row-start-1 row-end-3 bg-yellow-600 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink>
                  <Microlink url="https://www.bostonglobe.com/magazine/2018/09/25/was-friends-with-boston-marathon-bomber-and-his-crimes-haunt-still/HfTlpG00VgYFYyNTtOwVRN/story.html"  size="large" className="bostonGlobe col-start-8 col-end-11 row-start-2 row-end-4 bg-red-500 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink>
                  <Microlink url="https://www.netflix.com/bd/title/81580822"  size="large" className="youtube col-start-1 col-end-4 row-start-3 row-end-5 bg-emerald-600 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink>
                  <Microlink url="https://www.netflix.com/tudum/articles/boston-marathon-bombing-timeline"  size="large" className="netflix col-start-4 col-end-8 row-start-3 row-end-5 bg-slate-900 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink>
                  <Microlink url="https://www.boston.com/news/local-news/2018/09/26/high-school-friend-boston-marathon-bomber-dzhokhar-tsarnaev-globe-magazine-essay/"  size="large" className="bostonDotCom col-start-8 col-end-11 row-start-4 row-span-3 bg-amber-800 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink>
                  <Microlink url="https://www.unilad.com/film-and-tv/boston-marathon-bombings-netflix-american-manhunt-836657-20230418"  size="large" className="unilad col-start-2 col-end-5 row-start-5 row-span-2 bg-green-950 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink>
                  <Microlink url="https://www.independent.co.uk/news/world/americas/boston-marathon-bombing-netflix-suspect-victims-b2321051.html"  size="large" className="theIndependent col-start-5 col-end-8 row-start-5 row-span-2 bg-purple-600 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink> */}

          {/* <Microlink url="https://thecinemaholic.com/youssef-eddafali-where-is-dzhokhar-tsarnaevs-friend-now/"  size="large" className="theCinemaholic  transition-transform duration-500 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink> */}
          {/* <Microlink url="https://www.nytimes.com/2023/04/15/us/friend-boston-marathon-bomber.html"  size="large" className="theNewYorkTimes bg-yellow-600 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink> */}
          {/* <Microlink url="https://www.bostonglobe.com/magazine/2018/09/25/was-friends-with-boston-marathon-bomber-and-his-crimes-haunt-still/HfTlpG00VgYFYyNTtOwVRN/story.html"  size="large" className="bostonGlobe  bg-red-500 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink> */}
          {/* <Microlink url="https://www.netflix.com/bd/title/81580822"  size="large" className="youtube  bg-emerald-600 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink> */}
          {/* <Microlink url="https://www.netflix.com/tudum/articles/boston-marathon-bombing-timeline"  size="large" className="netflix bg-slate-900 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink> */}
          {/* <Microlink url="https://www.boston.com/news/local-news/2018/09/26/high-school-friend-boston-marathon-bomber-dzhokhar-tsarnaev-globe-magazine-essay/"  size="large" className="bostonDotCom  bg-amber-800 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink> */}
          {/* <Microlink url="https://www.unilad.com/film-and-tv/boston-marathon-bombings-netflix-american-manhunt-836657-20230418"  size="large" className="unilad  bg-green-950 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1" media="video"></Microlink>
                  <Microlink url="https://www.independent.co.uk/news/world/americas/boston-marathon-bombing-netflix-suspect-victims-b2321051.html"  size="large" className="theIndependent bg-purple-600 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer rounded-md p-1"></Microlink>

                */}
        </div>
        {/* <div className="carousel-dots h-[20%]"></div> */}
      </div>
    </div>
  );
};

export default Features;
