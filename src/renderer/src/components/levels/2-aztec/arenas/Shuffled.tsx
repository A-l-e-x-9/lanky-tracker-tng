import { useShallow } from 'zustand/react/shallow'
import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useArena, useChunky5DoorGb, useAztecTinyTemple, useSlamAztec, useTinyTempleIce, useCoconutKasplat, useAztecBack, useAztecLlamaTemple, useLlamaOutsideCrate, useDkTunnelGb, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useTiny5DoorGb, useAztecLlamaLava, useOasisKasplat } from '@renderer/hooks/aztec'
import { useShuffledArenas, useBananaportAll } from '@renderer/hooks/settings'
import { useClimbing, useVine, useDiddy, useDive, useRocket, useGrape, useMini } from '@renderer/hooks/kongs'
import AztecCheck from '../check'
import useDonkStore from '@renderer/store'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useArena()
const hasClimbing = useClimbing()
const hasVines = useVine()
const hasAllBananaports = useBananaportAll()
const canReachVanillaDirt2 = useChunky5DoorGb()
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
const canGetDK5DT = useDk5DoorGb
const canGetDiddy5DT = useDiddy5DoorGb
const canGetLanky5DT = useLanky5DoorGb
const canGetTiny5DT = useTiny5DoorGb
const canReachLT = useAztecLlamaTemple()
const hasGrapes = useGrape()
const hasMiniMonkey = useMini()
const canReachLavaRoom = useAztecLlamaLava()
  return (
    <ArenaPool>
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Vanilla Arena (Lanky's reward for killing a Necky)"
        region="Tiny Temple"
        canGetLogic={canReachVanillaArena}
      />
      <AztecCheck
        id={12001}
        name="Shuffled Battle Arena: At the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12002}
        name="Shuffled Battle Arena: In Chunky's 5DT room"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
      />
      <AztecCheck
        id={12003}
        name="Shuffled Battle Arena: Back left of Tiny Temple's main room"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in}
        canGetBreak={canReachTinyTemple.out}
      />
      <AztecCheck
        id={12004}
        name="Shuffled Battle Arena: TT starting room, low"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in}
        canGetBreak={canReachTinyTemple.out}
      />
      <AztecCheck
        id={12005}
        name="Shuffled Battle Arena: TT starting room, high"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && hasDiddy && hasSlam}
        canGetBreak={canReachTinyTemple.out && hasDiddy && hasSlam}
      />
      <AztecCheck
        id={12006}
        name="Shuffled Battle Arena: Tiny's prison room"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && iceMelted.in && hasDiving.in}
        canGetBreak={canReachTinyTemple.out && iceMelted.out && hasDiving.out}
      />
      <AztecCheck
        id={12007}
        name="Shuffled Battle Arena: Next to Tiny's cage"
        region="Tiny Temple"
        canGetLogic={canReachTinyTemple.in && iceMelted.in && hasDiving.in}
        canGetBreak={canReachTinyTemple.out && iceMelted.out && hasDiving.out}
      />
      <AztecCheck
        id={12008}
        name="Shuffled Battle Arena: In front of DK's room in the first tunnel"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12009}
        name="Shuffled Battle Arena: In DK's room in the first tunnel"
        region="Aztec Caves"
        canGetLogic={canReachDKKasplat.in}
        canGetBreak={canReachDKKasplat.out}
      />
      <AztecCheck
        id={12010}
        name="Shuffled Battle Arena: Near oasis sand"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12011}
        name="Shuffled Battle Arena: Behind the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12012}
        name="Shuffled Battle Arena: To the left of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12013}
        name="Shuffled Battle Arena: To the right of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12014}
        name="Shuffled Battle Arena: Top of the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={canReachDiddyKasplat.in}
        canGetBreak={canReachDiddyKasplat.out}
      />
      <AztecCheck
        id={12015}
        name="Shuffled Battle Arena: In front of Candy's"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12016}
        name="Shuffled Battle Arena: Behind the Llama's cage"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12017}
        name="Shuffled Battle Arena: Near Chunky's barrel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12018}
        name="Shuffled Battle Arena: Left of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12019}
        name="Shuffled Battle Arena: Right of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12020}
        name="Shuffled Battle Arena: Behind the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12021}
        name="Shuffled Battle Arena: Near the Llama Temple, left"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12022}
        name="Shuffled Battle Arena: Near the Llama Temple, right"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12023}
        name="Shuffled Battle Arena: Next to the Llama Temple"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12024}
        name="Shuffled Battle Arena: On top of the Llama Temple, back"
        region="Aztec Main Area"
        canGetLogic={canDoVanillaCrate2.in}
        canGetBreak={canDoVanillaCrate2.out}
      />
      <AztecCheck
        id={12025}
        name="Shuffled Battle Arena: On top of the Llama Temple"
        region="Aztec Main Area"
        canGetLogic={canDoVanillaCrate2.in}
        canGetBreak={canDoVanillaCrate2.out}
      />
      <AztecCheck
        id={12026}
        name="Shuffled Battle Arena: Near Funky's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12027}
        name="Shuffled Battle Arena: On top of the 5DT"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && hasJetbarrel}
        canGetBreak={canReachArea2.out && hasJetbarrel}
      />
      <AztecCheck
        id={12028}
        name="Shuffled Battle Arena: Near vanilla Warp 5"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12029}
        name="Shuffled Battle Arena: Near the Diddy Vulture's cage"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in && ((hasClimbing && hasVines) || hasJetbarrel)}
        canGetBreak={canReachArea2.out && ((hasClimbing && hasVines) || hasJetbarrel)}
      />
      <AztecCheck
        id={12030}
        name="Shuffled Battle Arena: Under the Diddy Vulture's cage"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12031}
        name="Shuffled Battle Arena: Next to Snide's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12032}
        name="Shuffled Battle Arena: Behind the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12033}
        name="Shuffled Battle Arena: To the left of the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12034}
        name="Shuffled Battle Arena: Near the gong tower"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12035}
        name="Shuffled Battle Arena: Inside DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={canReachQSTunnel.in}
        canGetBreak={canReachQSTunnel.out}
      />
      <AztecCheck
        id={12036}
        name="Shuffled Battle Arena: Vanilla Warp 1, level start"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12037}
        name="Shuffled Battle Arena: Vanilla Warp 1, at the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12038}
        name="Shuffled Battle Arena: Vanilla Warp 2, in front of Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12039}
        name="Shuffled Battle Arena: Vanilla Warp 2, end of the middle tunnel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12040}
        name="Shuffled Battle Arena: Vanilla Warp 3, at Cranky's"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12041}
        name="Shuffled Battle Arena: Vanilla Warp 3, end of the middle tunnel"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12042}
        name="Shuffled Battle Arena: Vanilla Warp 4, end of the middle tunnel"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12043}
        name="Shuffled Battle Arena: Vanilla Warp 4, at Funky's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12044}
        name="Shuffled Battle Arena: Vanilla Warp 5, near Snide's"
        region="Aztec Main Area"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12045}
        name="Shuffled Battle Arena: Vanilla Warp 5, at DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={didGB[2002] || hasAllBananaports}
      />
      <AztecCheck
        id={12046}
        name="Shuffled Battle Arena: A dead end in DK's room"
        region="5 Door Temple"
        canGetLogic={canGetDK5DT.in}
        canGetBreak={canGetDK5DT.out}
      />
      <AztecCheck
        id={12047}
        name="Shuffled Battle Arena: A dead end in Diddy's room"
        region="5 Door Temple"
        canGetLogic={canGetDiddy5DT.in}
        canGetBreak={canGetDiddy5DT.out}
      />
      <AztecCheck
        id={12048}
        name="Shuffled Battle Arena: The sole dead end in Lanky's room"
        region="5 Door Temple"
        canGetLogic={canGetLanky5DT.in}
        canGetBreak={canGetLanky5DT.out}
      />
      <AztecCheck
        id={12049}
        name="Shuffled Battle Arena: The right side of Lanky's room"
        region="5 Door Temple"
        canGetLogic={canGetLanky5DT.in}
        canGetBreak={canGetLanky5DT.out}
      />
      <AztecCheck
        id={12050}
        name="Shuffled Battle Arena: The sole dead end in Tiny's room"
        region="5 Door Temple"
        canGetLogic={canGetTiny5DT.in}
        canGetBreak={canGetTiny5DT.out}
      />
      <AztecCheck
        id={12051}
        name="Shuffled Battle Arena: Right side of Chunky's room"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
      />
      <AztecCheck
        id={12052}
        name="Shuffled Battle Arena: Left side of Chunky's room"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
      />
      <AztecCheck
        id={12053}
        name="Shuffled Battle Arena: Right of the Llama, lower"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12053}
        name="Shuffled Battle Arena: Llama Temple entrance"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12054}
        name="Shuffled Battle Arena: Right of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12055}
        name="Shuffled Battle Arena: Left of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12056}
        name="Shuffled Battle Arena: Left of the Llama, lower"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12057}
        name="Shuffled Battle Arena: Fraternizing with Gene Rayburn"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasGrapes}
        canGetBreak={canReachLT.out && hasGrapes}
      />
      <AztecCheck
        id={12058}
        name="Shuffled Battle Arena: LT Vanilla Warp 1, entrance left"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12059}
        name="Shuffled Battle Arena: LT Vanilla Warp 1, near the Match Game studio"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12060}
        name="Shuffled Battle Arena: LT Vanilla Warp 2, entrance right"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12061}
        name="Shuffled Battle Arena: LT Vanilla Warp 2, in Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasMiniMonkey}
        canGetBreak={canReachLT.out && hasMiniMonkey}
      />
      <AztecCheck
        id={12063}
        name="Shuffled Battle Arena: DK's quicksand tunnel switch"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12064}
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
