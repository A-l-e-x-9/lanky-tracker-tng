import GBPool from '@renderer/components/pools/GB'
import { useDiddyTunnelGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const PeanutTunnel: React.FC = () => (
<GBPool>
  <JapesCheck
    id={1012}
    name="Diddy's Peanut Tunnel"
    region="Japes Lowlands"
    canGetLogic={useDiddyTunnelGb()}
  />
  </GBPool>
)

export default PeanutTunnel
