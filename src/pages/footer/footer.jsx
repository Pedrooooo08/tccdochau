import React from 'react';
import '../footer/footer.scss'

const footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Sobre Nós</h3>
                        <p>Delícias feitas com amor e ingredientes de qualidade. Venha nos visitar!</p>
                    </div>
                    <div className="footer-section">
                        <h3>Contato</h3>
                        <p>Email: sabores_darua@gmail.com</p>
                        <p>Telefone: (11) 1234-5678</p>
                    </div>
                    <div className="footer-section">
                        <h3>Redes Sociais</h3>
                        <ul className="social-links">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Sabores da Rua. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default footer;