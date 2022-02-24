import Image from 'next/image'

export const Arrows = () => (
  <>
    <div className="absolute left-0 z-20 top-1/2 mt-[-35px] ml-[-20px]">
      <Image src="/left-arrow.svg" width="40" height="75" />
    </div>
    <div className="absolute right-0 z-20 top-1/2 mt-[-35px] mr-[-20px]">
      <Image src="/right-arrow.svg" width="40" height="75" />
    </div>
  </>
)
