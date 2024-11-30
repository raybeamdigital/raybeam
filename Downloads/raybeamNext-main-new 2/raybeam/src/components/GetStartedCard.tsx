import React from 'react';
import Image from 'next/image';

interface GetStartedCardProps {
  number: string;      
  image: string;       // Path to the image (a string URL or relative path)
  altText: string;     // Alt text for the image
  title: string;       // Title of the card
  para: string;        // Paragraph or description of the card
}

const GetStartedCard: React.FC<GetStartedCardProps> = ({ number, image, altText, title, para }) => {
  return (
    <div className="background-red border border-[#e7e7e7] w-[280px] px-6 py-5 rounded-3xl ">
      <div className="mb-4">
        <Image
          src={image}
          alt={altText}
          width={40}
          height={40}
          loading="lazy"
        />
      </div>
      <p className="text-lg font-semibold mb-2">
        {number}
        {".  "}
        {title}
      </p>
      <p className="text-sm text-[#575757]">{para}</p>
    </div>
  );
};

export default GetStartedCard;
