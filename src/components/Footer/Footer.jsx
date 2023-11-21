import {StyledFooter} from './StyledFooter.jsx'
import LogoPreto from "../../shared/Logo/Logo-preto.jsx";
import { BsArrowUpRight } from "react-icons/bs";
 const Footer = () => {
    return (
        <>
            <StyledFooter>
                <footer className="container">
                    <section className="section-footer1">
                        <div className="content-footer1">
                            <LogoPreto/>
                            <h4>Gulliver Traveler · Venda de passagens aéreas</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Sapien aliquam amet dignissim feugiat eget in. Iaculis quam facilisi amet viverra consectetur hac ullamcorper. Libero blandit turpis maecenas sem pulvinar dictumst mauris sit est. Eu ultricies sed lobortis donec aliquam natoque netus amet elementum.</p>
                            <p>© Gulliver Traveler LTDA 2023</p>
                            <a>Termos & Privacidade</a>
                        </div>

                    </section>

                    <section className="section-footer2">
                        <div className="content-footer2">

                            <div className="content1">
                                <h3>Links úteis</h3>
                                <a>Sobre nós <BsArrowUpRight /></a>
                                <a>Blog <BsArrowUpRight /></a>
                                <a>Termos de uso <BsArrowUpRight /></a>
                                <a>Política de Privacidade <BsArrowUpRight /></a>
                            </div>

                            <div className="content2">
                                <h3>Lorem Ipsum</h3>
                                <a>Lorem Ipsum <BsArrowUpRight /></a>
                                <a>Lorem Ipsum <BsArrowUpRight /></a>
                                <a>Lorem Ipsum <BsArrowUpRight /></a>
                                <a>Lorem Ipsum <BsArrowUpRight /></a>
                            </div>

                        </div>

                    </section>
                </footer>
            </StyledFooter>
        </>
    )
}

export default Footer;