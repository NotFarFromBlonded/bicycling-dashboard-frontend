import {MapContainer, TileLayer} from 'react-leaflet'
import { bangaloreWards } from '../data/bangalore_wards'
import { WardsPolygonLayer } from '../layers/WardsPolygonLayer'
import Legend from '../legend/Legend'
import {useState} from 'react'

export const Map = () => {
    
    const position = [12.979270, 77.571678]
    const [map, setMap] = useState(null)
    return(
      <MapContainer center={position} zoom={11} scrollWheelZoom={true} ref={setMap}>
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2-light/{z}/{x}/{y}.png?key=nfsMLMUFRijYCskdZ0ML"
        />
        <Legend map ={map}/>
        <WardsPolygonLayer data = {bangaloreWards}/>
        
      </MapContainer>
    )
}

export default Map
