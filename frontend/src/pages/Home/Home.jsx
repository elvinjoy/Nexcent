import { Button } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';
import businessManImage from '../../assets/clientLogos/busnessManStanding.png';
import phoneImage from '../../assets/clientLogos/frame35.png';
import OurClients from '../../components/ourClients/ourClients';
import Community from '../../components/Community/Community';
import CreateFooter from '../../components/createFooter/CreateFooter';
import pana from '../../assets/clientLogos/pana.png';
import DynamicComponent from '../../components/dynamicComponent/DynamicComponent';
import Tesla from '../../components/tesla/tesla';
import Caring from '../../components/caring/Caring';
import GetDemo from '../../components/getDemo/GetDemo';
import Footer from '../../components/Footer/Footer';
import BusinessStats from '../../components/BusinessStats/BusinessStats';

const Home = () => {
  const handleLearnMoreClick = () => {
    console.log('Learn More button clicked!');
  };

  return (
    <>
      <Navbar />
      <div className="bg-white font-sans flex flex-col gap-10">
        <div className="bg-[#F5F7FA] h-[600px] flex items-center justify-center gap-20 px-8">
          <div className="flex flex-col gap-4 max-w-xl">
            <p className="text-5xl font-bold leading-tight">Lessons and insights</p>
            <p className="text-5xl font-bold text-green-500 leading-tight">from 8 years</p>
            <p className="text-gray-700">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="bg-green-500 text-white w-fit px-6 py-2 rounded-2xl mt-4 hover:bg-green-600 transition">
              Register
            </button>
          </div>
          <img
            src={businessManImage}
            className="w-[480px] h-[400px] object-contain"
            alt="business man"
          />
        </div>

        <OurClients />
        <Community />

        <CreateFooter
          imageSrc={phoneImage}
          heading="The unseen of spending three years at Pixelgrade"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
          buttonText="Learn More"
          onButtonClick={handleLearnMoreClick}
        />
        
        <BusinessStats />

        <DynamicComponent
          imageSrc={pana}
          heading="How to design your site footer like we did"
          paragraph="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
          buttonText="Learn More"
          onButtonClick={() => alert("Learn more clicked!")}
        />

        <Tesla />
        <Caring />
        
        {/* Wrapper div to eliminate the gap between these two components */}
        <div className="flex flex-col">
          <GetDemo />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;