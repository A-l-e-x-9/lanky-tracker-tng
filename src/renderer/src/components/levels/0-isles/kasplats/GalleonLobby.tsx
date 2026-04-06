import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useGalleonKasplat } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const Shuffled: React.FC = () => {
const chunkyKasplat = useGalleonKasplat()
return (
  <KasplatPool>
    <IslesCheck
      id={50004}
      name="Shuffled Kasplat: Chunky's Vanilla Location (Galleon Lobby)"
      region="Japes-Forest Lobbies"
      canGetLogic={chunkyKasplat.in}
      canGetBreak={chunkyKasplat.out}
    />
  </KasplatPool>
)
}

const GalleonLobbyKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default GalleonLobbyKasplats
