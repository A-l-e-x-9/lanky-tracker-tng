import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useChunkyKasplat } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const ChunkyKasplat: React.FC = () => {
  const under = useChunkyKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <JapesCheck
          id={1054}
          name="Kasplat in Chunky's Cave"
          region="Japes Caves and Mines"
          canGetLogic={under.in}
          canGetBreak={under.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default ChunkyKasplat
