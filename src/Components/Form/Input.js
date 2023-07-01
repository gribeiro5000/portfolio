import Style from './Input.module.css'

function Input({text, placeholder, name, value, handleOnChange, type}) {
    return (
        <>
            <div className={Style.FormControl}>
                <label htmlFor={name}>
                    <input 
                        placeholder={placeholder}
                        name={name}
                        id={name}
                        type={type}
                        value={value}
                        onChange={handleOnChange}
                    />
                    <span>{text}</span>
                </label>
            </div>
        </>
    )
}

export default Input