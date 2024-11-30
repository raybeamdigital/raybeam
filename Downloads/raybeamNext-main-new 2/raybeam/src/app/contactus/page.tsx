
import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const AboutUs = () => {
  return (
    <>
      <section className="px-6 sm:px-16 py-12 max-w-[1500px] mx-auto">
        <div className="flex justify-start">
          <p className="text-2xl sm:text-3xl font-bold text-center text-[#3F3F46]">
            Contact Us
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F7] h-[450px] flex items-center px-4 sm:px-0">
        <div className="max-w-[1500px] w-full mx-auto">
          <div className="text-center mb-8">
            <p className="text-2xl text-[#3F3F46] font-bold mb-4">
              Let's start working today!
            </p>
            <p className="text-[#818181] font-medium ">
              Have something in mind? <br />
              Contact us and we will get back within 24 hours.
            </p>
          </div>
          <div className="flex gap-3 justify-center md:flex-row flex-col">
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-3">
              <a href="/#services">
                <button className="appointment rounded-full w-full bg-white text-black px-6 py-2 font-medium shadow-custom">
                  Book an appointment
                </button>
              </a>
              <a href="https://wa.me/+94750223344" target="_blank" rel="noopener noreferrer">
                <button className="rounded-full w-full bg-[#28D146] text-white px-6 py-2 font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out shadow-custom ">
                  <FaWhatsapp className="text-xl" /> WhatsApp us
                </button>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="mailto:contact@raybeamdigital.com" target="_blank" rel="noopener noreferrer">
                <button className="rounded-full w-full bg-[#f75555] text-white px-6 py-2 font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out shadow-custom">
                  <MdOutlineEmail className="text-xl" />
                  Email Us
                </button>
              </a>
              <a href="tel:+94750223344" target="_blank" rel="noopener noreferrer">
                <button className="rounded-full w-full bg-black text-white   px-6 py-2 font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out shadow-custom ">
                  <MdAddCall className="text-xl" /> Call Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-gray-200 flex flex-col lg:flex-row lg:gap-10 gap-3 md:items-center items-start justify-center px-3 w-full py-4  mb-4 md:mb-10 pl-8 ">
        <div className="flex gap-2 items-start flex-col sm:flex-row sm:items-center">
          <p className="font-bold text-gray-800 text-xs sm:text-sm w-[60px] md:w-auto">
            Email
          </p>
          <p className=" text-gray-700 text-xs sm:text-sm">
            contact@raybeamdigital.com
          </p>
        </div>
        <div className="flex gap-2 items-start flex-col sm:flex-row sm:items-center">
          <p className="font-bold text-gray-800 text-xs sm:text-sm w-[60px] md:w-auto">
            Contact
          </p>
          <p className=" text-gray-700 text-xs sm:text-sm">+94 75 0234333322</p>
        </div>
        <div className="flex gap-2 items-start flex-col sm:flex-row sm:items-center">
          <p className="font-bold text-gray-800 text-xs sm:text-sm w-[60px] md:w-auto">
            Location
          </p>
          <p className=" text-gray-700 text-xs sm:text-sm">
            611/34, Sama Mawatha, Godagama, Homagama, Sri Lanka
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
