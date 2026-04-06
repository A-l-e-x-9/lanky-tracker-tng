import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { useCastleKasplat } from '@renderer/hooks/isles'

const Shuffled: React.FC = () => {
const diddyKasplat = useCastleKasplat()
  return (
    <KasplatPool>
      <IslesCheck
        id={50001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (a cage in Castle Lobby)"
        region="Caves-Helm Lobbies"
        canGetLogic={diddyKasplat.in}
        canGetBreak={diddyKasplat.out}
      />
    </KasplatPool>
  )
}

const CastleLobbyKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default CastleLobbyKasplats
