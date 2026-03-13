import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import StormyTunnelEnemies from '../enemies/StormyTunnel'
import SlopeBarrel from '../gold-bananas/lanky/SlopeBarrel'
import DiddyKasplat from '../kasplats/Diddy'
import LankyKasplat from '../kasplats/Lanky'

const StormyTunnelChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <SlopeBarrel />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DiddyKasplat />
    <LankyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>  
    <StormyTunnelEnemies />
  </div>
  </>
)
}

export default StormyTunnelChecks
