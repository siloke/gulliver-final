import styled from "styled-components";
import Button from "../../shared/Button/Button";
import Logo from "../../shared/Logo/Logo";
import { Flex, Box } from "reflexbox";
import { FlexGap } from "../../shared/FlexGap/FlexGap";
import Scroll from "../../shared/Scroll/Scroll";

const StyledHeroSection = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${({imgUrl}) => imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
`

const StyledH1 = styled.h1`
    font-weight: 700;
    font-size: 50px;
    line-height: 77px;
    text-align: center;
    color: #FFFFFF
`

const StyledSubtitle = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.7;
`

const Hero = ({city, imgUrl}) => {

    return ( 
        <StyledHeroSection imgUrl={imgUrl}>
            <Box margin={"0 auto"} width={1} maxWidth={"1348px"}>
                <Flex justifyContent={"space-between"} flexDirection={"column"} minHeight={"100vh"}>
                    <Flex justifyContent={"space-between"} px={20} alignItems={"center"} mt={"12px"} flexWrap={'wrap'}>
                        <Logo />
                        <a href="#destinos"><Button>{city ? "Ver hospedagens" : "Ver destinos"}</Button></a>
                    </Flex>
                    <FlexGap maxWidth={"600px"} flexDirection={"column"} alignItems={"center"} margin={"0 auto"} gap={"50px"}>
                        <Box>
                            {
                                city ?
                                <>
                                    <StyledH1>{city.cityName}</StyledH1>
                                    <StyledSubtitle>{city.description}</StyledSubtitle>
                                </>
                                :
                                <>
                                    <StyledH1>Salve suas férias com o Gulliver!</StyledH1>
                                    <StyledSubtitle>Pensamos em tudo para você, desde passagens aéreas até hospedagem e guia turístico no seu destino preferido</StyledSubtitle>                    
                                </>
                            }
                        </Box>
                        <a href="#destinos"><Button>{city ? "Ver hospedagens" : "Ver destinos"}</Button></a>
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