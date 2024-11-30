import Marquee from "./ui/marquee";
import Image from "next/image";
const clients = [
  {
    clientImage: "/1.jpeg",
  },
  {
    clientImage: "/2.jpeg",
  },
  {
    clientImage: "/3.png",
  },
  {
    clientImage: "/4.jpeg", 
  },
  {
    clientImage: "/4a.jpg", 
  },
  {
    clientImage: "/5.jpeg", 
  },
  {
    clientImage: "/6.jpeg", 
  },
  {
    clientImage: "/7.png", 
  },
  {
    clientImage: "/7.jpeg", 
  },
  {
    clientImage: "/8.png", 
  },
  {
    clientImage: "/8a.jpeg", 
  },
  {
    clientImage: "/9.jpg", 
  },
  {
    clientImage: "/10.png", 
  },
  {
    clientImage: "/10a.png", 
  },
  {
    clientImage: "/11.jpeg", 
  },
  {
    clientImage: "/12.png", 
  },
  {
    clientImage: "/13.png", 
  },
  {
    clientImage: "/14.jpeg", 
  },
  {
    clientImage: "/15.jpeg", 
  },
  {
    clientImage: "/16.jpeg", 
  },
  {
    clientImage: "/6.jpeg", 
  },
  {
    clientImage: "/18.png", 
  },
  {
    clientImage: "/19.jpg", 
  },
  {
    clientImage: "/20.jpeg", 
  },
  {
    clientImage: "/21.jpeg", 
  },
  {
    clientImage: "/22.jpeg", 
  },
  {
    clientImage: "/23.jpeg", 
  },
  {
    clientImage: "/24.jpeg", 
  },
  {
    clientImage: "/25.jpeg", 
  },
  {
    clientImage: "/26.jpeg", 
  },
  {
    clientImage: "/27.jpeg", 
  },
  {
    clientImage: "/28.png", 
  },
  {
    clientImage: "/29.jpeg", 
  },
  {
    clientImage: "/31.jpeg", 
  },
  {
    clientImage: "/32.jpeg", 
  },
  {
    clientImage: "/33.png", 
  },
  {
    clientImage: "/34.jpg", 
  },
  {
    clientImage: "/35.jpeg", 
  },
  {
    clientImage: "/36.png", 
  },
  {
    clientImage: "/37.webp", 
  },
  {
    clientImage: "/38.png", 
  },
  {
    clientImage: "/39.jpeg", 
  },
  {
    clientImage: "/40.jpeg", 
  },

];

const ReviewCard = ({
  clientImage,
}: {
  clientImage: string
}) => {
  return (
    <div className="flex items-center justify-center p-4">
      <Image
        className="w-24 h-24 object-contain mx-8"
        src={clientImage}
        alt="client"
        loading="lazy"
        width={80}
        height={80}
      />
    </div>
  );
};

export function Clients() {
  return (
    <div className="relative flex h-[260px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <Marquee pauseOnHover className="[--duration:60s]">
        {clients.map((client, index) => (
          <ReviewCard key={index} {...client} />
        ))}
      </Marquee>
    
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
