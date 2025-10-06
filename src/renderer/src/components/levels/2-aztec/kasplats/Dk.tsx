import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useCoconutKasplat } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const DkKasplat: React.FC = () => {
  const coconut = useCoconutKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <AztecCheck
          id={2050}
          name="Kasplat Behind DK's Stone Door"
          region="Aztec Caves"
          canGetLogic={coconut.in}
          canGetBreak={coconut.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default DkKasplat
