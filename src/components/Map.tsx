import { GoogleMap } from '@capacitor/google-maps';
import { useRef } from 'react';

const MyMap: React.FC = () => {
    const mapRef = useRef<HTMLElement>();
    let newMap: GoogleMap;

    async function createMap() {
        if (!mapRef.current) return;

        newMap = await GoogleMap.create({
            id: 'my-cool-map',
            element: mapRef.current,
            apiKey: process.env.VITE_GOOGLE_API_KEY as string,
            config: {
                center: {
                    lat: 33.6,
                    lng: -117.9
                },
                zoom: 8
            }
        })
    }

    return (
        <div className="component-wrapper">
            <capacitor-google-map ref={mapRef} style={{
                display: 'inline-block',
                width: 275,
                height: 400
            }}></capacitor-google-map>

            <button onClick={createMap}>Create Map</button>
        </div>
    )
}

export default MyMap;