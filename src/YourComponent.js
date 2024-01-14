import React, { useState, useEffect } from "react";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";

const imageList = [
  { src: 'http://png.findicons.com/files/icons/2689/kitchen/128/4.png', value: '4.jpg' },
  { src: 'http://png.findicons.com/files/icons/2142/webset/48/google.png', value: 'google.jpg' },
  { src: 'http://im1.book.com.tw/image/getImage?i=http://www.books.com.tw/img/001/058/06/0010580607.jpg&w=348&h=348', value: '5.jpg' },
  { src: 'http://im1.book.com.tw/image/getImage?i=http://www.books.com.tw/img/001/061/38/0010613865.jpg&w=348&h=348', value: '6.jpg' },
  { src: 'http://media-cache-ec0.pinimg.com/originals/3c/3d/47/3c3d4740527f0c341dbf336b7b763479.jpg', value: 'aom.jpg' },
  { src: 'http://media-cache-ak0.pinimg.com/736x/ea/84/02/ea8402384ac6dc1cd77dd89793902eb2.jpg', value: 'aom2.jpg' },
  { src: 'http://media-cache-ak0.pinimg.com/736x/9e/ff/56/9eff5665d5706d2f31a599f21e4791e6.jpg', value: 'aom3.jpg' },
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
