export interface Business {
  id: string;
  name: string;
  name_en: string;
  rating: number;
  location: string;
  image: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Category {
  id: string;
  name: string;
}

export interface Location {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: "1", name: "Accounting and Finance" },
  { id: "2", name: "Agricultural and Crafts" },
  { id: "3", name: "Agriculture Equipment Supply" },
  { id: "4", name: "Architecture and Decor" },
  { id: "5", name: "Association" },
  { id: "6", name: "Automotive and Vehicles" },
  { id: "7", name: "Banking and Micro Finance" },
  { id: "8", name: "Beauty Care" },
  { id: "9", name: "Business and Investment" },
];

export const locations: Location[] = [
  { id: "1", name: "Koh Kong" },
  { id: "2", name: "Kratie" },
  { id: "3", name: "Mondulkiri" },
  { id: "4", name: "Oddor Meanchey" },
  { id: "5", name: "Pailin" },
  { id: "6", name: "Preah Vihear" },
  { id: "7", name: "Prey Veng" },
  { id: "8", name: "Pursat" },
  { id: "9", name: "Rattanakiri" },
  { id: "10", name: "Stung Treng" },
  { id: "11", name: "Svay Rieng" },
];

export const businesses: Business[] = [
  {
    id: "103",
    name: "ធនាគារ វឌ្ឍនៈ អាស៊ី ចំកាត់​",
    name_en: "Advanced Bank of Asia (ABA)",
    rating: 5,
    location: "Phnom Penh",
    image: "/aba.jpg",
    coordinates: { lat: 11.5564, lng: 104.9282 },
  },
  {
    id: "168",
    name: "ធនាគារ អេស៊ីលីដា",
    name_en: "ACLEDA Bank",
    rating: 0,
    location: "Phnom Penh",
    image: "/acleda.jpg",
    coordinates: { lat: 11.5684, lng: 104.9222 },
  },
  {
    id: "168",
    name: "ក្រសួងពាណិជ្ជកម្ម",
    name_en: "Ministry Of Commerce",
    rating: 5,
    location: "Phnom Penh",
    image: "/icons/icon-512x512.png?height=100&width=100",
    coordinates: { lat: 11.5764, lng: 104.9182 },
  },
  {
    id: "33",
    name: "ធនាគារវឌ្ឍនៈ",
    name_en: "Vattanac Bank",
    rating: 0,
    location: "Phnom Penh",
    image: "/vattanac.jpg",
    coordinates: { lat: 11.5464, lng: 104.9382 },
  },
  {
    id: "325",
    name: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
    name_en: "Royal University of Phnom Penh",
    rating: 0,
    location: "Phnom Penh",
    image: "/rupp.png",
    coordinates: { lat: 11.5464, lng: 104.9382 },
  },
  {
    id: "5",
    name: "ធនាគារ វីង",
    name_en: "Wing Bank",
    rating: 0,
    location: "Phnom Penh",
    image: "/wing.png",
    coordinates: { lat: 11.5464, lng: 104.9382 },
  },
  {
    id: "665",
    name: "សាកលវិទ្យាល័យអាមេរិកាំងភ្នំពេញ",
    name_en: "American University of Phnom Penh",
    rating: 0,
    location: "Phnom Penh",
    image: "/aupp.png",
    coordinates: { lat: 11.5464, lng: 104.9382 },
  },
];
