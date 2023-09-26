/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import DonnatedCard from "../Components/DonatedCard/DonnatedCard";

const TotalDonation = () => {
  const [totalDonation, setTotalDonation] = useState([]);
  const [isShow, setIsshow] = useState(false);
  const [noFound,setNoFound]=useState(false)
 

  useEffect(() => {
    const totalDonatedItem = JSON.parse(localStorage.getItem("donatedItem"));

    if (totalDonatedItem) {
      setTotalDonation(totalDonatedItem);
    } else {
     setNoFound("No Data Found")
    }
  }, []);

  const handleShowAll = () => {
    setIsshow(true);
  };

  return (
    <div>
      {
        totalDonation>0?<div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isShow
            ? totalDonation?.map((donation, idx) => (
                <DonnatedCard key={idx} donation={donation} />
              ))
            : totalDonation
                ?.slice(0, 4)
                ?.map((donation, idx) => (
                  <DonnatedCard key={idx} donation={donation} />
                ))}
        </div>
        <div className="text-center">
          {totalDonation.length > 4 ? (
            <button
              onClick={handleShowAll}
              className={`text-base font-semibold
                ${isShow && "hidden"}
              bg-[#009444] rounded-lg py-2 px-5 my-10 `}
            >
              Show All
            </button>
          ) : (
            " "
          )}
        </div>
      </div>
      :(<div className="h-[70vh] flex items-center justify-center">
        <p className="text-black text-5xl font-bold">{noFound}</p>
       </div>)
      }
    </div>
  );
};

export default TotalDonation;
