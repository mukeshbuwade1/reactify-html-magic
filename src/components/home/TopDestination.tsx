import { TopDestinationData } from '@/constant'
import React from 'react'
import { useNavigate } from "react-router-dom";

export default function TopDestination() {
const nav = useNavigate()
  return (
    <div className="container mx-auto py-12">
    <div className="text-center mb-8">
      <h6
        className="text-primary uppercase"
        style={{ letterSpacing: "5px" }}
      >
        Destination
      </h6>
      <h1 className="text-3xl">Explore Top Destination</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TopDestinationData.map((dest, index) => (
        <div
          key={index}
          className="destination-item relative overflow-hidden mb-4"
        >
          <img
            className="w-full h-60 object-cover"
            src={`/img/${dest.img}`}
            alt={dest.name}
          />
          <div
          onClick={()=>nav(`/city/${index}/${dest.name}`)}
            className="destination-overlay text-white no-underline"
          >
            <h5 className="text-white">{dest.name}</h5>
            <span>{dest.cities}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
