import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useGalleonKasplat } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const ChunkyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <IslesCheck
        id={54}
        name="Galleon Lobby Kasplat"
        region="Japes-Forest Lobbies"
        canGetLogic={useGalleonKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default ChunkyKasplat
