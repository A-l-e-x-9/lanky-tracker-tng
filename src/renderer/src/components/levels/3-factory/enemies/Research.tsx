import DropPool from '@renderer/components/pools/Drops'
import { useDefeatToughEnemy, useDefeatZinger } from '@renderer/hooks/enemies'
import { useFactoryTesting } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const RNDEnemies: React.FC = () => {
  const testing = useFactoryTesting()
  const robo = useDefeatToughEnemy()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <FactoryCheck
        id={3312}
        name="Tunnel to Race Enemy 0"
        region="R&D Room"
        canGetLogic={testing.in && robo}
        canGetBreak={testing.out && robo}
      />
      <FactoryCheck
        id={3313}
        name="Tunnel to Race Enemy 1"
        region="R&D Room"
        canGetLogic={testing.in && zinger.in}
        canGetBreak={testing.out && zinger.out}
      />
    </DropPool>
  )
}
export default RNDEnemies
