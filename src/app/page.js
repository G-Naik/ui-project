
import Content from "./Components/Content";
import CryptoDictonary from "./Components/CryptoDictonary";
import Dateinfo from "./Components/Dateinfo";
import Footer from "./Components/Footer";
import Model from "./Components/Model";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="relative">
      <Navbar/>
      <Content/>
      <Model/>
      <Dateinfo/>
      <Projects/>
      <CryptoDictonary/>
      <div className="sticky bottom-10 top-10">
        <div className="flex justify-center items-center w-fit border-2 border-solid border-[#ffffff19] rounded-full mx-auto h-10 bg-[#fffff33] ">
              <div>
                  <button className="px-[34px] py-[7px] bg-[#797676bd] rounded-full ">Essentials</button>
              </div>
              <div>
                  <button className="px-[24px] py-[7px]">Alpha Hub</button>
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
