import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import HiveTunnelEnemies from '../enemies/HiveTunnel'
import DkKasplat from '../kasplats/Dk'
import TinyKasplat from '../kasplats/Tiny'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const HiveTunnelChecks: React.FC = () => {
const isBlueprintSeed = useKRoolKontracts('Blueprints') ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
<>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DkKasplat />
    <TinyKasplat />
  </div>
  <div className="grid">
    <HiveTunnelEnemies />
  </div>
</>
)
}

export default HiveTunnelChecks
