import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import JapesLobbyKasplats from './JapesLobby'
import AztecLobbyKasplats from './AztecLobby'
import FactoryLobbyKasplats from './FactoryLobby'
import GalleonLobbyFairies from './GalleonLobby'
import ForestLobbyKasplats from './ForestLobby'

const Shuffled: React.FC = () => {
  return (
    <KasplatPool>
      <JapesLobbyKasplats />
      <AztecLobbyKasplats />
      <FactoryLobbyKasplats />
      <GalleonLobbyKasplats />
      <ForestLobbyKasplats />
    </KasplatPool>
  )
}

const JapesForestKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default JapesForestKasplats
