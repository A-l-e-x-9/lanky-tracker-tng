import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useSlamCastle } from '@renderer/hooks/castle'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useDk } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasSlam = useSlamCastle()
const hasDK = useDk()
  return (
    <CratePool>
      <CastleCheck
        id={27039}
        name="Shuffled Melon Crate: In DK's face puzzle room"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in && hasDK && hasSlam}
        canGetBreak={isBreathing.out && hasDK && hasSlam}
      />
      <CastleCheck
        id={27040}
        name="Shuffled Melon Crate: Near the Diddy switch in the dungeon"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27058}
        name="Shuffled Melon Crate: Near the upper cave's pit"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27059}
        name="Shuffled Melon Crate: Near Candy's"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </CratePool>
  )
}

const DungeonCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default DungeonCrates
