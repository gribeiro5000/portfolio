import { useEffect, useState } from 'react'
import Style from './Message.module.css'

function Message({msg, type}) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(msg) {
            setVisible(true)
        } else {
            setVisible(false)
            return
        }

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <>
            {visible && (
                <div className={`${Style.Message} ${Style[type]}`}>{msg}</div>
            )}
        </>
    )
}

export default Message