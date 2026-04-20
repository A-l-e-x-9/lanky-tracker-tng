import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import {  } from '@renderer/hooks/aztec'
import {  } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  return (
    <ArenaPool>
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Vanilla Arena (Lanky's reward for killing a Necky)"
        region="Tiny Temple"
        canGetLogic={canReachVanillaArena}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Back left of Tiny Temple's main room"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in}
        canGetBreak={canReachTinyTemple.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: TT starting room, low"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in}
        canGetBreak={canReachTinyTemple.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: TT starting room, high"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && hasDiddy && hasSlam}
        canGetBreak={canReachTinyTemple.out && hasDiddy && hasSlam}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Tiny's prison room"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && iceMelted.in && hasDiving.in}
        canGetBreak={canReachTinyTemple.out && iceMelted.out && hasDiving.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Next to Tiny's cage"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && iceMelted.in && hasDiving.in}
        canGetBreak={canReachTinyTemple.out && iceMelted.out && hasDiving.out}
      />
    </ArenaPool>
  )
}

const TTArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default TTArenas
