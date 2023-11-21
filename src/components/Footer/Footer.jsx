// import {StyledFooter} from './StyledFooter.jsx'
import styled from "styled-components";
import { BsArrowUpRight } from "react-icons/bs";
import { Flex, Box } from "reflexbox";
import { FlexGap } from "../../shared/FlexGap/FlexGap.jsx";
import LogoPreto from "../../shared/LogoPreto/LogoPreto.jsx";


const StyledFooter = styled.footer`
    background-color: #DEDCD3;
`

 const Footer = () => {
    return (
        <>
            <StyledFooter>
                <Box margin={"0 auto"} width={1} maxWidth={"1348px"} padding={"50px 0"}>
                    <Flex justifyContent={"space-between"}>
                        <FlexGap maxWidth={"40%"} flexDirection={"column"} gap="20px">
                            <LogoPreto/>
                            <h4>Gulliver Traveler · Venda de passagens aéreas</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Sapien aliquam amet dignissim feugiat eget in. Iaculis quam facilisi amet viverra consectetur hac ullamcorper. Libero blandit turpis maecenas sem pulvinar dictumst mauris sit est. Eu ultricies sed lobortis donec aliquam natoque netus amet elementum.</p>
                            <p>© Gulliver Traveler LTDA 2023</p>
                            <a>Termos & Privacidade</a>
                        </FlexGap>

                        <Flex maxWidth={"35%"} alignItems={"center"}>
                            <FlexGap gap="20px">
                                <FlexGap flexDirection={"column"} gap="6px">
                                    <h3>Links úteis</h3>
                                    <a>Sobre nós <BsArrowUpRight /></a>
                                    <a>Blog <BsArrowUpRight /></a>
                                    <a>Termos de uso <BsArrowUpRight /></a>
                                    <a>Política de Privacidade <BsArrowUpRight /></a>
                                </FlexGap>
                                <FlexGap flexDirection={"column"} gap="6px">
                                    <h3>Lorem Ipsum</h3>
                                    <a>Lorem Ipsum <BsArrowUpRight /></a>
                                    <a>Lorem Ipsum <BsArrowUpRight /></a>
                                    <a>Lorem Ipsum <BsArrowUpRight /></a>
                                    <a>Lorem Ipsum <BsArrowUpRight /></a>
                                </FlexGap>
                            </FlexGap>
                        </Flex>
                    </Flex>
                </Box>
            </StyledFooter>
        </>
    )
}

export default Footer;