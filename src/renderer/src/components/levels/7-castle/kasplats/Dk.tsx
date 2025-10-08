import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useTreeKasplat } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const DkKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <CastleCheck
        id={7050}
        name="Kasplat in the Tree"
        region="Creepy Castle Main"
        canGetLogic={useTreeKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DkKasplat
