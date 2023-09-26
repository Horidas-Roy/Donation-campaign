/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const DonnatedCard = ({ donation }) => {
    const {
        id,
        image,
        category,
        title,
        price,
        card_bg_color,
        category_btn_color,
        text_color,
      } = donation;
  console.log(donation);
  return (
    <div>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="card-body flex flex-col" style={{backgroundColor:card_bg_color}}>
                <h2 className="card-title flex-grow"><span className="py-2 px-4 rounded-lg text-sm font-medium" style={{backgroundColor:category_btn_color}}>{category}</span></h2>
                <p className="text-[20px] font-semibold text-[#0B0B0B] mb-2 mt-3">{title}</p>
                <p style={{color:text_color}}>${price}</p>
                <NavLink to={`/donation/${id}`}>
                  <button className="text-[18px] font-semibold rounded-lg py-2 px-4 text-[#FFF] w-fit mt-7" style={{backgroundColor:text_color}}>Show Details</button>
                </NavLink>
            </div>
      </div>
    </div>
  );
};

export default DonnatedCard;
