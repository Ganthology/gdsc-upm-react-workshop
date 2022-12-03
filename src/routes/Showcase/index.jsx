import React from "react"
import axios from "axios"
import { useState } from "react"
import { Dialog } from "@headlessui/react"

const Showcase = () => {
  const [photos, setPhotos] = useState([])

  const [isOpen, setIsOpen] = useState(true)

  const [selectedPhoto, setSelectedPhoto] = useState("")

  axios
    .get("https://jsonplaceholder.typicode.com/photos/")
    .then((res) => setPhotos(res.data))

  return (
    <>
      <div className='px-3 py-3'>
        <div className='grid grid-cols-6 gap-y-4 gap-x-6'>
          {photos.slice(0, 20).map((photo) => (
            <>
              <div
                key={photo.id}
                className='rounded-lg bg-stone-200 overflow-hidden hover:ring-4 hover:ring-black hover:ring-offset-2'
                onClick={() => {
                  setSelectedPhoto(photo)
                  setIsOpen(true)
                }}
              >
                <img
                  src={photo.thumbnailUrl}
                  className='object-cover w-full rounded-b-lg'
                />
                <p>{photo.title}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
        <div className='fixed inset-0 flex items-center justify-center p-4'>
          <Dialog.Panel className='bg-white rounded-lg px-4 py-4 space-y-4'>
            <Dialog.Title className='text-lg font-bold'>
              Photo {selectedPhoto.id}
            </Dialog.Title>
            <Dialog.Description>{selectedPhoto.title}</Dialog.Description>

            <p className='text-blue-500 hover:text-blue-300 hover:underline'>
              {selectedPhoto.url}
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className='px-3 py-2 bg-green-300 text-white rounded-lg mr-2'
            >
              Visit
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className='px-3 py-2 bg-red-300 text-white rounded-lg'
            >
              Cancel
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default Showcase
