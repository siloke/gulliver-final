import styled from "styled-components";
import Topic from "../../shared/Topic/Topic";
import FilterButton from "../../shared/FilterButton/FilterButton";
import { Box, Flex } from "reflexbox";
import { FlexGap } from "../../shared/FlexGap/FlexGap";
import { useState } from "react";

const StyledDestinosSection = styled.section`
    width: 100%;
    height: 100vh;
`

const listaRegioes = [
    {
        regiao: "Todos",
        isActive: true,
    },
    {
        regiao: "Norte",
        isActive: false,
    },
    {
        regiao: "Nordeste",
        isActive: false,
    },
    {
        regiao: "Sudeste",
        isActive: false,
    },
    {
        regiao: "Centro-Oeste",
        isActive: false,
    },
    {
        regiao: "Sul",
        isActive: false,
    },
]

const Destinos = () => {

    const [regioes, setRegioes] = useState(listaRegioes)

    return ( 
        <>
            {/* Eliminar padding dessa box (TEMPORARIO) */}
            <Box margin={"0 auto"} width={1} maxWidth={"1348px"} padding={"50px 0"} >
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Topic size="18px" weight="500" lineh="24px">Em alta</Topic>
                        <Topic size="32px" weight="700" lineh="40px" color="#030E0A">Principais Destinos</Topic>
                    </Box>
                    <FlexGap justifyContent={"space-between"} gap="8px">
                        {
                            regioes.map((item) => <FilterButton active={item.isActive} key={item.regiao}>{item.regiao}</FilterButton>)
                        }
                    </FlexGap>
                </Flex>
            </Box>
        </>
    );
}
 
export default Destinos;