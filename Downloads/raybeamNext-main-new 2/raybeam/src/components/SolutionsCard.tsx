import React from "react";

interface GetStartedCardProps {
  title: string; // Title of the card
  para: string;
  price: string | number;
  buttonTitle: string; // Paragraph or description of the card
  colour: string;
  image: string
}

const GetStartedCard: React.FC<GetStartedCardProps> = ({
  title,
  para,
  price,
  buttonTitle,
  //colour,
image,
}) => {
  return (
    <div className="border border-[#e7e7e7] w-[300px] sm:w-[580px] p-4 rounded-3xl flex flex-col sm:flex-row  h-full sm:h-[250px] gap-4 ">
      <div className="sm:mb-4 mb-0">
        <div
          className={`h-[220px] w-full sm:w-[200px]  rounded-lg bg-cover bg-center`}
          // style={{ backgroundColor: colour}}
          style={{ backgroundImage: `url(${image})` }}
        
        ></div>
      </div>

      <div className="py-2 flex flex-col  h-full items-start justify-between gap-4 ">
        <p className="text-lg font-semibold mb-2">{title}</p>
        <p className="text-sm text-[#575757]">{para}</p>

        <div className="flex items-center gap-2">
          {price && (
            <p className="price-tag px-5 py-1 border border-[#d6d6d6] text-xs text-[#575757] font-semibold rounded-full">
              LKR <span className=" font-bold text-black text-lg">{price}</span>
              /up
            </p>
          )}
          <button className="rounded-full text-sm bg-black text-white px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out shadow-custom ">
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedCard;
