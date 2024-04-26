import { GoogleMap } from '@capacitor/google-maps';
import { useRef } from 'react';
import { GoogleMapConfig } from '@capacitor/google-maps/dist/typings/definitions';

type MapConfig = {
    config: GoogleMapConfig;
    className?: string;
}

const MyMap = ({ config, className }: MapConfig) => {
    const mapRef = useRef<HTMLElement>();
    let newMap: GoogleMap;

    async function createMap() {
        if (!mapRef.current) return;

        newMap = await GoogleMap.create({
            id: 'my-cool-map',
            element: mapRef.current,
            apiKey: "AIzaSyABN7IX_NnN3Io35DMphYiHmHg2NsHd7zQ",
            config
        })
    }
    createMap();

    return (
        <>
            <div></div>
            <div className={`component-wrapper ${className}`}>
                <capacitor-google-map ref={mapRef} style={{
                    display: 'inline-block',
                    width: '100vw',
                    height: '100vh'
                }}></capacitor-google-map>

            </div>
        </>
    )
}

export default MyMap;