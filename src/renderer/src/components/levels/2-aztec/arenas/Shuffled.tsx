import ArenaPool from '@renderer/components/pools/Arenas'
import { useArena, useChunky5DoorGb, useAztecTinyTemple, useSlamAztec, useTinyTempleIce, useAztecLlamaTemple, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useTiny5DoorGb, useAztecLlamaLava } from '@renderer/hooks/aztec'
import { useDiddy, useDive, useGrape, useMini } from '@renderer/hooks/kongs'
import AztecCheck from '../check'
import CaveArenas from './Cave'
import AztecMainArenas from './AztecMain'
import TTArenas from './TinyTemple'

const ShuffledArenas: React.FC = () => {
const canReachVanillaArena = useArena()
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
  return (
    <ArenaPool>
      <CaveArenas />
      <AztecMainArenas />
      <TTArenas />
      <AztecCheck
        id={12002}
        name="Shuffled Battle Arena: In Chunky's 5DT room"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
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

export default ShuffledArenas
