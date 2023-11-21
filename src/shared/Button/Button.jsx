import styled from "styled-components";

const StyledButton = styled.button`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #F9F9F9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 32px 15px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    transition: 0.3s;
    border: none;

    &:hover {
        cursor: pointer;
    }
`

const Button = ({children}) => {
    return ( 
        <>
            <StyledButton>{children}</StyledButton>
        </>
    );
}
 
export default Button;