import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleLobby from '../dirt/CastleLobby'
import CastleLobbyEnemies from '../enemies/CastleLobby'
import CastleBarrel from '../gold-bananas/lanky/CastleBarrel'
import DiddyKasplat from '../kasplats/Diddy'
import CastleLobbyBoulder from '../boulders/CastleLobby'
import CastleLobbyDK from '../wrinkly/CastleLobbyDK'
import CastleLobbyDiddy from '../wrinkly/CastleLobbyDiddy'
import CastleLobbyLanky from '../wrinkly/CastleLobbyLanky'
import CastleLobbyTiny from '../wrinkly/CastleLobbyTiny'
import CastleLobbyChunky from '../wrinkly/CastleLobbyChunky'

const CastleLobbyChecks: React.FC = () => {
const [isKremKaptureSeed, isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.kremlingKapture, state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const [kasplatsInRotation] = useDonkStore(useShallow((state) => [state.settings.poolBlueprints])) ? '' : 'foolish'
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
  </>
)
}

export default CastleLobbyChecks
