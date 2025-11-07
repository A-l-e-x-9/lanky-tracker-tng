import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { usePathKasplat } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const LankyKasplat: React.FC = () => {
const canDo = usePathKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <CastleCheck
        id={7052}
        name="Kasplat Near Upper Warp 2"
        region="Creepy Castle Main"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default LankyKasplat
