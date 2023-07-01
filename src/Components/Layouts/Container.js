import Style from './Container.module.css'

function Container(props) {
    return (
        <div className={Style.Container}>
            <div className={Style.SubContainer}>
                {props.children}
            </div>
        </div>
    )
}

export default Container