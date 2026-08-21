import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useSlamCastle } from '@renderer/hooks/castle'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useDiddy, useDk, useStrong } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasDiddy = useDiddy()
const hasSlam = useSlamCastle()
const hasDK = useDk()
const hasStrongKong = useStrong()
  return (
    <CratePool>
      <CastleCheck
        id={27035}
        name="Shuffled Melon Crate: Near left ballroom candle"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDiddy && hasSlam}
        canGetBreak={isBreathing.out && hasDiddy && hasSlam}
      />
      <CastleCheck
        id={27036}
        name="Shuffled Melon Crate: Near right ballroom candle"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDiddy && hasSlam}
        canGetBreak={isBreathing.out && hasDiddy && hasSlam}
      />
      <CastleCheck
        id={27037}
        name="Shuffled Melon Crate: Ballroom back left"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDiddy && hasSlam}
        canGetBreak={isBreathing.out && hasDiddy && hasSlam}
      />
      <CastleCheck
        id={27038}
        name="Shuffled Melon Crate: Ballroom back right"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDiddy && hasSlam}
        canGetBreak={isBreathing.out && hasDiddy && hasSlam}
      />
      <CastleCheck
        id={27060}
        name="Shuffled Melon Crate: In the enemy gauntlet area of DK's library"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDK && hasSlam}
        canGetBreak={isBreathing.out && hasDK && hasSlam}
      />
      <CastleCheck
        id={27061}
        name="Shuffled Melon Crate: In the flying book area of DK's library"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDK && hasSlam && hasStrongKong}
        canGetBreak={isBreathing.out && hasDK && hasSlam}
      />
    </CratePool>
  )
}

const RoomCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default RoomCrates
