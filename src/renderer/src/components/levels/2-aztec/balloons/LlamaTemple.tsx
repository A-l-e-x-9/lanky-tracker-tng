import BalloonPool from '@renderer/components/pools/Balloons'
import AztecCheck from '../check'
import { useAztecLlamaTemple, useDkFreeLankyGb } from '@renderer/hooks/aztec'
//import { useGrape, useMini } from '@renderer/hooks/kongs'

const LlamaBalloons: React.FC = () => {
const canReachLankyJail = useDkFreeLankyGb()
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
    </BalloonPool>
  )
}

export default LlamaBalloons
