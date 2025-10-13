import { useDiddyTunnelGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const PeanutTunnel: React.FC = () => (
  <JapesCheck
    id={1012}
    name="Diddy's Peanut Tunnel"
    region="Japes Lowlands"
    canGetLogic={useDiddyTunnelGb()}
  />
)

export default PeanutTunnel
