import { useState } from "react"
import emailjs from '@emailjs/browser'

import Input from "../Form/Input.js"
import Textarea from "../Form/Textarea.js"
import SubmitButton from "../Form/SubmitButton.js"
import Message from "../Form/Message.js"

import Style from "./Contact.module.css"

function Contact() {
    const [user, setUser] = useState([])
    const [message, setMessage] = useState('')

    function handleChange(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function submit(e) {
        e.preventDefault()
        if(user.name == "" || user.email == "" || user.message == ""){
            alert('Digite todos os campos')
            return
        }

        const templateParams = {
            from_name: user.name,
            message: user.message,
            email: user.email
        }

        emailjs.send("service_t440gjt", "template_sktirgn", templateParams, "ibXk0rMtBJKgdGYlk")
        .then(response => {
            console.log("E-mail enviado", response.status, response.text)
            setUser({user: []})
            setMessage("Mensagem enviada com Sucesso!")
        }, (err) => {
            console.log('Erro: ', err)
        })
    }

    return (
        <>
            <div>
                <form onSubmit={submit}>
                    {message && <Message msg={message} type="Success"/>}
                    <Input 
                        text='Nome'
                        name='name'
                        placeholder='Digite seu Nome'
                        type='text'
                        handleOnChange={handleChange}
                        value={user.name ? user.name: ""}
                    />
                    <Input 
                        text='E-mail'
                        name='email'
                        placeholder='Digite seu E-mail'
                        type='email'
                        handleOnChange={handleChange}
                        value={user.email ? user.email: ""}
                    />
                    <Textarea 
                        text='Texto'
                        name='message'
                        placeholder='Digite sua Mensagem'
                        type='text'
                        handleOnChange={handleChange}
                        value={user.message ? user.message: ""}
                    />
                    <SubmitButton 
                        text='Enviar'
                    />
                </form>
            </div>
        </>
    )
}

export default Contact