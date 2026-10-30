import BalloonPool from '@renderer/components/pools/Balloons'
import AztecCheck from '../check'
import { useAztecLlamaTemple, useDkFreeLankyGb } from '@renderer/hooks/aztec'
import { useAnyGun } from '@renderer/hooks/kongs'

const LlamaBalloons: React.FC = () => {
const canReachLankyJail = useDkFreeLankyGb()
const canReachLlamaTemple = useAztecLlamaTemple()
const hasAGun = useAnyGun()
  return (
    <BalloonPool>
      <AztecCheck
        id={26906}
        name="Lanky balloon 0 at his prison"
        region="Llama Temple"
        canGetLogic={canReachLankyJail.in}
        canGetBreak={canReachLankyJail.out}
      />
      <AztecCheck
        id={26907}
        name="Lanky balloon 1 at his prison"
        region="Llama Temple"
        canGetLogic={canReachLankyJail.in}
        canGetBreak={canReachLankyJail.out}
      />
      <AztecCheck
        id={26911}
        name="Tiny balloon over the Llama's swimming pool"
        region="5 Door Temple"
        canGetLogic={canReachLlamaTemple.in && hasAGun}
        canGetBreak={canReachLlamaTemple.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default LlamaBalloons
