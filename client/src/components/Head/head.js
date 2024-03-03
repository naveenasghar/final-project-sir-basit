import React, { useState } from 'react';

const Head = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { src: 'https://leadwalkshop.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-07-at-4.58.02-PM.jpeg', caption: 'NOORAH' },
    { src: 'https://leadwalkshop.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-07-at-4.57.56-PM-1.jpeg', caption: 'SHEHNAI' },
    { src: 'https://leadwalkshop.com/wp-content/uploads/2023/06/z.jpeg', caption: 'GULALI' },
    { src: 'https://leadwalkshop.com/wp-content/uploads/2022/10/DSC04151-scaled.jpg', caption: 'CHAMAN' },
    { src: 'https://leadwalkshop.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-04-at-2.43.33-AM-3.jpeg', caption: 'SUN FLOWER' }
  ];

  const handleImageClick = (index) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'cursive' }}>
      <h1 style={{ marginBottom: '80px', marginTop: '40px',color:'grey' }}> GO FESTIVE WITH US</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: 'calc(20% - 20px)', // Set the width to 25% of the viewport width, with margin
              margin: '10px', // Margin between images
              position: 'relative',
              textAlign: 'center',
            }}
          >
            <img
              src={image.src}
              alt={image.caption}
              style={{
                width: '100%', // Make the image fill the container width
                height: 'auto', // Maintain aspect ratio
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(index)}
            />
            <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
              {image.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Head;


