import { useShallow } from 'zustand/react/shallow'
import RainbowCoinPool from '@renderer/components/pools/Arenas'
import { useGeneralDirt, useArena, useTempleDirt, useAztecTinyTemple, useSlamAztec, useTinyTempleIce, useCoconutKasplat, useAztecBack, useAztecLlamaTemple, useLlamaOutsideCrate, useDkTunnelGb, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useTiny5DoorGb, useAztecLlamaLava, useOasisKasplat } from '@renderer/hooks/aztec'
import { useShuffleDirt, useBananaportAll } from '@renderer/hooks/settings'
import { useShockwave, useClimbing, useVine, useDiddy, useDive, useRocket, useGrape, useMini } from '@renderer/hooks/kongs'
import AztecCheck from '../check'
import useDonkStore from '@renderer/store'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const hasShockwave = useShockwave()
const canReachVanillaArena = useArena()
const hasClimbing = useClimbing()
const hasVines = useVine()
const hasAllBananaports = useBananaportAll()
const canReachVanillaDirt2 = useTempleDirt()
const canReachTinyTemple = useAztecTinyTemple()
const hasDiddy = useDiddy()
const hasSlam = useSlamAztec()
const iceMelted = useTinyTempleIce()
const hasDiving = useDive()
const canReachDKKasplat = useCoconutKasplat()
const canReachDiddyKasplat = useOasisKasplat()
const canReachArea2 = useAztecBack()
const canDoVanillaCrate2 = useLlamaOutsideCrate()
const hasJetbarrel = useRocket()
const canReachQSTunnel = useDkTunnelGb()
const [didGB] = useDonkStore(useShallow((state) => [state.checks]))
const canGetDK5DT = useDk5DoorGb()
const canGetDiddy5DT = useDiddy5DoorGb()
const canGetLanky5DT = useLanky5DoorGb()
const canGetTiny5DT = useTiny5DoorGb()
const canReachLT = useAztecLlamaTemple()
const hasGrapes = useGrape()
const hasMiniMonkey = useMini()
const canReachLavaRoom = useAztecLlamaLava()
  return (
    <RainbowCoinPool>
      <AztecCheck
        id={32000}
        name="Shuffled Dirt Patch: Lanky's reward for killing a Necky"
        region="Tiny Temple"
        canGetLogic={canReachVanillaArena && hasShockwave}
      />
      <AztecCheck
        id={32001}
        name="Shuffled Dirt Patch: Vanilla Dirt 1 (at the oasis)"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32002}
        name="Shuffled Dirt Patch: Vanilla Dirt 2 (in Chunky's 5DT room)"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
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
      <AztecCheck
        id={32008}
        name="Shuffled Dirt Patch: In front of DK's room in the first tunnel"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32009}
        name="Shuffled Dirt Patch: In DK's room in the first tunnel"
        region="Aztec Caves"
        canGetLogic={canReachDKKasplat.in && hasShockwave}
        canGetBreak={canReachDKKasplat.out && hasShockwave}
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
        id={32017}
        name="Shuffled Dirt Patch: Near Chunky's barrel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32018}
        name="Shuffled Dirt Patch: Left of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32019}
        name="Shuffled Dirt Patch: Right of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32020}
        name="Shuffled Dirt Patch: Behind the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
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
        id={32035}
        name="Shuffled Dirt Patch: Inside DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={canReachQSTunnel.in && hasShockwave}
        canGetBreak={canReachQSTunnel.out && hasShockwave}
      />
      <AztecCheck
        id={32036}
        name="Shuffled Dirt Patch: Vanilla Warp 1, level start"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
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
        id={32039}
        name="Shuffled Dirt Patch: Vanilla Warp 2, end of the middle tunnel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32040}
        name="Shuffled Dirt Patch: Vanilla Warp 3, at Cranky's"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
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
      <AztecCheck
        id={32045}
        name="Shuffled Dirt Patch: Vanilla Warp 5, at DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={(didGB[2002] || hasAllBananaports) && hasShockwave}
      />
      <AztecCheck
        id={32046}
        name="Shuffled Dirt Patch: A dead end in DK's room"
        region="5 Door Temple"
        canGetLogic={canGetDK5DT.in && hasShockwave}
        canGetBreak={canGetDK5DT.out && hasShockwave}
      />
      <AztecCheck
        id={32047}
        name="Shuffled Dirt Patch: A dead end in Diddy's room"
        region="5 Door Temple"
        canGetLogic={canGetDiddy5DT.in && hasShockwave}
        canGetBreak={canGetDiddy5DT.out && hasShockwave}
      />
      <AztecCheck
        id={32048}
        name="Shuffled Dirt Patch: The sole dead end in Lanky's room"
        region="5 Door Temple"
        canGetLogic={canGetLanky5DT.in && hasShockwave}
        canGetBreak={canGetLanky5DT.out && hasShockwave}
      />
      <AztecCheck
        id={32049}
        name="Shuffled Dirt Patch: The right side of Lanky's room"
        region="5 Door Temple"
        canGetLogic={canGetLanky5DT.in && hasShockwave}
        canGetBreak={canGetLanky5DT.out && hasShockwave}
      />
      <AztecCheck
        id={32050}
        name="Shuffled Dirt Patch: The sole dead end in Tiny's room"
        region="5 Door Temple"
        canGetLogic={canGetTiny5DT.in && hasShockwave}
        canGetBreak={canGetTiny5DT.out && hasShockwave}
      />
      <AztecCheck
        id={32051}
        name="Shuffled Dirt Patch: Right side of Chunky's room"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
      />
      <AztecCheck
        id={32052}
        name="Shuffled Dirt Patch: Left side of Chunky's room"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
      />
      <AztecCheck
        id={32053}
        name="Shuffled Dirt Patch: Right of the Llama, lower"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32053}
        name="Shuffled Dirt Patch: Llama Temple entrance"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32054}
        name="Shuffled Dirt Patch: Right of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32055}
        name="Shuffled Dirt Patch: Left of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32056}
        name="Shuffled Dirt Patch: Left of the Llama, lower"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32057}
        name="Shuffled Dirt Patch: Fraternizing with Gene Rayburn"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasGrapes && hasShockwave}
        canGetBreak={canReachLT.out && hasGrapes && hasShockwave}
      />
      <AztecCheck
        id={32058}
        name="Shuffled Dirt Patch: LT Vanilla Warp 1, entrance left"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32059}
        name="Shuffled Dirt Patch: LT Vanilla Warp 1, near the Match Game studio"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32060}
        name="Shuffled Dirt Patch: LT Vanilla Warp 2, entrance right"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32061}
        name="Shuffled Dirt Patch: LT Vanilla Warp 2, in Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasMiniMonkey && hasShockwave}
        canGetBreak={canReachLT.out && hasMiniMonkey && hasShockwave}
      />
      <AztecCheck
        id={32063}
        name="Shuffled Dirt Patch: DK's quicksand tunnel switch"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32064}
        name="Shuffled Dirt Patch: Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLavaRoom.in && hasShockwave}
        canGetBreak={canReachLavaRoom.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const ShuffledDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirt
