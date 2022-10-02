import styled from "styled-components";

export const Li = styled.li`
  border: 2px solid var(--grey-20);
  border-radius: 5px;

  min-width: 250px;
  height: 300px;

  img {
    width: 50%;
    height: 150px;
  }
`;

export const Container = styled.div`
  padding: 20px 8px 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-size: 1.1rem;
  }

  .itemCategory {
    font-size: 0.8rem;
    color: var(--grey-50);
  }

  .itemPrice {
    color: var(--primary);
    font-size: 0.9rem;
  }

  button {
    width: max-content;
    padding: 8px;
    background-color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: var(--primary-50);
    border: 1px solid var(--primary-50);
  }
`;

export const ImgContainer = styled.div`
  background-color: var(--grey-0);
  display: flex;
  justify-content: center;
`;
