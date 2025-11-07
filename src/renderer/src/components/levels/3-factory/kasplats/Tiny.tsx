import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useStorageKasplat } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const TinyKasplat: React.FC = () => {
const canDo = useStorageKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3053}
        name="Kasplat at Pole to Arcade"
        region="Storage and Arcade Area"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default TinyKasplat
