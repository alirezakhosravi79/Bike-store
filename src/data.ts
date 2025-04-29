import shopimage1 from "./assets/shop-image1.png";
import shopimage2 from "./assets/shop-image2.png";
import shopimage3 from "./assets/shop-image3.png";
import shopimage4 from "./assets/shop-image4.png";
import shopimage5 from "./assets/shop-image5.png";
import shopimage6 from "./assets/shop-image6.png";

import access1 from "./assets/access1.png";
import access2 from "./assets/access2.png";
import access3 from "./assets/access3.png";
import access4 from "./assets/access4.png";
import access5 from "./assets/access5.png";
import access6 from "./assets/access1.png";

export type BikeType = {
  id: number;
  image: string;
  name: string;
  brand: string;
  color: string;
  weight: number;
  price: number;
  material: string;
  length: number;
  speed: number;
};

export type AccessoryType = {
  id: number;
  image: string;
  name: string;
  weight: number;
};

export const bikesData: BikeType[] = [
  {
    id: 1,
    image: shopimage1,
    name: "Mountain Pro X200",
    brand: "Trek",
    color: "Red",
    weight: 14,
    price: 950,
    material: "Aluminum",
    length: 175,
    speed: 21,
  },
  {
    id: 2,
    image: shopimage2,
    name: "City Cruiser 300",
    brand: "Giant",
    color: "Blue",
    weight: 12,
    price: 620,
    material: "Steel",
    length: 170,
    speed: 7,
  },
  {
    id: 3,
    image: shopimage3,
    name: "Road Master 500",
    brand: "Cannondale",
    color: "Black",
    weight: 9.5,
    price: 880,
    material: "Carbon",
    length: 180,
    speed: 18,
  },
  {
    id: 4,
    image: shopimage4,
    name: "Kids Fun Bike",
    brand: "BMX",
    color: "Green",
    weight: 7,
    price: 280,
    material: "Aluminum",
    length: 130,
    speed: 1,
  },
  {
    id: 5,
    image: shopimage5,
    name: "Electric Commuter E1",
    brand: "Specialized",
    color: "Gray",
    weight: 19,
    price: 1200,
    material: "Aluminum",
    length: 175,
    speed: 25,
  },
  {
    id: 6,
    image: shopimage6,
    name: "Hybrid Explorer 700",
    brand: "Scott",
    color: "White",
    weight: 13,
    price: 750,
    material: "Steel",
    length: 172,
    speed: 14,
  },
];

export const accessoriesData: AccessoryType[] = [
  {
    id: 101,
    image: access1,
    name: "Helmet X500",
    weight: 350,
  },
  {
    id: 102,
    image: access2,
    name: "Bike Lock SteelMax",
    weight: 900,
  },
  {
    id: 103,
    image: access3,
    name: "LED Front Light",
    weight: 150,
  },
  {
    id: 104,
    image: access4,
    name: "Water Bottle Holder",
    weight: 100,
  },
  {
    id: 105,
    image: access5,
    name: "Repair Kit Basic",
    weight: 400,
  },
  {
    id: 106,
    image: access6,
    name: "Bike Bell Classic",
    weight: 70,
  },
];
