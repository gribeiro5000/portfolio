import { Link } from 'react-router-dom'

import Style from './Navbar.module.css'

function Navbar() {
    return (
        <>
            <div className={Style.Header}>
                <div className={Style.NameLogo}>
                    <Link to='/'>
                        <h1>Gabriel Ribeiro</h1>
                        <h2>Desenvolvedor fullStack</h2>
                    </Link>
                </div>
                <div className={Style.Categories}>
                    <ul className={Style.List}>
                        <li className={Style.Item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={Style.Item}>
                            <Link to="/projects">Projetos</Link>
                        </li>
                        <li className={Style.Item}>
                            <Link to="/contact">Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar