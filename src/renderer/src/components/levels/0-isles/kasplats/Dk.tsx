import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useHelmKasplat } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const DkKasplat: React.FC = () => {
  const helmKasplat = useHelmKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <IslesCheck
          id={50}
          name="Isles Kasplat: Helm Lobby"
          region="Caves-Helm Lobbies"
          canGetLogic={helmKasplat.in}
          canGetBreak={helmKasplat.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default DkKasplat
