
"use client"
import { useState } from "react"

const Projects = () => {


    const [hoverState , updateHoverState] = useState(false)


    const projectsData = [
        {
            title:"How to plan your retirement with crypto?",
            image:"https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png",
            tagIcon:"https://www.intract.io/assets/reel-video-ee824737.svg",
            playIcon:"play_circle"
        },
        {
            title:"Why are there limited Bitcoin?",
            image:"https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png",
            tagIcon:"https://www.intract.io/assets/reel-video-ee824737.svg",
            playIcon:"play_circle"
        },
        {
            title:"How does the Uniswap actually work?",
            image:"https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png",
            tagIcon:"https://www.intract.io/assets/reel-video-ee824737.svg",
            playIcon:"play_circle"
        },
        {
            title:"How to spot the Crypto projects to invest in?",
            image:"https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png",
            tagIcon:"https://www.intract.io/assets/reel-video-ee824737.svg",
            playIcon:"play_circle"
        }
    ]

  return (
<div className="bg-black">
  <div className="text-center pt-8 text-[#ffffff33]">
    <h1 className="text-2xl">Top Crypto Creators and Projects to Follow</h1>
    <h4 className="text-md pt-2 text-inherit">Answers to your crypto doubts, straight from the experts</h4>
  </div>
  <div className="flex justify-center items-center flex-wrap pt-10 pb-10 w-80% mx-auto gap-8">
    {projectsData.map(({ title, image, tagIcon }, index) => (
      <div
        key={index}
        className="relative group cursor-pointer"
        onMouseEnter={() => updateHoverState(index)}
        onMouseLeave={() => updateHoverState(null)}
      >
        <div className="relative w-fit blur-4">
          <img className="rounded-[16px]" src={image} alt="" />
          <div className="absolute bottom-2 p-2">
            <h2 className="text-xl font-[500]">{title}</h2>
          </div>
        </div>
        <div className="absolute right-3 top-2 p-2 bg-[#121111a6] rounded-full">
          <img src={tagIcon} alt="" />
        </div>
        <div className="hidden md:block">
        {hoverState === index && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined bg-[#000000b6] p-4 text-center rounded-full border-s-[#ffffff66] transform hover:translate-y-0 hover:-translate-y-1/2 transition ease-in duration-300 ease-in">
              play_circle
            </span>
          </div>
        )}
        </div>
        <div className="md:hidden">
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined bg-[#000000b6] p-4 text-center rounded-full border-s-[#ffffff66] transform hover:translate-y-0 hover:-translate-y-1/2 transition ease-in duration-300 ease-in">
              play_circle
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


  )
}
export default Projects