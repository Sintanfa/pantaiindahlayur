import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full md:h-[70px] h-[150px] transition-all duration-700 z-50 ${
          scrolled
            ? "bg-white text-black shadow-md"
            : "bg-gradient-to-b from-[#000]/80 to-transparent text-[#FFF9E8]"
        }`}
      >
        <div className="flex h-full justify-between items-center">
          {/* Logo */}
          <div className="bg-white pl-4 py-3 md:gap-4 gap-[50px] flex md:h-[70px] h-[150px] w-[200px] md:w-[150px] rounded-br-xl">
            <Image src="/unnes.png" width={50} height={50} alt="Unnes" />
            <Image src="/dikti.png" width={50} height={50} alt="Dikti" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-row space-x-8 pr-4 py-[20px]">
            {["home", "about", "service", "gallery", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={50}
                  spy={true}
                  offset={-80}
                  activeClass="text-[#AA9D7F] font-bold"
                  className="cursor-pointer hover:text-[#B6B09F]"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden pr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={50} /> : <Menu size={50} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/90 text-white">
            {["home", "about", "service", "gallery", "contact"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={50}
                spy={true}
                offset={-80}
                activeClass="text-[#AA9D7F] font-bold"
                className="cursor-pointer hover:text-[#B6B09F] text-lg"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        )}
      </nav>
          {/* mobile */}
          <div id="home" className="relative md:hidden">
          {/* Background Image */}
          <Image
            src="/images1.jpg"
            fill
            className="object-cover -z-10"
            alt="Pantai Indah Layur"
          />

          {/* Gradient Overlay */}
          <div className="absolute h-[400px] inset-0 bg-gradient-to-b from-[#000]/100 to-transparent -z-10" />
          <div className="absolute inset-0 bg-[#000]/45 -z-10" />

          {/* Content */}
          <div className="flex justify-center items-center w-full h-[3050px] flex-col text-center px-4">
            <h className="text-[#C4C4C4] tracking-widest text-[60px] sm:text-base">
              IT‘S TIME TO VISIT
            </h>
            <h className="text-[#FFF9E8] text-4xl text-[100px] font-bold pt-10 pb-20 leading-tight">
              PANTAI INDAH LAYUR
            </h>
            <Link
              to="about"
              smooth={true}
              duration={50}
              spy={true}
              offset={-20}
              className="bg-[#FFF9E8] text-[#97865D] py-2 px-5 rounded-full text-[36px] text-base font-bold cursor-pointer hover:bg-[#D5CDB7]"
            >
              get to know
            </Link>
          </div>
        </div>
        <div id="about" className="w-[1400px] h-[3050px] pt-[150px] px-[40px] pb-[20px] bg-[#F5F5F5] relative md:hidden">
        <Image width={1300} height={700} src="/image 2.png" className="p-[30px]" data-aos="fade-up" />
        <div className="px-[50px] pt-[120px]" data-aos="fade-up" >
          <div className="flex flex-col border-l-4 pl-5 border-[#AA9D7F]"> 
            <h className="text-[100px] font-bold">ABOUT</h>
            <h className="text-[75px] font-thin">Pantai Indah Layur</h>
          </div>
          <div className="mt-[75px] text-[60px] text-justify">
            <h>Pantai Indah Layur adalah pantai yang berada di Desa Gedongmulyo Dukuh Layur Kecamatan Lasem Kabupaten Rembang, dengan keindahan pemandangan pantai dan di bagian selatan ada pemandangan Gunung, ada taman untuk bersantai juga</h>
          </div>
          <div className="bg-[#AA9D7F] w-[600px] h-[100px] rounded rounded-full mt-[100px] text-white text-[75px] text-center font-bold">06.00 - 17.00</div>
        </div>
      </div>
      <div
        className="relative h-[500px] bg-cover bg-center relative md:hidden justify-center"
        style={{ backgroundImage: "url('/image 9.png')" }}
        data-aos="fade-up"
      >
        <div className="absolute h-[500px] inset-0 bg-black/60 z-10"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-[#FFF9E8]">
          <h1 className="font-bold text-[75px]">Camping Bersama Keluarga</h1>
          <a href="https://wa.me/6285368750820" className="bg-[#AA9D7F] w-[400px] h-[80px] pt-3 rounded rounded-full mt-[50px] text-white text-center font-bold text-[40px]">Booking Sekarang</a>
        </div>
      </div>
      <div id="service" className="w-[1400px] h-[3050px] pt-[150px] px-[50px] flex flex-col bg-[#F5F5F5] relative md:hidden">
        <div className="flex flex-row" data-aos="fade-up">
          <div className="h-[100px] w-[1400px]">
            <Image width={200} height={100} src="/image 6.png" className="p-[10px] mt-[20px] h-[850px] w-[850px]"/>
          </div>
          <div className="w-[700px]">
            <Image width={200} height={100} src="/image 10.png" className="p-[10px] h-[450px] w-[450px]"/>
            <Image width={200} height={100} src="/image 3.png" className="p-[10px] h-[450px] w-[450px]"/>
          </div>
        </div>
        <div className="mt-[200px]" data-aos="fade-up">
          <div className="flex flex-col border-l-4 ml-[50px] pl-5 border-[#AA9D7F]"> 
            <h className="text-[100px] font-bold">SERVICE</h>
            <h className="text-[75px] font-thin">Pantai Indah Layur</h>
          </div>
          <div className="flex flex-col mx-[50px] mt-[150px] text-justify">
            <h className="font-bold text-[75px] mb-[100px]">Camping</h>
            <h className="text-[60px]">Selain menikmati keindahan Pantai Indah Layur, Anda juga bisa menghabiskan waktu dengan berkemah bersama keluarga. Kegiatan ini akan menjadi pengalaman berharga untuk menciptakan memori indah, dengan harga yang terjangkau serta fasilitas yang memadai.</h>
          </div>
        </div>
      </div>
      <div id="gallery" className="w-[1400px] h-full pt-[150px] text-center md:hidden" data-aos="fade-up">
        <h className="text-[100px] text-[#AA9D7F] font-thin">GALERY</h>
        <div className="flex flex-col mt-[100px] items-center gap-[50px]">
          <Image width={500} height={200} src="/image 11.png" className="w-[1200px]"/>
          <Image width={500} height={200} src="/image 14.png" className="w-[1200px]"/>
          <Image width={500} height={200} src="/image 4.png" className="w-[1200px]"/>
          <Image width={500} height={200} src="/image 18.png" className="w-[1200px]"/>
          <Image width={500} height={200} src="/image 19.png" className="w-[1200px]"/>
          <Image width={500} height={200} src="/image 16.png" className="w-[1200px]"/>
        </div>
      </div>
      <div id="contact" className="h-[700px] mt-[150px] flex flex-col md:hidden">
        <div className="flex flex-col " data-aos="fade-up">
         <div className="flex flex-col border-l-4 ml-[50px] pl-[50px] border-[#AA9D7F]"> 
            <h className="text-[100px] font-bold">Contact</h>
            <h className="text-[60px] font-thin">Pantai Indah Layur</h>
          </div>
          <div className="flex flex-row items-center justify justify-center pl-[50px] mt-[100px] gap-10">
            <a href="https://www.instagram.com/pantaiindahlayur/" className="bg-[#AA9D7F] h-[200px] w-[200px] flex justify-center items-center hover:bg-[#8B7E5C]">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/6285368750820" className="bg-[#AA9D7F] h-[200px] w-[200px] flex justify-center items-center hover:bg-[#8B7E5C]">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
            </a>
            <a href="https://www.tiktok.com/@pil_pantaiindahlayur" className="bg-[#AA9D7F] h-[200px] w-[200px] flex justify-center items-center hover:bg-[#8B7E5C]">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-music2-icon lucide-music-2"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>
            </a>
          </div>
        </div>
        {/* <div
          className="relative h-full bg-cover bg-center mt-[100px]"
          style={{ backgroundImage: "url('/image 4.png')" }}
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
        </div> */}
      </div>


      <div id="home" className="relative h-screen hidden md:block" >
        <Image src="/images1.jpg"
        fill
        className="object-cover -z-10 " 
        />
        <div className="absolute h-[500px] inset-0 bg-gradient-to-b from-[#000]/100 to-transparent -z-10" />
        <div className="absolute inset-0 bg-[#000]/45 -z-10" />
        <div className="flex justify-center items-center h-screen flex-col text-center">
          <h className="text-[#C4C4C4] tracking-widest">IT‘S TIME TO VISIT</h>
          <h className="text-[#FFF9E8] text-[72px] font-bold pt-2 pb-7">PANTAI INDAH LAYUR</h>
          <Link
            to="about"
            smooth={true}
            duration={50}
            spy={true}
            offset={-20}
            className="bg-[#FFF9E8] text-[#97865D] p-2 px-4 rounded rounded-full text-[20px] font-bold cursor-pointer hover:bg-[#D5CDB7]"
          >get to know</Link> 
        </div>
      </div>
      <div id="about" className="h-screen pt-[50px] px-[40px] pb-[20px] bg-[#F5F5F5] hidden md:flex">
        <Image width={500} height={200} src="/image 2.png" className="p-[30px]" data-aos="fade-up" />
        <div className="px-[50px] pt-[20px]" data-aos="fade-up" >
          <div className="flex flex-col border-l-4 pl-5 border-[#AA9D7F]"> 
            <h className="text-[56px] font-bold">ABOUT</h>
            <h className="text-[24px] font-thin">Pantai Indah Layur</h>
          </div>
          <div className="mt-[50px] text-justify">
            <h>Pantai Indah Layur adalah pantai yang berada di Desa Gedongmulyo Dukuh Layur Kecamatan Lasem Kabupaten Rembang, dengan keindahan pemandangan pantai dan di bagian selatan ada pemandangan Gunung, ada taman untuk bersantai juga</h>
          </div>
          <div className="bg-[#AA9D7F] w-[120px] h-[30px] pt-1 rounded rounded-full mt-[30px] text-white text-center font-bold">06.00 - 17.00</div>
        </div>
      </div>
      <div
        className="relative h-[300px] bg-cover bg-center hidden md:flex justify-center"
        style={{ backgroundImage: "url('/image 9.png')" }}
        data-aos="fade-up"
      >
        <div className="absolute h-[300px] inset-0 bg-black/60 z-10"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-[#FFF9E8]">
          <h1 className="text-4xl font-bold text-[50px]">Camping Bersama Keluarga</h1>
          <a href="https://wa.me/6285368750820" className="bg-[#AA9D7F] w-[180px] h-[50px] pt-3 rounded rounded-full mt-[10px] text-white text-center font-bold">Booking Sekarang</a>
        </div>
      </div>
      <div id="service" className="h-screen pt-[80px] flex flex-row justify-between bg-[#F5F5F5] hidden md:flex">
        <div className="w-[500px]" data-aos="fade-up">
          <div className="flex flex-col border-l-4 ml-[50px] pl-5 border-[#AA9D7F]"> 
            <h className="text-[56px] font-bold">SERVICE</h>
            <h className="text-[24px] font-thin">Pantai Indah Layur</h>
          </div>
          <div className="flex flex-col ml-[50px] mt-[50px] w-[600px] text-justify">
            <h className="font-bold text-[24px] mb-[15px]">Camping</h>
            <h>Selain menikmati keindahan Pantai Indah Layur, Anda juga bisa menghabiskan waktu dengan berkemah bersama keluarga. Kegiatan ini akan menjadi pengalaman berharga untuk menciptakan memori indah, dengan harga yang terjangkau serta fasilitas yang memadai.</h>
          </div>
        </div>
        <div className="flex flex-row mr-[50px]" data-aos="fade-up">
          <div className="h-[100px] w-[200px]">
            <Image width={200} height={100} src="/image 6.png" className="p-[10px] mt-[20px] h-[350px] w-[250px]"/>
          </div>
          <div className="h-[100px] w-[200px]">
            <Image width={200} height={100} src="/image 10.png" className="p-[10px] w-[190px]"/>
            <Image width={200} height={100} src="/image 3.png" className="p-[10px] w-[190px]"/>
          </div>
        </div>
      </div>
      <div id="gallery" className="h-screen pt-[50px] text-center hidden md:block" data-aos="fade-up">
        <h className="text-[56px] text-[#AA9D7F] font-thin">GALERY</h>
        <div className="flex justify justify-between mt-[20px]">
          <Image width={500} height={200} src="/image 11.png" className="w-[500px]"/>
          <Image width={500} height={200} src="/image 14.png" className="w-[500px]"/>
          <Image width={500} height={200} src="/image 4.png" className="w-[500px]"/>
        </div>
        <div className="flex justify justify-between">
          <Image width={500} height={200} src="/image 18.png" className="w-[500px]"/>
          <Image width={500} height={200} src="/image 19.png" className="w-[500px]"/>
          <Image width={500} height={200} src="/image 16.png" className="w-[500px]"/>
        </div>
      </div>
      <div id="contact" className="h-[400px] mt-[150px] flex flex-col hidden md:flex">
        <div className="flex flex-row" data-aos="fade-up">
         <div className="flex flex-col border-l-4 ml-[50px] pl-5 border-[#AA9D7F]"> 
            <h className="text-[56px] font-bold">Contact</h>
            <h className="text-[24px] font-thin">Pantai Indah Layur</h>
          </div>
          <div className="flex flex-row items-center pl-[600px] gap-5">
            <a href="https://www.instagram.com/pantaiindahlayur/" className="bg-[#AA9D7F] h-[100px] w-[100px] flex justify-center items-center hover:bg-[#8B7E5C]">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/6285368750820" className="bg-[#AA9D7F] h-[100px] w-[100px] flex justify-center items-center hover:bg-[#8B7E5C]">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
            </a>
            <a href="https://www.tiktok.com/@pil_pantaiindahlayur" className="bg-[#AA9D7F] h-[100px] w-[100px] flex justify-center items-center hover:bg-[#8B7E5C]">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-music2-icon lucide-music-2"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>
            </a>
          </div>
        </div>
        {/* <div
          className="relative h-full bg-cover bg-center mt-[100px]"
          style={{ backgroundImage: "url('/image 4.png')" }}
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
        </div> */}
      </div>
    </div>
  )
}
