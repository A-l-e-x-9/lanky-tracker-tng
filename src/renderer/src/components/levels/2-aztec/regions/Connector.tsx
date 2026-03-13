import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ConnectorTunnelEnemies from '../enemies/Connector'
import TunnelBarrel from '../gold-bananas/chunky/Tunnel'
import TunnelBoulder from '../boulders/TunnelBoulder'
import TinyKasplat from '../kasplats/Tiny'

const ConnectorTunnelChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <TunnelBarrel />
    <TunnelBoulder />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <TinyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <ConnectorTunnelEnemies />
  </div>
  </>
)
}

export default ConnectorTunnelChecks
