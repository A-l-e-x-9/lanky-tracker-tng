import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import {  } from '@renderer/hooks/aztec'

const Shuffled: React.FC = () => {
  return (
    <ArenaPool>
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: At the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Near oasis sand"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Behind the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: To the left of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: To the right of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Top of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={canReachDiddyKasplat.in}
        canGetBreak={canReachDiddyKasplat.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: In front of Candy's"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Behind the Llama's cage"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Near the Llama Temple, left"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Near the Llama Temple, right"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Next to the Llama Temple"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: On top of the Llama Temple, back"
        region="Aztec Main Area"
        canGetLogic={canDoVanillaCrate2.in}
        canGetBreak={canDoVanillaCrate2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: On top of the Llama Temple"
        region="Aztec Main Area"
        canGetLogic={canDoVanillaCrate2.in}
        canGetBreak={canDoVanillaCrate2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Near Funky's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: On top of the 5DT"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasJetbarrel}
        canGetBreak={canReachArea2.out && hasJetbarrel}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Near vanilla Warp 5"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Near the Diddy Vulture's cage"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && ((hasClimbing && hasVines) || hasJetbarrel)}
        canGetBreak={canReachArea2.out && ((hasClimbing && hasVines) || hasJetbarrel)}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Under the Diddy Vulture's cage"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Next to Snide's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Behind the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: To the left of the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Near the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Vanilla Warp 1, at the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Vanilla Warp 2, in front of Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Vanilla Warp 3, end of the middle tunnel"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Vanilla Warp 4, end of the middle tunnel"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Vanilla Warp 4, at Funky's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Vanilla Warp 5, near Snide's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
    </ArenaPool>
  )
}

const AztecMainArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default AztecMainArenas
