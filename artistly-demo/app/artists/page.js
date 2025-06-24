"use client";
import { ArtistCard } from "@/components/ArtistCard";
import { FilterDropdowns } from "@/components/FilterDropdowns";
import { useFilter } from "@/context/FilterContext";

export default function ArtistsPage() {
  const { filtered } = useFilter();

  return (
    <div className="min-h-screen px-6 py-10 max-w-7xl mt-10 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Find the perfect performer</h1>
      <FilterDropdowns />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filtered.map((artist) => (
          <ArtistCard key={artist.id} {...artist} />
        ))}
      </div>
    </div>
  );
}
