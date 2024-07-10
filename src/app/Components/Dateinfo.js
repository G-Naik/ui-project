
const Dateinfo = () => {
  return (
    <div className="bg-black relative pt-10 md:pt-0">
       <section className="text-[#ffffff33] bg-[#ffffff14] w-fit m-auto md:px-6  px-2 py-4  rounded-[12px] ">
            <div className="text-[#ffffff9b] border-b-2 border-dashed  border-[#ffffff33]">
                    <div className="flex items-center">
                        <span className="material-symbols-outlined text-orange-300 block">schedule</span>
                        <p className="text-inherit text-md p-2">Rewards unlocks in</p>
                    </div>
                </div>
                <div className="flex justify-center items-center text-[#ffffff33] gap-8 bg-[#000000e0] w-fit px-10 py-4 border-2 rounded-[16px] border-solid border-[#ffffff33] mt-4 ">
                    <div className="flex items-center flex-col">
                        <h3 className="text-3xl font-[600]">00</h3>
                        <div>Days</div>
                    </div>
                    <div className="flex items-center flex-col">
                        <h3 className="text-3xl font-[600]">01</h3>
                        <div>Hrs</div>
                    </div>
                    <div className="flex items-center flex-col">
                        <h3 className="text-3xl font-[600]">13</h3>
                        <div>Mins</div>
                    </div>
                    <div className="flex items-center flex-col">
                        <h3 className="text-3xl font-[600]" >24</h3>
                        <div>Sec</div>
                    </div>
                </div>
       </section>

       <section>
            <div className="md:w-1/4 border border-[#ffffff33] rounded-lg p-4 bg-black [&_p]:text-[12px] [&_p]:text-[#ffffff4c] md:mx-auto my-6 mx-2 ">
                <a>
                    <img className="rounded-t-lg w-100 h-100 object-fit" src="https://www.intract.io/assets/kol-reward-12e6ae06.gif" alt="" />
                </a>
                <div className="py-3 flex justify-between border-b-2 border-dashed border-[#ffffff33]">
                    <div className="">
                        <p>Exclusive Community</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <div>
                            <img src="https://www.intract.io/assets/discord-50baa5cf.svg" alt="" />
                        </div>
                        <p>Earndrop</p>
                    </div>
                </div>

                <div className="flex justify-between pt-3">
                    <div>
                        <p>Complete all Essential quests</p>
                    </div>
                    <div>
                        <div className="material-symbols-outlined text-[#ffffff4c]">check</div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p>Complete at least 1 Alpha Hub quest today</p>
                    </div>
                    <div>
                        <div className="material-symbols-outlined text-[#ffffff4c] ">check</div>
                    </div>
                </div>
                <div className="">
                    <button className="w-full p-2 text-center text-[#ffffff33] border-2 border-solid border-[#ffffff1c] rounded-[16px] ">Claim</button>
                </div>
            </div>
       </section>

       <section className="md:w-1/5 border border-[#ffffff33] rounded-lg bg-black [&_p]:text-[14px] [&_p]:text-[#ffffff4c] md:mx-auto my-6 md:absolute top-10 right-36 mx-2">
        <div className="border-b-2 bprder-solid border-[#ffffff33] w-full p-4">
            <div className="flex">
                <p>Reward info</p>
                <span className="block material-symbols-outlined text-[#ffffff33] ">info</span>
            </div>
        </div>
        <div className="px-5 py-2">
        <h6 className="text-white text-[14px] py-2">
            Free access to paid KOL (crypto earning) communities!
        </h6>
        <p className="py-1">Win access to exclusive earning communities of some of the the greatest earners in crypto for a month, every 24 hours. Get access to unmatched insights, a close-knit community of the best airdrop earners, and more.</p>
        <p className="py-1">To win: make sure you've connected your Twitter and Discord accounts - and follow our criteria!</p>
        </div>
       </section>
       <div className=" hidden md:block w-[250px] h-20 border-b-2 border-solid border-[#ffffff33] border-r-2 absolute bottom-56 right-72">

       </div>
    </div>
  )
}
export default Dateinfo