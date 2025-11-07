import GBPool from '@renderer/components/pools/GB'
import { useDiddyTopGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const CastleTop: React.FC = () => {
const canDo = useDiddyTopGb()
return (
<GBPool>
  <CastleCheck
    id={7010}
    name="Diddy's Barrel Above Lanky's Wind Tunnel"
    region="Creepy Castle Main"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default CastleTop
