import React, { useEffect, useRef } from 'react';
import bookcover from "../assets/225.png";

const Publishings = () => {
    const publishingsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const publishingsTop = publishingsRef.current.offsetTop;
            const windowHeight = window.innerHeight;
            const distanceFromTop = scrollTop - publishingsTop;
            const parallaxValue = distanceFromTop * 0.15; // Adjust the parallax speed here

            const bookCoverPic = document.querySelector('.bookCoverPic');
            if (window.innerWidth >= 640) { // Check if screen width is greater than or equal to 640px
                if (scrollTop >= publishingsTop - windowHeight && scrollTop <= publishingsTop + publishingsRef.current.offsetHeight) {
                    bookCoverPic.style.transform = `translateY(${parallaxValue}px)`;
                } else {
                    // Reset transform if scrolled outside the Publishings section
                    bookCoverPic.style.transform = 'none';
                }
            } else {
                // Reset transform if screen width is less than 640px
                bookCoverPic.style.transform = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={publishingsRef} className="publishings h-[110dvh] w-screen z-50" id='publications'>
            <div className="publishings-top sm:h-[55%] h-[45%] w-full flex sm:flex-row flex-col sm:pr-[50px] md:pr-[100px] pr-[20px] pl-[20px] pt-4 bg-slate-900">
                <div className="ptop-left w-[50%] sm:w-[40%] md:w-[50%] h-full relative">
                    <div className="bookCover h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] lg:w-[375px] absolute sm:right-0 lg:top-28 md:top-44 sm:top-52 top-6 -right-20">
                        <img src={bookcover} className="bookCoverPic h-full mb-4"></img>
                    </div>
                </div>
                <div className="ptop-right sm:w-[60%] md:w-[50%] w-full h-full text-white flex items-end justify-center">
                    <h1 className=" bookName text-4xl sm:text-3xl lg:text-4xl xl:text-6xl uppercase text-center">Through the Eyes</h1>
                </div>
            </div>
            <div className="publishings-bottom sm:h-[45%] h-[50%] w-full flex flex-col-reverse sm:flex-row sm:pr-[50px] md:pr-[100px] pr-[10px] pl-[10px] pb-4">
                <div className="pbottom-left w-[40%] sm:w-[40%] md:w-[50%] sm:h-full h-[10%] sm:flex justify-start items-end md:p-4 lowercase italic text-slate-600  text-sm sm:text-xs md:text-base">
                    *THIS IS NOT THE ACTUAL BOOK COVER
                </div>
                <div className="pbottom-right sm:w-[60%] md:w-[50%] w-full h-[90%] sm:h-full text-black pt-2 sm:text-left text-center">
                    <h1 className="bookName text-4xl sm:text-3xl lg:text-4xl xl:text-6xl  mt-6 uppercase flex justify-center items-center">of the Closest</h1>
                    <h2 className="ml-4 text-slate-600 mb-4 text-base sm:text-xs md:text-base">
                        a story of overcoming adversity, of finding one's place in a world that can be cruel and unforgiving, and of the enduring bonds of friendship that can sustain us even in our darkest moments
                    </h2>
                    <button className=" hero-button sm:w-[35%] md:w-[30%] lg:w-[25%] w-[40%] sm:h-[20%] h-[20%] ml-4 bg-black rounded-xl text-white hover:bg-white hover:border transition ease-in-out lg:text-base text-sm hover:text-black">
                        Preorder Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Publishings;