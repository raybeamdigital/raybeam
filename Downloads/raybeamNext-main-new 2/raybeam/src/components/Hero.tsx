
import Image from "next/image";

const Hero = () => {
  return (
    <section className="  mx-auto">
      <div className="relative">
        <Image
          src="/background.jpg"
          alt="background"
          className=" w-full h-[400px] sm:h-[800px] object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] md:translate-y-[-70%] text-center px-4 w-full ">
          <h1 className="text-white font-bold mb-8 sm:mb-10 text-3xl sm:text-4xl md:text-6xl">
            Your trusted
            <br /> Digital Solutions Partner
          </h1>
          <p className="text-white text-sm sm:text-lg mb-12 md:w-[700px] md:mx-auto">
          We offer variety of solutions including expert social media consultation, digital marketing, software development &  Digital music distribution services
          </p>
          <a href="#get_started">
            <button className="appointment rounded-full bg-white text-black px-5 py-3 font-medium shadow-custom text-base sm:text-lg">
              Book an Appointment
            </button>
          </a>
        </div>
        <div className="hidden  bg-[#F5F5F7] pl-8 sm:flex sm:absolute items-start gap-8 sm:flex-row  bottom-0 left-0 w-full  justify-between px-4 sm:px-16 py-4 sm:rounded-t-2xl">
          <div className="flex items-center gap-1">
            <p className="text-[#3F3F46] text-2xl md:text-3xl lg:text-4xl font-bold ">
              7000+
            </p>
            <p className="text-[#616161] text-sm md:text-sm lg:text-lg ml-4">
              Appointments with a <br />
              67% success rate
            </p>
          </div>
          <div className="h-[78px] w-[0.5px] bg-gray-400"></div>
          <div className="flex items-center gap-1">
            <p className="text-[#3F3F46] text-2xl md:text-3xl lg:text-4xl font-bold">
              590+
            </p>
            <p className="text-[#616161] text-sm md:text-sm lg:text-lg ml-4  ">
              Local and International
              <br /> Brands
            </p>
          </div>
          <div className="h-[78px] w-[0.5px] bg-gray-400"></div>
          <div className="flex items-center gap-1">
            <p className="text-[#3F3F46] text-2xl md:text-3xl lg:text-4xl font-bold">
              7+
            </p>
            <p className="text-[#616161] text-sm md:text-sm lg:text-lg ml-4 ">
              Years of <br />
              experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
