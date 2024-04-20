const Contact = () => {
    return ( 
        <div className="contact h-[60dvh] w-screen bg-slate-900 flex flex-col justify-center items-center sm:gap-10 gap-4 z-50" id="contactMe">
            <div className="contact-title sm:px-0 px-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white caudex-bold text-center">Sign up for our mailing list</h1>
            </div>
            <form className="contact-input flex justify-center items-center gap-4 sm:flex-row flex-col">
                <input type="text" placeholder="Put your Email here!" className="p-4  h-9 sm:h-12 sm:w-80 w-60 rounded-md"/>
                <button className=" hero-button h-9 w-28 sm:h-12 sm:w-32 bg-white rounded-xl text-black hover:bg-black hover:border transition ease-in-out lg:text-base text-sm hover:text-white">
                Sign Up!
        </button>
            </form>
        </div>
     );
}
 
export default Contact;