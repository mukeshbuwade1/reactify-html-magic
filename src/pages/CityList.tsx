import PageWrapper from "@/components/PageWrapper";
import FooterNote from "@/components/common/FooterNote";
import NavBar from "@/components/common/NavBar";
import PageHeader from "@/components/common/PageHeader";
import Package from "@/components/emptyscreen/Package";
import { allCities } from "@/constant";
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CityList() {
  const nav = useNavigate();
  const { id, name } = useParams();
  return (
    <PageWrapper>
     
      <div className="container mx-auto py-12 mt-6">
        <div className="text-center mb-8">
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Destination
          </h6>
          <h1 className="text-3xl">{name} Tour Packages</h1>
        </div>
        {allCities[id].length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCities[id].map((dest, index) => (
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
                  onClick={() => nav(`/packages/:${dest.destinationId}`)}
                  className="destination-overlay text-white no-underline"
                >
                  <h5 className="text-white">{dest.name}</h5>
                  <span>{dest.cities}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Package />
        )}
      </div>
    </PageWrapper>
  );
}
