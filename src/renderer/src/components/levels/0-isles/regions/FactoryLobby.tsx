import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FactoryLobbyEnemies from '../enemies/FactoryLobby'
import FactoryLobbyFairy, { FactoryLobbyFairies } from '../fairies/FactoryLobby'
import BongosPad from '../gold-bananas/dk/BongosPad'
import TinyKasplat from '../kasplats/Tiny'
import FactoryLobbyDK from '../wrinkly/FactoryLobbyDK'
import FactoryLobbyDiddy from '../wrinkly/FactoryLobbyDiddy'
import FactoryLobbyLanky from '../wrinkly/FactoryLobbyLanky'
import FactoryLobbyTiny from '../wrinkly/FactoryLobbyTiny'
import FactoryLobbyChunky from '../wrinkly/FactoryLobbyChunky'
import FactoryLobbyArenas from '../arenas/FactoryLobby'
import FactoryLobbyCrates from '../crates/FactoryLobby'
import FactoryLobbyDirt from '../dirt/FactoryLobby'
import FactoryLobbyFairies from '../fairies/FactoryLobby'
import FactoryLobbyKasplats from '../kasplats/FactoryLobby'

const FactoryLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <BongosPad />
    <FactoryLobbyDK />
    <FactoryLobbyDiddy />
    <FactoryLobbyLanky />
    <FactoryLobbyTiny />
    <FactoryLobbyChunky />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <FactoryLobbyFairy />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <TinyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <FactoryLobbyEnemies />
  </div>
  <div className="grid">
  <FactoryLobbyArenas />
  <FactoryLobbyCrates />
  <FactoryLobbyDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <FactoryLobbyFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <FactoryLobbyKasplats />
  </div>
  </>
)
}

export default FactoryLobbyChecks
