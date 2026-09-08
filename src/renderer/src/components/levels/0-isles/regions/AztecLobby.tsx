import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import AztecBarrel from '../gold-bananas/tiny/AztecBarrel'
import AztecWrinkly from '../wrinkly/AztecLobby'
import AztecLobbyArenas from '../arenas/AztecLobby'
import AztecLobbyCrates from '../crates/AztecLobby'
import AztecLobbyDirt from '../dirt/AztecLobby'
import AztecLobbyFairies from '../fairies/AztecLobby'
import AztecLobbyKasplats from '../kasplats/AztecLobby'

const AztecLobbyChecks: React.FC = () => {
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
<>
  <div className="grid">
  <AztecBarrel />
  <AztecWrinkly />
  <AztecLobbyArenas />
  <AztecLobbyCrates />
  <AztecLobbyDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <AztecLobbyFairies />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <AztecLobbyKasplats />
  </div>
</>
)
}

export default AztecLobbyChecks
