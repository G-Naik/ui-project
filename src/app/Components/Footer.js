
const Footer = () => {
    return (
      <div className="border-t-2 border-[#ffffffa3] py-10 mt-10">
        <div className="flex justify-between flex-wrap md:flex-nowrap md:w-[80%] mx-auto md:gap-10 gap-4 px-2">
          <div className="md:w-[25%] w-full">
            <div>
              <h3 className="text-xl font-[700]">intract.</h3>
            </div>
            <div>
              <a className="text-[14px] w-80 text-[#ffffff50] pt-4">We are your personal guide for exploring web3 projects & earning 100x rewards</a>
            </div>
          </div>
          <div className="grid md:grid-rows-1 md:grid-cols-4 grid-rows-2 grid-cols-2 md:gap-10 gap-8 md:w-3/4 [&_a]:text-[14px]">
            <section className="text-[16px] text-[#ffffff50] py-1 ">
              <div className="flex flex-col text-[#ffffff50]">
                <h2>INTRACT</h2>
                <a href="#" className="block py-1">Explore Quests</a>
                <a href="#" className="block py-1">Communities</a>
                <a href="#" className="block py-1">Alpha Hub</a>
              </div>
            </section>
            <section className="text-[16px] text-[#ffffff50] py-1">
              <div className="flex flex-col text-[#ffffff50]">
                <h2>EARN</h2>
                <a href="#" className="block py-1">Refer & earn</a>
                <a href="#" className="block py-1">Leaderboard</a>
                <a href="#" className="block py-1">Achievements</a>
              </div>
            </section>
            <section className="text-[16px] text-[#ffffff50] py-1">
              <div className="flex flex-col text-[#ffffff50]">
                <h2>ABOUT</h2>
                <a href="#" className="block py-1">Product Roadmap</a>
                <a href="#" className="block py-1">Affiliate Program</a>
                <a href="#" className="block py-1">Sign up Program</a>
                <a href="#" className="block py-1">Growth Community</a>
                <a href="#" className="block py-1">Blogs</a>
              </div>
            </section>
            <section className="text-[16px] text-[#ffffff50] py-1">
              <div className="flex flex-col text-[#ffffff50]">
                <h2>SUPPORT</h2>
                <a href="#" className="block py-1">Help Center</a>
                <a href="#" className="block py-1">Create your quest</a>
                <a href="#" className="block py-1">Terms of Service</a>
                <a href="#" className="block py-1">Privacy Policy</a>
                <a href="#" className="block py-1">Community Guidelines</a>
              </div>
            </section>
          </div>
        </div>
        <div className="w-[80%] border-b-2 border-[#ffffff50] border-t-2 py-8 mx-auto">
          <a className="text-[#ffffff50]"><span className="text-white">Disclaimer:</span> Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.</a>
        </div>
      </div>
    )
  }
  
  export default Footer;
  