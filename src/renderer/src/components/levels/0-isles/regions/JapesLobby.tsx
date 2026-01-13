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

const JapesLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
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
  </>
)
}

export default JapesLobbyChecks
