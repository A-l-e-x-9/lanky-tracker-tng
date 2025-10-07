import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useJapesKongGates } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const HiveTunnelEnemies: React.FC = () => {
  const zinger = useDefeatZinger()
  const kongGates = useJapesKongGates()
  return (
    <DropPool>
      <JapesCheck
        id={1318}
        name="Enemy in Feather Tunnel"
        region="Hive Area"
        canGetLogic={kongGates && zinger.in}
        canGetBreak={kongGates && zinger.out}
      />
    </DropPool>
  )
}

export default HiveTunnelEnemies
