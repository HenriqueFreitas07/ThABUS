import React from 'react'
import '../theme/CreditCard.css'

type CreditCardProps = {
    name: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
    focused?: string;
    setFocus?: (value: string) => void;
}



export default function CreditCCard({ name, cardNumber, expiry, cvv, focused, setFocus }: CreditCardProps) {
    return (
        <>
            <div className="Ccard">
                <div className="Ccard__front Ccard__part">
                    <p className="Ccard_numer">{cardNumber}</p>
                    <div className="flex space-x-2">

                        <div className="w-2/4">
                            <span className="Ccard__label">Card holder</span>
                            <p className="Ccard__info">{name}</p>
                        </div>
                        <div className=" w-1/4">
                            <span className="Ccard__label">Expires</span>
                            <p className="Ccard__info">{expiry}</p>
                        </div>
                        <div className="w-1/4">
                            <span className="Ccard__label">CVV</span>
                            <p className="Ccard__info">{cvv}</p>
                        </div>
                    </div>
                </div>

                <div className="Ccard__back card__part">
                    <div className="Ccard__black-line"></div>
                    <div className="Ccard__back-content">
                        <div className="Ccard__secret">
                            <p className="Ccard__secret--last">420</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
