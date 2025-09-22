import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useCactusKasplat } from '@renderer/src/hooks/galleon'
import GalleonCheck from '../check'

const ChunkyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <GalleonCheck
        id={4054}
        name="Galleon Kasplat: Musical Cactus"
        region="Shipyard Outskirts"
        canGetLogic={useCactusKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default ChunkyKasplat
