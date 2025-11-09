import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useKevin } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const DiddyKasplat: React.FC = () => {
const canDo = useKevin()
return (
  <KasplatPool>
    <VanillaKasplat>
      <GalleonCheck
        id={4051}
        name="Kevin the Kasplat (Lighthouse Alcove)"
        region="Lighthouse Area"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaKasplat>
  </KasplatPool>
)
}

export default DiddyKasplat
