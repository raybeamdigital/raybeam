
import { Faq } from "@/components/Faq";


const Faqs = () => {
  return (
    <>


      <section className="px-6 sm:px-16 py-12 max-w-[1500px] mx-auto">
        <div className="flex justify-start">
          <p className="text-2xl sm:text-3xl font-bold text-center text-[#3F3F46]">
            FAQs
          </p>
        </div>
      </section>

      <section id="faq" className="px-6 sm:px-16 py-8 pt-2">
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

    </>
  );
};

export default Faqs;
