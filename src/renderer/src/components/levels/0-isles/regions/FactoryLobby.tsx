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
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <BongosPad />
    <FactoryLobbyFairy />
    <FactoryLobbyDK />
    <FactoryLobbyDiddy />
    <FactoryLobbyLanky />
    <FactoryLobbyTiny />
    <FactoryLobbyChunky />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <TinyKasplat />
    <FactoryLobbyEnemies />
  </div>
  </>
)
}

export default FactoryLobbyChecks
