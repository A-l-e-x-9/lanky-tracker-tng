import KasplatPool from '@renderer/src/components/pools/Kasplats'
import VanillaKasplat from '@renderer/src/components/pools/VanillaKasplat'
import { useChunkyKasplat } from '@renderer/src/hooks/japes'
import JapesCheck from '../check'

const ChunkyKasplat: React.FC = () => {
  const under = useChunkyKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <JapesCheck
          id={1054}
          name="Japes Kasplat: Underground"
          region="Japes Caves And Mines"
          canGetLogic={under.in}
          canGetBreak={under.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default ChunkyKasplat
