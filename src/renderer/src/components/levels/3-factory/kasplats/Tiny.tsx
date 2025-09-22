import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useStorageKasplat } from '@renderer/src/hooks/factory'
import FactoryCheck from '../check'

const TinyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3053}
        name="Factory Kasplat: Pole to Arcade"
        region="Storage And Arcade"
        canGetLogic={useStorageKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default TinyKasplat
