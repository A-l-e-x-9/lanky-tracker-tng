import BalloonPool from '@renderer/components/pools/Balloons'
import AztecCheck from '../check'
import { useAztecTinyTemple, useTinyTempleIce } from '@renderer/hooks/aztec'
import { useDive, useAnyGun } from '@renderer/hooks/kongs'

const TTBalloons: React.FC = () => {
const canReachTT = useAztecTinyTemple()
const TTIce = useTinyTempleIce()
const hasDiving = useDive()
const hasAGun = useAnyGun()
  return (
    <BalloonPool>
      <AztecCheck
        id={26909}
        name="Tiny balloon 0 in her prison room"
        region="Tiny Temple"
        canGetLogic={canReachTT.in && TTIce && hasDiving.in && hasAGun}
        canGetBreak={canReachTT.out && TTIce && hasDiving.out && hasAGun}
      />
      <AztecCheck
        id={26910}
        name="Tiny balloon 1 in her prison room"
        region="Tiny Temple"
        canGetLogic={canReachTT.in && TTIce && hasDiving.in && hasAGun}
        canGetBreak={canReachTT.out && TTIce && hasDiving.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default TTBalloons
