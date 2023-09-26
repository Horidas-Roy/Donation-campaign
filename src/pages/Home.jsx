import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Donation from "../Components/Donation/Donation";

const Home = () => {

    const donations=useLoaderData();
    return (
        <div className="mb-52">
            <h2 className="mb-24"><Banner/></h2>
            <h2><Donation donations={donations}/></h2>
        </div>
    );
};

export default Home;