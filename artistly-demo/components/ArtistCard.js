import { MapPin, Music, IndianRupee, Calendar, Star, Clock } from 'lucide-react'

export function ArtistCard({ name, location, image, price, category, rating = "4.5", experience = "5+ years" }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-square overflow-hidden relative">
        <img
          src={image}
          alt={name}
          loading='lazy'
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="absolute top-3 right-3">
        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-[10px] font-medium flex items-center gap-1">
          <Music className="w-2 h-2" />
          {category}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
            {name}
          </h3>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm">{rating}</span>
          </div>
        </div>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-purple-600" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <IndianRupee className="w-4 h-4 text-purple-600" />
            <span>{price}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-600" />
            <span>{experience}</span>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 mt-3 flex items-center justify-center gap-2">
          <Calendar className="w-4 h-4" />
          Book Now
        </button>
      </div>
    </div>
  );
}