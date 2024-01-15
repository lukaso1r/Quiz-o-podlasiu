import React, { useState, useEffect } from "react";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";

const imageList = [
  { src: 'http://localhost:3000/img/postacie/groupbober.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupbober.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupbober.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupbober.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupbober.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupbober.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupbober.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupbober.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupbober.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupbober.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupbober.svg', value: 'groupbober.svg' },
];

function YourComponent() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (selected) => {
    setSelectedImages(selected);
  };

  useEffect(() => {
    // Do something with selectedImages
    console.log(selectedImages);
  }, [selectedImages]);

  return (
    <ImagePicker 
      images={imageList.map((image, index) => ({ src: image.src, value: index }))}
      onPick={handleImageSelect}
    />
  );
}

export default YourComponent;
