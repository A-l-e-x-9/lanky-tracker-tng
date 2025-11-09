import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useDiddyKasplat } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const DiddyKasplat: React.FC = () => {
const canDo = useDiddyKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <JapesCheck
        id={1051}
        name="Kasplat Near the Painting Room"
        region="Stormy Area"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default DiddyKasplat
