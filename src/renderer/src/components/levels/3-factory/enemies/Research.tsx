import DropPool from '@renderer/components/pools/Drops'
import { useDefeatRoboKremling, useDefeatZinger } from '@renderer/hooks/enemies'
import { useFactoryTesting } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const RNDEnemies: React.FC = () => {
  const testing = useFactoryTesting()
  const robo = useDefeatRoboKremling()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <FactoryCheck
        id={3312}
        name="Tunnel to Race Enemy 0"
        region="R&D Room"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3313}
        name="Tunnel to Race Enemy 1"
        region="R&D Room"
        canGetLogic={testing && zinger.in}
        canGetBreak={testing && zinger.out}
      />
    </DropPool>
  )
}
export default RNDEnemies
