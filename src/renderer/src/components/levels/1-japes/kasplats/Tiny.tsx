import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useTinyKasplat } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const TinyKasplat: React.FC = () => {
const canDo = useTinyKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <JapesCheck
        id={1053}
        name="Upper Kasplat at Tunnel to Hive"
        region="Hive Area"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default TinyKasplat
