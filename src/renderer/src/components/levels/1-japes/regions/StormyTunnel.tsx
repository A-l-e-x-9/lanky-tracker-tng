import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import StormyTunnelEnemies from '../enemies/StormyTunnel'
import SlopeBarrel from '../gold-bananas/lanky/SlopeBarrel'
import DiddyKasplat from '../kasplats/Diddy'
import LankyKasplat from '../kasplats/Lanky'
import RambiHuts from '../breakables/RambiHuts'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const StormyTunnelChecks: React.FC = () => {
const isBlueprintSeed = useKRoolKontracts('Blueprints') ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <SlopeBarrel />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DiddyKasplat />
    <LankyKasplat />
  </div>
  <div className="grid">
    <RambiHuts />
    <StormyTunnelEnemies />
  </div>
  </>
)
}

export default StormyTunnelChecks
