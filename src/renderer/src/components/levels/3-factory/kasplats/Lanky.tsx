import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useResearchKasplat } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const LankyKasplat: React.FC = () => {
const canDo = useResearchKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3052}
        name="Kasplat in R&D"
        region="R&D Room"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default LankyKasplat
