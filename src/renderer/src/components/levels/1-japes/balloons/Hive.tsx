import BalloonPool from '@renderer/components/pools/Balloons'
import JapesCheck from '../check'
import { useTinyStumpGb } from '@renderer/hooks/japes'
import { useAnyGun } from '@renderer/hooks/kongs'

const TinyHiveBalloon: React.FC = () => {
const canGetInHive = useTinyStumpGb()
const hasAGun = useAnyGun()
  return (
    <BalloonPool>
      <JapesCheck
        id={16914}
        name="Shuffled Battle Arena: In the first room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in && hasAGun}
        canGetBreak={canGetInHive.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default TinyHiveBalloon
