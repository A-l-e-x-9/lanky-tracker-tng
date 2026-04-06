import KasplatPool from '@renderer/components/pools/Kasplats'
import JapesLobbyKasplats from './JapesLobby'
import AztecLobbyKasplats from './AztecLobby'
import FactoryLobbyKasplats from './FactoryLobby'
import GalleonLobbyKasplats from './GalleonLobby'

const JapesForestKasplats: React.FC = () => {
  return (
    <KasplatPool>
      <JapesLobbyKasplats />
      <AztecLobbyKasplats />
      <FactoryLobbyKasplats />
      <GalleonLobbyKasplats />
    </KasplatPool>
  )
}

export default JapesForestKasplats
