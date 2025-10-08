import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useIglooKasplat } from '@renderer/hooks/caves'
import CavesCheck from '../check'

const ChunkyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <CavesCheck
        id={6054}
        name="Kasplat On Top of 5-Door Igloo"
        region="Caves Igloo"
        canGetLogic={useIglooKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default ChunkyKasplat
