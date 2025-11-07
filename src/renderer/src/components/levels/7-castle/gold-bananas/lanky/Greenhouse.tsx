import GBPool from '@renderer/components/pools/GB'
import { useLankyGreenhouseGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyGreenhouse: React.FC = () => {
const canDo = useLankyGreenhouseGb()
return (
<GBPool>
  <CastleCheck
    id={7021}
    name="Lanky's Greenhouse"
    region="Creepy Castle Main"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default LankyGreenhouse
