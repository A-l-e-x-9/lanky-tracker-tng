import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useDungeonKasplat } from '@renderer/hooks/castle'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { usePunch } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const chunkyVanillaKasplat = useDungeonKasplat()
const isBreathing = useGeneralThing()
const hasPrimatePunch = usePunch()
  return (
    <KasplatPool>
      <CastleCheck
        id={57004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (in front of Candy's)"
        region="Castle Dungeon"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <CastleCheck
        id={57006}
        name="Shuffled Kasplat: Near the Dungeon's exit"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57015}
        name="Shuffled Kasplat: Caged near DK's face puzzle"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
    </KasplatPool>
  )
}

const DungeonKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default DungeonKasplats
