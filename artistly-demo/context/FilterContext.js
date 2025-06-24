"use client";

import { createContext, useContext, useState, useEffect } from "react";
import artistsData from "@/data/artists.json";

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

// Provider
export const FilterProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All");
  const [activePrice, setActivePrice] = useState("All");

  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [prices, setPrices] = useState([]);

  // Load data + unique filter options
  useEffect(() => {
    setArtists(artistsData);
    setFiltered(artistsData);

    const catSet = new Set();
    const locSet = new Set();
    const priceSet = new Set();

    artistsData.forEach((artist) => {
      if (artist.category) catSet.add(artist.category);
      if (artist.location) locSet.add(artist.location.split(",")[0]);
      if (artist.price) priceSet.add(artist.price);
    });

    setCategories([...catSet]);
    setLocations([...locSet]);
    setPrices([...priceSet]);
  }, []);

  // Apply filters 
  useEffect(() => {
    let result = [...artists];

    if (activeCategory !== "All") {
      result = result.filter((a) => a.category === activeCategory);
    }

    if (activeLocation !== "All") {
      result = result.filter((a) => a.location.includes(activeLocation));
    }

    if (activePrice !== "All") {
      result = result.filter((a) => a.price === activePrice);
    }

    setFiltered(result);
  }, [activeCategory, activeLocation, activePrice, artists]);

  return (
    <FilterContext.Provider
      value={{
        filtered,
        categories,
        locations,
        prices,
        activeCategory,
        setActiveCategory,
        activeLocation,
        setActiveLocation,
        activePrice,
        setActivePrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
