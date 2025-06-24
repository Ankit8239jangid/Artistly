"use client";

import { useFilter } from "@/context/FilterContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { MoveDown } from "lucide-react";

export function FilterDropdowns() {
  const {
    categories,
    locations,
    prices,
    activeCategory,
    setActiveCategory,
    activeLocation,
    setActiveLocation,
    activePrice,
    setActivePrice,
  } = useFilter();

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {/* Category */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Category: {activeCategory} <MoveDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select Category</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={activeCategory}
            onValueChange={setActiveCategory}
          >
            {["All", ...categories].map((cat) => (
              <DropdownMenuRadioItem key={cat} value={cat}>
                {cat}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Location */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Location: {activeLocation} <MoveDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select Location</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={activeLocation}
            onValueChange={setActiveLocation}
          >
            {["All", ...locations].map((loc) => (
              <DropdownMenuRadioItem key={loc} value={loc}>
                {loc}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Price */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Price: {activePrice} <MoveDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select Price</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={activePrice}
            onValueChange={setActivePrice}
          >
            {["All", ...prices].map((price) => (
              <DropdownMenuRadioItem key={price} value={price}>
                {price}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
