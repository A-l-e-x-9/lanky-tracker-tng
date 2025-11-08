import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useMushExteriorKasplat } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const TinyKasplat: React.FC = () => {
const canDo = useMushExteriorKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <ForestCheck
        id={5053}
        name="Kasplat at the middle of the Mushroom"
        region="Forest Area 3"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default TinyKasplat
