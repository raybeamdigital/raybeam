
import SolutionsCard from  "../../components/SolutionsCard";
const Services = () => {
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
    <>

      <section className="px-6 sm:px-16 py-12 max-w-[1500px] mx-auto ">
        <div className="flex justify-start">
          <p className="text-2xl sm:text-3xl font-bold text-center text-[#3F3F46]">
            Our Services
          </p>
        </div>
      </section>

      <section
        id="services"
        className="px-4 sm:px-16 py-4 pb-12 max-w-[1500px] mx-auto"
      >
        <div className="text-center mb-16">
          <p className="text-2xl font-bold text-[#3F3F46] mb-3">
            Tailored Solutions for Every Need
          </p>
          <p className=" text-[#575757] ">
            We provide transparent pricing for our personalized services.{" "}
          </p>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          {solutions.map((item, index) => (
            <SolutionsCard key={index} {...item} />
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-16">

      </section>
    </>
  );
};

export default Services;
