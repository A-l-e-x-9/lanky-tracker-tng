import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useDungeonKasplat } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const ChunkyKasplat: React.FC = () => {
const canDo = useDungeonKasplat()
return (
  <KasplatPool>
    <VanillaKasplat>
      <CastleCheck
        id={7054}
        name="Kasplat in Front of Candy's"
        region="Castle Crypt and Dungeon"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default ChunkyKasplat
