import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function GoogleMap() {
  return (
    <>
      <APIProvider apiKey="AIzaSyABN7IX_NnN3Io35DMphYiHmHg2NsHd7zQ">
        <Map
          mapId={"fcdc1a0f0ad84c5e"}
          defaultCenter={{
            lat: 37.7749295,
            lng: -122.4194155,
          }}
          initialViewState={{
            latitude: 37.7749295,
            longitude: -122.4194155,
          }}
        >
          <AdvancedMarker position={{ lat: 37.7749295, lng: -122.4194155 }}>
            <Pin />
            <InfoWindow>
              <div>San Francisco</div>
            </InfoWindow>
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </>
  );
}
