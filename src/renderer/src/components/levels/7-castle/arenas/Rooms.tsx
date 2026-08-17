import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useSlamCastle, useOpenCrypt } from '@renderer/hooks/castle'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useDiddy, useDk, usePunch, useCoconut, usePeanut, usePineapple, useGrape, useFeather, useSprint, useStrong, useMonkeyport, useChunky, useMini, useBlast } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasDiddy = useDiddy()
const hasSlam = useSlamCastle()
const hasDK = useDk()
const hasPunch = usePunch()
const hasCoconuts = useCoconut()
const hasPeanuts = usePeanut()
const hasPineapples = usePineapple()
const cryptPreOpened = useOpenCrypt()
const hasGrapes = useGrape()
const hasFeathers = useFeather()
const hasSprint = useSprint()
const hasStrongKong = useStrong()
const hasMonkeyport = useMonkeyport()
const hasChunky = useChunky()
const hasMini = useMini()
const hasBlast = useBlast()
  return (
    <ArenaPool>
      <CastleCheck
        id={17000}
        name="Shuffled Battle Arena: In the flying book area of DK's library"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDK && hasSlam && hasStrongKong}
        canGetBreak={isBreathing.out && hasDK && hasSlam}
      />
    </ArenaPool>
  )
}

const RoomArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default RoomArenas
