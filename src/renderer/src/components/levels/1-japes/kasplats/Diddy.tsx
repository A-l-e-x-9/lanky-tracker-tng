import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useDiddyKasplat } from '@renderer/src/hooks/japes'
import JapesCheck from '../check'

const DiddyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <JapesCheck
        id={1051}
        name="Japes Kasplat: Near Painting Room"
        region="Stormy Tunnel Area"
        canGetLogic={useDiddyKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DiddyKasplat
