import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { useHelmKasplat } from '@renderer/hooks/isles'

const Shuffled: React.FC = () => {
const DKKasplat = useHelmKasplat()
  return (
    <KasplatPool>
      <IslesCheck
        id={50000}
        name="Shuffled Kasplat: DK's Vanilla Location (Helm Lobby)"
        region="Caves-Helm Lobbies"
        canGetLogic={DKKasplat.in}
        canGetBreak={DKKasplat.out}
      />
    </KasplatPool>
  )
}

const HelmLobbyKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default HelmLobbyKasplats
