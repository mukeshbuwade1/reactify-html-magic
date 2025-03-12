import { destinationId } from "./types";

export const TopDestinationData = [
  { img: "kashmir.jpg", 
    name: "India", 
    cities: "5 Cities" 
  },
  {
    img: "destination-1.jpg",
    name: "United States",
    cities: "0 Cities",
  },
  {
    img: "destination-2.jpg",
    name: "United Kingdom",
    cities: "0 Cities",
  },
  {
    img: "destination-3.jpg",
    name: "Australia",
    cities: "0 Cities",
  },
  {
    img: "destination-5.jpg",
    name: "South Africa",
    cities: "0 Cities",
  },
  {
    img: "destination-6.jpg",
    name: "Indonesia",
    cities: "0 Cities",
  },
];

export const PerfectTourPackages = [
  {
    id: 1,
    src: "/img/manali.jpg",
    place: "Shimla & Manali",
    duration: "05 days",
    person: "2 Person",
    info: " Discover amazing places of Shimla & Manali with us",
    rating: {
      total: 250,
      average: 4.5,
    },
    price: "₹ 17800 per person",
  },
  {
    id: 1,
    src: "/img/kashmir.jpg",
    place: "Kashmir",
    duration: "05 days",
    person: "2 Person",
    info: " Explore the Paradise on Earth with us",
    rating: {
      total: 250,
      average: 4.5,
    },
    price: "₹ 23800 per person",
  },
  {
    id: 1,
    src: "/img/jaipur.jpg",
    place: "Delhi Agra & Jaipur",
    duration: "05 days",
    person: "2 Person",
    info: "Combination of Historical, Cultural and Architectural ",
    rating: {
      total: 500,
      average: 5,
    },
    price: "₹ 19300 per person",
  },
  {
    id: 1,
    src: "/img/ladakh.jpg",
    place: "Ladakh",
    duration: "06 days",
    person: "2 Person",
    info: " Explore the Land of High Passes with us",
    rating: {
      total: 250,
      average: 4.5,
    },
    price: "₹ 36400 per person",
  },
  {
    id: 1,
    src: "/img/goa.jpg",
    place: "Goa",
    duration: "05 days",
    person: "2 Person",
    info: " Feel the beautiful beaches, vibrant nightlife, rich blend culture of Portuguese and India with us",
    rating: {
      total: 450,
      average: 4.5,
    },
    price: "₹ 17300 per person",
  },
  {
    id: 1,
    src: "/img/sikkim.jpg",
    place: "Sikkim & Darjeeling",
    duration: "05 days",
    person: "2 Person",
    info: " Explore stunning mountain Vista, colonial charm & tea gardens with us",
    rating: {
      total: 250,
      average: 4.5,
    },
    price: "₹ 21900 per person",
  },
];

export const allCities = [
  [
    {
      img: "destination-1.jpg",
      name: "Goa",
      cities: "1 Package",
      destinationId: destinationId.goa
    },
    {
      img: "manali.jpg",
      name: "Himachal",
      cities: "1 Package",
      destinationId: destinationId.himachal
    },
    {
      img: "destination-3.jpg",
      name: "North India",
      cities: "3 Packages",
      destinationId: destinationId.north_india
    },
    {
      img: "destination-5.jpg",
      name: "Rajasthan",
      cities: "1 Packages",
      destinationId: destinationId.rajasthan
    },
    {
      img: "destination-2.jpg",
      name: "South India",
      cities: "0 Packages",
      destinationId: destinationId.south_india
    },
    {
      img: "destination-4.jpg",
      name: "Maharastra",
      cities: "0 packages",
      destinationId: destinationId.maharastra
    },
  ],
  [
    // {
    //   img: "destination-2.jpg",
    //   name: "United States",
    //   cities: "100 packages",
    //   destinationId: destinationId.united_states
    // },
  ],
  [
    // {
    //   img: "destination-3.jpg",
    //   name: "United States",
    //   cities: "100 packages",
    //   destinationId: destinationId.united_states
    // },
  ],
  [
    // {
    //   img: "destination-4.jpg",
    //   name: "United States",
    //   cities: "100 packages",
    //   destinationId: destinationId.united_states
    // },
  ],
  [
    // {
    //   img: "destination-5.jpg",
    //   name: "United States",
    //   cities: "100 packages",
    //   destinationId: destinationId.united_states
    // },
  ],
  [
    // {
    //   img: "destination-6.jpg",
    //   name: "United States",
    //   cities: "100 packages",
    //   destinationId: destinationId.united_states
    // },
  ],
];

export const AllTourPackages=[
  {
    id: 1,
    src: "/img/manali.jpg",
    place: "Shimla & Manali",
    duration: "05 days",
    person: "2 Person",
    info: " Discover amazing places of Shimla & Manali with us",
    rating: {
      total: 250,
      average: 4.5,
    },
    price: "₹ 17800 per person",
    destinationId:destinationId.himachal
  },
  // {
  //   id: 1,
  //   src: "/img/package-2.jpg",
  //   place: "Thailand",
  //   duration: "3 days",
  //   person: "2 Person",
  //   info: " Discover amazing places of the world with us",
  //   rating: {
  //     total: 250,
  //     average: 4.5,
  //   },
  //   price: "₹ 3500",
  //   destinationId:destinationId.south_india
  // },
  {
    id: 1,
    src: "/img/kashmir.jpg",
    place: "Kashmir",
    duration: "05 days",
    person: "2 Person",
    info: " Explore the Paradise on Earth with us",
    rating: {
      total: 250,
      average: 4.5,
    },
    price: "₹ 23800 per person",
    destinationId:destinationId.north_india
  },
  {
    id: 1,
    src: "/img/ladakh.jpg",
    place: "Ladakh",
    duration: "06 days",
    person: "2 Person",
    info: " Explore the Land of High Passes with us",
    rating: {
      total: 250,
      average: 4.5,
    },
    price: "₹ 36400 per person",
    destinationId:destinationId.north_india
  },
  {
    id: 1,
    src: "/img/sikkim.jpg",
    place: "Sikkim & Darjeeling",
    duration: "05 days",
    person: "2 Person",
    info: " Explore stunning mountain Vista, colonial charm & tea gardens with us",
    rating: {
      total: 250,
      average: 4.5,
    },
    price: "₹ 21900 per person",
    destinationId:destinationId.north_india
  },
  // {
  //   id: 1,
  //   src: "/img/package-4.jpg",
  //   place: "Thailand",
  //   duration: "3 days",
  //   person: "2 Person",
  //   info: " Discover amazing places of the world with us",
  //   rating: {
  //     total: 250,
  //     average: 4.5,
  //   },
  //   price: "₹ 3500",
  //   destinationId:destinationId.maharastra
  // },
  {
    id: 1,
    src: "/img/goa.jpg",
    place: "Goa",
    duration: "05 days",
    person: "2 Person",
    info: " Feel the beautiful beaches, vibrant nightlife, rich blend culture of Portuguese and India with us",
    rating: {
      total: 450,
      average: 4.5,
    },
    price: "₹ 17300 per person",
    destinationId:destinationId.goa
  },
  {
    id: 1,
    src: "/img/jaipur.jpg",
    place: "Delhi Agra & Jaipur",
    duration: "05 days",
    person: "2 Person",
    info: "Combination of Historical, Cultural and Architectural ",
    rating: {
      total: 500,
      average: 5,
    },
    price: "₹ 19300 per person",
    destinationId:destinationId.rajasthan
  },
  // {
  //   id: 1,
  //   src: "/img/package-6.jpg",
  //   place: "Thailand",
  //   duration: "3 days",
  //   person: "2 Person",
  //   info: " Discover amazing places of the world with us",
  //   rating: {
  //     total: 250,
  //     average: 4.5,
  //   },
  //   price: "₹ 3500",
  //   destinationId:destinationId.united_states
  // },
]