import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ConnectorTunnelEnemies from '../enemies/Connector'
import TunnelBarrel from '../gold-bananas/chunky/Tunnel'
import TunnelBoulder from '../boulders/TunnelBoulder'
import TinyKasplat from '../kasplats/Tiny'
import MiddleCaveBalloons from '../balloons/MiddleCave'

const ConnectorTunnelChecks: React.FC = () => {
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <TunnelBarrel />
    <TunnelBoulder />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <TinyKasplat />
  </div>
  <div className="grid">
    <ConnectorTunnelEnemies />
    <MiddleCaveBalloons />
  </div>
  </>
)
}

export default ConnectorTunnelChecks
