import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useSlamCastle, useOpenCrypt } from '@renderer/hooks/castle'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useDiddy, useDk, useRocket, useClimbing, useOrange } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasSlam = useSlamCastle()
const hasDiddy = useDiddy()
const cryptPreOpened = useOpenCrypt()
const hasDK = useDk()
const hasJetbarrel = useRocket()
const hasClimbing = useClimbing()
const hasOranges = useOrange()
  return (
    <KasplatPool>
      <CastleCheck
        id={57008}
        name="Shuffled Kasplat: Inside Diddy's Ballroom"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDiddy && hasSlam}
        canGetBreak={isBreathing.out && hasDiddy && hasSlam}
      />
    </KasplatPool>
  )
}

const RoomKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default RoomKasplats
