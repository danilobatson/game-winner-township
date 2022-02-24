import {useState, useEffect} from 'react'
export const Button = ({ clicked }) => {
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
  <div className="absolute z-20 bottom-0 w-full flex justify-center mb-[-30px]">
      <a onClick={clicked} onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border-4 border-purple-900 text-white bg-red-500 px-6 py-2 font-extrabold hover:bg-red-400 hover:border-purple-800 transition-colors">
      try your luck
    </a>
  </div>

)
}
