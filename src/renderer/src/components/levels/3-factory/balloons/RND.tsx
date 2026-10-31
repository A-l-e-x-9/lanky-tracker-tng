import BalloonPool from '@renderer/components/pools/Balloons'
import FactoryCheck from '../check'
import { useFactoryTesting, useChunkyKaijuGb } from '@renderer/hooks/factory'
import { useAnyGun, useGuitar, useTrombone } from '@renderer/hooks/kongs'

const RNDBalloons: React.FC = () => {
const canReachTesting = useFactoryTesting()
const hasAGun = useAnyGun()
const hasGuitar = useGuitar()
const hasTrombone = useTrombone()
const canReachToyMonster = useChunkyKaijuGb()
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
      <FactoryCheck
        id={36906}
        name="Lanky's balloon at that damn piano game"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasTrombone && hasAGun}
        canGetBreak={canReachTesting.out && hasTrombone && hasAGun}
      />
      <FactoryCheck
        id={36914}
        name="Chunky's balloon in the Toy Monster's room"
        region="R&D Room"
        canGetLogic={canReachToyMonster.in && hasAGun}
        canGetBreak={canReachToyMonster.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default RNDBalloons
