import Style from './Textarea.module.css'

function Textarea({name, placeholder, value, text, handleOnChange}) {
    return (
        <>
            <div className={Style.FormControl}>
                <label htmlFor={name}>
                    <textarea 
                        name={name}
                        id={name}
                        placeholder={placeholder}
                        onChange={handleOnChange}
                        value={value}
                        rows='1'
                    />
                    <span>{text}</span>
                </label>
            </div>
            
        </>
    )
}

export default Textarea