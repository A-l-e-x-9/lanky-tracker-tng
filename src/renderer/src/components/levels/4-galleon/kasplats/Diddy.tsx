import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useKevin } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const DiddyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <GalleonCheck
        id={4051}
        name="Kevin the Kasplat (Lighthouse Alcove)"
        region="Lighthouse Area"
        canGetLogic={useKevin()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DiddyKasplat
