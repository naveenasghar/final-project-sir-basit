import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { src: '	https://leadwalkshop.com/wp-content/uploads/2022/08/DSC04207-scaled.jpg', caption: 'JUTTIES' },
    { src: 'https://leadwalkshop.com/wp-content/uploads/2022/08/potlis.jpg', caption: 'POTLIS' },
    { src: 'https://leadwalkshop.com/wp-content/uploads/2022/08/Duo2-scaled.jpg', caption: 'DOUS' },
    { src: 'https://leadwalkshop.com/wp-content/uploads/2023/06/riya.jpeg', caption: 'KOHLAS' }
  ];

  const handleImageClick = (index) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'cursive' }}>
      <h1 style={{ marginBottom: '80px', marginTop: '40px' }}> Explore Lead Walk</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: selectedImage === index ? '500px' : '400px', // Set the width of each image container
              height: selectedImage === index ? '500px' : '400px', // Set the height of each image container
              margin: '10px', // Margin between images
              position: 'relative',
              cursor: 'pointer',
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.3s ease-in-out', // Add transition effect
              transform: selectedImage === index ? 'scale(1.1) translateY(-10px)' : 'scale(1)', // Scale and move the selected image slightly upward
            }}
            onClick={() => handleImageClick(index)}
          >
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', fontSize: selectedImage === index ? '24px' : '16px' }}>
              {image.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;











