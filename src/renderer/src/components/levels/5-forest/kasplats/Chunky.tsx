import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useNightKasplat } from '@renderer/src/hooks/forest'
import ForestCheck from '../check'

const ChunkyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <ForestCheck
        id={5054}
        name="Forest Kasplat: Mushroom Night Door"
        region="Giant Mushroom Exterior"
        canGetLogic={useNightKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default ChunkyKasplat
