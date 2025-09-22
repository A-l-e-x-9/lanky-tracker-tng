import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useTinyKasplat } from '@renderer/src/hooks/japes'
import JapesCheck from '../check'

const TinyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <JapesCheck
        id={1053}
        name="Japes Kasplat: Hive Tunnel Upper"
        region="Hive Tunnel Area"
        canGetLogic={useTinyKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default TinyKasplat
