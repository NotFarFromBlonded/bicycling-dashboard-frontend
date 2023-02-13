import L from "leaflet";
import { useEffect } from "react";

function Legend({map}){
    console.log(map);
    useEffect(() => {
        if (map) {
          const legend = L.control({ position: "bottomright" });
    
          legend.onAdd = () => {
            const div = L.DomUtil.create("div", "info legend");
            div.innerHTML += '<i style="background: #000125"></i><span>> 1 hr</span><br>';
            div.innerHTML += '<i style="background: #091A4A"></i><br>';
            div.innerHTML += '<i style="background: #182F69"></i><br>';
            div.innerHTML += '<i style="background: #244685"></i><br>';
            div.innerHTML += '<i style="background: #3260A4"></i><br>';
            div.innerHTML += '<i style="background: #3D7DB2"></i><span> 30 mins</span><br>';
            div.innerHTML += '<i style="background: #4E9BBD"></i><br>';
            div.innerHTML += '<i style="background: #6CB8C1"></i><br>';
            div.innerHTML += '<i style="background: #9ED1BB"></i><span> 12 mins</span><br>';
            div.innerHTML += '<i style="background: #D0E8B9"></i><br>';
            div.innerHTML += '<i style="background: #FFE5B4"></i><span>>= 1 mins</span><br>';
            div.innerHTML += '<i style="background: #F5F5F5"></i><span>Data Not Available</span><br>';
            div.innerHTML += '<i style="background: #808080"></i><span>Wards with no available routes</span><br>';
            return div;
          };
    
          legend.addTo(map);
        }
      }, [map]);
    return null
}

export default Legend