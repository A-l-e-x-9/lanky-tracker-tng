import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useResearchKasplat } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const LankyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3052}
        name="Kasplat in R&D"
        region="R&D Room"
        canGetLogic={useResearchKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default LankyKasplat
