import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import {  } from '@renderer/hooks/aztec'
import { useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const hasShockwave = useShockwave()
  return (
    <RainbowCoinPool>
      <AztecCheck
        id={32001}
        name="Shuffled Dirt Patch: Vanilla Dirt 1 (at the oasis)"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32010}
        name="Shuffled Dirt Patch: Near oasis sand"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32011}
        name="Shuffled Dirt Patch: Behind the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32012}
        name="Shuffled Dirt Patch: To the left of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32013}
        name="Shuffled Dirt Patch: To the right of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32014}
        name="Shuffled Dirt Patch: Top of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={canReachDiddyKasplat.in && hasShockwave}
        canGetBreak={canReachDiddyKasplat.out && hasShockwave}
      />
      <AztecCheck
        id={32015}
        name="Shuffled Dirt Patch: In front of Candy's"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32016}
        name="Shuffled Dirt Patch: Behind the Llama's cage"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32021}
        name="Shuffled Dirt Patch: Near the Llama Temple, left"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32022}
        name="Shuffled Dirt Patch: Near the Llama Temple, right"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32023}
        name="Shuffled Dirt Patch: Next to the Llama Temple"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32024}
        name="Shuffled Dirt Patch: On top of the Llama Temple, back"
        region="Aztec Main Area"
        canGetLogic={canDoVanillaCrate2.in && hasShockwave}
        canGetBreak={canDoVanillaCrate2.out && hasShockwave}
      />
      <AztecCheck
        id={32025}
        name="Shuffled Dirt Patch: On top of the Llama Temple"
        region="Aztec Main Area"
        canGetLogic={canDoVanillaCrate2.in && hasShockwave}
        canGetBreak={canDoVanillaCrate2.out && hasShockwave}
      />
      <AztecCheck
        id={32026}
        name="Shuffled Dirt Patch: Near Funky's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32027}
        name="Shuffled Dirt Patch: On top of the 5DT"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasJetbarrel && hasShockwave}
        canGetBreak={canReachArea2.out && hasJetbarrel && hasShockwave}
      />
      <AztecCheck
        id={32028}
        name="Shuffled Dirt Patch: Near vanilla Warp 5"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32029}
        name="Shuffled Dirt Patch: Near the Diddy Vulture's cage"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && ((hasClimbing && hasVines) || hasJetbarrel) && hasShockwave}
        canGetBreak={canReachArea2.out && ((hasClimbing && hasVines) || hasJetbarrel) && hasShockwave}
      />
      <AztecCheck
        id={32030}
        name="Shuffled Dirt Patch: Under the Diddy Vulture's cage"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32031}
        name="Shuffled Dirt Patch: Next to Snide's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32032}
        name="Shuffled Dirt Patch: Behind the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32033}
        name="Shuffled Dirt Patch: To the left of the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32034}
        name="Shuffled Dirt Patch: Near the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32037}
        name="Shuffled Dirt Patch: Vanilla Warp 1, at the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32038}
        name="Shuffled Dirt Patch: Vanilla Warp 2, in front of Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32041}
        name="Shuffled Dirt Patch: Vanilla Warp 3, end of the middle tunnel"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32042}
        name="Shuffled Dirt Patch: Vanilla Warp 4, end of the middle tunnel"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32043}
        name="Shuffled Dirt Patch: Vanilla Warp 4, at Funky's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32044}
        name="Shuffled Dirt Patch: Vanilla Warp 5, near Snide's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const AztecMainDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default AztecMainDirt
