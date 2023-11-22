import styled from "styled-components";
import Tag from "../Tag/Tag";
import { Flex } from "reflexbox";
import Topic from "../Topic/Topic";

const StyledCardFlex = styled(Flex)`
    background-image: url(${({imageUrl}) => imageUrl});
    overflow: hidden;
    border-radius: 12px;
    color: #FFFFFF;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
}
`
const StyledInfoFlex = styled(Flex)`
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
`

const Card = ({active, cityName, cityRegion, minimumCost, imageUrl}) => {
    return (  
        <>
            <StyledCardFlex flexDirection={"column"} justifyContent={"space-between"} height={"500px"} imageUrl={imageUrl}>
                <Flex p={"16px 24px"}>
                    <Tag active={active}>Disponivel</Tag>
                </Flex>
                <StyledInfoFlex justifyContent={"space-between"} alignItems={"center"} padding={"16px 24px"}>
                    <Flex flexDirection={"column"}>
                        <Topic color="#4CFFCD" weight="400" size="12px" lineh="15px">{cityRegion}</Topic>
                        <Topic color="#FFFFFF" weight="700" size="16px" lineh="19px">{cityName}</Topic>
                    </Flex>
                    <Flex flexDirection={"column"} alignItems={"flex-end"}>
                        <Topic color="#4CFFCD" weight="400" size="12px" lineh="15px">Custo mínimo</Topic>
                        <Topic color="#FFFFFF" weight="400" size="16px" lineh="19px">{minimumCost}</Topic>                        
                    </Flex>
                </StyledInfoFlex>
            </StyledCardFlex>
        </>
    );
}
 
export default Card;