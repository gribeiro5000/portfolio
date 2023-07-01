import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

import Style from './Info.module.css'

function Info() {
    return (
        <>
            <div className={Style.Info}>
                <ul className={Style.List}>
                    <a href='https://www.linkedin.com/in/gabriel-ribeiro-a858491b3/' target='_blank'>
                        <li>
                            <AiFillLinkedin/>
                        </li>
                    </a>
                    <a href='https://github.com/gribeiro5000' target='_blank'>
                        <li>
                            <AiFillGithub />
                        </li>
                    </a>
                </ul>
            </div>
        </>
    )
}

export default Info