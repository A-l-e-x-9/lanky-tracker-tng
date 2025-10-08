import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useCabinKasplat } from '@renderer/hooks/caves'
import CavesCheck from '../check'

const TinyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <CavesCheck
        id={6053}
        name="Kasplat in the Cabins Area"
        region="Caves Cabins"
        canGetLogic={useCabinKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default TinyKasplat
