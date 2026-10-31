import BalloonPool from '@renderer/components/pools/Arenas'
import FactoryCheck from '../check'
import { useFactoryTesting } from '@renderer/hooks/factory'
import { useAnyGun } from '@renderer/hooks/kongs'

const TestingBalloons: React.FC = () => {
const canReachTesting = useFactoryTesting()
const hasAGun = useAnyGun()
  return (
    <BalloonPool>
      <FactoryCheck
        id={36901}
        name="DK's balloon at his number game"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasAGun}
        canGetBreak={canReachTesting.out && hasAGun}
      />
      <FactoryCheck
        id={36909}
        name="Tiny's balloon at Snide's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasAGun}
        canGetBreak={canReachTesting.out && hasAGun}
      />
      <FactoryCheck
        id={36910}
        name="Tiny's balloon at Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasAGun}
        canGetBreak={canReachTesting.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default TestingBalloons
