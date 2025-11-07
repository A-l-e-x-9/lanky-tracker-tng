import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useProductionBaseKasplat } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const DiddyKasplat: React.FC = () => {
const canDo = useProductionBaseKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3051}
        name="Kasplat at Prod Room Base"
        region="Prod Room"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default DiddyKasplat
