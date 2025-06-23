import { useEffect, useState } from "react";
import axios from "axios";
import Recipto from "./assets/Recipto Logo.jpg";
import star from "./assets/Rewards Stars.png";
import taxservice from "./assets/taxservices.webp";
import Business from "./assets/Filter Icons - Business.png";
import Coins from "./assets/Coins.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [name, setName] = useState(
    "Salaried? Get FREE Tax Help + 40% OFF On Tax Services"
  );
  const [cashBack, setCashBack] = useState("9000");

  useEffect(() => {
    async function fetchOffer() {
      try {
        const res = await axios.get("http://localhost:8000/offer");
        if (res.data.length > 0) {
          setName(res.data[0].name);
          setCashBack(res.data[0].cashBack);
        }
      } catch (error) {
        console.error("Error fetching offer:", error.message);
      }
    }
    fetchOffer();
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1, // this can be 1 or anything, doesn't matter when variableWidth is true
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true, // 🔥 This is what you need!
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-[375px] bg-gradient-to-b from-pink-200 via-pink-100 to-blue-100 rounded-3xl shadow-lg overflow-hidden">
       
        <div className=" px-4 pt-4 pb-6 rounded-b-3xl">
          <div className="flex justify-end">
            <button className="bg-white px-3 py-1 text-sm rounded-full shadow text-gray-500">
              How it works?
            </button>
          </div>
          <div className="flex flex-col items-center mt-2">
            <img
              src={Recipto}
              alt="Logo"
              className="rounded-full w-20 h-20 object-cover"
            />
            <h2 className="font-bold mt-2 text-xl">Recip.to</h2>
          </div>
        </div>

        
        <div className="flex justify-center -mt-5">
          <div className="flex w-[300px] h-10 bg-white rounded-full shadow-inner overflow-hidden">
            <div className="flex items-center justify-center w-[150px] bg-purple-700 text-white rounded-full px-4 font-semibold">
              <p className="text-sm">Offers</p>
              <img src={star} alt="star" className="w-4 h-4 ml-1" />
            </div>
            <div className="flex-1 flex items-center justify-center text-gray-500 text-sm font-semibold">
              My Coupons
            </div>
          </div>
        </div>

       
        <div className="mt-6 px-3 bg-white p-2 m-2 rounded-md">
          <img src={taxservice} alt="tax" className="rounded-2xl w-full" />
          <div className="pt-2">
            <h3 className="font-bold text-lg">Tax Services Offers</h3>
            <p className="text-gray-500 text-sm">14 Offers</p>
          </div>
        </div>

       
       <div className="px-4 mt-4">
        <Slider {...sliderSettings}>
          <div className="w-auto px-1">
            <button className="bg-white text-sm px-4 py-1 rounded-full border shadow-sm font-medium text-gray-700 whitespace-nowrap">
              ✨ All
            </button>
          </div>
          <div className="w-auto px-1">
            <button className="bg-white text-sm px-4 py-1 rounded-full border shadow-sm font-medium text-gray-700 whitespace-nowrap">
              👤 For Salaried Professionals
            </button>
          </div>
          <div className="w-auto px-1">
            <button className="bg-white text-sm px-3 py-1 rounded-full border shadow-sm font-medium text-gray-700 flex items-center justify-center">
              <img src={Business} alt="Business" className="w-4 h-4" />
            </button>
          </div>
        </Slider>
      </div>




        <div className="mx-4 my-3 h-[1px] bg-gray-300" />

        
        <div className="bg-white p-2 m-2 rounded-md">
          <div className="flex items-center">
            <img
              src={Recipto}
              alt="logo"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <p className="text-gray-600 ml-2 font-medium">Recip.to</p>
          </div>

          <div className="mt-3">
            <p className="font-bold text-[17px] leading-snug">{name}</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-1 text-sm font-medium text-gray-700">
              <span className="mr-1">Earn</span>
              <img src={Coins} alt="coin" className="w-4 h-4 mr-1" />
              <span>{cashBack} Coins</span>
            </div>
            <button className="bg-purple-600 text-white px-6 py-2 text-sm rounded-xl hover:bg-purple-700 font-semibold">
              VIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
