import React from 'react';

const Footer = () => {
    const footerContainerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '30px 0',
    };

    const footerContentStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    };

    const footerSectionStyle = {
        flex: 1,
        margin: '0 20px',
    };

    const footerSectionHeaderStyle = {
        marginBottom: '10px',
    };

    const footerListStyle = {
        listStyle: 'none',
        padding: 0,
    };

    const footerListItemStyle = {
        marginBottom: '5px',
    };

    const footerLinkStyle = {
        color: '#fff',
        textDecoration: 'none',
    };

    const footerBottomStyle = {
        textAlign: 'center',
        paddingTop: '20px',
    };

    return (
        <footer style={footerContainerStyle}>
            <div style={footerContentStyle}>
                <div style={footerSectionStyle}>
                    <h2 style={footerSectionHeaderStyle}>About Us</h2>
                    <p>“Our highly skilled crafters know the best to execute the finesse and beauty of products that give lasting impact on the viewers and consumers; & to us this is our value proposition.”.</p>
                </div>
                <div style={footerSectionStyle}>
                    <h2 style={footerSectionHeaderStyle}>Quick Links</h2>
                    <ul style={footerListStyle}>
                        <li style={footerListItemStyle}><a href="/" style={footerLinkStyle}>Home</a></li>
                        <li style={footerListItemStyle}><a href="/potlis" style={footerLinkStyle}>potlis</a></li>
                        <li style={footerListItemStyle}><a href="/juttis" style={footerLinkStyle}>juttis</a></li>
                        <li style={footerListItemStyle}><a href="/about" style={footerLinkStyle}>about</a></li>
                        <li style={footerListItemStyle}><a href="contact" style={footerLinkStyle}>Contact</a></li>
                    </ul>
                </div>
                <div style={footerSectionStyle}>
                    <h2 style={footerSectionHeaderStyle}>Contact Us</h2>
                    <p>Askari iv Near Milinium Mall, Karachi, Pakistan</p>
                    <p>Email:leadwalk@gmail.com</p>
                    <p>Phone: +923308425173</p>
                </div>
            </div>
            <div style={footerBottomStyle}>
                <p>&copy; {new Date().getFullYear()} Lead Walk. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
