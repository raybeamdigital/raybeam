import Hero from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Clients } from "@/components/Clients";
import GetStartedCard from "@/components/GetStartedCard";
import SolutionsCard from "@/components/SolutionsCard";
import { Faq } from "@/components/Faq";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
// import Image from "next/image";
export default function Home() {
  const data = [
    {
      number: "1",
      image: "/cursor.svg",
      altText: "icon1",
      title: "Ready",
      para: "Choose the service you need and provide the required details.",
    },
    {
      number: "2",
      image: "/credit-card.svg",
      altText: "icon2",
      title: "Set",
      para: "Choose your desired response time and complete the payment for your appointment.",
    },
    {
      number: "3",
      image: "/umbrella.svg",
      altText: "icon3",
      title: "Relax",
      para: "You will receive an email from one of our representatives requesting additional information.",
    },
    {
      number: "4",
      image: "/settings.svg",
      altText: "icon4",
      title: "Resolve",
      para: "Our specialists will investigate your issue and either resolve it or inform you if it's beyond our capability.",
    },
  ];

  const solutions = [
    {
      image: "/social-media-consultation.png",
      altText: "icon1",
      title: "Social Media Consultation",
      para: "We help recover hacked social media accounts, troubleshoot login issues, and more.",
      price: '3,000',
      buttonTitle: "Book",
      colour: "#BFDBFE",
    },
    {
      image: "/live_assistance.png",
      altText: "icon2",
      title: "Meet an Expert",
      para: "We offer expert advice to transform your online presence.",
      price: '15,000',
      buttonTitle: "Book",
      colour: "#BBF7D0",
    },
    {
      image: "/digital-music-distribution.png",
      altText: "icon3",
      title: "Software & Website Development",
      para: "We design and develop sleek web/mobile apps for any business challenge.",
      price: '',
      buttonTitle: "Let's Talk",
      colour: "#FED7AA",
    },
    {
      image: "/digital-music-distribution.jpg",
      altText: "icon4",
      title: "Digital Music Distribution",
      para: "We help distribute your music to digital stores.",
      price: '3,000',
      buttonTitle: "Start",
      colour: "#E9d5FF",
    },
  ];

  return (
    <div>
      <Hero />
      <section>
        <div className="sm:hidden bg-[#F5F5F7] pl-8 relative sm:absolute flex-col items-center gap-8 sm:flex-row  bottom-3 left-0 w-full flex  justify-between px-4 sm:px-16 py-4 sm:rounded-2xl rounded-t-2xl ">
          <div className="flex items-center justify-center gap-2  w-[260px]">
            <p className="text-[#3F3F46] text-3xl md:text-3xl lg:text-4xl font-bold w-[90px] text-end relative right-1">
              7000+
            </p>
            <p className="text-[#616161] text-sm md:text-sm lg:text-lg font-semibold w-[170px] text-start  ">
              Appointments with a<br />
              67% success rate
            </p>
          </div>
          <hr className="bg-black h-[0.5px] w-full" />
          <div className="flex items-center justify-center gap-3 w-[260px]">
            <p className="text-[#3F3F46] text-3xl md:text-3xl lg:text-4xl font-bold w-[90px] text-end">
              590+
            </p>
            <p className="text-[#616161] text-sm md:text-sm lg:text-lg font-semibold  w-[170px] text-start ">
              Local and International
              <br /> Brands
            </p>
          </div>
          <hr className="bg-black h-[0.5px] w-full" />
          <div className="flex items-center justify-center gap-3 w-[260px]">
            <p className="text-[#3F3F46] text-3xl md:text-3xl lg:text-4xl font-bold w-[90px] text-end">
              7+
            </p>
            <p className="text-[#616161] text-sm md:text-sm lg:text-lg font-semibold w-[170px] text-start ">
              Years of <br />
              experience
            </p>
          </div>
        </div>
      </section>
      
      <section className="px-4 sm:px-8 py-10 max-w-[1500px] mx-auto">
        <p className="px-4 text-center text-lg text-[#3F3F46] font-semibold">
          Raybeam Digital is Sri Lanka's First Meta Certified Company
          specialised in Community Management & Digital Marketing. We mainly
          offer services focused on Digital Marketing, Community & Platform
          Management & Social Media Consultation to help individuals and
          businesses resolve social media-related issues, such as hacked account
          recovery and troubleshooting issues across platforms.
        </p>
        <div className="py-12 flex justify-center">
          <Link href="/aboutus">
            <button className="rounded-full bg-black text-white px-6 py-2 font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out shadow-custom ">
              More about us
            </button>
          </Link>
        </div>
      </section>
      <section id="clients">
        <div className="text-center px-4 sm:px-16">
          <p className="text-2xl font-bold text-[#3F3F46] mb-3">
            Trusted by clients all over the world
          </p>
          <p className=" text-[#575757] ">We are the top choice of many. </p>
          <div>
            <Clients />
          </div>
        </div>
      </section>
      <section className="pt-8 px-4 sm:px-16" id="get_started">
        <div className="text-center mb-16">
          <p className="text-2xl font-bold text-[#3F3F46] mb-4">
            Get started right away
          </p>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          {data.map((item, index) => (
            <GetStartedCard key={index} {...item} />
          ))}
        </div>
        <div className=" py-12 flex justify-center">
          <a href="#services">
            <button className="rounded-full bg-black text-white px-6 py-2 font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out shadow-custom ">
              Let's Get Started
            </button>
          </a>
        </div>
      </section>
      <section id="services" className="px-4 sm:px-16 py-2">
        <div className="text-center mb-16">
          <p className="text-2xl font-bold text-[#3F3F46] mb-3">
            Tailored Solutions for Every Need
          </p>
          <p className=" text-[#575757] ">
            We provide transparent pricing for our personalized services.{" "}
          </p>
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
          {solutions.map((item, index) => (
            <SolutionsCard key={index} {...item} />
          ))}
        </div>
      </section>
      <section className="pt-16 " id="testimonials">
        <div className="text-center px-4 sm:px-16">
          <p className="text-2xl font-bold text-[#3F3F46] mb-3">
            Loved by thousands of people
          </p>
          <p className=" text-[#575757] ">
            Here's what some of our clients have to say about our services.{" "}
          </p>
        </div>

        <Testimonials />

        <div className="flex justify-center pb-8">
          <Link href="/reviews">
            <button className="rounded-full bg-black text-white px-6 py-2 font-medium border-1 border-black hover:bg-white hover:text-black transition-all duration-500 ease-in-out shadow-custom  ">
              More reviews
            </button>
          </Link>
        </div>
      </section>
      <section id="faq" className="px-6 sm:px-16 py-8">
        <div className="text-center mb-8">
          <p className="text-2xl font-bold text-[#3F3F46] mb-3">
            Frequently asked questions
          </p>
          <p className=" text-[#575757] ">
            Find answers to your questions or WhatsApp for more help.{" "}
          </p>
        </div>
        <div className="max-w-[600px] mx-auto">
          <Faq />
        </div>
      </section>

      <section className="bg-[#F5F5F7] h-[400px] flex items-center px-4 sm:px-0">
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
              <a href="#services">
                <button className="btnBook-now rounded-full w-full bg-white text-black px-6 py-2 font-medium shadow-custom">
                  Book an Appointment
                </button>
              </a>
              <a href="https://wa.me/+94750223344">
                <button className="rounded-full w-full bg-[#28D146] text-white px-6 py-2 font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out shadow-custom ">
                  <FaWhatsapp className="text-xl" /> WhatsApp us
                </button>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="mailto:contact@raybeamdigital.com">
                <button className="rounded-full w-full bg-[#f75555] text-white px-6 py-2 font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out shadow-custom">
                  <MdOutlineEmail className="text-xl" />
                  Email Us
                </button>
              </a>
              <a href="tel:+94750223344">
                <button className="rounded-full w-full bg-black text-white   px-6 py-2 font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out shadow-custom ">
                  <MdAddCall className="text-xl" /> Call Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
