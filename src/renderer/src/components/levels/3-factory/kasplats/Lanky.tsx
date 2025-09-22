import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useResearchKasplat } from '@renderer/src/hooks/factory'
import FactoryCheck from '../check'

const LankyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3052}
        name="Factory Kasplat: Research and Development"
        region="R&D Area"
        canGetLogic={useResearchKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default LankyKasplat
