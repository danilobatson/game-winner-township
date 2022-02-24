import Image from 'next/image'




export const Slider = ({ selected, loading }) => {
  return (
    <div className="flex-1 w-[120px] h-full divide-y-4 divide-purple-900">
      <div className="w-[120px] h-[30px]"></div>
      <div className="w-[120px] h-[120px]">
        {loading && <Image height="120" width="120" src="/loading-spinning-bubbles.svg" />
        }
        {!loading &&
          <Image height="120" width="120" src={`/${selected}.svg`} />
        }
      </div>
      <div className="w-[120px] h-[30px]"></div>
    </div>
  )
}
