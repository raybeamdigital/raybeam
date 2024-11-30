
import { Clients } from "@/components/Clients";


const ClientsPage = () => {
  return (
    <>


      <section className="px-6 sm:px-16 py-12 max-w-[1500px] mx-auto">
        <div className="flex justify-start">
          <p className="text-2xl sm:text-3xl font-bold text-center text-[#3F3F46]">
            Our Clients
          </p>
        </div>
      </section>
      
      <section className="px-6 sm:px-16 py-6  pb-0">
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


    </>
  );
};

export default ClientsPage;
