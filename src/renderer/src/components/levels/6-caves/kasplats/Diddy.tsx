import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useFunkyKasplat } from '@renderer/hooks/caves'
import CavesCheck from '../check'

const DiddyKasplat: React.FC = () => {
  const miniFunky = useFunkyKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <CavesCheck
          id={6051}
          name="Kasplat in the Mini/Warp 4 Room by Funky's"
          region="Crystal Caves Main"
          canGetLogic={miniFunky}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default DiddyKasplat
