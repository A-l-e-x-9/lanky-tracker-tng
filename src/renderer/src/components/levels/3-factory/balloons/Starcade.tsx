import BalloonPool from '@renderer/components/pools/Balloons'
import FactoryCheck from '../check'
import { useGeneralThing } from '@renderer/hooks/factory'
import { useAnyGun } from '@renderer/hooks/kongs'

const StarcadeBalloons: React.FC = () => {
const hasAGun = useAnyGun()
const isBreathing = useGeneralThing()
  return (
    <BalloonPool>
      <FactoryCheck
        id={36900}
        name="DK's balloon at Cranky's and Candy's"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasAGun}
        canGetBreak={isBreathing.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default StarcadeBalloons
