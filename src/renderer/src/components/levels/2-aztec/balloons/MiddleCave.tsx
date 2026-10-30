//import { useShallow } from 'zustand/react/shallow'
//import useDonkStore from '@renderer/store'
import BalloonPool from '@renderer/components/pools/Balloons'
//import { useBananaportAll } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useAztecBack } from '@renderer/hooks/aztec'
import { useAnyGun } from '@renderer/hooks/kongs'

const MiddleCaveBalloons: React.FC = () => {
const hasAGun = useAnyGun()
const canReachAztecBack = useAztecBack()
  return (
    <BalloonPool>
      <AztecCheck
        id={26900}
        name="DK balloon to the left of Cranky's"
        region="Aztec Caves"
        canGetLogic={canReachAztecBack.in && hasAGun}
        canGetBreak={canReachAztecBack.out && hasAGun}
      />
      <AztecCheck
        id={26901}
        name="DK balloon to the right of Cranky's"
        region="Aztec Caves"
        canGetLogic={canReachAztecBack.in && hasAGun}
        canGetBreak={canReachAztecBack.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default MiddleCaveBalloons
