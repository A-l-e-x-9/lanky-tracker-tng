import KasplatPool from '@renderer/components/pools/Kasplats'
import CavesLobbyKasplats from './CavesLobby'
import CastleLobbyKasplats from './CastleLobby'
import HelmLobbyKasplats from './HelmLobby'

const CavesHelmKasplats: React.FC = () => {
  return (
    <KasplatPool>
      <CavesLobbyKasplats />
      <CastleLobbyKasplats />
      <HelmLobbyKasplats />
    </KasplatPool>
  )
}

export default CavesHelmKasplats
