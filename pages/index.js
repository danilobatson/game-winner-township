import Head from 'next/head'
import Image from 'next/image'
import { Slider } from '../components/Slider'
import { Button } from '../components/Button'
import { Credit } from '../components/Credit'
import { CashOut } from '../components/CashOut'
import { Arrows } from '../components/Arrows'
import { useState, useEffect } from "react";
import {options} from '../utils/options'



const getRandom = () => Math.floor(Math.random() * 4);
const getRandoms = () => {
  return [
    options[getRandom()],
    options[getRandom()],
    options[getRandom()]
  ]
}

export default function Home() {
  const [credits, setCredits] = useState(39)
  const [cashOut, setCashOut] = useState(0)
  const [fruit, setFruit] = useState(getRandoms)
  const [loading, setLoading] = useState(false)
  const [matched, setMatched] = useState(false)


  const handleClick = () => {
    setLoading(!loading)

    credits < 40 ? setFruit(getRandoms) :
      credits >= 40 && credits <= 60 ? above40Chance() :
        above60Chance()

    if (matched) {
      setTimeout(() => {
        setLoading(false)
      }, 0)
      setMatched(false)
      return addCredits()
    }

    if (!matched && credits > 0) {
      setTimeout(() => {
        setCredits(credits - 1)
        setLoading(false)
      }, 1000)
    }
    if (credits <= 0) {
      setTimeout(() => {
        alert('You are out of credits')
        setLoading(false)
      }, 1000)
    }


  }

  const above40Chance = () => {
    const chance = (Math.floor(Math.random() * 9))
    if (chance <= 2) {
      setFruit(getRandoms)
    }
    else {
      alert('Loser UI')
    }
  }

  const above60Chance = () => {
    const chance = (Math.floor(Math.random() * 9))
    if (chance <= 5) {
      setFruit(getRandoms)
    }
    else {
      alert('Loser UI')
    }
  }


  const fruitsRendered = []
  const addCredits = () => {
    switch (fruitsRendered[0]) {
      case 'cherry':
        setCredits(credits + 10)
        break;
      case 'lemon':
        setCredits(credits + 20)
        break
      case 'orange':
        setCredits(credits + 30)
        break
      case 'watermelon':
        setCredits(credits + 40)
        break
      default:
        return;
    }
  }

  useEffect(() => {
    const isMatching = (el) => el === fruitsRendered[0]
    if (fruitsRendered.every(isMatching)) {
      setMatched(true)
    }
  }, [fruitsRendered])


  return (
    <>
      <div className="font-sans bg-gray-200 absolute inset-0 overflow-hidden flex items-center justify-center">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap" rel="stylesheet" />
        </Head>
        <div className="border-4 border-purple-900 rounded-sm shadow-lg bg-white w-full max-w-2xl">
          <div className="border-4 border-blue-700 relative">
            <div className="border-4 border-purple-900 p-4">
              <Image src="/logo.svg" width="103" height="37" />
              <div className="flex items-center justify-center">
                <div className="border-4 border-purple-900 rounded-sm relative z-10">
                  <div className="bg-teal-400 p-2">
                    <div className="border-4 border-purple-900 rounded-sm bg-white overflow-hidden">
                      <div className="flex items-center h-[180px] divide-x-4 divide-purple-900">
                        {fruit.map((elem, i) => {
                          fruitsRendered.push(elem)
                          return (
                            <Slider loading={loading} selected={elem} key={i} />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                 <Arrows />
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <CashOut cashOut={cashOut} />
                <Credit credits={credits} />
              </div>
              <Button clicked={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
