import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useArena, useTempleDirt, useAztecTinyTemple, useSlamAztec, useTinyTempleIce, useAztecLlamaTemple, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useTiny5DoorGb, useAztecLlamaLava } from '@renderer/hooks/aztec'
import { useShockwave, useClimbing, useVine, useDiddy, useDive, useRocket, useGrape, useMini } from '@renderer/hooks/kongs'
import AztecCheck from '../check'
import CaveDirt from './Cave'
import AztecMainDirt from './AztecMain'

const ShuffledDirt: React.FC = () => {
const hasShockwave = useShockwave()
const canReachVanillaArena = useArena()
const hasClimbing = useClimbing()
const hasVines = useVine()
const canReachVanillaDirt2 = useTempleDirt()
const canReachTinyTemple = useAztecTinyTemple()
const hasDiddy = useDiddy()
const hasSlam = useSlamAztec()
const iceMelted = useTinyTempleIce()
const hasDiving = useDive()
const hasJetbarrel = useRocket()
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
      <CaveDirt />
      <AztecMainDirt />
      <AztecCheck
        id={32000}
        name="Shuffled Dirt Patch: Lanky's reward for killing a Necky"
        region="Tiny Temple"
        canGetLogic={canReachVanillaArena && hasShockwave}
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
        id={32054}
        name="Shuffled Dirt Patch: Llama Temple entrance"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32055}
        name="Shuffled Dirt Patch: Right of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32056}
        name="Shuffled Dirt Patch: Left of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32057}
        name="Shuffled Dirt Patch: Left of the Llama, lower"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32058}
        name="Shuffled Dirt Patch: Fraternizing with Gene Rayburn"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasGrapes && hasShockwave}
        canGetBreak={canReachLT.out && hasGrapes && hasShockwave}
      />
      <AztecCheck
        id={32059}
        name="Shuffled Dirt Patch: LT Vanilla Warp 1, entrance left"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32060}
        name="Shuffled Dirt Patch: LT Vanilla Warp 1, near the Match Game studio"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32061}
        name="Shuffled Dirt Patch: LT Vanilla Warp 2, entrance right"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32062}
        name="Shuffled Dirt Patch: LT Vanilla Warp 2, in Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasMiniMonkey && hasShockwave}
        canGetBreak={canReachLT.out && hasMiniMonkey && hasShockwave}
      />
      <AztecCheck
        id={32064}
        name="Shuffled Dirt Patch: DK's quicksand tunnel switch"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasShockwave}
        canGetBreak={canReachLT.out && hasShockwave}
      />
      <AztecCheck
        id={32065}
        name="Shuffled Dirt Patch: Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLavaRoom.in && hasShockwave}
        canGetBreak={canReachLavaRoom.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

export default ShuffledDirt
