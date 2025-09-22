import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useLonelyKasplat } from '@renderer/src/hooks/castle'
import CastleCheck from '../check'

const TinyKasplat: React.FC = () => {
const canDoCheck = useLonelyKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <CastleCheck
        id={7053}
        name="Castle Kasplat: On a lone platform"
        region="Castle Surroundings"
        canGetLogic={canDoCheck.in}
        canGetBreak={canDoCheck.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default TinyKasplat
