import { useEffect, useState } from 'react';
import axios from 'axios';
import Recipto from './assets/Recipto Logo.jpg';
import star from './assets/Rewards Stars.png';
import taxservice from './assets/taxservices.webp';
import Business from './assets/Filter Icons - Business.png';
import Coins from './assets/Coins.png';

function App() {
  const [name, setName] = useState("0% discount");
  const [cashBack, setCashBack] = useState("0");

  useEffect(() => {
    async function fetchOffer() {
      try {
        const res = await axios.get('http://localhost:8000/offer');
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

  return (
    <div className='bg-gray-300 flex items-center justify-center h-full'>
      <div className='bg-gray-200 shadow rounded-md w-96 h-full'>
        <div className='w-full'>
          <div className='w-full'>
            <h1 className='bg-white shadow w-26 rounded-full ml-64 text-sm text-gray-400'>How it works?</h1>
          </div>
          <div className='pl-40 pt-2'>
            <img src={Recipto} alt="Logo" className='rounded-full h-20 w-20' />
          </div>
          <div className='pl-40 pt-2'>
            <h1 className='font-bold'>Recip.to</h1>
          </div>
        </div>

        <div className='flex items-center justify-center rounded-2xl h-10 w-full'>
          <div className='flex w-60 bg-white shadow-md rounded-full h-8'>
            <div className='flex items-center pl-5 pr-10 h-8 w-30 rounded-full bg-blue-600 text-white'>
              <h1>Offers</h1>
              <img src={star} alt="" className='h-3 w-4 ml-1' />
            </div>
            <div className='flex items-center justify-center pr-4 text-gray-500'>
              <h1>My Coupons</h1>
            </div>
          </div>
        </div>

        <div className='h-64 bg-white'>
          <img src={taxservice} alt="" className='p-2 rounded-4xl' />
          <h1 className='font-bold ml-3'>Tax Services Offers</h1>
          <h1 className='text-gray-400 ml-3'>14 offers</h1>
        </div>

        <div className='flex items-center justify-between h-8'>
          <div className='h-8 w-14 flex items-center justify-center bg-white rounded-full'>
            <h1 className='text-sm'>All</h1>
          </div>
          <div className='h-8 pt-2 pl-2 bg-white rounded-full flex items-center justify-center'>
            <h1 className='w-44 h-6 text-sm'>For salaried professionals</h1>
          </div>
          <div className='bg-white w-10 h-8 rounded-full flex items-center justify-center'>
            <img src={Business} alt="" className='h-5 w-5' />
          </div>
        </div>

        <div className='h-0.5 w-60 bg-gray-400'></div>

        <div className='bg-white'>
          <div className='flex items-center p-3'>
            <img src={Recipto} alt="" className='h-20 w-20 rounded-3xl' />
            <h1 className='pl-3 text-gray-400'>Recip.to</h1>
          </div>
          <div>
            <h1 className='font-extrabold pl-4'>{name}</h1>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center border border-gray-300 rounded-md m-2 p-2'>
              <h1 className='mr-1'>Earn</h1>
              <img src={Coins} alt="" className='h-4 w-4 mx-1' />
              <h1>{cashBack} Coins</h1>
            </div>
            <button className='text-white h-8 w-40 rounded-md bg-purple-600 hover:bg-purple-800'>View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
