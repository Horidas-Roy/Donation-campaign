/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const DonationCard = ({donation}) => {
      const{id,image,category,title,card_bg_color,text_color,category_btn_color}=donation
    return (
        <div>
            
           <NavLink to={`/donationcarddetails/${id}`}>
           <div className="card  shadow-xl h-[350px]" style={{color:text_color,backgroundColor:card_bg_color}}>
            <div>
            <figure>
                <img className="w-full h-[220px]" src={image} alt="Shoes" />
            </figure>
            </div>
            <div className="p-4">
                <h2 className="card-title"><span className="py-2 px-4 rounded-lg text-sm font-medium" style={{backgroundColor:category_btn_color}}>{category}</span></h2>
                <p className="text-[20px] font-semibold">{title}</p>
            </div>
            </div>
           </NavLink>
            
        </div>
    );
};

export default DonationCard;