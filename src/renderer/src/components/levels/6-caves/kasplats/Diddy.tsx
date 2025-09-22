import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useFunkyKasplat } from '@renderer/src/hooks/caves'
import CavesCheck from '../check'

const DiddyKasplat: React.FC = () => {
  const miniFunky = useFunkyKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <CavesCheck
          id={6051}
          name="Caves Kasplat: Mini Room by Funky"
          region="Main Caves Area"
          canGetLogic={miniFunky}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default DiddyKasplat
