import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GoneArena from '../arenas/Gone'
import ForestLobbyFairy, { ForestLobbyFairies } from '../fairies/ForestLobby'
import ForestLobbyDK from '../wrinkly/ForestLobbyDK'
import ForestLobbyDiddy from '../wrinkly/ForestLobbyDiddy'
import ForestLobbyLanky from '../wrinkly/ForestLobbyLanky'
import ForestLobbyTiny from '../wrinkly/ForestLobbyTiny'
import ForestLobbyChunky from '../wrinkly/ForestLobbyChunky'
import ForestLobbyArenas from '../arenas/ForestLobby'
import ForestLobbyCrates from '../crates/ForestLobby'
import ForestLobbyDirt from '../dirt/ForestLobby'
import ForestLobbyKasplats from '../kasplats/ForestLobby'

const ForestLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <GoneArena />
    <ForestLobbyDK />
    <ForestLobbyDiddy />
    <ForestLobbyLanky />
    <ForestLobbyTiny />
    <ForestLobbyChunky />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <ForestLobbyFairy />
  </div>
  <div className="grid">
    <ForestLobbyArenas />
    <ForestLobbyCrates />
    <ForestLobbyDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <ForestLobbyFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <ForestLobbyKasplats />
  </div>
  </>
)
}

export default ForestLobbyChecks
