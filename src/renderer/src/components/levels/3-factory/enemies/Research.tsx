import DropPool from '@renderer/components/pools/Drops'
import { useDefeatRoboKremling, useDefeatZinger } from '@renderer/hooks/enemies'
import { useFactoryTesting } from '@renderer/hooks/factory'
import { useCamera } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const RNDEnemies: React.FC = () => {
  const testing = useFactoryTesting()
  const robo = useDefeatRoboKremling()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <FactoryCheck
        id={3312}
        name="Factory Enemy: Tunnel to Race 0"
        region="R&D Area"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3313}
        name="Factory Enemy: Tunnel to Race 1"
        region="R&D Area"
        canGetLogic={testing && zinger.in}
        canGetBreak-{testing && zinger.out}
      />
      <FactoryCheck
        id={3412}
        name="Factory Enemy Photo: Tunnel to Race 0"
        region="R&D Area"
        canGetLogic={testing && robo && hasFairyCam}
      />
      <FactoryCheck
        id={3413}
        name="Factory Enemy Photo: Tunnel to Race 1"
        region="R&D Area"
        canGetLogic={testing && hasFairyCam}
      />
    </DropPool>
  )
}
export default RNDEnemies
