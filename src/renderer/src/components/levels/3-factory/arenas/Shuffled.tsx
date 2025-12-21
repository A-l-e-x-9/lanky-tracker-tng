import { useShallow } from 'zustand/react/shallow'
import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useArena } from '@renderer/hooks/factory'
import { useShuffledArenas, useBananaportAll } from '@renderer/hooks/settings'
import { useClimbing, useVine, usePunch } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'
import useDonkStore from '@renderer/store'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useArena()
const hasPrimatePunch = usePunch()
  return (
    <ArenaPool>
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Vanilla Arena (in the R&D Room)"
        region="R&D Room"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <FactoryCheck
        id={13001}
        name="Shuffled Battle Arena: In Chunky's dark room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <FactoryCheck
        id={13002}
        name="Shuffled Battle Arena: On carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13003}
        name="Shuffled Battle Arena: Near carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13004}
        name="Shuffled Battle Arena: Clock-in room, left side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13005}
        name="Shuffled Battle Arena: Clock-in room, right side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13006}
        name="Shuffled Battle Arena: Top of the hatch"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13007}
        name="Shuffled Battle Arena: Center of the hatch"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13008}
        name="Shuffled Battle Arena: Bottom of the hatch"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13009}
        name="Shuffled Battle Arena: In the tunnel to the Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13010}
        name="Shuffled Battle Arena: Near oasis sand"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13011}
        name="Shuffled Battle Arena: Behind the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13012}
        name="Shuffled Battle Arena: To the left of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13013}
        name="Shuffled Battle Arena: To the right of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13014}
        name="Shuffled Battle Arena: Top of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={canReachDiddyKasplat.in}
        canGetBreak={canReachDiddyKasplat.out}
      />
      <FactoryCheck
        id={13015}
        name="Shuffled Battle Arena: In front of Candy's"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13016}
        name="Shuffled Battle Arena: Behind the Llama's cage"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13017}
        name="Shuffled Battle Arena: Near Chunky's barrel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13018}
        name="Shuffled Battle Arena: Left of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13019}
        name="Shuffled Battle Arena: Right of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13020}
        name="Shuffled Battle Arena: Behind the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13021}
        name="Shuffled Battle Arena: Near the Llama Temple, left"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13022}
        name="Shuffled Battle Arena: Near the Llama Temple, right"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13023}
        name="Shuffled Battle Arena: Next to the Llama Temple"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13024}
        name="Shuffled Battle Arena: On top of the Llama Temple, back"
        region="Aztec Main Area"
        canGetLogic={canDoVanillaCrate2.in}
        canGetBreak={canDoVanillaCrate2.out}
      />
      <FactoryCheck
        id={13025}
        name="Shuffled Battle Arena: On top of the Llama Temple"
        region="Aztec Main Area"
        canGetLogic={canDoVanillaCrate2.in}
        canGetBreak={canDoVanillaCrate2.out}
      />
      <FactoryCheck
        id={13026}
        name="Shuffled Battle Arena: Near Funky's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13027}
        name="Shuffled Battle Arena: On top of the 5DT"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasJetbarrel}
        canGetBreak={canReachArea2.out && hasJetbarrel}
      />
      <FactoryCheck
        id={13028}
        name="Shuffled Battle Arena: Near vanilla Warp 5"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13029}
        name="Shuffled Battle Arena: Near the Diddy Vulture's cage"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && ((hasClimbing && hasVines) || hasJetbarrel)}
        canGetBreak={canReachArea2.out && ((hasClimbing && hasVines) || hasJetbarrel)}
      />
      <FactoryCheck
        id={13030}
        name="Shuffled Battle Arena: Under the Diddy Vulture's cage"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13031}
        name="Shuffled Battle Arena: Next to Snide's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13032}
        name="Shuffled Battle Arena: Behind the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13033}
        name="Shuffled Battle Arena: To the left of the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13034}
        name="Shuffled Battle Arena: Near the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13035}
        name="Shuffled Battle Arena: Inside DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={canReachQSTunnel.in}
        canGetBreak={canReachQSTunnel.out}
      />
      <FactoryCheck
        id={13036}
        name="Shuffled Battle Arena: Vanilla Warp 1, level start"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13037}
        name="Shuffled Battle Arena: Vanilla Warp 1, at the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13038}
        name="Shuffled Battle Arena: Vanilla Warp 2, in front of Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13039}
        name="Shuffled Battle Arena: Vanilla Warp 2, end of the middle tunnel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13040}
        name="Shuffled Battle Arena: Vanilla Warp 3, at Cranky's"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13041}
        name="Shuffled Battle Arena: Vanilla Warp 3, end of the middle tunnel"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13042}
        name="Shuffled Battle Arena: Vanilla Warp 4, end of the middle tunnel"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13043}
        name="Shuffled Battle Arena: Vanilla Warp 4, at Funky's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13044}
        name="Shuffled Battle Arena: Vanilla Warp 5, near Snide's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <FactoryCheck
        id={13045}
        name="Shuffled Battle Arena: Vanilla Warp 5, at DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={didGB[2002] || hasAllBananaports}
      />
      <FactoryCheck
        id={13046}
        name="Shuffled Battle Arena: A dead end in DK's room"
        region="5 Door Temple"
        canGetLogic={canGetDK5DT.in}
        canGetBreak={canGetDK5DT.out}
      />
      <FactoryCheck
        id={13047}
        name="Shuffled Battle Arena: A dead end in Diddy's room"
        region="5 Door Temple"
        canGetLogic={canGetDiddy5DT.in}
        canGetBreak={canGetDiddy5DT.out}
      />
      <FactoryCheck
        id={13048}
        name="Shuffled Battle Arena: The sole dead end in Lanky's room"
        region="5 Door Temple"
        canGetLogic={canGetLanky5DT.in}
        canGetBreak={canGetLanky5DT.out}
      />
      <FactoryCheck
        id={13049}
        name="Shuffled Battle Arena: The right side of Lanky's room"
        region="5 Door Temple"
        canGetLogic={canGetLanky5DT.in}
        canGetBreak={canGetLanky5DT.out}
      />
      <FactoryCheck
        id={13050}
        name="Shuffled Battle Arena: The sole dead end in Tiny's room"
        region="5 Door Temple"
        canGetLogic={canGetTiny5DT.in}
        canGetBreak={canGetTiny5DT.out}
      />
      <FactoryCheck
        id={13051}
        name="Shuffled Battle Arena: Right side of Chunky's room"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
      />
      <FactoryCheck
        id={13052}
        name="Shuffled Battle Arena: Left side of Chunky's room"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
      />
      <FactoryCheck
        id={13053}
        name="Shuffled Battle Arena: Right of the Llama, lower"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <FactoryCheck
        id={13053}
        name="Shuffled Battle Arena: Llama Temple entrance"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <FactoryCheck
        id={13054}
        name="Shuffled Battle Arena: Right of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <FactoryCheck
        id={13055}
        name="Shuffled Battle Arena: Left of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <FactoryCheck
        id={13056}
        name="Shuffled Battle Arena: Left of the Llama, lower"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <FactoryCheck
        id={13057}
        name="Shuffled Battle Arena: Fraternizing with Gene Rayburn"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasGrapes}
        canGetBreak={canReachLT.out && hasGrapes}
      />
      <FactoryCheck
        id={13058}
        name="Shuffled Battle Arena: LT Vanilla Warp 1, entrance left"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <FactoryCheck
        id={13059}
        name="Shuffled Battle Arena: LT Vanilla Warp 1, near the Match Game studio"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <FactoryCheck
        id={13060}
        name="Shuffled Battle Arena: LT Vanilla Warp 2, entrance right"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <FactoryCheck
        id={13061}
        name="Shuffled Battle Arena: LT Vanilla Warp 2, in Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasMiniMonkey}
        canGetBreak={canReachLT.out && hasMiniMonkey}
      />
      <FactoryCheck
        id={13063}
        name="Shuffled Battle Arena: DK's quicksand tunnel switch"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <FactoryCheck
        id={13064}
        name="Shuffled Battle Arena: Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLavaRoom.in}
        canGetBreak={canReachLavaRoom.out}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ShuffledArenas
