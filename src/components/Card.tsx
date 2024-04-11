import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

type CardProps = {
    title: string;
    subtitle?: string;
    description: string;
    image?: string;
}

export default function Card({title, subtitle, description, image}: CardProps) {
    return (
        <IonCard>
            { image != null ? <img alt={title} src={image} />: null }
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
                <IonCardSubtitle>{subtitle}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{description}</IonCardContent>
        </IonCard>
    )
}
