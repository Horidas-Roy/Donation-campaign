import { NavLink } from "react-router-dom";


const DonationCard = ({donation}) => {
      const{id,image,category,title,card_bg_color,text_color,category_btn_color}=donation
      const colorStyle={

      }
    return (
        <div>
            
           <NavLink to={`/donationcarddetails/${id}`}>
           <div className="card  shadow-xl" style={{color:text_color,backgroundColor:card_bg_color}}>
            <figure>
                <img className="w-full h-[300px]" src={image} alt="Shoes" />
            </figure>
            <div className="card-body flex flex-col">
                <h2 className="card-title flex-grow"><span className="py-2 px-4 rounded-lg text-sm font-medium" style={{backgroundColor:category_btn_color}}>{category}</span></h2>
                <p className="text-[20px] font-semibold ">{title}</p>
            </div>
            </div>
           </NavLink>
            
        </div>
    );
};

export default DonationCard;