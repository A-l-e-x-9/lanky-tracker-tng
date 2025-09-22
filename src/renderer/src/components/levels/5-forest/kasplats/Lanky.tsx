import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useOwlKasplat } from '@renderer/src/hooks/forest'
import ForestCheck from '../check'

const LankyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <ForestCheck
        id={5052}
        name="Forest Kasplat: Under Owl Tree"
        region="Owl Tree"
        canGetLogic={useOwlKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default LankyKasplat
