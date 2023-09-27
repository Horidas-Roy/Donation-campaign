/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import DonationCard from "../DonationCard/DonationCard";

const Banner = ({handleSearch,handleInput}) => {
               
    return (
        <div>
            <div className="hero h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR06DaRNG2mzCWDXhdv-YoeRVGzs84v9tKfdnsuKEQ5sbBByjnFPoMQhP4s)'}}>
            <div className="hero-overlay bg-opacity-80 bg-white"></div>
            
            <div className="hero-content text-center text-neutral-content">
             
                <div className=" text-[#0B0B0B]">
                <h1 className="text-5xl font-bold mb-10">I Grow By Helping People In Need</h1>
                <h1 className="flex flex-col justify-center md:flex-row gap-3 md:gap-0"><input onChange={handleInput} className="py-2 px-3 md:w-80 outline-none border-2 rounded-lg md:rounded-r-none border-gray-300" type="text" placeholder="Search here" /><button onClick={handleSearch} className="bg-[#FF444A] text-[#FFF] py-2 px-4 border-2 rounded-lg md:rounded-l-none border-[#FF444A]">Search</button></h1>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;