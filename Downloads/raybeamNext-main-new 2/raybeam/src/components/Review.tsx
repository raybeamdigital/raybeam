
import { cn } from '../lib/utils'
import { FaStar } from "react-icons/fa";
import Image from 'next/image';
const Review = ({img,name,position,value,body
}: {
  img: string;
  name: string;
  position: string;
  value?: string;
  body: string;
}) => {
  return (
    <figure
    className={cn(
      "relative w-auto min-w-[300px] sm:w-full cursor-pointer overflow-hidden rounded-xl border p-4",
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
          alt="test"
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
  )
}

export default Review;