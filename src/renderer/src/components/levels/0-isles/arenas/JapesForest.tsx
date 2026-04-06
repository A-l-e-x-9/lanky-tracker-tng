import ArenaPool from '@renderer/components/pools/Arenas'
import JapesLobbyArenas from './JapesLobby'
import AztecLobbyArenas from './AztecLobby'
import FactoryLobbyArenas from './FactoryLobby'
import GalleonLobbyArenas from './GalleonLobby'
import ForestLobbyArenas from './ForestLobby'

const JapesForestArenas: React.FC = () => {
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

export default JapesForestArenas
