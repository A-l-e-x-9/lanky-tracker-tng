import CratePool from '@renderer/components/pools/Crates'
import { useChunky5DoorGb, useAztecLlamaTemple, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useTiny5DoorGb, useAztecLlamaLava, useFreeLankySwitch } from '@renderer/hooks/aztec'
import { useDive, useGrape, useMini, useAnyGun, useOrange } from '@renderer/hooks/kongs'
import AztecCheck from '../check'
import CaveCrates from './Cave'
import AztecMainCrates from './AztecMain'
import TTCrates from './TinyTemple'
import LlamaCrates from './LlamaTemple'

const ShuffledCrates: React.FC = () => {
const canReachVanillaDirt2 = useChunky5DoorGb()
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
      <LlamaCrates />
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
    </CratePool>
  )
}

export default ShuffledCrates
