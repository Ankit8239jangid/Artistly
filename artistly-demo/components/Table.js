"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import { useEffect, useState } from "react";
import artistsData from "@/data/artists.json";

export default function DashboardTable() {
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");

  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const catSet = new Set();
    const locSet = new Set();

    artistsData.forEach((artist) => {
      if (artist.category) catSet.add(artist.category);
      if (artist.location) locSet.add(artist.location.split(",")[0]);
    });

    setCategories([...catSet]);
    setLocations([...locSet]);
    setFilteredData(artistsData);
  }, []);

  useEffect(() => {
    let data = [...artistsData];

    if (category !== "All") {
      data = data.filter((artist) => artist.category === category);
    }

    if (location !== "All") {
      data = data.filter((artist) => artist.location.includes(location));
    }

    setFilteredData(data);
  }, [category, location]);

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Artist Submissions</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Category Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Category: {category} <MoveDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={category}
              onValueChange={setCategory}
            >
              {["All", ...categories].map((cat) => (
                <DropdownMenuRadioItem key={cat} value={cat}>
                  {cat}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Location Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Location: {location} <MoveDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Filter by Location</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={location}
              onValueChange={setLocation}
            >
              {["All", ...locations].map((loc) => (
                <DropdownMenuRadioItem key={loc} value={loc}>
                  {loc}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <Table>
        <TableCaption>List of available artists</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((artist) => (
            <TableRow key={artist.id}>
              <TableCell className="font-medium">{artist.name}</TableCell>
              <TableCell>{artist.category}</TableCell>
              <TableCell>{artist.location}</TableCell>
              <TableCell className="text-right">{artist.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
