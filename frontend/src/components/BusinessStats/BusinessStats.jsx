import React from 'react';
import CountUp from 'react-countup';

// Import all images at the top of the file
import membersIcon from '../../assets/clientLogos/person.png';
import clubsIcon from '../../assets/clientLogos/threeHand.png';
import eventsIcon from '../../assets/clientLogos/singleHand.png';
import paymentsIcon from '../../assets/clientLogos/box.png';

const BusinessStats = () => {
  // Use the imported images
  const statsImages = {
    members: membersIcon,
    clubs: clubsIcon,
    events: eventsIcon,
    payments: paymentsIcon
  };

  return (
    <div className="w-full bg-[#F5F7FA] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left side content */}
          <div className="mb-10 md:mb-0 md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-700 mb-2">
              Helping a local
              <br />
              <span className="text-green-500">business reinvent itself</span>
            </h2>
            <p className="text-gray-600">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* Right side stats */}
          <div className="grid grid-cols-2 gap-8 md:w-2/3">
            {/* Members */}
            <div className="flex items-center">
              <div className="mr-4">
                <img 
                  src={statsImages.members} 
                  alt="Members Icon" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-700">
                  <CountUp end={2245341} separator="," duration={2.5} />
                </div>
                <div className="text-gray-500">Members</div>
              </div>
            </div>

            {/* Clubs */}
            <div className="flex items-center">
              <div className="mr-4">
                <img 
                  src={statsImages.clubs} 
                  alt="Clubs Icon" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-700">
                  <CountUp end={46328} separator="," duration={2.5} />
                </div>
                <div className="text-gray-500">Clubs</div>
              </div>
            </div>

            {/* Event Bookings */}
            <div className="flex items-center">
              <div className="mr-4">
                <img 
                  src={statsImages.events} 
                  alt="Events Icon" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-700">
                  <CountUp end={828867} separator="," duration={2.5} />
                </div>
                <div className="text-gray-500">Event Bookings</div>
              </div>
            </div>

            {/* Payments */}
            <div className="flex items-center">
              <div className="mr-4">
                <img 
                  src={statsImages.payments} 
                  alt="Payments Icon" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-700">
                  <CountUp end={1926436} separator="," duration={2.5} />
                </div>
                <div className="text-gray-500">Payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStats;