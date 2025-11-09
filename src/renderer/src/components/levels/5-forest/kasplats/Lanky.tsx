import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useOwlKasplat } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const LankyKasplat: React.FC = () => {
const canDo = useOwlKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <ForestCheck
        id={5052}
        name="Kasplat in the big tree's tunnel"
        region="Forest Area 4"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default LankyKasplat
