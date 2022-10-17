import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
const Cards = () => {
  return (
    <div className="2-full px-4 py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl bg-gray-100 flex flex-col md:my-0 p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">100rs</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mt-8 mx-8">1 granted</p>
            <p className="py-2 border-b mx-8">upto 1 hour</p>
          </div>
          <button className='bg-[#00df9a]  font-medium rounded-md  text-[#000000] my-6 py-3 px-6'>Trial</button>
        </div>
        <div className="w-full shadow-xl flex bg-gray-100 flex-col md:my-0 p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">100rs</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mt-8 mx-8">1 granted</p>
            <p className="py-2 border-b mx-8">upto 1 hour</p>
          </div>
          <button className='bg-black font-medium rounded-md  text-[#00df9a] my-6 py-3 px-6'>Trial</button>
        </div>
        <div className="w-full shadow-xl  bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Triple}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">100rs</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mt-8 mx-8">1 granted</p>
            <p className="py-2 border-b mx-8">upto 1 hour</p>
          </div>
          <button className='bg-[#00df9a] font-medium rounded-md  text-[#000000] my-6 py-3 px-6'>Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
