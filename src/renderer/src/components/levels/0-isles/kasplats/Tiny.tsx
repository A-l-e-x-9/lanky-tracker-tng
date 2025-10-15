import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useFactoryKasplat } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const TinyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <IslesCheck
        id={53}
        name="Kasplat in the Factory Lobby Box"
        region="Japes-Forest Lobbies"
        canGetLogic={useFactoryKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default TinyKasplat
