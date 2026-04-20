import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useGeneralThing, useOasisKasplat, useAztecBack, useLlamaOutsideCrate } from '@renderer/hooks/aztec'
import { useRocket, useClimbing, useVine } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachDiddyKasplat = useOasisKasplat()
const canReachArea2 = useAztecBack()
const canDoVanillaCrate2 = useLlamaOutsideCrate()
const hasJetbarrel = useRocket()
const hasClimbing = useClimbing()
const hasVines = useVine()
  return (
    <CratePool>
      <AztecCheck
        id={22001}
        name="Shuffled Melon Crate: At the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22010}
        name="Shuffled Melon Crate: Near oasis sand"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22011}
        name="Shuffled Melon Crate: Behind the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22012}
        name="Shuffled Melon Crate: To the left of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22013}
        name="Shuffled Melon Crate: To the right of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22014}
        name="Shuffled Melon Crate: Top of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={canReachDiddyKasplat.in}
        canGetBreak={canReachDiddyKasplat.out}
      />
      <AztecCheck
        id={22015}
        name="Shuffled Melon Crate: In front of Candy's"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22016}
        name="Shuffled Melon Crate: Behind the Llama's cage"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22021}
        name="Shuffled Melon Crate: Near the Llama Temple, left"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22022}
        name="Shuffled Melon Crate: Near the Llama Temple, right"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22023}
        name="Shuffled Melon Crate: Next to the Llama Temple"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22024}
        name="Shuffled Melon Crate: On top of the Llama Temple, back"
        region="Aztec Main Area"
        canGetLogic={canDoVanillaCrate2.in}
        canGetBreak={canDoVanillaCrate2.out}
      />
      <AztecCheck
        id={22025}
        name="Shuffled Melon Crate: Vanilla Location 1 (on top of the Llama Temple)"
        region="Aztec Main Area"
        canGetLogic={canDoVanillaCrate2.in}
        canGetBreak={canDoVanillaCrate2.out}
      />
      <AztecCheck
        id={22026}
        name="Shuffled Melon Crate: Near Funky's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22027}
        name="Shuffled Melon Crate: On top of the 5DT"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasJetbarrel}
        canGetBreak={canReachArea2.out && hasJetbarrel}
      />
      <AztecCheck
        id={22028}
        name="Shuffled Melon Crate: Near vanilla Warp 5"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22029}
        name="Shuffled Melon Crate: Near the Diddy Vulture's cage"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && ((hasClimbing && hasVines) || hasJetbarrel)}
        canGetBreak={canReachArea2.out && ((hasClimbing && hasVines) || hasJetbarrel)}
      />
      <AztecCheck
        id={22030}
        name="Shuffled Melon Crate: Under the Diddy Vulture's cage"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22031}
        name="Shuffled Melon Crate: Next to Snide's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22032}
        name="Shuffled Melon Crate: Behind the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22033}
        name="Shuffled Melon Crate: To the left of the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22034}
        name="Shuffled Melon Crate: Vanilla Location 2 (near the gong tower)"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22037}
        name="Shuffled Melon Crate: Vanilla Warp 1, at the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22038}
        name="Shuffled Melon Crate: Vanilla Warp 2, in front of Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22041}
        name="Shuffled Melon Crate: Vanilla Warp 3, end of the middle tunnel"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22042}
        name="Shuffled Melon Crate: Vanilla Warp 4, end of the middle tunnel"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22043}
        name="Shuffled Melon Crate: Vanilla Warp 4, at Funky's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22044}
        name="Shuffled Melon Crate: Vanilla Warp 5, near Snide's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
    </CratePool>
  )
}

const AztecMainCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default AztecMainCrates
