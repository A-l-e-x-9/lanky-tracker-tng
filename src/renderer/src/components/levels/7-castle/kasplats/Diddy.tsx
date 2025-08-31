import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useMausoleumKasplat } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const DiddyKasplat: React.FC = () => {
const canDoCheck = useMausoleumKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <CastleCheck
        id={7051}
        name="Castle Kasplat: Lower Cave Center"
        region="Castle Underground"
        canGetLogic={canDoCheck.in}
        canGetBreak={canDoCheck.out}
      />
    </VanillaKasplat>
  </KasplatPool>
  )
}

export default DiddyKasplat
