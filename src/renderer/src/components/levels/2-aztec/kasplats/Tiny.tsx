import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useTunnelKasplat } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const TinyKasplat: React.FC = () => {
  const tunnel = useTunnelKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <AztecCheck
          id={2053}
          name="Kasplat near Cranky's"
          region="Aztec Caves"
          canGetLogic={tunnel.in}
          canGetBreak={tunnel.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default TinyKasplat
