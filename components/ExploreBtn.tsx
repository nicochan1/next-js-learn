'use client'
import Image from "next/image"

const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn"className="mt-5 mx-auto" onClick={()=>console.log("clicked")}>
      <a href="#events">
        Explore Event
        <Image src="/icons/arrow-down.svg" alt="arrow=down" width={24} height={24}></Image>
      </a>
    </button>
  
  )
}

export default ExploreBtn