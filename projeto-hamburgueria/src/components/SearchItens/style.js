import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  padding: 5px 10px;
  border: 2px solid var(--grey-20);
  background-color: white;
  border-radius: 8px;
  justify-content: space-between;

  input {
    width: 100%;
    border: none;
  }

  input:focus {
    outline: none;
  }

  button {
    padding: 8px 10px;
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

  @media (min-width: 1024px) {
    width: 350px;
  }
`;
