import BalloonPool from '@renderer/components/pools/Balloons'
import AztecCheck from '../check'
import { useAztecFront } from '@renderer/hooks/aztec'
import { useAnyGun } from '@renderer/hooks/kongs'

const OasisBalloons: React.FC = () => {
const canReachAztecFront = useAztecFront()
const hasAGun = useAnyGun()
  return (
    <BalloonPool>
      <AztecCheck
        id={26903}
        name="Diddy balloon in front of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={canReachAztecFront.in && hasAGun}
        canGetBreak={canReachAztecFront.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default OasisBalloons
