import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useDkKasplat } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const DkKasplat: React.FC = () => {
const canDo = useDkKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <JapesCheck
        id={1050}
        name="Lower Kasplat at Tunnel to Hive"
        region="Hive Area"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default DkKasplat
