import styled from 'styled-components';

export const MainHeader = styled.header`
  height: 60vh;
  width: 100vw;
  background: url('https://leadwalkshop.com/wp-content/uploads/2022/12/banner2.png') no-repeat center center;
  background-size: cover;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  position: relative;
  overflow: hidden;
  filter: brightness(90%); /* Adjust brightness as needed */
`;

export const ShoeOverlay = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 40%;
  height: 60%;
  background: rgba(255, 0, 0, 0.5); /* Adjust color and opacity as needed */
  transform: translate(-50%, -50%);
  mix-blend-mode: color;
  z-index: 1;
`;

// You can adjust the styles of ShoeOverlay to fit the shoe section in the background image.



