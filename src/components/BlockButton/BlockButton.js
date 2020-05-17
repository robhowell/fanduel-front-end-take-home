import styled from "styled-components";

const BlockButton = styled.button`
  align-items: center;
  background-color: hsl(201, 85%, 98%);
  border-radius: 5px;
  border: 3px solid hsl(201, 85%, 90%);
  color: hsl(201, 85%, 30%);
  display: flex;
  font-size: 1.2rem;
  font-family: system-ui, "Segoe UI", "Roboto", sans-serif;
  letter-spacing: 2px;
  justify-content: center;
  margin: 0 auto;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: all 75ms ease-in-out;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 300px;
  }

  &:hover {
    @media (hover: hover) {
      border-color: hsl(201, 85%, 60%);
      cursor: pointer;
    }
  }
`;

export default BlockButton;
