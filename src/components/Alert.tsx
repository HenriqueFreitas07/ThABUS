import React, { useState } from 'react';
import { IonAlert, IonButton } from '@ionic/react';
import { ButtonProps} from './Button';
import Button from './Button';
type AlertProps = {
    text: string ,
    buttonText: any ,
    header: string ,
    subheader: string ,
    className?:string,
    buttonClass?:string,
    alertChoice?:string[],
    props?:any[]

}

function Alert({buttonText,text, className,header,subheader,alertChoice=["Ok"],buttonClass,...props}: AlertProps) {
  const [isOpen,setIsOpen] = useState(false);

return (
    <>
        <Button className={buttonClass} onClick={() => { setIsOpen(true) }}>{buttonText}</Button>
        <IonAlert
            isOpen={isOpen}
            onDidDismiss={() => setIsOpen(false)}
            trigger="present-alert"
            header={header}
            subHeader={subheader}
            message={text}
            buttons={alertChoice}
        ></IonAlert>
    </>
);
}
export default Alert;