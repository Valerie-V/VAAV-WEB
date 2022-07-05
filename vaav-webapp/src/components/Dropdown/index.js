import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
} from "./DropdownElements";

export function Dropdown(props) {
  return (
    <DropdownWrapper
      action={props.action}
      onChange={props.onChange}
    >
      <StyledSelect id="services" name="services" required>
        {props.children}
      </StyledSelect>
    </DropdownWrapper>
  );
}

export function Option(props) {
  return (
    <StyledOption selected={props.selected} required>
      {props.value}
    </StyledOption>
  );
}
