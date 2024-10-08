import React from 'react';

const Logo = () => {
    const scaleFactor = 0.5;
    return (
        <div
          style={{
            transform: `scale(${scaleFactor})`, // Scale the logo content
            transformOrigin: 'center', // Ensure it scales from the top-left corner
            height: `${650 * scaleFactor}px`, // Adjust the container's height based on the scale // Ensures scaling is centered
            display: 'inline-block',    // Allows the logo to take up only necessary space
          }}
        >
          <table className="logo-table" style={{ borderSpacing: '20px 0px' }}>
            <tbody>
              <tr>
                <td style={{ textAlign: 'right', verticalAlign: 'bottom' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z" fill="#2B2B2B" />
                  </svg>
                </td>
                <td rowSpan="2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="283" height="475" viewBox="0 0 283 475" fill="none">
                    <path d="M50 475L50 245M283 50L67 50C57.6112 50 50 57.6112 50 67L50 245M50 245H248" stroke="#2B2B2B" strokeWidth="100" strokeLinejoin="round" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: '10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="303" height="363" viewBox="0 0 303 363" fill="none">
                    <path d="M252 0V190C252 190 259 313 154 313C49 313 50.5 205 50.5 205V190" stroke="#2B2B2B" stroke-width="100"/>
                </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
}

export default function Home() {
    return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center'
          }}
        >
          <Logo />
          <p style={{fontSize: '20px', color: '#2B2B2B' }}>
            This website is under construction! Come back soon :)
          </p>
        </div>
      );
  }
  