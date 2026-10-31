import BalloonPool from '@renderer/components/pools/Balloons'
import FactoryCheck from '../check'
import { useFactoryTesting } from '@renderer/hooks/factory'
import { useAnyGun } from '@renderer/hooks/kongs'

const RNDBalloons: React.FC = () => {
const canReachTesting = useFactoryTesting()
const hasAGun = useAnyGun()
  return (
    <BalloonPool>
      <FactoryCheck
        id={36902}
        name="DK's balloon at the hatch to his power hut"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasAGun}
        canGetBreak={canReachTesting.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default RNDBalloons
