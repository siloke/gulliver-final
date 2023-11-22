import { useState } from "react";
import { Box, Flex } from "reflexbox";
import { FlexGap } from "../../shared/FlexGap/FlexGap";
import styled from "styled-components";
import Topic from "../../shared/Topic/Topic";
import FilterButton from "../../shared/FilterButton/FilterButton";
import Card from "../../shared/Card/Card";
import cityListData from "../../data/destinos";
import listaRegioes from "../../data/listaRegioes";

const StyledDestinosSection = styled.section`
    width: 100%;
    height: 100vh;
`

const StyledGrid = styled.div`
    margin: 20px 0;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 920px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 620px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Destinos = () => {

    const [regioes, setRegioes] = useState(listaRegioes)
    const [cityList, setCityList] = useState(cityListData)

    const filterByRegion = (regiao) => {
        if (regiao === "Todos") {
            setCityList(cityListData);
        }
        else {
            const listaFiltrada = cityListData.filter((city) => city.cityRegion === regiao);
            setCityList(listaFiltrada);
        }
    }

    return ( 
        <>
            <Box margin={"40px auto"} width={1} maxWidth={"1348px"}>
                <Flex justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
                    <Box >
                        <Topic size="18px" weight="500" lineh="24px">Em alta</Topic>
                        <Topic size="32px" weight="700" lineh="40px" color="#030E0A">Principais Destinos</Topic>
                    </Box>
                    <FlexGap justifyContent={"space-between"} gap="8px">
                        {
                            regioes.map((item) =>
                                <FilterButton
                                onClick={() => filterByRegion(item.regiao)}
                                active={item.isActive}
                                key={item.regiao}
                                >
                                {item.regiao}
                                </FilterButton>)
                        }
                    </FlexGap>
                </Flex>
                <StyledGrid>
                        {
                            cityList.map((city) => 
                            <Card 
                            key={city.id}
                            imageUrl={city.imageURL}
                            active={city.availability}
                            cityName={city.cityName}
                            cityRegion={city.cityRegion}
                            minimumCost={city.minimumCost}
                            >
                            {city.availability}
                            </Card>)
                        }
                </StyledGrid>
            </Box>
        </>
    );
}
 
export default Destinos;