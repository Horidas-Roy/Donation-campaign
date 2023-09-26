import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Donation from "../Components/Donation/Donation";
import { useState } from "react";
import DonationCard from "../Components/DonationCard/DonationCard";


const Home = () => {
  const donations = useLoaderData();
  const [searchItem, setSearchItem] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const handleSearch = () => {
    const filterItem = donations.filter(
      (item) => item.category.toLowerCase() == searchItem
    );
    if (filterItem) {
      setFilteredItem(filterItem);
    }

    setIsSearch(!isSearch);
  };

  const handleInput = (e) => {
    setSearchItem(e.target.value);
  };
  return (
    <div className="mb-52">
      <h2 className="mb-24">
        <Banner handleInput={handleInput} handleSearch={handleSearch} />
      </h2>
      <div>
       {
           isSearch ?"":<Donation donations={donations} />
       }
      </div>
      <div>
        {
            isSearch? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-6 container mx-auto p-4">
            {filteredItem.map((donation) => (
              <DonationCard key={donation.id} donation={donation}></DonationCard>
            ))}
          </div>:""
        }
      </div>
    </div>
  );
};

export default Home;
