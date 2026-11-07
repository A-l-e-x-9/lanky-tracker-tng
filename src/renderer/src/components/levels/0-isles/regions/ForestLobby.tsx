import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GoneArena from '../arenas/Gone'
import ForestLobbyFairy, { ForestLobbyFairies } from '../fairies/ForestLobby'
import ForestWrinkly from '../wrinkly/ForestLobby'
import ForestLobbyArenas from '../arenas/ForestLobby'
import ForestLobbyCrates from '../crates/ForestLobby'
import ForestLobbyDirt from '../dirt/ForestLobby'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const ForestLobbyChecks: React.FC = () => {
const isFairySeed = useKRoolKontracts('Fairies') ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <GoneArena />
    <ForestWrinkly />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <ForestLobbyFairy />
  </div>
  <div className="grid">
    <ForestLobbyArenas />
    <ForestLobbyCrates />
    <ForestLobbyDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <ForestLobbyFairies />
  </div>
  </>
)
}

export default ForestLobbyChecks
