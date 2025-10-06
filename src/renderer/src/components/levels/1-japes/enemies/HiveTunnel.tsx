import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useJapesKongGates } from '@renderer/hooks/japes'
import { useCamera } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const HiveTunnelEnemies: React.FC = () => {
  const zinger = useDefeatZinger()
  const kongGates = useJapesKongGates()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <JapesCheck
        id={1318}
        name="Enemy in Feather Tunnel"
        region="Hive Area"
        canGetLogic={kongGates && zinger.in}
        canGetBreak={kongGates && zinger.out}
      />
      <JapesCheck
        id={1418}
        name="Photo of Enemy in Feather Tunnel"
        region="Hive Area"
        canGetLogic={kongGates && hasFairyCam}
      />
    </DropPool>
  )
}

export default HiveTunnelEnemies
