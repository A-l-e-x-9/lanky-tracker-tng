import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useCastleKasplat } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const DiddyKasplat: React.FC = () => {
const canDo = useCastleKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <IslesCheck
        id={51}
        name="Kasplat in the Castle Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default DiddyKasplat
