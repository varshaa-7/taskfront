import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const fetchDestinations = async () => {
  const response = await fetch(`${BASE_URL}/destinations`);
  if (!response.ok) throw new Error("Failed to fetch destinations");
  return response.json();
};

export const fetchPackages = async () => {
  const response = await fetch(`${BASE_URL}/packages/top-selling`);
  if (!response.ok) throw new Error("Failed to fetch packages");
  return response.json();
};