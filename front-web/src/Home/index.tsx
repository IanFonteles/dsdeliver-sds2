import './styles.css';
import {ReactComponent as MainImage} from './main.svg';
function Home(){
    return (
        <div className = "home-container">
            <div className = "home-content">
                <div className = "home-action">
                    <h1 className = "home-title">
                        Faça seu pedido<br></br> que entregamos<br></br> pra você!!!
                    </h1>
                    <h3>Escolha o seu pedido e em poucos minutos<br></br> levaremoss na sua porta</h3>
                    <a href = "orders" className = "home-btn-order">
                        Fazer Pedido
                    </a>
                </div>
                <div className = "home-image">
                    <MainImage></MainImage>

                </div>
            </div>

        </div>
    );
}

export default Home;