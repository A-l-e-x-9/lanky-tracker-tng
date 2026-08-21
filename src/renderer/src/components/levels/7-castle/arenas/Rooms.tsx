import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useSlamCastle } from '@renderer/hooks/castle'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useDk, useStrong, useChunky } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasSlam = useSlamCastle()
const hasDK = useDk()
const hasStrongKong = useStrong()
const hasChunky = useChunky()
  return (
    <ArenaPool>
      <CastleCheck
        id={17000}
        name="Shuffled Battle Arena: In the flying book area of DK's library"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDK && hasSlam && hasStrongKong}
        canGetBreak={isBreathing.out && hasDK && hasSlam}
      />
      <CastleCheck
        id={17000}
        name="Shuffled Battle Arena: Main museum room"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasChunky && hasSlam}
        canGetBreak={isBreathing.out && hasChunky && hasSlam}
      />
    </ArenaPool>
  )
}

const RoomArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default RoomArenas
