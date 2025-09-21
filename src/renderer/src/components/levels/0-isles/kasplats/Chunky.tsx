import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useGalleonKasplat } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const ChunkyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <IslesCheck
        id={54}
        name="Isles Kasplat: Galleon Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={useGalleonKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default ChunkyKasplat
