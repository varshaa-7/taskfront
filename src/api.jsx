import axios from 'axios';

export const fetchDestinations = async () => {
  const res = await axios.get('http://localhost:5000/api/destinations');
  return res.data;
};

export const fetchPackages = async () => {
  const res = await axios.get('http://localhost:5000/api/packages/top-selling');
  return res.data;
};
