import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import {  } from '@renderer/hooks/japes'
import {  } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
return (
    <KasplatPool>
      <JapesCheck
        id={51006}
        name="Shuffled Kasplat: Top of Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={canDoDiddyMtnGB.in}
        canGetBreak={canDoDiddyMtnGB.out}
      />
      <JapesCheck
        id={51008}
        name="Shuffled Kasplat: With Tiny's caged GB"
        region="Japes Hillside"
        canGetLogic={canDoTinyCageGB.in}
        canGetBreak={canDoTinyCageGB.out}
      />
      <JapesCheck
        id={51014}
        name="Shuffled Kasplat: The Troff 'n' Scoff door on the Hillside"
        region="Japes Hillside"
        canGetLogic={isBreathing.in && hasVines && hasClimbing}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={51017}
        name="Shuffled Kasplat: In front of Lanky's painting room entrance"
        region="Japes Hillside"
        canGetLogic={canReachPaintingRoom.in}
        canGetBreak={canReachPaintingRoom.out}
      />
      <JapesCheck
        id={51018}
        name="Shuffled Kasplat: The minecart game's exit"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </KasplatPool>
  )
}

const LowlandKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default LowlandKasplats
