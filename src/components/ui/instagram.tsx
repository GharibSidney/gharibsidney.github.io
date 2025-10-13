'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export function InstagramEmbed() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div className="flex justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-[300px] h-[200px] overflow-hidden rounded-lg hover:opacity-90 transition-opacity group"
        >
          <div className="relative w-full h-full">
            <iframe
              src="https://www.instagram.com/reel/DN1QUPxZIZn/embed"
              width="300"
              height="400"
              style={{ border: 0, marginTop: '-40px', pointerEvents: 'none' }}
              allow="encrypted-media"
              className="absolute"
            />
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
              Click to view
            </span>
          </div>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative bg-white rounded-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <iframe
              src="https://www.instagram.com/reel/DN1QUPxZIZn/embed"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allow="encrypted-media"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}