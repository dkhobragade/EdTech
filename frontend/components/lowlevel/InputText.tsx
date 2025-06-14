import React from 'react'


interface InputProps
{
    type: 'text' | 'number' | 'email' | 'password'
    placeholder?: string
    title: string
}

const InputText = ( props: InputProps ) =>
{
    return (
        <div>
            <div>
                { props.title }
            </div>
            <input className='w-full p-2 border-b-2 border-t-2 rounded-2xl' autoComplete='new-password' type={ props.type } placeholder={ props.placeholder } />
        </div>
    )
}

export default InputText