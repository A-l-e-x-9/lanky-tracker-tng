import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FactoryLobbyEnemies from '../enemies/FactoryLobby'
import FactoryLobbyFairy from '../fairies/FactoryLobby'
import BongosPad from '../gold-bananas/dk/BongosPad'
import TinyKasplat from '../kasplats/Tiny'
import FactoryLobbyDK from '../wrinkly/FactoryLobbyDK'
import FactoryLobbyDiddy from '../wrinkly/FactoryLobbyDiddy'
import FactoryLobbyLanky from '../wrinkly/FactoryLobbyLanky'
import FactoryLobbyTiny from '../wrinkly/FactoryLobbyTiny'
import FactoryLobbyChunky from '../wrinkly/FactoryLobbyChunky'

const FactoryLobbyChecks: React.FC = () => {
const [isKremKaptureSeed, isFairySeed, isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.kremlingKapture, state.winCondition.fairies, state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const [fairiesInRotation, kasplatsInRotation] = useDonkStore(useShallow((state) => [state.settings.poolFairies, state.settings.poolBlueprints])) ? '' : 'foolish'
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
  <div className={`grid ${isKremKaptureSeed} ${isBlueprintSeed && kasplatsInRotation} ${isKRoolChallengeSeed && kasplatsInRotation}`}>
    <TinyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <FactoryLobbyEnemies />
  </div>
  </>
)
}

export default FactoryLobbyChecks
