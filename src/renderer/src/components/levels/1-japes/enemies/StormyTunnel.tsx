import DropPool from '@renderer/src/components/pools/Drops'
import { useJapesKongGates } from '@renderer/src/hooks/japes'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import JapesCheck from '../check'

const StormyTunnelEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const kongGates = useJapesKongGates()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <JapesCheck
        id={1304}
        name="Japes Enemy: Stormy Tunnel 0"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1305}
        name="Japes Enemy: Stormy Tunnel 1"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1306}
        name="Japes Enemy: Stormy Tunnel 2"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1319}
        name="Japes Enemy: Middle Tunnel"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1404}
        name="Japes Enemy Photo: Stormy Tunnel 0"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong && hasFairyCam}
      />
      <JapesCheck
        id={1405}
        name="Japes Enemy Photo: Stormy Tunnel 1"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong && hasFairyCam}
      />
      <JapesCheck
        id={1406}
        name="Japes Enemy Photo: Stormy Tunnel 2"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong && hasFairyCam}
      />
      <JapesCheck
        id={1419}
        name="Japes Enemy Photo: Middle Tunnel"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong && hasFairyCam}
      />
    </DropPool>
  )
}

export default StormyTunnelEnemies
