import { IonInput } from '@ionic/react'
import React from 'react'

type InputProps = {
    type: "password" | "text" | "number" | "email" | "search",
    placeholder?: string,
    label?: string,
    fill?:  "outline" | "solid" | undefined,
    labelPlacement?: "stacked" | "floating" | "fixed" | "start" | "end",
    className?: string,
    color?: string,
    children?: any
    callback?: (e: any) => void
}


export default function Input({ type, placeholder, label,labelPlacement, className, children,fill,color,callback }: InputProps) {
    return (
        <IonInput 
        label={label}
        color={color}
        fill={fill}
        type={type}
        labelPlacement={labelPlacement}
        placeholder={placeholder}
        className={className}
        clearInput={true}
        onIonInput={callback}
        >
            {children}
        </IonInput>
    )
}
