import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useCastleKasplat } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const DiddyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <IslesCheck
        id={51}
        name="Isles Kasplat: Castle Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={useCastleKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DiddyKasplat
