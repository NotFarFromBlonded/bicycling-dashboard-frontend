import { Polygon, Popup} from "react-leaflet";
import { CyclingState } from "../Context";
import { wardsWithoutRoutes } from "../data/wards_without_routes";

export const WardsPolygonLayer = ({data})=>{
    const {wid, setWid, cdata} = CyclingState();
    const dataValue = (num) =>{
        if (num>=60){
            return '#000125';
        } else if (num>=54){
            return '#091A4A';
        } else if (num>=48){
            return '#182F69';
        } else if (num>=42){
            return '#244685';
        } else if (num>=36){
            return '#3260A4';
        } else if (num>=30){
            return '#3D7DB2';
        } else if (num>=24){
            return '#4E9BBD';
        } else if (num>=18){
            return '#6CB8C1';
        } else if (num>=12){
            return '#9ED1BB';
        } else if (num>=6){
            return '#D0E8B9'
        } else if (num>=1){
            return '#FFE5B4';
        } else {
            return '#f5f5f5';
        }

    }
    return (/*<GeoJSON key='geo-json-layer' data = {data}
    eventHandlers={{
        click: (e) => console.log(e.propagatedFrom.feature.properties.WARD_NO)
    }}
    ></GeoJSON>*/
        data.features.map((ward, idx)=>{
            const coordinates = ward.geometry.coordinates[0].map((item)=>{return item.map((i)=>[i[1],i[0]])})
            return (<Polygon
                key = {idx}
                pathOptions={{
                    fillColor: `${wardsWithoutRoutes.includes(parseInt(ward.properties.WARD_NO))?"#808080":dataValue(parseFloat(cdata?.destinations[ward.properties.WARD_NO-1][ward.properties.WARD_NO].time)/60.0)}`,
                    fillOpacity: 0.9,
                    weight: 1,
                    color: `${ward.properties.WARD_NO === wid.toString()?'#000':wardsWithoutRoutes.includes(parseInt(ward.properties.WARD_NO))?"#808080":dataValue(parseFloat(cdata.destinations[ward.properties.WARD_NO-1][ward.properties.WARD_NO].time)/60.0)}`,
                    dashArray: `${ward.properties.WARD_NO === wid.toString()?4:0}`
                }}
                positions = {coordinates}
                eventHandlers = {{
                    click: (e) =>{
                        const layer = e.target
                        layer.setStyle({
                            dashArray:"4"
                        })
                        setWid(ward.properties.WARD_NO)
                    },
                    mouseover: (e) =>{
                        const layer = e.target
                        layer.setStyle({
                            dashArray:"4",
                            color:"black"
                        })
                        e.target.openPopup();
                    },
                    mouseout: (e) =>{
                        const layer = e.target
                        layer.setStyle({
                            dashArray:`${ward.properties.WARD_NO!==wid.toString()?0:4}`,
                            color:`${ward.properties.WARD_NO!==wid.toString()?wardsWithoutRoutes.includes(parseInt(ward.properties.WARD_NO))?"#808080":dataValue(parseFloat(cdata.destinations[ward.properties.WARD_NO-1][ward.properties.WARD_NO].time)/60.0):'#000'}`
                        })

                        e.target.closePopup();
                    }
                }}
            ><Popup><p> {data.features.find((item) => item.properties.WARD_NO===wid.toString()).properties.WARD_NAME} to {ward.properties.WARD_NAME}</p><p>Average Time: {(parseFloat(cdata.destinations[ward.properties.WARD_NO-1][ward.properties.WARD_NO].time)/60).toFixed(1)} minutes</p><p>Average Distance: {(parseFloat(cdata.destinations[ward.properties.WARD_NO-1][ward.properties.WARD_NO].distance)/1000).toFixed(1)} km</p></Popup></Polygon>)
        })
    )
}