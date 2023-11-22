import { useParams } from 'react-router';
import Hero from '../components/Hero/Hero'
import { Link } from 'react-router-dom';
import cityListData from '../data/destinos';

const Cidade = () => {

    const { id } = useParams();
    const city = cityListData.find((city) => city.id == id);

    return (  
        <>
            <Hero imgUrl={city.background} city={city}/>
            <Link to="/">Voltar</Link>
        </>
    );
}
 
export default Cidade;