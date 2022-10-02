import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  margin-top: 15px;
  margin-left: 16px;

  @media (min-width: 1024px) {
    overflow-x: initial;
    flex-wrap: wrap;
    width: 100%;
    max-width: 810px;
  }
`;
