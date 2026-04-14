import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useJapesMine, useChunkyUndergroundGb } from '@renderer/hooks/japes'

const Shuffled: React.FC = () => {
const canDoDiddyMtnGB = useJapesMine()
const chunkyKasplat = useChunkyUndergroundGb()
return (
    <KasplatPool>
      <JapesCheck
        id={51004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (end of his mine, to the right)"
        region="Japes Caves and Mines"
        canGetLogic={chunkyKasplat.in}
        canGetBreak={chunkyKasplat.out}
      />
      <JapesCheck
        id={51015}
        name="Shuffled Kasplat: In Diddy's mountain"
        region="Japes Caves and Mines"
        canGetLogic={canDoDiddyMtnGB.in}
        canGetBreak={canDoDiddyMtnGB.out}
      />
    </KasplatPool>
  )
}

const MineKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default MineKasplats
