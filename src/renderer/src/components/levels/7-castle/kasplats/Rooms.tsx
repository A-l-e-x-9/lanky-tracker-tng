import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useSlamCastle } from '@renderer/hooks/castle'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useDiddy, useMonkeyport. useDk } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasSlam = useSlamCastle()
const hasDiddy = useDiddy()
const hasMonkeyport = useMonkeyport()
const hasDK = useDk()
  return (
    <KasplatPool>
      <CastleCheck
        id={57008}
        name="Shuffled Kasplat: Inside Diddy's Ballroom"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDiddy && hasSlam}
        canGetBreak={isBreathing.out && hasDiddy && hasSlam}
      />
      <CastleCheck
        id={57014}
        name="Shuffled Kasplat: At the useless pedestal in the Museum"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDiddy && hasSlam && hasMonkeyport}
        canGetBreak={isBreathing.out && hasDiddy && hasSlam && hasMonkeyport}
      />
      <CastleCheck
        id={57017}
        name="Shuffled Kasplat: In DK's library"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDK && hasSlam}
        canGetBreak={isBreathing.out && hasDK && hasSlam}
      />
    </KasplatPool>
  )
}

const RoomKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default RoomKasplats
