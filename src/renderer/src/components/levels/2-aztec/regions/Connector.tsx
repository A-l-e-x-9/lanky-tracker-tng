import ConnectorTunnelEnemies from '../enemies/Connector'
import TunnelBarrel from '../gold-bananas/chunky/Tunnel'
import TunnelBoulder from '../boulders/TunnelBoulder'
import TinyKasplat from '../kasplats/Tiny'

const ConnectorTunnelChecks: React.FC = () => (
  <>
    <TunnelBarrel />
    <TunnelBoulder />
    <TinyKasplat />
    <ConnectorTunnelEnemies />
  </>
)

export default ConnectorTunnelChecks
