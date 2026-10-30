import BalloonPool from '@renderer/components/pools/Balloons'
import AztecCheck from '../check'
import { useAztecBack } from '@renderer/hooks/aztec'
import { useAnyGun } from '@renderer/hooks/kongs'

const TotemBalloons: React.FC = () => {
const hasAGun = useAnyGun()
const canReachAztecBack = useAztecBack()
  return (
    <BalloonPool>
      <AztecCheck
        id={26902}
        name="DK balloon behind the Llama Temple"
        region="Aztec Main Area"
        canGetLogic={canReachAztecBack.in && hasAGun}
        canGetBreak={canReachAztecBack.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default TotemBalloons
