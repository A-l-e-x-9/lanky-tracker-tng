import CratePool from '@renderer/components/pools/Crates'
import { useChunky5DoorGb, useAztecTinyTemple, useSlamAztec, useTinyTempleIce, useAztecLlamaTemple, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useTiny5DoorGb, useAztecLlamaLava, useFreeLankySwitch } from '@renderer/hooks/aztec'
import { useDiddy, useDive, useGrape, useMini, useAnyGun, useOrange } from '@renderer/hooks/kongs'
import AztecCheck from '../check'
import CaveCrates from './Cave'
import AztecMainCrates from './AztecMain'
import TTCrates from './TinyTemple'

const ShuffledCrates: React.FC = () => {
const canReachVanillaDirt2 = useChunky5DoorGb()
const canReachTinyTemple = useAztecTinyTemple()
const hasDiddy = useDiddy()
const hasSlam = useSlamAztec()
const iceMelted = useTinyTempleIce()
const hasDiving = useDive()
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
      <CaveCrates />
      <AztecMainCrates />
      <TTCrates />
      <AztecCheck
        id={22002}
        name="Shuffled Melon Crate: In Chunky's 5DT room"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
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
        id={22054}
        name="Shuffled Melon Crate: Vanilla Location 3 (Llama Temple entrance)"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22055}
        name="Shuffled Melon Crate: Right of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22056}
        name="Shuffled Melon Crate: Left of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22057}
        name="Shuffled Melon Crate: Left of the Llama, lower"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22058}
        name="Shuffled Melon Crate: Fraternizing with Gene Rayburn"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasGrapes}
        canGetBreak={canReachLT.out && hasGrapes}
      />
      <AztecCheck
        id={22059}
        name="Shuffled Melon Crate: LT Vanilla Warp 1, entrance left"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22060}
        name="Shuffled Melon Crate: LT Vanilla Warp 1, near the Match Game studio"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22061}
        name="Shuffled Melon Crate: LT Vanilla Warp 2, entrance right"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22062}
        name="Shuffled Melon Crate: LT Vanilla Warp 2, in Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasMiniMonkey}
        canGetBreak={canReachLT.out && hasMiniMonkey}
      />
      <AztecCheck
        id={22063}
        name="Shuffled Melon Crate: In the Llama's swimming pool"
        region="Llama Temple"
        canGetLogic={canReachLT.in && canFreeLanky.in && hasDiving.in}
        canGetBreak={canReachLT.out && (hasAGun || hasOranges) && hasDiving.out}
      />
      <AztecCheck
        id={22064}
        name="Shuffled Melon Crate: DK's quicksand tunnel switch"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={22065}
        name="Shuffled Melon Crate: Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLavaRoom.in}
        canGetBreak={canReachLavaRoom.out}
      />
    </CratePool>
  )
}

export default ShuffledCrates
