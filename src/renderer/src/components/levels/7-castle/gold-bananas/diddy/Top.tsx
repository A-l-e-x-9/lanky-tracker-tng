import GBPool from '@renderer/components/pools/GB'
import { useDiddyTopGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const CastleTop: React.FC = () => (
<GBPool>
  <CastleCheck
    id={7010}
    name="Diddy's Barrel Above Lanky's Wind Tunnel"
    region="Creepy Castle Main"
    canGetLogic={useDiddyTopGb()}
  />
  </GBPool>
)

export default CastleTop
