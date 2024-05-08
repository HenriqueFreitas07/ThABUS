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



export default function CreditCard({ name, cardNumber, expiry, cvv, focused, setFocus }: CreditCardProps) {
    return (
        <>
            <div className="card">
                <div className="card__front card__part">
                    <p className="card_numer">{cardNumber}</p>
                    <div className="flex space-x-2">

                        <div className="w-2/4">
                            <span className="card__label">Card holder</span>
                            <p className="card__info">{name}</p>
                        </div>
                        <div className=" w-1/4">
                            <span className="card__label">Expires</span>
                            <p className="card__info">{expiry}</p>
                        </div>
                        <div className="w-1/4">
                            <span className="card__label">CVV</span>
                            <p className="card__info">{cvv}</p>
                        </div>
                    </div>
                </div>

                <div className="card__back card__part">
                    <div className="card__black-line"></div>
                    <div className="card__back-content">
                        <div className="card__secret">
                            <p className="card__secret--last">420</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
