import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import HelmBarrel from '../gold-bananas/chunky/HelmBarrel'
import DkKasplat from '../kasplats/Dk'
import HelmLobbyArenas from '../arenas/HelmLobby'
import HelmLobbyCrates from '../crates/HelmLobby'
import HelmLobbyDirt from '../dirt/HelmLobby'
import HelmLobbyKasplats from '../kasplats/HelmLobby'

const HelmLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DkKasplat />
  </div>
  <div className="grid">
    <HelmBarrel />
  </div>
  <div className="grid">
    <HelmLobbyArenas />
    <HelmLobbyCrates />
    <HelmLobbyDirt />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <HelmLobbyKasplats />
  </div>
  </>
)
}

export default HelmLobbyChecks
