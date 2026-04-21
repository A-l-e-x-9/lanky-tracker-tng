import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useTempleDirt, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useTiny5DoorGb } from '@renderer/hooks/aztec'
import { useShockwave } from '@renderer/hooks/kongs'
import AztecCheck from '../check'
import CaveDirt from './Cave'
import AztecMainDirt from './AztecMain'
import TTDirt from './TinyTemple'
import LlamaDirt from './LlamaTemple'

const ShuffledDirt: React.FC = () => {
const hasShockwave = useShockwave()
const canReachVanillaDirt2 = useTempleDirt()
const canGetDK5DT = useDk5DoorGb()
const canGetDiddy5DT = useDiddy5DoorGb()
const canGetLanky5DT = useLanky5DoorGb()
const canGetTiny5DT = useTiny5DoorGb()
  return (
    <RainbowCoinPool>
      <CaveDirt />
      <AztecMainDirt />
      <TTDirt />
      <LlamaDirt />
      <AztecCheck
        id={32002}
        name="Shuffled Dirt Patch: Vanilla Dirt 2 (in Chunky's 5DT room)"
        region="5 Door Temple"
        canGetLogic={canReachVanillaDirt2.in}
        canGetBreak={canReachVanillaDirt2.out}
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
    </RainbowCoinPool>
  )
}

export default ShuffledDirt
