import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useLonelyKasplat } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const TinyKasplat: React.FC = () => {
const canDoCheck = useLonelyKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <CastleCheck
        id={7053}
        name="Kasplat on Lone Low Platform Past Crypt Entrance"
        region="Creepy Castle Main"
        canGetLogic={canDoCheck.in}
        canGetBreak={canDoCheck.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default TinyKasplat
