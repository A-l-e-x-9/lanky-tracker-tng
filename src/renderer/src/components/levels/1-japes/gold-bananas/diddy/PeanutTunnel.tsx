import GBPool from '@renderer/components/pools/GB'
import { useDiddyTunnelGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const PeanutTunnel: React.FC = () => {
const canDo = useDiddyTunnelGb()
return (
<GBPool>
  <JapesCheck
    id={1012}
    name="Diddy's Peanut Tunnel"
    region="Japes Lowlands"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default PeanutTunnel
