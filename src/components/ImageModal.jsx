import React from 'react'

const ImageModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative p-2 bg-gray-900 rounded-lg shadow-xl max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      >
        <button
          className="absolute top-2 right-2 text-pink-400 text-3xl font-bold leading-none hover:text-pink-900 z-10"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="p-2">
          <img
            src={imageUrl}
            alt="Full-size project view"
            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-lg shadow-pink-500/30"
          />
        </div>
      </div>
    </div>
  )
}

export default ImageModal
