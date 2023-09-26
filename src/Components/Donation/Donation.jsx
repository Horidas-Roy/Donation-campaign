import DonationCard from "../DonationCard/DonationCard";

const Donation = ({donations}) => {
    return (
         <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                donations.map(donation=><DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
           </div>
         </div>
    );
};

export default Donation;