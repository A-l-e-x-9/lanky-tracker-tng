import { useDiddyTunnelGb } from '@renderer/src/hooks/japes'
import JapesCheck from '../../check'

const PeanutTunnel: React.FC = () => (
  <JapesCheck
    id={1012}
    name="Japes Diddy Peanut Tunnel"
    region="Japes Lowlands"
    canGetLogic={useDiddyTunnelGb()}
  />
)

export default PeanutTunnel
