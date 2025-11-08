import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useMushInteriorKasplat } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const DiddyKasplat: React.FC = () => {
const canDo = useMushInteriorKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <ForestCheck
        id={5051}
        name="Kasplat in the Giant Mushroom"
        region="Inside the Giant Mushroom"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default DiddyKasplat
