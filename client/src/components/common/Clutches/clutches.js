import React, { useState } from 'react';

const Clutches= () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const products = [
    { id: 1, src: 'https://leadwalkshop.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-07-at-4.57.54-PM.jpeg', name: 'NOORAH PURSE', price: '$300' },
    { id: 2, src: 'https://leadwalkshop.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-07-at-4.57.35-PM.jpeg', name: 'ZIMAL CLUTCH', price: '$400' },
    { id: 3, src: 'https://leadwalkshop.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-07-at-4.57.45-PM.jpeg', name: 'ZARQON BATWA', price: '$200' },
    { id: 4, src: 'https://leadwalkshop.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-07-at-4.57.57-PM-1.jpeg', name: 'SHEHNAI BATWA', price: '$250' },
    { id: 5, src: 'https://leadwalkshop.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-11-at-7.44.59-PM.jpeg', name: 'MEHER CALLIGRAPHIC POTLI', price: '$300' },
    { id: 6, src: 'https://leadwalkshop.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-06-at-2.59.02-AM.jpeg', name: 'CALLIGRAPHIC POTLI', price: '$350' },
    { id: 7, src: 'https://leadwalkshop.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-10-at-3.33.17-AM.jpeg', name: 'CRIMSON ROSETTES POTLI', price: '$225.00' }
  ];

  const handleImageClick = (index) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  return (
    <div style={{ textAlign: 'center'}}>
      <h1 style={{ marginBottom: '40px', marginTop: '20px',fontSize:'35px',color:'grey' }}>POTLIS</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              width: 'calc(25% - 20px)', // Set the width to 25% of the viewport width, with margin
              margin: '10px', // Margin between images
              position: 'relative',
              textAlign: 'center',
              transition: 'transform 0.3s ease-in-out', // Add transition effect
              transform: selectedImage === index ? 'scale(1.1)' : 'scale(1)', // Scale the selected image slightly when hovered
            }}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={product.src}
              alt={`Product ${product.id}`}
              style={{
                width: '100%', // Make the image fill the container width
                height: 'auto', // Maintain aspect ratio
                cursor: 'pointer',
                borderRadius: '10px', // Add some border radius
              }}
            />
            <div style={{ position: 'absolute', bottom: '60px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button style={{ backgroundColor: 'black', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clutches;

