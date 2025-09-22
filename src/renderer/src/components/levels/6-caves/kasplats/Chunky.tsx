import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useIglooKasplat } from '@renderer/src/hooks/caves'
import CavesCheck from '../check'

const ChunkyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <CavesCheck
        id={6054}
        name="Caves Kasplat On 5-Door Igloo"
        region="Igloo Area"
        canGetLogic={useIglooKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default ChunkyKasplat
