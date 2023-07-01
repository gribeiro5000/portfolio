import Style from './BodyContainer.module.css'

function BodyContainer(props) {
    return (
        <>
            <div className={Style.BodyContainer}>
                {props.children}
            </div>
        </>
    )
}

export default BodyContainer