import Link from "next/link"

const Navbar = () => {


    const navigationData =  [
        {
            name:"Compass",
            link:"",
            tag:""
        },
        {
            name:"Explore",
            link:"",
            tag:""
        },
        {
            name:"Academy",
            link:"",
            tag:"New"
        },
        {
            name:"NFTs",
            link:"",
            tag:""
        },
        {
            name:"For Projects",
            link:"",
            tag:""
        },
    ]

  return (
    <header className="bg-[#00000056] sticky top-0 z-10 border-b-2 border-[#ffffff12]">
        <div className="flex items-center justify-center max-w-[1284px] w-[100%] h-[64px] m-auto bg-[#0000002c]">
            {/* Logo */}
            <div className="flex items-center">
                <img src="https://www.intract.io/logo/intract_text.svg" alt="" />
            </div>
            {/* Navigation Content */}
            
            <div className="hidden md:block">
                    <nav className="flex items-center ml-[40px]">
                        {
                            navigationData.map(({name,link,tag},index) => (
                                <div key={index} className="font-normal text-base px-[12px] text-[#ffffffb3] hover:text-white leading-5">
                                    <Link href={link}>{name}
                                    {
                                        tag &&
                                    <span className="text-[12px] px-[8px] py-[4px] bg-[#6435e9] rounded-lg ml-1">{tag}</span>
                                    }
                                    </Link>
                                </div>
                            ))
                        }
                    </nav>
            </div>

            {/* Last section */}
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center text-[#ffffffb3] bg-[#1d1d1f7d] px-[16px] py-[10px] rounded-full gap-2 ml-[40px] ">
                    <div className="bg-transperent relative top-1 ">
                         <span className="material-symbols-outlined bg-inherit">search</span>
                    </div>
                    <div className="bg-transperent md:block hidden">
                        <input className="text-[14px] bg-inherit focus:outline-none " type="text" placeholder="Search for ecosystems,trending quests etc.." />
                    </div>
                </div>
                <div className="ml-2">
                    <div className="border-solid border-2 border-orange-400 p-3 rounded-full"><img src="https://www.intract.io/assets/broadcast_or-04af786c.svg" alt="" className="h-4" /></div>
                </div>
                <div className="ml-2">
                    <button className="md:px-[24px] md:py-[4px] bg-white text-black rounded-md md:text-[15px] px-2 py-2  ">Sign In</button>
                </div>
            </div>
        </div>
    </header>
  )
}
export default Navbar;