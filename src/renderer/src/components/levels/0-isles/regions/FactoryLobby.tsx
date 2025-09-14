import FactoryLobbyEnemies from '../enemies/FactoryLobby'
import FactoryLobbyFairy from '../fairies/FactoryLobby'
import BongosPad from '../gold-bananas/dk/BongosPad'
import TinyKasplat from '../kasplats/Tiny'
import FactoryLobbyDK from '../wrinkly/FactoryLobbyDK'
import FactoryLobbyDiddy from '../wrinkly/FactoryLobbyDiddy'
import FactoryLobbyLanky from '../wrinkly/FactoryLobbyLanky'
import FactoryLobbyTiny from '../wrinkly/FactoryLobbyTiny'
import FactoryLobbyChunky from '../wrinkly/FactoryLobbyChunky'

const FactoryLobbyChecks: React.FC = () => (
  <>
    <BongosPad />
    <TinyKasplat />
    <FactoryLobbyFairy />
    <FactoryLobbyDK />
    <FactoryLobbyDiddy />
    <FactoryLobbyLanky />
    <FactoryLobbyTiny />
    <FactoryLobbyChunky />
    <FactoryLobbyEnemies />
  </>
)

export default FactoryLobbyChecks
