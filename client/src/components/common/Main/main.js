import React, { useState } from 'react';

const Main = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { src: '	https://leadwalkshop.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-11-at-7.44.59-PM.jpeg', caption: 'CUSTOMIZE POTLIS' },
    { src: 'https://leadwalkshop.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-06-at-2.59.02-AM.jpeg', caption: 'CALLIGRAPHY POTLIS' },
    { src: 'https://leadwalkshop.com/wp-content/uploads/2023/11/plp.jpeg', caption: 'POTLIS & BATWAS' },
    { src: 'https://leadwalkshop.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-07-at-4.57.45-PM.jpeg', caption: 'TOURMALINE' }
  ];

  const handleImageClick = (index) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'cursive' }}>
      <h1 style={{ marginBottom: '80px', marginTop: '40px',fontSize:'40px',fontFamily:'inherit',color:'gray' }}> HEAD ON-TO OUR INSTA STATION TO SEE MORE!</h1>
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
      <button style={{width:'9%',borderRadius:'7%',fontSize:'15px',backgroundColor:' grey',padding:'7px',marginRight:'8px'}}>Learn More</button>
      <button style={{width:'12%',borderRadius:'7%',fontSize:'15px',backgroundColor:' pink',padding:'7px'}}>Follow Us On Instagram</button>
    </div>
    
  );
};

export default Main;
