
import Review from "@/components/Review";
import { FaStar } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ReviewsPage = () => {
  const reviews = [
    {
      name: "Manu Arora",
      position: "Tech Innovator & Entrepreneur",
      body: "I would like to express my sincere appreciation to Sajeewa for succesfully getting back my Facebook page. He assited my pateintly",
      img: "/user.jpg", // No need to wrap this in an object
      value: "5.0",
    },
    {
      name: "Manu Arora",
      position: "Tech Innovator & Entrepreneur",
      body: "I would like to express my sincere appreciation to Sajeewa for succesfully getting back my Facebook page. He assited my pateintly",
      img: "/user.jpg", // No need to wrap this in an object
      value: "5.0",
    },
    {
      name: "Manu Arora",
      position: "Tech Innovator & Entrepreneur",
      body: "I would like to express my sincere appreciation to Sajeewa for succesfully getting back my Facebook page. He assited my pateintly",
      img: "/user.jpg", // No need to wrap this in an object
      value: "5.0",
    },
    {
      name: "Manu Arora",
      position: "Tech Innovator & Entrepreneur",
      body: "I would like to express my sincere appreciation to Sajeewa for succesfully getting back my Facebook page. He assited my pateintly",
      img: "/user.jpg", // No need to wrap this in an object
      value: "5.0",
    },
    {
      name: "Manu Arora",
      position: "Tech Innovator & Entrepreneur",
      body: "I would like to express my sincere appreciation to Sajeewa for succesfully getting back my Facebook page. He assited my pateintly",
      img: "/user.jpg", // No need to wrap this in an object
      value: "5.0",
    },
    {
      name: "Manu Arora",
      position: "Tech Innovator & Entrepreneur",
      body: "I would like to express my sincere appreciation to Sajeewa for succesfully getting back my Facebook page. He assited my pateintly",
      img: "/user.jpg", // No need to wrap this in an object
      value: "5.0",
    },
  ];
  return (
    <>

      <section className="px-6 sm:px-16 py-12 max-w-[1440px] mx-auto">
        <div className="flex justify-start">
          <p className="text-2xl sm:text-3xl font-bold text-center text-[#3F3F46]">
            Reviews
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-16">
        <div className="flex flex-wrap md:flex-nowrap gap-0 sm:gap-12 justify-center  ">
          <div>
            <div className="flex flex-col gap-2">
              {reviews.map((review, index) => (
                <Review key={index} {...review} />
              ))}
            </div>
            <div className="py-6 md:py-10 flex justify-center sm:justify-start scale-75 sm:scale-100">
              <button className="ml-2 rounded-full bg-black text-white px-6 py-2 font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out shadow-custom ">
                Load More
              </button>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-2 items-start">
              <p className=" sm:text-lg font-bold text-center text-[#3F3F46] ">
                Leave Us a review
              </p>
              <p className="text-sm text-gray-400 mb-2">
                We'd love to hear your thoughts!
              </p>
            </div>
            <div>
              <figure
                className={cn(
                  "relative w-auto min-w-[300px] sm:w-[400px] cursor-pointer overflow-hidden rounded-xl border p-4",
                  // light styles
                  "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                  // dark styles
                  "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                )}
              >
                <div className="flex flex-row justify-between mb-8">
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      className="rounded-full"
                      width="32"
                      height="32"
                      alt="userimage"
                      src="/user.jpg"
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-light  dark:text-white">
                        Manu Arora
                      </figcaption>
                      <p className="text-xs font-normal text-gray-700  dark:text-white/40">
                        Tech Innovator & Entrepreneur
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-end mb-1">
                    <FaStar className=" text-yellow-300" />{" "}
                    <p className="m-0 text-xs font-semibold">5.0</p>
                  </div>
                </div>
                <blockquote className="mt-2 text-sm font-medium text-gray-700">
                  I would like to express my sincere appreciation to Sajeewa for
                  succesfully getting back my Facebook page. He assited my
                  pateintly
                </blockquote>
              </figure>
            </div>
            <div className="pt-5 flex justify-center sm:justify-start scale-75 sm:scale-100">
              <button className="ml-2 rounded-full bg-black text-white px-6 py-2 font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out shadow-custom ">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;
