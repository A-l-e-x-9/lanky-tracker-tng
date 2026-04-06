import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleLobby, { CastleLobbyDirt } from '../dirt/CastleLobby'
import CastleLobbyEnemies from '../enemies/CastleLobby'
import CastleBarrel from '../gold-bananas/lanky/CastleBarrel'
import DiddyKasplat from '../kasplats/Diddy'
import CastleLobbyBoulder from '../boulders/CastleLobby'
import CastleLobbyDK from '../wrinkly/CastleLobbyDK'
import CastleLobbyDiddy from '../wrinkly/CastleLobbyDiddy'
import CastleLobbyLanky from '../wrinkly/CastleLobbyLanky'
import CastleLobbyTiny from '../wrinkly/CastleLobbyTiny'
import CastleLobbyChunky from '../wrinkly/CastleLobbyChunky'
import CastleLobbyArenas from '../arenas/CastleLobby'
import CastleLobbyCrates from '../crates/CastleLobby'
import CastleLobbyFairies from '../fairies/CastleLobby'
import CastleLobbyKasplats from '../kasplats/CastleLobby'

const CastleLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <CastleBarrel />
    <CastleLobby />
    <CastleLobbyBoulder />
    <CastleLobbyDK />
    <CastleLobbyDiddy />
    <CastleLobbyLanky />
    <CastleLobbyTiny />
    <CastleLobbyChunky />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
     <DiddyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <CastleLobbyEnemies />
  </div>
  <div className="grid">
    <CastleLobbyArenas />
    <CastleLobbyCrates />
    <CastleLobbyDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <CastleLobbyFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <CastleLobbyKasplats />
  </div>
  </>
)
}

export default CastleLobbyChecks
