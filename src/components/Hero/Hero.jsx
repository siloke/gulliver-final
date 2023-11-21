import styled from "styled-components";
import Button from "../../shared/Button/Button";
import Logo from "../../shared/Logo/Logo";
import { Flex, Box } from "reflexbox";
import { FlexGap } from "../../shared/FlexGap/FlexGap";
import Scroll from "../../shared/Scroll/Scroll";

const StyledHeroSection = styled.section`
    background-image: url(./heroHomeBg.png);
    height: 100vh;
`

const StyledH1 = styled.h1`
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    text-align: center;
    color: #FFFFFF
`

const StyledSubtitle = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.7;
`

const Hero = () => {
    return ( 
        <StyledHeroSection>
            <Box margin={"0 auto"} width={1} maxWidth={"1348px"}>
                <Flex justifyContent={"space-between"} flexDirection={"column"} height={"100vh"}>
                    <Flex justifyContent={"space-between"} alignItems={"center"} mt={"12px"}>
                        <Logo />
                        <Button>Ver destinos</Button>
                    </Flex>
                    <FlexGap maxWidth={"600px"} flexDirection={"column"} alignItems={"center"} margin={"0 auto"} gap={"50px"}>
                        <Box>
                            <StyledH1>Salve suas férias com o Gulliver!</StyledH1>
                            <StyledSubtitle>Pensamos em tudo para você, desde passagens aéreas até hospedagem e guia turístico no seu destino preferido</StyledSubtitle>
                        </Box>
                        <a href="#"><Button>Ver destinos</Button></a>
                    </FlexGap>
                    <Flex justifyContent={"center"}> 
                        <Scroll />
                    </Flex>
                </Flex>
            </Box>
        </StyledHeroSection>
    );
}
 
export default Hero;