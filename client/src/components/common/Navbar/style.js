import styled from 'styled-components';

export const Nav = styled.div`
  background-color: black;
  color: #eee;
  padding: 10px 2px;

  & .container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .logo a {
    color: #eee;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  & ul {
    list-style: none;
    display: flex;
    gap: 10px;

    & li {
      padding: 12px 14px;
    }

    & li a {
      text-decoration: none;
      color: #eee;
      transition: all 0.2s ease-in;

      &:hover {
        background-color: #eee;
        color: #333;
      }
    }
  }
`

// export { Nav };
