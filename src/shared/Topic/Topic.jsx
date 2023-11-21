import styled from "styled-components";

const StyledTopic = styled.h2`
    color: ${({color}) => color ? color : "#00B884"};
    font-weight: ${({weight}) => weight};
    line-height: ${({lineh}) => lineh};
    font-size: ${({size}) => size};
`

const Topic = ({color, weight, size, lineh, children}) => {
    return ( 
        <StyledTopic color={color} weight={weight} size={size} lineh={lineh}>{children}</StyledTopic>
    );
}
 
export default Topic;