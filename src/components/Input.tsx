import { IonInput } from '@ionic/react'
import React from 'react'

type InputProps = {
    type: "password" | "text" | "number" | "email" | "search",
    placeholder?: string,
    label?: string,
    labelPlacement?: "stacked" | "floating" | "fixed" | "start" | "end",
    className?: string,
    children?: any
}


export default function Input({ type, placeholder, label,labelPlacement, className, children }: InputProps) {
    return (
        <IonInput 
        label={label}
        type={type}
        labelPlacement={labelPlacement}
        placeholder={placeholder}
        className={className}
        clearInput={true}
        >
            {children}
        </IonInput>
    )
}
