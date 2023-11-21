import styled from "styled-components";

export const StyledFooter = styled.footer`
    .container {
      width: 100%;
      background-color: #DEDCD3;
      height: 398px;
      display: flex;
    }
  
  .section-footer1, .section-footer2 {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .content-footer1  {
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  .content-footer1 a {
    text-decoration: underline;
  }

  .content-footer2 {
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
  
  .content1, .content2 {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-content: center;
    justify-content: center;
    gap: 24px;
    text-align: center;
  }

  .content1, .content2 a {
    text-decoration: underline;
  }

`