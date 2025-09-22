import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useTunnelKasplat } from '@renderer/src/hooks/aztec'
import AztecCheck from '../check'

const TinyKasplat: React.FC = () => {
  const tunnel = useTunnelKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <AztecCheck
          id={2053}
          name="Aztec Kasplat: Hunky Chunky Barrel"
          region="Various Aztec Tunnels"
          canGetLogic={tunnel.in}
          canGetBreak={tunnel.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default TinyKasplat
