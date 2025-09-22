import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useProductionTopKasplat } from '@renderer/src/hooks/factory'
import FactoryCheck from '../check'

const DkKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3050}
        name="Factory Kasplat: Upper Production Pipe"
        region="Production Room"
        canGetLogic={useProductionTopKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DkKasplat
