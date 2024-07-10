
const CryptoDictonary = () => {
  return (
    <div className="bg-black">
        <div className="text-[#ffffff33] text-center">
            <h2 className="text-2xl font-[500] pt-4">Crypto Dictionary</h2>
            <h4 className="pt-2 text-inherit">Your one-stop to catch up on all crypto terms</h4>
        </div>
        <div className="py-10 flex justify-center px-4 relative">
            <img className="object-fit w-100 h-100 rounded-[16px]" src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg" alt="" />
            <div className="absolute md:left-36 bottom-14">
                <h3 className="text-2xl">Web3 + Degen Glossary</h3>
                <p className="text-[16px] text-[#fffefec5]">Your own Crypto currency</p>
            </div>
        </div>
    </div>
  )
}
export default CryptoDictonary