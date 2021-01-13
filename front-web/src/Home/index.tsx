import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-action">
                        <h1 className="home-title">
                            Faça seu pedido<br></br> que entregamos<br></br> pra você!!!
                    </h1>
                        <h3>Escolha o seu pedido e em poucos minutos<br></br> levaremos na sua porta</h3>
                        <Link to="/orders" className="home-btn-order">
                            Fazer Pedido
                    </Link>
                    </div>
                    <div className="home-image">
                        <MainImage></MainImage>

                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
}

export default Home;