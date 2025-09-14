import JapesLobbyEnemies from '../enemies/JapesLobby'
import JapesLobbyBoulder from '../boulders/JapesLobby'
import TrombonePad from '../gold-bananas/lanky/TrombonePad'
import JapesLobbyDK from '../wrinkly/JapesLobbyDK'
import JapesLobbyDiddy from '../wrinkly/JapesLobbyDiddy'
import JapesLobbyLanky from '../wrinkly/JapesLobbyLanky'
import JapesLobbyTiny from '../wrinkly/JapesLobbyTiny'
import JapesLobbyChunky from '../wrinkly/JapesLobbyChunky'

const JapesLobbyChecks: React.FC = () => (
  <>
    <JapesLobbyBoulder />
    <TrombonePad />
    <JapesLobbyEnemies />
    <JapesLobbyDK />
    <JapesLobbyDiddy />
    <JapesLobbyLanky />
    <JapesLobbyTiny />
    <JapesLobbyChunky />
  </>
)

export default JapesLobbyChecks
