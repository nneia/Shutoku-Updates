import React, { useEffect, useRef } from "react";
import "./Map.css";

const GoogleMap = ({ openItem, changeViewMap, currentViewMap }) => {
  const mapContainerRef = useRef(null); // Create a ref for the map container

  useEffect(() => {
    const initMap = () => {
      const markerIcon =
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fpaomedia%2Fsmall-n-flat%2F1024%2Fmap-marker-icon.png&f=1&nofb=1";
      const iconSize = { width: 40, height: 40 };

      const markers = [
        {
          locationName: "Daikoku PA",
          lat: 35.4619094,
          lng: 139.6779318,
          address: "15 Daikokufuto, Tsurumi Ward, Yokohama, Kanagawa 230-0054",
          statusPA: "Open",
        },
        {
          locationName: "Tatsumi 1 PA",
          lat: 35.6433172,
          lng: 139.8071646,
          address: "3 Chome Tatsumi, Koto City, Tokyo 135-0053",
          statusPA: "Open",
        },
        {
          locationName: "Heiwajima PA (OUT)",
          lat: 35.5846435,
          lng: 139.7410936,
          address: "2 Chome-1 Heiwajima, Ota City, Tokyo 143-0006",
          statusPA: "Open",
        },
        {
          locationName: "Shibaura PA (In)",
          lat: 35.6439457,
          lng: 139.7576102,
          address: "3 Chome-23 Kaigan, Minato City, Tokyo 108-0022",
          statusPA: "Open",
        },
        {
          locationName: "Umihotaru PA",
          lat: 35.4638022,
          lng: 139.8727434,
          address: "〒292-0008 Chiba, Kisarazu, Nakajima, 地先 海ほたる",
          statusPA: "Open",
        },
        {
          locationName: "Hakozaki PA",
          lat: 35.6825113,
          lng: 139.7889995,
          address: "2 Chome-1 Heiwajima, Ota City, Tokyo 143-0006",
          statusPA: "Open",
        },
        {
          locationName: "Oi PA (Eastbound)",
          lat: 35.5923964,
          lng: 139.7524585,
          address: "2, Shinagawa City, Tokyo 140-0003",
          statusPA: "Open",
        },
      ];

      const centerMap = { lat: 35.5484399, lng: 139.7557914 };

      const styles = [
        {
          featureType: "all",
          elementType: "all",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
            {
              saturation: "-100",
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36,
            },
            {
              color: "#000000",
            },
            {
              lightness: 40,
            },
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off",
            },
            {
              color: "#000000",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 17,
            },
            {
              weight: 1.2,
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#4d6059",
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4d6059",
            },
          ],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#4d6059",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#4d6059",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4d6059",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#7f8d89",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#7f8d89",
            },
            {
              lightness: 29,
            },
            {
              weight: 0.2,
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 18,
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#7f8d89",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#7f8d89",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 19,
            },
          ],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#2b3638",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#2b3638",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#24282b",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#24282b",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
      ];

      const mapOptions = {
        center: centerMap,
        zoom: 11,
        disableDefaultUI: true,
        zoomControl: true, // Optionally you can enable specific controls
        gestureHandling: "greedy", // Allows map zooming without the Ctrl key
        styles: styles,
      };

      // This code assumes the Google Maps script is already loaded
      const map = new window.google.maps.Map(
        mapContainerRef.current,
        mapOptions
      );

      markers.forEach(marker => {
        const markerInstance = new window.google.maps.Marker({
          position: { lat: marker.lat, lng: marker.lng },
          map: map,
          icon: {
            url: markerIcon,
            scaledSize: new window.google.maps.Size(
              iconSize.width,
              iconSize.height
            ),
          },
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div class='info-window'>
                      <div class="info-wrap">
                        <h3>${marker.locationName}</h3>
                        <div class="status open"></div>
                      </div>
                      <p>${marker.statusPA}</p>
                    </div>`,
          maxWidth: 200,
          pixelOffset: new window.google.maps.Size(0, 105),
        });

        //Listen for clicks and open PADetails
        markerInstance.addListener("click", () => {
          if (openItem) {
            openItem();
            changeViewMap("list");
          }
        });

        // Open the info window immediately
        infoWindow.open(map, markerInstance);
      });
    };

    // Load the Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAA63rKJRwg-9RLoqTG6GKxmaTJuzLlgk8&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = initMap;
    document.head.appendChild(script);

    return () => {
      // Remove script and cleanup on component unmount
      window.initMap = undefined;
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      ref={mapContainerRef}
      className={`google-map ${currentViewMap === "map" ? "display" : ""}`}
    />
  );
};

export default GoogleMap;
