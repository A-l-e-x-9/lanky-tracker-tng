import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useOasisKasplat } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const DiddyKasplat: React.FC = () => {
  const oasis = useOasisKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <AztecCheck
          id={2051}
          name="Kasplat on top of the Tiny Temple"
          region="Aztec Main Area"
          canGetLogic={oasis.in}
          canGetBreak={oasis.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default DiddyKasplat
