import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 15px 2px 15px;
  height: 50px;

  header {
    background-color: var(--primary);
    border-radius: 5px 5px 0px 0px;
    padding: 15px;
    color: white;
  }

  header > span {
    font-size: 1.1rem;
    font-weight: 700;
  }

  ul {
    min-height: 160px;
    height: 100%;
    background-color: var(--grey-0);
    overflow-y: scroll;
  }

  ul > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  ul > div p {
    color: var(--grey-100);
    font-size: 1.1rem;
    font-weight: 700;
  }

  ul > div span {
    font-size: 0.8rem;
    color: var(--grey-50);
  }

  ul > li {
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
  }

  ul h2 {
    font-size: 1.1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
  }

  .itemCategory {
    font-size: 0.8rem;
    color: var(--grey-50);
  }

  .imgContainer {
    min-width: 60px;
    width: 60px;
    background-color: var(--grey-20);
  }

  ul > li img {
    width: 100%;
  }

  ul button {
    background-color: transparent;
    border: none;
    color: var(--grey-50);
    align-self: flex-start;
    cursor: pointer;
  }

  .cartCount {
    border-top: 2px solid var(--grey-20);
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
  }

  .cartCount > div {
    margin: 10px 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .cartCount > div > p {
    display: flex;
    justify-content: space-between;
  }

  .cartCount > div > button {
    padding: 15px;
    background-color: var(--grey-20);
    border: 1px solid var(--grey-20);
    border-radius: 8px;
    color: var(--grey-50);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }
  .cartCount > div > button:hover {
    background-color: var(--grey-50);
    color: white;
  }

  .cartCount > div > p span {
    color: var(--grey-50);
    font-weight: 600;
  }

  @media (min-width: 1024px) {
    margin: 20px 15px 0px 0px;
    width: 100%;
    max-width: 350px;

    ul > div p {
      text-align: center;
    }
  }
`;
