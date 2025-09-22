import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useChunkyKasplat } from '@renderer/src/hooks/aztec'
import AztecCheck from '../check'

const ChunkyKasplat: React.FC = () => {
  const chunky = useChunkyKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <AztecCheck
          id={2054}
          name="Aztec Kasplat: Chunky 5-Door Temple"
          region="5 Door Temple"
          canGetLogic={chunky.in}
          canGetBreak={chunky.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default ChunkyKasplat
