import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useCabinKasplat } from '@renderer/src/hooks/caves'
import CavesCheck from '../check'

const TinyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <CavesCheck
        id={6053}
        name="Caves Kasplat: By the Far Warp 2 (Cabins)"
        region="Cabins Area"
        canGetLogic={useCabinKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default TinyKasplat
