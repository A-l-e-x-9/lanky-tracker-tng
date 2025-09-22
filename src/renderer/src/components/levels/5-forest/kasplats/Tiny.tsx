import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useMushExteriorKasplat } from '@renderer/src/hooks/forest'
import ForestCheck from '../check'

const TinyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <ForestCheck
        id={5053}
        name="Forest Kasplat: Low Mushroom Exterior"
        region="Giant Mushroom Exterior"
        canGetLogic={useMushExteriorKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default TinyKasplat
