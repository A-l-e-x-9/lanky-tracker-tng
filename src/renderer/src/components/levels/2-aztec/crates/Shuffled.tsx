import { useShallow } from 'zustand/react/shallow'
import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useArena, useChunky5DoorGb, useAztecTinyTemple, useSlamAztec, useTinyTempleIce, useCoconutKasplat, useAztecBack, useAztecLlamaTemple, useLlamaOutsideCrate, useDkTunnelGb, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useTiny5DoorGb, useAztecLlamaLava, useOasisKasplat } from '@renderer/hooks/aztec'
import { useShuffleCrates, useBananaportAll } from '@renderer/hooks/settings'
import { useClimbing, useVine, useDiddy, useDive, useRocket, useGrape, useMini, useAnyGun, useOrange } from '@renderer/hooks/kongs'
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
const canGetDK5DT = useDk5DoorGb()
const canGetDiddy5DT = useDiddy5DoorGb()
const canGetLanky5DT = useLanky5DoorGb()
const canGetTiny5DT = useTiny5DoorGb()
const canReachLT = useAztecLlamaTemple()
const hasGrapes = useGrape()
const hasMiniMonkey = useMini()
const canReachLavaRoom = useAztecLlamaLava()
const canFreeLanky = useFreeLankySwitch()
const hasAGun = useAnyGun()
const hasOranges = useOrange()
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
        id={22001}
        name="Shuffled Melon Crate: At the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22002}
        name="Shuffled Melon Crate: In Chunky's 5DT room"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
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
      <AztecCheck
        id={22008}
        name="Shuffled Melon Crate: In front of DK's room in the first tunnel"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22009}
        name="Shuffled Melon Crate: In DK's room in the first tunnel"
        region="Aztec Caves"
        canGetLogic={canReachDKKasplat.in}
        canGetBreak={canReachDKKasplat.out}
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
        id={22017}
        name="Shuffled Melon Crate: Near Chunky's barrel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22018}
        name="Shuffled Melon Crate: Left of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22019}
        name="Shuffled Melon Crate: Right of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22020}
        name="Shuffled Melon Crate: Behind the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
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
        id={22035}
        name="Shuffled Melon Crate: Inside DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={canReachQSTunnel.in}
        canGetBreak={canReachQSTunnel.out}
      />
      <AztecCheck
        id={22036}
        name="Shuffled Melon Crate: Vanilla Warp 1, level start"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
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
        id={22039}
        name="Shuffled Melon Crate: Vanilla Warp 2, end of the middle tunnel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22040}
        name="Shuffled Melon Crate: Vanilla Warp 3, at Cranky's"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
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
      <AztecCheck
        id={22045}
        name="Shuffled Melon Crate: Vanilla Warp 5, at DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={didGB[2002] || hasAllBananaports}
      />
      <AztecCheck
        id={22046}
        name="Shuffled Melon Crate: A dead end in DK's room"
        region="5 Door Temple"
        canGetLogic={canGetDK5DT.in}
        canGetBreak={canGetDK5DT.out}
      />
      <AztecCheck
        id={22047}
        name="Shuffled Melon Crate: A dead end in Diddy's room"
        region="5 Door Temple"
        canGetLogic={canGetDiddy5DT.in}
        canGetBreak={canGetDiddy5DT.out}
      />
      <AztecCheck
        id={22048}
        name="Shuffled Melon Crate: The sole dead end in Lanky's room"
        region="5 Door Temple"
        canGetLogic={canGetLanky5DT.in}
        canGetBreak={canGetLanky5DT.out}
      />
      <AztecCheck
        id={22049}
        name="Shuffled Melon Crate: The right side of Lanky's room"
        region="5 Door Temple"
        canGetLogic={canGetLanky5DT.in}
        canGetBreak={canGetLanky5DT.out}
      />
      <AztecCheck
        id={22050}
        name="Shuffled Melon Crate: The sole dead end in Tiny's room"
        region="5 Door Temple"
        canGetLogic={canGetTiny5DT.in}
        canGetBreak={canGetTiny5DT.out}
      />
      <AztecCheck
        id={22051}
        name="Shuffled Melon Crate: Right side of Chunky's room"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
      />
      <AztecCheck
        id={22052}
        name="Shuffled Melon Crate: Left side of Chunky's room"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
      />
      <AztecCheck
        id={22053}
        name="Shuffled Melon Crate: Right of the Llama, lower"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22053}
        name="Shuffled Melon Crate: Vanilla Location 3 (Llama Temple entrance)"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22054}
        name="Shuffled Melon Crate: Right of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22055}
        name="Shuffled Melon Crate: Left of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22056}
        name="Shuffled Melon Crate: Left of the Llama, lower"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22057}
        name="Shuffled Melon Crate: Fraternizing with Gene Rayburn"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasGrapes}
        canGetBreak={canReachLT.out && hasGrapes}
      />
      <AztecCheck
        id={22058}
        name="Shuffled Melon Crate: LT Vanilla Warp 1, entrance left"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22059}
        name="Shuffled Melon Crate: LT Vanilla Warp 1, near the Match Game studio"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22060}
        name="Shuffled Melon Crate: LT Vanilla Warp 2, entrance right"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22061}
        name="Shuffled Melon Crate: LT Vanilla Warp 2, in Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasMiniMonkey}
        canGetBreak={canReachLT.out && hasMiniMonkey}
      />
      <AztecCheck
        id={22062}
        name="Shuffled Melon Crate: In the Llama's swimming pool"
        region="Llama Temple"
        canGetLogic={canReachLT.in && canFreeLanky.in && hasDiving.in}
        canGetBreak={canReachLT.out && (hasAGun || hasOranges) && hasDiving.out}
      />
      <AztecCheck
        id={22063}
        name="Shuffled Melon Crate: DK's quicksand tunnel switch"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22064}
        name="Shuffled Melon Crate: Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLavaRoom.in}
        canGetBreak={canReachLavaRoom.out}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
