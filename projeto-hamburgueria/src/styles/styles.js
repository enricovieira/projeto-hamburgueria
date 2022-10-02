import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: var(--grey-0);

  .headerContainer {
    margin-top: 10px;
    max-width: 1300px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 150px;
  }

  @media (min-width: 1024px) {
    .headerContainer {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
`;
