import { useState } from "react";
import styled from "styled-components";

const StyledFilterButton = styled.button`
    height: 40px;
    padding: 0 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #030E0A;
    border: ${({active}) => active ? '2px solid #030E0A' : 'none'};
    border-radius: 8px;

    &:hover {
        cursor: pointer;
    }
`

const FilterButton = ({onClick, active, children}) => {

    return ( 
        <StyledFilterButton onClick={onClick} active={active} >{children}</StyledFilterButton>
    );
}
 
export default FilterButton;