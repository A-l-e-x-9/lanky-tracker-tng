import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import JapesLobbyArenas from './JapesLobby'
import AztecLobbyArenas from './AztecLobby'
import FactoryLobbyArenas from './FactoryLobby'
import GalleonLobbyArenas from './GalleonLobby'
import ForestLobbyArenas from './ForestLobby'

const Shuffled: React.FC = () => {
  return (
    <ArenaPool>
      <JapesLobbyArenas />
      <AztecLobbyArenas />
      <FactoryLobbyArenas />
      <GalleonLobbyArenas />
      <ForestLobbyArenas />
    </ArenaPool>
  )
}

const JapesForestArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default JapesForestArenas
