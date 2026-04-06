import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import CavesLobbyArenas from './CavesLobby'
import CastleLobbyArenas from './CastleLobby'
import HelmLobbyArenas from './HelmLobby'

const Shuffled: React.FC = () => {
  return (
    <ArenaPool>
      <CavesLobbyArenas />
      <CastleLobbyArenas />
      <HelmLobbyArenas />
    </ArenaPool>
  )
}

const CavesHelmArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default CavesHelmArenas
