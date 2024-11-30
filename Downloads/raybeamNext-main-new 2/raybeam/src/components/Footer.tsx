import Link from "next/link"
import Image from "next/image"
const Footer = () => {
  return (
    <footer id="contactus" className="max-w-[1500px] mx-auto px-6 sm:px-16 ">
    <div className="flex justify-between flex-wrap pt-16">
      <div className="mb-16 ">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <p className="text-xl font-semibold">Raybeam Digital</p>
        </div>
        {/* <div>
          <div className="mb-3">
            <p className="text-[#2c2c2c] font-bold text-sm">Email</p>
            <p className="text-[#575757]  text-sm">
              contact@raybeamdigital.com
            </p>
          </div>
          <div className="mb-3">
            <p className="text-[#2c2c2c] font-bold text-sm">Contact</p>
            <p className="text-[#575757]  text-sm">+94 75 0223344</p>
          </div>
          <div className="mb-3">
            <p className="text-[#2c2c2c] font-bold text-sm">Location</p>
            <p className="text-[#575757]  text-sm">
              611/34, Sama Mawatha, Godagama, Homagama, Sri Lanka
            </p>
          </div>
        </div> */}
      </div>
      <div className="flex gap-12 flex-wrap mb-16">
        <div>
          <p className="text-[#2c2c2c] font-semibold mb-3 text-sm">Pages</p>
          <p className="text-[#575757]  text-sm mb-3">
            <Link href="/">Home</Link>
          </p>
          <p className="text-[#575757]  text-sm mb-3 ">
            <Link href="/aboutus">About us</Link>
          </p>
          <p className="text-[#575757]  text-sm mb-3 ">
            <a href="/clients">Clients</a>
          </p>
          <p className="text-[#575757]  text-sm mb-3 ">
            <a href="/services">Services</a>
          </p>
          <p className="text-[#575757]  text-sm mb-3 ">
            <Link href="/reviews">Reviews</Link>
          </p>
          <p className="text-[#575757]  text-sm mb-3 ">
            <Link href="/contactus">Contact us</Link>
          </p>
        </div>
        <div>
          <p className="text-[#2c2c2c] font-semibold mb-3 text-sm">
            Socials
          </p>
          <p className="text-[#575757]  text-sm mb-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>
          </p>
          <p className="text-[#575757]  text-sm mb-3 ">
            <a href="https://www.instagram.com/raybeamdigital/" target="_blank" rel="noopener noreferrer"> Instagram</a>
          </p>
          <p className="text-[#575757]  text-sm mb-3 ">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </p>
          <p className="text-[#575757]  text-sm mb-3 ">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> X</a>
          </p>
        </div>

        <div>
          <p className="text-[#2c2c2c] font-semibold mb-3 text-sm">Legal</p>
          <p className="text-[#575757]  text-sm mb-3">
            <a href="">Privary Policy</a>
          </p>
          <p className="text-[#575757]  text-sm mb-3 ">
            <a href="">Terms of Service</a>
          </p>
          <p className="text-[#575757]  text-sm mb-3 ">
            <a href="">Refund Policy</a>
          </p>
        </div>
        <div>
          <p className="text-[#2c2c2c] font-semibold mb-3 text-sm">
            Contact
          </p>
          <p className="text-[#575757]  text-sm mb-3">
            <a href="/#services">Book us</a>
          </p>
          <p className="text-[#575757]  text-sm mb-3 ">
            <a href="tel:+94750223344"target="_blank" rel="noopener noreferrer">Call us</a>
          </p>
        </div>
      </div>
      <div className="flex gap-2 h-[80px] mb-16">
        <Image src="/meta1.png" alt="meta1" width={120} height={100} />
        {/* <Image src="/meta2.png" alt="meta1" width={80} height={100} /> */}
      </div>
    </div>

    <div>
      <hr></hr>
      <div className="py-12 flex justify-center gap-4 sm:justify-between flex-wrap text-center">
        <p className=" text-[#575757]  text-sm mb-4 sm:mb-0">
          © 2024 Raybeam Digital . All rights reserved
        </p>
        {/* <p className="text-[#575757]  text-sm">
          Developed By Raybeam Digital
        </p> */}  
        <p className="text-center text-sm text-gray-600">
  Developed By&nbsp;
  <a
    href="https://www.raybeamdigital.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-Gray-500 hover:underline font-semibold"
  >
    Raybeam Digital
  </a>
</p>

      </div>
    </div>
  </footer>
  )
}

export default Footer