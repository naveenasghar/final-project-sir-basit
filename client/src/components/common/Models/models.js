import React, { useState } from 'react';

const Models = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images] = useState([
    { id: 1, src: 'https://leadwalkshop.com/wp-content/uploads/2022/08/Leadwalk-Stars-3-1.jpeg', isLarge: true },
    { id: 2, src: 'https://leadwalkshop.com/wp-content/uploads/2022/08/Leadwalk-Stars-10.jpeg', isLarge: false },
    { id: 3, src: 'https://leadwalkshop.com/wp-content/uploads/2022/08/Leadwalk-Stars-5.jpeg', isLarge: false },
    { id: 4, src: 'https://leadwalkshop.com/wp-content/uploads/2022/08/Leadwalk-Stars-8.jpeg', isLarge: false },
    { id: 5, src: 'https://leadwalkshop.com/wp-content/uploads/2022/08/Leadwalk-Stars-4.jpeg', isLarge: false }
  ]);

  const handleClick = (index) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'cursive' }}>
      <h1 style={{ marginBottom: '40px', marginTop: '20px' }}>Bridal Gallery</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {images.slice(0, 2).map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Bride ${image.id}`}
            style={{
              width: '45%',
              margin: '0 5px',
              cursor: 'pointer',
              maxHeight: selectedImage === image.id ? '40vh' : 'auto',
            }}
            onClick={() => handleClick(image.id)}
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {images.slice(2).map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Bride ${image.id}`}
            style={{
              width: '30%',
              margin: '10px',
              cursor: 'pointer',
              maxHeight: selectedImage === image.id ? '40vh' : 'auto',
            }}
            onClick={() => handleClick(image.id)}
          />
        ))}
      </div>
      {selectedImage !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '60%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 999,
          }}
          onClick={handleClose}
        />
      )}
    </div>
  );
};

export default Models;
