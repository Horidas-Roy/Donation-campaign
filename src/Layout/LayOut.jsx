import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const LayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2><Outlet></Outlet></h2>
        </div>
    );
};

export default LayOut;