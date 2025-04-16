import { Button } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';
import businessManImage from '../../assets/clientLogos/busnessManStanding.png';
import logo from '../../assets/clientLogos/Logo.png';
import logo0 from '../../assets/clientLogos/Logo34.png';
import logo1 from '../../assets/clientLogos/Logo (1).png';
import logo2 from '../../assets/clientLogos/Logo (2).png';
import logo3 from '../../assets/clientLogos/Logo (3).png';
import logo4 from '../../assets/clientLogos/Logo (4).png';
import logo5 from '../../assets/clientLogos/Logo (5).png';

const clientLogos = [logo0, logo1, logo2, logo3, logo4, logo5];

const Home = () => {
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

        <div className="flex flex-col items-center justify-center py-12 bg-white text-center">
          <h1 className="text-gray-600 font-bold text-4xl">Our Clients</h1>
          <p className="mt-2">We have been working with some Fortune 500+ clients</p>
          <div className="flex flex-wrap gap-6 mt-6 justify-center">
            {clientLogos.map((src, i) => (
              <img key={i} src={src} className="w-10 h-10" alt={`client-logo-${i}`} />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center p-10 bg-[#F5F7FA]">
          <img src="/userImages/tesla.png" alt="tesla image" className="w-[400px] object-contain" />
          <div className="flex flex-col gap-4 max-w-xl">
            <p className="text-gray-700 text-sm leading-relaxed">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
              risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique
              quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at
              ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices,
              quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium.
              Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
              Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id
              sem dignissim finibus ac sit amet magna.
            </p>
            <h1 className="font-semibold text-lg text-gray-800">Tim Smith</h1>
            <p className="text-gray-500 text-sm">British Dragon Boat Racing Association</p>

            <div className="flex flex-wrap gap-4 items-center mt-2">
              <img src="/logImges/figma-logo.png" alt="logo" className="w-8" />
              <img src="/logImges/spacios-jet.png" alt="logo" className="w-8" />
              <img src="/logImges/two-boxes.png" alt="logo" className="w-8" />
              <img src="/logImges/logo-ipsum.png" alt="logo" className="w-8" />
              <img src="/logImges/jilabi.png" alt="logo" className="w-8" />
              <img src="/logImges/spring.png" alt="logo" className="w-8" />
              <p className="text-green-600 font-medium cursor-pointer hover:underline">Meet all customers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
