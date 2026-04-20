import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useArena, useAztecTinyTemple, useSlamAztec, useTinyTempleIce } from '@renderer/hooks/aztec'
import { useDiddy, useDive } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canReachVanillaArena = useArena()
const canReachTinyTemple = useAztecTinyTemple()
const hasDiddy = useDiddy()
const hasSlam = useSlamAztec()
const iceMelted = useTinyTempleIce()
const hasDiving = useDive()
  return (
    <RainbowCoinPool>
      <AztecCheck
        id={32000}
        name="Shuffled Dirt Patch: Lanky's reward for killing a Necky"
        region="Tiny Temple"
        canGetLogic={canReachVanillaArena && hasShockwave}
      />
      <AztecCheck
        id={32003}
        name="Shuffled Dirt Patch: Back left of Tiny Temple's main room"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && hasShockwave}
        canGetBreak={canReachTinyTemple.out && hasShockwave}
      />
      <AztecCheck
        id={32004}
        name="Shuffled Dirt Patch: TT starting room, low"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && hasShockwave}
        canGetBreak={canReachTinyTemple.out && hasShockwave}
      />
      <AztecCheck
        id={32005}
        name="Shuffled Dirt Patch: TT starting room, high"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && hasDiddy && hasSlam && hasShockwave}
        canGetBreak={canReachTinyTemple.out && hasDiddy && hasSlam && hasShockwave}
      />
      <AztecCheck
        id={32006}
        name="Shuffled Dirt Patch: Tiny's prison room"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && iceMelted.in && hasDiving.in && hasShockwave}
        canGetBreak={canReachTinyTemple.out && iceMelted.out && hasDiving.out && hasShockwave}
      />
      <AztecCheck
        id={32007}
        name="Shuffled Dirt Patch: Next to Tiny's cage"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && iceMelted.in && hasDiving.in && hasShockwave}
        canGetBreak={canReachTinyTemple.out && iceMelted.out && hasDiving.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const TTDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default TTDirt
