import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useTreeKasplat } from '@renderer/src/hooks/castle'
import CastleCheck from '../check'

const DkKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <CastleCheck
        id={7050}
        name="Castle Kasplat: Inside the Tree"
        region="Castle Surroundings"
        canGetLogic={useTreeKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DkKasplat
