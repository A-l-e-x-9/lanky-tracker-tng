import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useMushInteriorKasplat } from '@renderer/src/hooks/forest'
import ForestCheck from '../check'

const DiddyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <ForestCheck
        id={5051}
        name="Forest Kasplat: Inside Giant Mushroom"
        region="Giant Mushroom Insides"
        canGetLogic={useMushInteriorKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DiddyKasplat
