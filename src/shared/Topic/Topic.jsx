import styled from "styled-components";

const StyledTopic = styled.h2`
    color: ${({color}) => color ? color : "#00B884"};
    font-weight: ${({weight}) => weight};
    line-height: ${({lineh}) => lineh};
    font-size: ${({size}) => size};
    margin: 10px 0;
`

const Topic = ({color, weight, size, lineh, children, ... props}) => {
    return ( 
        <StyledTopic color={color} weight={weight} size={size} lineh={lineh} {...props}>{children}</StyledTopic>
    );
}
 
export default Topic;