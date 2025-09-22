import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useDungeonKasplat } from '@renderer/src/hooks/castle'
import CastleCheck from '../check'

const ChunkyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <CastleCheck
        id={7054}
        name="Castle Kasplat: Near Candy's"
        region="Castle Underground"
        canGetLogic={useDungeonKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default ChunkyKasplat
