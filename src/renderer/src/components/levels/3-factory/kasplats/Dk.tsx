import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useProductionTopKasplat } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const DkKasplat: React.FC = () => {
const canDo = useProductionTopKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3050}
        name="Kasplat at Upper Production Pipe"
        region="Prod Room"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default DkKasplat
