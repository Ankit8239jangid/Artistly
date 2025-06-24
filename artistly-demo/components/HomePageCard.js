import { ArrowRight, Users } from 'lucide-react';

export default function HomePageCard({ title, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
      {/* Image Container with Overlay */}
      <div className="relative h-72 w-full">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          loading='lazy'
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 object-top"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          {/* Category Icon */}
          <div className="mb-4 opacity-90">
            <Users className="w-8 h-8" />
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
            {title}
          </h3>
          
          {/* View More Button */}
          <div className="flex items-center gap-2 text-sm font-medium text-white/80 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            View Artists
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-colors duration-300" />
    </div>
  );
}