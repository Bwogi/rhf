import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'
import Image01 from '/images/pexels-josh-sorenson.jpg'
import Image02 from '/images/pexels-josh-sorenson01.jpg'
import DrMyles from '/images/dr-myles-munroe.jpg'
import Services01 from '/images/services01.jpg'
import Services02 from '/images/services02.jpg'
import Services03 from '/images/services03.jpg'

export default function ServicesContent() {
  return (
    <div className="relative overflow-hidden bg-white pt-5">
      <div className="relative mb-20">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
                <h2 className="text-4xl  tracking-tight text-gray-900">Sundays</h2>
                <p className="mt-4 text-lg text-gray-500">
                Join us in-person or online every Sunday at 9 AM & 11 AM for a time of connection, worship and scripture.</p>
                <p className="mt-4 text-lg text-gray-500">Online services are available on Live.RHF.org, Facebook and YouTube.</p>
                
            </div>
            
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Services01}
                alt="Praise"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-20">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
                <h2 className="text-4xl  tracking-tight text-gray-900">Kid's Service</h2>
                <p className="mt-4 text-lg text-gray-500">
                Every service at RHF, all children experience safe, age appropriate environments where the Bible is taught in a creative way. </p>
                <p className="mt-4 text-lg text-gray-500">Come to a place of belonging where kids have fun learning about Jesus.</p>
                
            </div>
            
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Services02}
                alt="Praise"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-20">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
                <h2 className="text-4xl  tracking-tight text-gray-900">Great Marriages</h2>
                <p className="mt-4 text-lg text-gray-500">
                Strengthen your marriage and legacy by experiencing hope, rekindling your love for one another, and gaining fresh vision. </p>
                <p className="mt-4 text-lg text-gray-500">Join us for RHF Marriages on Wednesdays at 7 PM.</p>
                
            </div>
            
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Services03}
                alt="Praise"
              />
            </div>
          </div>
        </div>
      </div>
      
     
      
      
    </div>
  )
}
