import { idUsuario } from "../utils"
import { useAPI } from "../hooks/useAPI"
import { useState } from "react"

function St1comp({id}) {
  const { isLoading, error, data } = useAPI("grupo", `/dispositivos/usuario/${idUsuario}/grupo/${id}`)
  const [deviceId, setDeviceId] = useState("")

  if (isLoading) {
    return <p>isLoading...</p>
  }

  if (error) {
    return <p>error</p>
  }

  const device = data?.devices.filter(device => device._id === deviceId)

  const positionArray = device && device[0] ? device[0].posicion : null
  const lastPosition = positionArray && positionArray.length > 0 ? positionArray[positionArray.length - 1] : null

  const tm1Array = device && device[0] ? device[0].tm1 : null
  const tm2Array = device && device[0] ? device[0].tm2 : null

  const temp1 = tm1Array !== null && tm1Array[tm1Array.length - 1];
  const temp2 = tm2Array!== null && tm2Array[tm2Array.length - 1];
    


  return (
    <div className="screen-wrapper">
      <aside>
      {data?.devices && data?.devices.map((device) => 
          <p 
              key={device._id}
              onClick={() => setDeviceId(device._id)}
          >
              {device.nombre}
          </p>
        )}
      </aside>
      <main>
        {
          device && device[0] && (
            <div>
              <h2>{device[0].nombre}</h2>
              <h4>ultima posicion</h4>
              <pre>{JSON.stringify(lastPosition, null, 2)}</pre>
              <h4>Temp 1</h4>
              <pre>{JSON.stringify(temp1, null, 2)}</pre>
              <h4>Temp 2</h4>
              <pre>{JSON.stringify(temp2, null, 2)}</pre>
            </div>
          )
        }
      </main>
    </div>
  )
}

export default St1comp