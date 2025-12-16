import BossPool from '@renderer/components/pools/Bosses'
import { useHelmDoors, useEOHDoor1, useEOHDoor2 } from '@renderer/hooks/helm'
import HelmCheck from './check'

const BossCheck: React.FC = () => {
  const helmDoors = useHelmDoors()
  const canGetPastDoor1 = useEOHDoor1()
  const canGetPastDoor2 = useEOHDoor2()
  return (
    <BossPool>
      <HelmCheck
        id={8105}
        name="The End of Helm"
        canGetLogic={helmDoors.in && canGetPastDoor1.in && canGetPastDoor2.in}
        canGetBreak={helmDoors.out && canGetPastDoor2.out && canGetPastDoor2.out}
      />
    </BossPool>
  )
}

export default BossCheck
