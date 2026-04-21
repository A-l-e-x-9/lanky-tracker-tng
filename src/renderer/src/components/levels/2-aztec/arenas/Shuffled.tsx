import ArenaPool from '@renderer/components/pools/Arenas'
import { useChunky5DoorGb, useAztecLlamaTemple, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useTiny5DoorGb, useAztecLlamaLava } from '@renderer/hooks/aztec'
import { useGrape, useMini } from '@renderer/hooks/kongs'
import AztecCheck from '../check'
import CaveArenas from './Cave'
import AztecMainArenas from './AztecMain'
import TTArenas from './TinyTemple'
import LlamaArenas from './LlamaTemple'

const ShuffledArenas: React.FC = () => {
const canReachVanillaDirt2 = useChunky5DoorGb()
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
      <LlamaArenas />
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
    </ArenaPool>
  )
}

export default ShuffledArenas
