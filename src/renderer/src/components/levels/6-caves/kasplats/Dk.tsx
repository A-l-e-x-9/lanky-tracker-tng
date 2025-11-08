import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useIceCastleKasplat } from '@renderer/hooks/caves'
import CavesCheck from '../check'

const DkKasplat: React.FC = () => {
const useIceCastleKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <CavesCheck
        id={6050}
        name="Kasplat Near the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default DkKasplat
