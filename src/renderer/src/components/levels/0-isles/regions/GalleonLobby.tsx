import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GalleonSwim from '../gold-bananas/tiny/GalleonSwim'
import ChunkyKasplat from '../kasplats/Chunky'
import GalleonLobbyDK from '../wrinkly/GalleonLobbyDK'
import GalleonLobbyDiddy from '../wrinkly/GalleonLobbyDiddy'
import GalleonLobbyLanky from '../wrinkly/GalleonLobbyLanky'
import GalleonLobbyTiny from '../wrinkly/GalleonLobbyTiny'
import GalleonLobbyChunky from '../wrinkly/GalleonLobbyChunky'
import GalleonLobbyArenas from '../arenas/GalleonLobby'
import GalleonLobbyCrates from '../crates/GalleonLobby'
import GalleonLobbyDirt from '../dirt/GalleonLobby'
import GalleonLobbyKasplats from '../kasplats/GalleonLobby'

const GalleonLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <GalleonSwim />
    <GalleonLobbyDK />
    <GalleonLobbyDiddy />
    <GalleonLobbyLanky />
    <GalleonLobbyTiny />
    <GalleonLobbyChunky />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <ChunkyKasplat />
  </div>
  <div className="grid">
    <GalleonLobbyArenas />
    <GalleonLobbyCrates />
    <GalleonLobbyDirt />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <GalleonLobbyKasplats />
  </div>
  </>
)
}

export default GalleonLobbyChecks
