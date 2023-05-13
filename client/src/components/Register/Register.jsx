import React, {useRef} from 'react'
import io from 'socket.io-client'
import style from './Register.module.css'
import {Input, Button} from '@mui/material'

export default function Register({setChatVisibility, setSocket}) {

    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()


    const handleSubmit = async () => {
        const username = usernameRef.current.value
        if(!username.trim()) return
        const socket = await io.connect('http://localhost:3001')
        socket.emit('set_username', username)
        setSocket(socket)
        setChatVisibility(true)
    }

    return (
        <div className={style['register-container']}>
            <h2>Registro do AMICA</h2>
            <Input inputRef={usernameRef} placeholder='Nome de usuário' />
            <Input inputRef={emailRef} placeholder="E-mail" />
            <Input inputRef={passwordRef} placeholder="Senha" type="password" />
            <Button sx={{mt:2}} onClick={()=>handleSubmit()} variant="contained">Registrar</Button>
        </div>
    )
}