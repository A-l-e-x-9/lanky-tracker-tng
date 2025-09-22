import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useKevin } from '@renderer/src/hooks/galleon'
import GalleonCheck from '../check'

const DiddyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <GalleonCheck
        id={4051}
        name="Kevin the Kasplat (Galleon Kasplat: Lighthouse Alcove)"
        region="Lighthouse Area"
        canGetLogic={useKevin()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DiddyKasplat
