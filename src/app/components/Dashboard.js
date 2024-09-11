'use client';

import { useEffect, useState } from 'react';
import { csv } from 'd3-fetch';
import { Link } from 'react-scroll';
import FancyBoxes from './FancyBoxes';
import MapComponent from './MapComponent';
import '../styles/globals.css'; // Adjust the path to your CSS file

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Fetch data
    csv('/data/summaryData.csv')
      .then(data => {
        // Ensure count values are parsed as numbers
        const parsedData = data.map(d => ({
          ...d,
          count: parseFloat(d.count),
          year: parseInt(d.year, 10),
        }));
        setData(parsedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <nav className="sticky top-0 z-50 flex justify-around bg-gray-800 text-white p-4">
        <Link to="overview" smooth={true} duration={800} className="cursor-pointer">Overview</Link>
        <Link to="map" smooth={true} duration={800} className="cursor-pointer">Map</Link>
        <Link to="charts" smooth={true} duration={800} className="cursor-pointer">Charts</Link>
        <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
      <div id="overview">
        <FancyBoxes data={data} />
      </div>
      <MapComponent />
      <div id="charts" className="w-full h-1/2 flex justify-around"></div>
    </div>
  );
}