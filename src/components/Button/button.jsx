import React from 'react'

const Button = ({ label }) => {
    return <button onClick={() => alert(`A label desse botão é ${label}`)}>Clique aqui</button> 
}

export default Button