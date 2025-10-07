import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useCannonKasplat } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const LankyKasplat: React.FC = () => {
  const cannon = useCannonKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <GalleonCheck
          id={4052}
          name="Kasplat in the Cannon Game Room"
          region="Galleon Caves"
          canGetLogic={cannon.in}
          canGetBreak={cannon.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default LankyKasplat
