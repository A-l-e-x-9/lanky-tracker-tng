import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import HiveTunnelEnemies from '../enemies/HiveTunnel'
import DkKasplat from '../kasplats/Dk'
import TinyKasplat from '../kasplats/Tiny'

const HiveTunnelChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
<>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DkKasplat />
    <TinyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <HiveTunnelEnemies />
  </div>
</>
)
}

export default HiveTunnelChecks
