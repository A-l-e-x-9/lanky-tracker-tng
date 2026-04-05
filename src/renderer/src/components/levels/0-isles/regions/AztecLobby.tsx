import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import AztecBarrel from '../gold-bananas/tiny/AztecBarrel'
import AztecLobbyDK from '../wrinkly/AztecLobbyDK'
import AztecLobbyDiddy from '../wrinkly/AztecLobbyDiddy'
import AztecLobbyLanky from '../wrinkly/AztecLobbyLanky'
import AztecLobbyTiny from '../wrinkly/AztecLobbyTiny'
import AztecLobbyChunky from '../wrinkly/AztecLobbyChunky'
import AztecLobbyArenas from '../arenas/AztecLobby'
import AztecLobbyCrates from '../crates/AztecLobby'
import AztecLobbyDirt from '../dirt/AztecLobby'
import AztecLobbyFairies from '../fairies/AztecLobby'
import AztecLobbyKasplats from '../kasplats/AztecLobby'

const AztecLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
<>
  <div className="grid">
  <AztecBarrel />
  <AztecLobbyDK />
  <AztecLobbyDiddy />
  <AztecLobbyLanky />
  <AztecLobbyTiny />
  <AztecLobbyChunky />
  <AztecLobbyArenas />
  <AztecLobbyCrates />
  <AztecLobbyDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <AztecLobbyFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <AztecLobbyKasplats />
  </div>
</>
)
}

export default AztecLobbyChecks
