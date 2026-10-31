import BalloonPool from '@renderer/components/pools/Balloons'
import FactoryCheck from '../check'
import { useGeneralThing, useFoyerFromStorage } from '@renderer/hooks/factory'
import { useAnyGun } from '@renderer/hooks/kongs'

const StartBalloons: React.FC = () => {
const isBreathing = useGeneralThing()
const canReach = useFoyerFromStorage()
const hasAGun = useAnyGun()
  return (
    <BalloonPool>
      <FactoryCheck
        id={36912}
        name="Chunky's balloon at the top of the hatch to Prod Room"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in && hasAGun}
        canGetBreak={isBreathing.out && canReach.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default StartBalloons
