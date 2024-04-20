import { Link } from "react-router-dom";
import ErrorItem from "../../components/maintenance-404/error-item";
import { bgFish } from "../../assets/images";
import { useEffect } from "react";

export default function MaintenancePage() {

  
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("refreshedOnMaintenance", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden relative w-screen">
      <div className="bg-[#fb0404] h-20 flex w-full items-center pl-4 justify-center z-50">
        <Link to="/">
          <span className="text-white text-center text-2xl font-bold">KOKOHKOKI</span>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-40 text-white font-bold flex-col gap-1 z-50 relative">
        <ErrorItem
          title="KokohKoki Will Be Back Soon"
          desc="We're down for scheduled maintenance on our website."
          desc2="We apologize for the inconvenience and appreciate your patience, Thank you."
          titleClass="text-transparent bg-clip-text bg-gradient-to-r to-rose-500 from-gray-200 mb-5 text-center "
        />
      </div>
      <div className="flex max-w-[760px] mx-auto justify-center bg-transparent relative bottom-52 right-40 z-0">
        <img src={bgFish} alt="bg-fish" className="aspect-square h-72 relative " />
      </div>
    </div>
  );
}
