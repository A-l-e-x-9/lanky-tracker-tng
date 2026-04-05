import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import JapesLobbyEnemies from '../enemies/JapesLobby'
import JapesLobbyBoulder from '../boulders/JapesLobby'
import TrombonePad from '../gold-bananas/lanky/TrombonePad'
import JapesLobbyDK from '../wrinkly/JapesLobbyDK'
import JapesLobbyDiddy from '../wrinkly/JapesLobbyDiddy'
import JapesLobbyLanky from '../wrinkly/JapesLobbyLanky'
import JapesLobbyTiny from '../wrinkly/JapesLobbyTiny'
import JapesLobbyChunky from '../wrinkly/JapesLobbyChunky'
import JapesLobbyArenas from '../arenas/JapesLobby'
import JapesLobbyCrates from '../crates/JapesLobby'
import JapesLobbyDirt from '../dirt/JapesLobby'
import JapesLobbyFairies from '../fairies/JapesLobby'
import JapesLobbyKasplats from '../kasplats/JapesLobby'

const JapesLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <JapesLobbyBoulder />
    <TrombonePad />
    <JapesLobbyDK />
    <JapesLobbyDiddy />
    <JapesLobbyLanky />
    <JapesLobbyTiny />
    <JapesLobbyChunky />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <JapesLobbyEnemies />
  </div>
  <div className="grid">
    <JapesLobbyArenas />
    <JapesLobbyCrates />
    <JapesLobbyDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <JapesLobbyFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <JapesLobbyKasplats />
  </div>
  </>
)
}

export default JapesLobbyChecks
