import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useNightKasplat } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const ChunkyKasplat: React.FC = () => {
const canDo = useNightKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <ForestCheck
        id={5054}
        name="Kasplat Beyond the Giant Mushroom's Night Door"
        region="Forest Area 3"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default ChunkyKasplat
