import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

export const StyledSelect = styled.select`
  padding: 5px 5px;
  margin-bottom: 18px;
  border: none;
  border-radius: 4px;
  
  @media screen and (max-width: 480px) {
    margin-bottom: 14px;
  }
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "#003300" : "black")};
`;
