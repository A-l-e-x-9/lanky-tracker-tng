import BalloonPool from '@renderer/components/pools/Balloons'
import JapesCheck from '../check'
import { useGeneralThing, useJapesSideArea } from '@renderer/hooks/japes'
import { useAnyGun } from '@renderer/hooks/kongs'

const LowlandBalloons: React.FC = () => {
const isBreathing = useGeneralThing()
const hasAGun = useAnyGun()
const canReachDiddyCave = useJapesSideArea()
  return (
    <BalloonPool>
      <JapesCheck
        id={16900}
        name="DK's balloon over Chunky's cave entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in && hasAGun}
        canGetBreak={isBreathing.out && hasAGun}
      />
      <JapesCheck
        id={16901}
        name="Diddy's balloon in his early cave"
        region="Japes Lowlands"
        canGetLogic={canReachDiddyCave.in}
        canGetBreak={canReachDiddyCave.out}
      />
    </BalloonPool>
  )
}

export default LowlandBalloons
