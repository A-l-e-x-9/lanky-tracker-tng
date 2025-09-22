import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useCoconutKasplat } from '@renderer/src/hooks/aztec'
import AztecCheck from '../check'

const DkKasplat: React.FC = () => {
  const coconut = useCoconutKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <AztecCheck
          id={2050}
          name="Aztec Kasplat: Behind DK Stone Door"
          region="Various Aztec Tunnels"
          canGetLogic={coconut.in}
          canGetBreak={coconut.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default DkKasplat
