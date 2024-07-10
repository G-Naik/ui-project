
const Content = () => {
    const bgStyle = {
        backgroundImage: "url('https://www.intract.io/assets/intract-academy-background-5547a705.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div className="w-screen max-h-screen " style={bgStyle} >
            <div className="flex justify-center items-center flex-col h-full pt-40 md:pb-60 pb-40 md:w-[500px] m-auto px-4 ">
                <div className="w-[235px] mix-blend-screen">
                    <img src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif" alt="Intract Academy Logo" />
                </div>
                <div className="text-white text-center mt-4 text-[18px]">
                    <p className="text-[#ffffff66] bg-transparent "><span>Intract</span> users have together made more than <span>$100 million</span> in web3. Join them and <span>learn how to earn crypto!</span></p>
                </div>
                <div className="text-white bg-[#6435e9] rounded-xl flex items-center mix-blend-screen mt-6">
                    <span className="flex hover:translate-x-2 ease-in duration-100 px-[57px] py-[10px] text-[14px]">
                        Get Started
                        <span className="material-symbols-outlined ml-2">trending_flat</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Content;
