import React from 'react';

const Leadabout = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
       
            <h1 style={{ textAlign: 'center',fontSize:'50px' }}>LEAD WALK</h1>
            <div style={{ textAlign: 'center', marginBottom: '20px',paddingTop:'20px' }}>
                <p><i>"A blend of intricate craftsmanship & traditional heritage."</i></p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '100%',height:'400px', marginBot5om: '20px',backgroundColor:'black',color:'white',padding:'90px'}}>
                <h1 style={{ textAlign: 'center',fontSize:'30px' }}>ABOUT US</h1>
                    <p>Hand crafted with intricacies & absolute perfection; our crafters put their efforts to create the comfort & fashion wear for your everyday & festive occasions. Stepped into the market in 2020, we at lead walk make sure to bring the luxury under affordable purchasing bracket. With soles made of cushion & leather along with embellished details of our exclusive potlis; Lead Walk joins hand with cultural crafting. We love to communicate our brand mantra with our brand feel; our key branding revolves around
INNOVATE, CREATE & DELIVER. .</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <img style={{ width: '30%', height: 'auto', margin: '5px' }} src="https://leadwalkshop.com/wp-content/uploads/2022/08/l-1.jpg" alt="Image 1" />
                    <img style={{ width: '30%', height: 'auto', margin: '5px' }} src="https://leadwalkshop.com/wp-content/uploads/2022/08/IMG_6127.jpg" alt="Image 2" />
                    <img style={{ width: '30%', height: 'auto', margin: '5px' }} src="https://leadwalkshop.com/wp-content/uploads/2022/08/karachi-pakistan-september-group-four-men-sit-around-several-colors-paint-working-designs-hand-made-khussa-141617339.jpg" alt="Image 3" />
                </div>
            </div>
        </div>
    );
}

export default Leadabout;

