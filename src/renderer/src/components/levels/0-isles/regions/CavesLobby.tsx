import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GuitarPad from '../gold-bananas/diddy/GuitarPad'
import CavesLava from '../gold-bananas/dk/CavesLava'
import LankyKasplat from '../kasplats/Lanky'
import CavesLobbyDK from '../wrinkly/CavesLobbyDK'
import CavesLobbyDiddy from '../wrinkly/CavesLobbyDiddy'
import CavesLobbyLanky from '../wrinkly/CavesLobbyLanky'
import CavesLobbyTiny from '../wrinkly/CavesLobbyTiny'
import CavesLobbyChunky from '../wrinkly/CavesLobbyChunky'
import CavesLobbyBoulder from '../boulders/CavesLobby'
import CavesLobbyArenas from '../arenas/CavesLobby'
import CavesLobbyCrates from '../crates/CavesLobby'
import CavesLobbyDirt from '../dirt/CavesLobby'
import CavesLobbyFairies from '../fairies/CavesLobby'
import CavesLobbyKasplats from '../kasplats/CavesLobby'

const CavesLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <CavesLava />
    <GuitarPad />
    <CavesLobbyBoulder />
    <CavesLobbyDK />
    <CavesLobbyDiddy />
    <CavesLobbyLanky />
    <CavesLobbyTiny />
    <CavesLobbyChunky />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <LankyKasplat />
  </div>
  <div className="grid">
    <CavesLobbyArenas />
    <CavesLobbyCrates />
    <CavesLobbyDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <CavesLobbyFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <CavesLobbyKasplats />
  </div>
  </>
)
}

export default CavesLobbyChecks
