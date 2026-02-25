import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GoneArena from '../arenas/Gone'
import ForestLobbyFairy from '../fairies/ForestLobby'
import ForestLobbyDK from '../wrinkly/ForestLobbyDK'
import ForestLobbyDiddy from '../wrinkly/ForestLobbyDiddy'
import ForestLobbyLanky from '../wrinkly/ForestLobbyLanky'
import ForestLobbyTiny from '../wrinkly/ForestLobbyTiny'
import ForestLobbyChunky from '../wrinkly/ForestLobbyChunky'

const ForestLobbyChecks: React.FC = () => {
const isFairySeed = useDonkStore(useShallow((state) => [state.winCondition.fairies && !state.settings.poolFairies])) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <GoneArena />
    <ForestLobbyDK />
    <ForestLobbyDiddy />
    <ForestLobbyLanky />
    <ForestLobbyTiny />
    <ForestLobbyChunky />
  </div>
  <div className={`grid ${isFairySeed}`}>
    <ForestLobbyFairy />
  </div>
  </>
)
}

export default ForestLobbyChecks
