import ArenaPool from '@renderer/components/pools/Arenas'
import CavesLobbyArenas from './CavesLobby'
import CastleLobbyArenas from './CastleLobby'
import HelmLobbyArenas from './HelmLobby'

const CavesHelmArenas: React.FC = () => {
  return (
    <ArenaPool>
      <CavesLobbyArenas />
      <CastleLobbyArenas />
      <HelmLobbyArenas />
    </ArenaPool>
  )
}

export default CavesHelmArenas
