import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import JapesLobbyEnemies from '../enemies/JapesLobby'
import JapesLobbyBoulder from '../boulders/JapesLobby'
import TrombonePad from '../gold-bananas/lanky/TrombonePad'
import JapesWrinkly from '../wrinkly/JapesLobby'
import JapesLobbyArenas from '../arenas/JapesLobby'
import JapesLobbyCrates from '../crates/JapesLobby'
import JapesLobbyDirt from '../dirt/JapesLobby'
import JapesLobbyKasplats from '../kasplats/JapesLobby'

const JapesLobbyChecks: React.FC = () => {
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <JapesLobbyBoulder />
    <TrombonePad />
    <JapesWrinkly />
  </div>
  <div className="grid">
    <JapesLobbyEnemies />
    <JapesLobbyArenas />
    <JapesLobbyCrates />
    <JapesLobbyDirt />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <JapesLobbyKasplats />
  </div>
  </>
)
}

export default JapesLobbyChecks
