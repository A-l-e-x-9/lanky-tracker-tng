import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useBlockKasplat } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const ChunkyKasplat: React.FC = () => {
const canDo = useBlockKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3054}
        name="Kasplat near the Block Tower"
        region="Testing Room"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default ChunkyKasplat
