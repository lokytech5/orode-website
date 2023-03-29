import React, { useState } from 'react'
import { Text, Button } from '@chakra-ui/react';
import GalleryGird from '../components/gallery/GalleryGird'
import GalleryList from '../components/gallery/GalleryList'

export default function GalleryPage() {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder)
  }
  return (
    <div>
      <Text fontSize="4xl" textAlign="center" fontWeight="bold" mb={6}>
        Image Gallery
      </Text>
      {!selectedFolder && <GalleryList
        onFolderClick={handleFolderClick}
      />}

      {selectedFolder && (<>
        <Button
          onClick={() => setSelectedFolder(null)}
          variant="outline"
          colorScheme="blue"
          mb={4}
        >
          Back to Albums
        </Button>
        <GalleryGird folder={selectedFolder} />
      </>)}

    </div>
  )
}
