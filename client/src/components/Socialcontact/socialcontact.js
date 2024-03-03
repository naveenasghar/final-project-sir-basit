import React, { useState } from 'react';

const Socialcontact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Comment:", comment);
        // You can implement further logic like sending data to server or showing a success message
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
            <div style={{ width: '45%' }}>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold' }}>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold' }}>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold' }}>Comment:</label>
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} required style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} />
                    </div>
                    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
                </form>
            </div>
            <div style={{ width: '45%' }}>
                <h2>Our Location</h2>
                <p>123 Street, City, Country</p>
                <p>Email: info@example.com</p>
                <p>Phone: +1234567890</p>
            </div>
        </div>
    );
}

export default Socialcontact;

