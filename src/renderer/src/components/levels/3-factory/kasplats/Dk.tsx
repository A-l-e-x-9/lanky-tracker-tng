import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useProductionTopKasplat, useUpperProdPortal } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const DkKasplat: React.FC = () => {
const canDo = useProductionTopKasplat()
const DKPortal = useUpperProdPortal()
return (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3050}
        name="Kasplat at Upper Production Pipe"
        region="Prod Room"
        canGetLogic={canDo.in || DKPortal}
        canGetBreak={canDo.out || DKPortal}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default DkKasplat
