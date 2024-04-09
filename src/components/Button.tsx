import React from 'react';
import { IonRippleEffect } from '@ionic/react';
import '../theme/main.css';

export type ButtonProps = {
    className?: string,
    onClick?: () => any,
    children: any
}

function Button({ className, onClick, children }: ButtonProps) {
    return (
        <div className="wrapper">
            <div onClick={onClick} className={`ion-activatable ripple-parent rounded-rectangle ${className}` }>
                <b>
                    {children}
                </b>
                <IonRippleEffect></IonRippleEffect>
            </div>
        </div >
    );
}
export default Button;