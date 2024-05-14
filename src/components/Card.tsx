import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

type CardProps = {
    title: string;
    subtitle?: string;
    description: string;
    image?: string;
    className?: string;
    classContent?: string;
}

export default function Card({ title, subtitle, description, image, className, classContent }: CardProps) {
    return (
        <IonCard className={className}>
                {image != null ? <img alt={title} src={image} className='' /> : null}
            <IonCardContent className={classContent}>
                <IonCardHeader className='p-0 text-start'>
                    <IonCardTitle className='p-1'>{title}</IonCardTitle>
                    <IonCardSubtitle>{subtitle}</IonCardSubtitle>
                </IonCardHeader>
                <div className='text-start w-full'>
                    {description}
                </div>
            </IonCardContent>
        </IonCard>
    )
}
