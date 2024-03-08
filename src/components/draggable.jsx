import { Popup, Marker } from 'react-leaflet'
import { useCallback, useMemo, useRef, useState } from 'react'

const center = {
    lat: -12.0630198,
    lng: -77.0384351,
  }
  
  function DraggableMarker() {

    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)

    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )

    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])
  
    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'El marcador se puede arrastrar'
              : 'Haz clic AQUI para habilitar el arrastre del marcador'}
          </span>
        </Popup>
      </Marker>
    )
  }

  export default DraggableMarker;