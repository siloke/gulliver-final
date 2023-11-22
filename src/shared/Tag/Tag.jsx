import styled from "styled-components";

const StyledTag = styled.span`
    padding: 8px;
    background-color: ${({active}) => active ? "#00B884" : "#E54C4C"};
    border-radius: 4px;
`

const Tag = ({active}) => {

    return ( 
        <StyledTag active={active}>{active ? "Disponivel" : "Indisponivel"}</StyledTag>
    );
}
 
export default Tag;