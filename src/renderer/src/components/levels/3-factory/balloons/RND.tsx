import BalloonPool from '@renderer/components/pools/Balloons'
import FactoryCheck from '../check'
import { useFactoryTesting } from '@renderer/hooks/factory'
import { useAnyGun, useGuitar } from '@renderer/hooks/kongs'

const RNDBalloons: React.FC = () => {
const canReachTesting = useFactoryTesting()
const hasAGun = useAnyGun()
const hasGuitar = useGuitar()
  return (
    <BalloonPool>
      <FactoryCheck
        id={36902}
        name="DK's balloon at the hatch to his power hut"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasAGun}
        canGetBreak={canReachTesting.out && hasAGun}
      />
      <FactoryCheck
        id={36903}
        name="Diddy's balloon 0 in his pincode room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasGuitar && hasAGun}
        canGetBreak={canReachTesting.out && hasGuitar && hasAGun}
      />
      <FactoryCheck
        id={36904}
        name="Diddy's balloon 1 in his pincode room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasGuitar && hasAGun}
        canGetBreak={canReachTesting.out && hasGuitar && hasAGun}
      />
      <FactoryCheck
        id={36905}
        name="Diddy's balloon 2 in his pincode room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasGuitar && hasAGun}
        canGetBreak={canReachTesting.out && hasGuitar && hasAGun}
      />
    </BalloonPool>
  )
}

export default RNDBalloons
