const AboutUs = () => {
  return (
    <>
      <section className="px-6 sm:px-16 py-12 max-w-[1500px] mx-auto">
        <div className="flex justify-start">
          <p className="text-2xl sm:text-3xl font-bold text-center text-[#3F3F46]">
            About Us
          </p>
        </div>
        <img
          src="/meta_certified_community_management_company.jpg"
          alt="Meta Certified Community Management Company"
          className="object-contain rounded-xl"
        />
      </section>

      <section className="px-6 sm:px-16 max-w-[1500px] mx-auto">
        <div className="flex gap-10 lg:gap-20 flex-col lg:flex-row">
          <div>
            <p className="text-gray-600 mb-2 text-justify lg:text-start tracking-tight">
              Welcome to Raybeam Digital, Sri Lanka’s first Meta Certified
              Community Management Company, specializing in comprehensive social
              media solutions for businesses and individuals worldwide. With a
              keen focus on Digital Marketing, Community & Platform Management,
              and Social Media Consultation, our team is dedicated to solving
              social media-related issues, including hacked account recovery
              and troubleshooting login issues on platforms such as Facebook,
              Instagram, Google, and YouTube.
            </p>
            <p className="text-gray-600 mb-2 text-justify lg:text-start tracking-tight">
              <strong>Our Journey</strong>
              <br />
              <br />
              In 2021, Raybeam Digital made history by becoming the first Meta
              Certified Community Management Company in Sri Lanka. This
              prestigious certification from Meta cemented our reputation as a
              trusted partner for businesses and individuals alike. In
              partnership with Optimus Solutions Co., we also gained access to
              Meta Business Partner Benefits, allowing us to offer enhanced
              support to clients and ensure their social media platforms run
              smoothly.
            </p>
            <div className="text-gray-600 text-justify lg:text-start tracking-tight">
              <strong>Our Services</strong>
              <br />
              <br />
              <ul className="list-disc list-inside">
                <li>
                  <strong>Digital Marketing:</strong> Creating tailored
                  strategies to help brands achieve their online goals through
                  targeted campaigns.
                </li>
                <li>
                  <strong>Community & Platform Management:</strong> Ensuring
                  your brand’s online communities are nurtured, monitored, and
                  engaged with in a meaningful way.
                </li>
                <li>
                  <strong>Social Media Consultation:</strong> Offering expert
                  advice on resolving account issues, including hacked account
                  recovery and troubleshooting login issues across multiple
                  platforms. We provide personal consultation on how you can
                  officially submit requests to these platforms to resolve your
                  issues.
                </li>
              </ul>
              <br />
              We pride ourselves on being the only registered Sri Lankan
              company that specializes in social media consultation, handling
              critical issues such as hacked account recovery and platform
              troubleshooting. With over 7,500 successful appointments
              completed as of June 2023, and managing more than 590+ global
              brands, we continue to set the standard in this field.
              <br />
              <br />
              <strong>Our Expertise</strong>
              <br />
              <br />
              In 2021, Raybeam Digital made history by becoming the first Meta
              Certified Community Management Company in Sri Lanka. This
              prestigious certification from Meta cemented our reputation as a
              trusted partner for businesses and individuals alike. In
              partnership with Optimus Solutions Co., we also gained access to
              Meta Business Partner Benefits, allowing us to offer enhanced
              support to clients and ensure their social media platforms run
              smoothly.
              <br />
              <br />
              <strong>Find Us:</strong>
            </div>
          </div>
          <div>
            <div className="bg-[#F5F5F7] w-full flex flex-col rounded-2xl p-6">
              <div className="flex flex-col items-center justify-center gap-2 w-full lg:w-[300px] mb-2">
                <p className="text-[#3F3F46] text-3xl md:text-3xl lg:text-4xl font-bold text-center">
                  7000+
                </p>
                <p className="text-[#616161] text-sm md:text-sm lg:text-lg font-semibold text-center">
                  Appointments with a 67% success rate
                </p>
              </div>
              <hr className="mt-2" />
              <div className="flex flex-col items-center justify-center gap-3 w-full lg:w-[300px] mb-2">
                <p className="text-[#3F3F46] text-3xl md:text-3xl lg:text-4xl font-bold text-center">
                  7+
                </p>
                <p className="text-[#616161] text-sm md:text-sm lg:text-lg font-semibold text-center">
                  Years of experience
                </p>
              </div>
              <hr className="mt-2" />
              <div className="flex flex-col items-center justify-center gap-3 w-full lg:w-[300px] mb-2">
                <p className="text-[#3F3F46] text-3xl md:text-3xl lg:text-4xl font-bold text-center">
                  590+
                </p>
                <p className="text-[#616161] text-sm md:text-sm lg:text-lg font-semibold text-center">
                  Local and International Brands
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-16 md:py-20 py-10 pb-0 sm:pb-10 max-w-[1500px] mx-auto">
        <div className="relative">
          <div className="absolute md:bottom-5 md:left-5 left-[-30px] bottom-0 bg-white rounded-full flex gap-2 items-center p-3 scale-50 sm:scale-75 md:scale-100">
            <span className="font-bold text-xl">📍</span>
            <p className="font-semibold">
              <a
                href="https://maps.app.goo.gl/mrGsWrU82XSntfLY8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Raybeam Digital, Colombo, Sri Lanka
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
