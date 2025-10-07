import DropPool from '@renderer/components/pools/Drops'
import { useJapesKongGates } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const StormyTunnelEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const kongGates = useJapesKongGates()
  return (
    <DropPool>
      <JapesCheck
        id={1304}
        name="Stormy Area Enemy 0"
        region="Stormy Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1305}
        name="Stormy Area Enemy 1"
        region="Stormy Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1306}
        name="Stormy Area 2"
        region="Stormy Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1319}
        name="Middle Tunnel Enemy"
        region="Stormy Area"
        canGetLogic={kongGates && anyKong}
      />
    </DropPool>
  )
}

export default StormyTunnelEnemies
