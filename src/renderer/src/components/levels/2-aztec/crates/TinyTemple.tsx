import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useAztecTinyTemple, useSlamAztec, useTinyTempleIce } from '@renderer/hooks/aztec'
import { useDiddy, useDive } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canReachTinyTemple = useAztecTinyTemple()
const hasDiddy = useDiddy()
const hasSlam = useSlamAztec()
const iceMelted = useTinyTempleIce()
const hasDiving = useDive()
  return (
    <CratePool>
      <AztecCheck
        id={22000}
        name="Shuffled Melon Crate: Lanky's vulture room"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && iceMelted.in && hasDiving.in}
        canGetBreak={canReachTinyTemple.out && iceMelted.out && hasDiving.out}
      />
      <AztecCheck
        id={22003}
        name="Shuffled Melon Crate: Back left of Tiny Temple's main room"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in}
        canGetBreak={canReachTinyTemple.out}
      />
      <AztecCheck
        id={22004}
        name="Shuffled Melon Crate: TT starting room, low"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in}
        canGetBreak={canReachTinyTemple.out}
      />
      <AztecCheck
        id={22005}
        name="Shuffled Melon Crate: TT starting room, high"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && hasDiddy && hasSlam}
        canGetBreak={canReachTinyTemple.out && hasDiddy && hasSlam}
      />
      <AztecCheck
        id={22006}
        name="Shuffled Melon Crate: Tiny's prison room"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && iceMelted.in && hasDiving.in}
        canGetBreak={canReachTinyTemple.out && iceMelted.out && hasDiving.out}
      />
      <AztecCheck
        id={22007}
        name="Shuffled Melon Crate: Next to Tiny's cage"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && iceMelted.in && hasDiving.in}
        canGetBreak={canReachTinyTemple.out && iceMelted.out && hasDiving.out}
      />
    </CratePool>
  )
}

const TTCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default TTCrates
