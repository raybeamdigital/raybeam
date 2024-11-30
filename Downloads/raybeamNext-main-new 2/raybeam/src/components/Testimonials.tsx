import { cn } from "../lib/utils";
import Marquee from "./ui/marquee";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

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

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  position,
  body,
  value,
}: {
  img: string;
  name: string;
  position: string;
  body: string;
  value?: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[300px] sm:w-[360px] cursor-pointer overflow-hidden rounded-xl border p-4",
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
            src={img}
            loading="lazy"
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-light  dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-normal text-gray-700  dark:text-white/40">{position}</p>
          </div>
        </div>
        <div className="flex gap-2 items-end mb-1">
          <FaStar className=" text-yellow-300" />{" "}
          <p className="m-0 text-xs font-semibold">{value}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-medium text-gray-700">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review,index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review,index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
