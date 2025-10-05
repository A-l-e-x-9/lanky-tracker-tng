import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useCactusKasplat } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const ChunkyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <GalleonCheck
        id={4054}
        name="Kasplat on the 'Cactus' Near Funky's"
        region="Shipyard Outskirts"
        canGetLogic={useCactusKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default ChunkyKasplat
