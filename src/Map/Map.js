import {MapContainer, TileLayer} from 'react-leaflet'

import { bangaloreWards } from '../data/bangalore_wards'
import { WardsPolygonLayer } from '../layers/WardsPolygonLayer'




export const Map = () => {
    const position = [12.979270, 77.571678]
    
    return(
      <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2-light/{z}/{x}/{y}.png?key=nfsMLMUFRijYCskdZ0ML"
        />
        <WardsPolygonLayer data = {bangaloreWards}/>
      </MapContainer>
    )
}
