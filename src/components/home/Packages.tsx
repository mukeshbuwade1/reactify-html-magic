import { PerfectTourPackages } from '@/constant'
import { faCalendarAlt, faMapMarkerAlt, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Packages({handleBookNowClick}) {
  return (
    <div className="container mx-auto py-12">
    <div className="text-center mb-8">
      <h6
        className="text-primary uppercase"
        style={{ letterSpacing: "5px" }}
      >
        Packages
      </h6>
      <h1 className="text-3xl">Perfect Tour Packages</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PerfectTourPackages.map((pkg, index) => (
        <div key={index} className="package-item bg-white mb-4 shadow-sm">
          <img
            className="w-full h-48 object-cover"
            src={pkg.src}
            alt=""
          />
          <div className="p-4">
            <div className="flex justify-between mb-3">
              <small className="m-0">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-primary mr-2"
                />
                {pkg.place}
              </small>
              <small className="m-0">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="text-primary mr-2"
                />
                {pkg.duration}
              </small>
              <small className="m-0">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-primary mr-2"
                />
                {pkg.person}
              </small>
            </div>
            <a
              href="#"
              className="text-lg font-medium no-underline hover:text-primary"
            >
              {pkg.info}
            </a>
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between">
                <h6 className="m-0">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-primary mr-2"
                  />
                  {pkg.rating.average} <small>({pkg.rating.total})</small>
                </h6>
                <h5 className="m-0">{pkg.price}</h5>
              </div>
            </div>
          </div>
          <div className="px-4 pb-4">
            <a 
              href="#" 
              className="bg-primary text-white w-full py-2 inline-block text-center"
              onClick={handleBookNowClick}
            >
              Book Now
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
