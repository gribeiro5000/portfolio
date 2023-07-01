import Style from './Projects.module.css'

import project from '../../Img/erica-nascimento-3 (2).jpg'

function Projects() {
    return (
        <>
            <div className={Style.Container}>
                <div className={Style.Card}>
                    <div className={Style.Info}>
                        <h2>Nome do Projeto</h2>
                        <div className={Style.Linguagem}>
                            <p className={Style.Item}>React.js</p>
                            <p className={Style.Item}>Node.js</p>
                            <p className={Style.Item}>MongoDB</p>
                        </div>
                        <a href='https://www.google.com.br/'>Ver Projeto</a>
                    </div>
                    <div className={Style.Image}>
                        <img src={project}/>
                    </div>
                </div>
                <div className={Style.Card}>
                    <div className={Style.Info}>
                        <h2>Nome do Projeto</h2>
                        <div className={Style.Linguagem}>
                            <p className={Style.Item}>React.js</p>
                            <p className={Style.Item}>Node.js</p>
                            <p className={Style.Item}>MongoDB</p>
                        </div>
                        <a href='https://www.google.com.br/'>Ver Projeto</a>
                    </div>
                    <div className={Style.Image}>
                        <img src={project}/>
                    </div>
                </div>
                <div className={Style.Card}>
                    <div className={Style.Info}>
                        <h2>Nome do Projeto</h2>
                        <div className={Style.Linguagem}>
                            <p className={Style.Item}>React.js</p>
                            <p className={Style.Item}>Node.js</p>
                            <p className={Style.Item}>MongoDB</p>
                        </div>
                        <a href='https://www.google.com.br/'>Ver Projeto</a>
                    </div>
                    <div className={Style.Image}>
                        <img src={project}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects