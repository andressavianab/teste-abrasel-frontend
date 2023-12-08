import { useEffect } from "react";

export const Map = ({ coordinates }) => {
  useEffect(() => {
    const mapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    };

    const map = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );
    let bounds = new window.google.maps.LatLngBounds();

    if (coordinates && coordinates.length > 0) {
      coordinates.forEach((coordinate) => {
        new window.google.maps.Marker({
          position: { lat: coordinate.latitude, lng: coordinate.longitude },
          map: map,
          title: `Lat: ${coordinate.latitude}, Lng: ${coordinate.longitude}`,
        });

        bounds.extend(
          new window.google.maps.LatLng(
            coordinate.latitude,
            coordinate.longitude
          )
        );
      });

      map.fitBounds(bounds);
    }
  }, [coordinates]);

  return <div id="map" style={{ width: "95%", height: "300px" }}></div>;
};
