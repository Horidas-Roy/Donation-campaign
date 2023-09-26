import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const DonationCardDetails = () => {
  const [donation, setDonation] = useState();

  const { id } = useParams();
  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations?.find(donation => donation.id == id);
    setDonation(findDonation);
  }, [id, donations]);

  const { image, price, description, title,text_color } = donation || {};

  const handleDonate=()=>{
    const addDonateItem=[]

    const donatedItem=JSON.parse(localStorage.getItem('donatedItem'))

    if(!donatedItem){
        addDonateItem.push(donation);
        localStorage.setItem('donatedItem',JSON.stringify(addDonateItem));
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }
    else{
         
        const isExists=donatedItem.find(item=>item.id==id)

        if(!isExists){
            addDonateItem.push(...donatedItem,donation)
            localStorage.setItem('donatedItem',JSON.stringify(addDonateItem));
            Swal.fire(
            'Good job!',
            'You added one item!',
            'success'
          )
        }
        else{
            Swal.fire(
                'Good job!',
                'You added one item once More!',
                'success'
            )
        }
    }


  }

  return (
    <div>
      
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img className="w-full h-[700px]"
            src={image}
            alt="ui/ux review check"
          />
          <div className="absolute h-24 bottom-0 bg-gradient-to-r from-[rgba(0,0,0,0.3)] 
          to-[rgba(0,0,0,0.3)] w-full flex items-center pl-10">
            <div>
                <button onClick={()=>handleDonate()} className="text-[20px] font-semibold py-3 px-6 rounded-lg" style={{backgroundColor:text_color}}>Donate ${price}</button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="block font-sans text-4xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h5>
          </div>
          <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased mb-24">
            {description}
          </p>
          
        </div>
    </div>
  );
};

export default DonationCardDetails;
