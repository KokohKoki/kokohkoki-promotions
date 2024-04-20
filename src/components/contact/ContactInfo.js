import { IgSVG, WaSVG } from "../UI/social-icons";
// import { HiOutlineMail } from "react-icons/hi";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl text-white font-bold tracking-wide">Find me on :</h1>
      <div className="flex flex-col gap-4 text-xl text-primeColor">
        <a href="https://wa.me/+6281298772351" className="flex flex-wrap gap-4 items-center  bg-white w-full md:w-[19rem] px-5 py-3 rounded-lg transition duration-150 ease-in-out hover:opacity-70" target="_blank" rel="noreferrer">
          {/* <FaWhatsapp className="text-2xl" /> */}
          <WaSVG height={28} width={28} />
          <p className="flex flex-col text-[#fb0404] font-bold">
            Alessandro Susanto
            <span className="tracking-wider italic font-normal text-primeColor"> +62 812 9877 2351</span>
          </p>
        </a>
        <a href="https://www.instagram.com/kokohkoki/" className="flex flex-wrap gap-4 items-center bg-white w-full md:w-[19rem] px-5 py-3 rounded-lg transition duration-150 ease-in-out hover:opacity-70" target="_blank" rel="noreferrer">
          {/* <FaInstagram className="text-2xl" /> */}
          <IgSVG height={30} width={30} />
          <p className="flex flex-col text-[#fb0404] font-bold">
            Kokoh Koki <span className="tracking-wider italic font-normal text-primeColor">@kokohkoki</span>
          </p>
        </a>
      </div>
    </div>
  );
}
