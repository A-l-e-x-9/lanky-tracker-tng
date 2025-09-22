import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useIceCastleKasplat } from '@renderer/src/hooks/caves'
import CavesCheck from '../check'

const DkKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <CavesCheck
        id={6050}
        name="Caves Kasplat: Near Ice Castle"
        region="Main Caves Area"
        canGetLogic={useIceCastleKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DkKasplat
