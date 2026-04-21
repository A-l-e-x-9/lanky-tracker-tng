import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useAztecLlamaTemple, useAztecLlamaLava } from '@renderer/hooks/aztec'
import { useShockwave, useGrape, useMini } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const hasShockwave = useShockwave()
const canReachLT = useAztecLlamaTemple()
const hasGrapes = useGrape()
const hasMiniMonkey = useMini()
const canReachLavaRoom = useAztecLlamaLava()
  return (
    <RainbowCoinPool>
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

const LlamaDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default LlamaDirt
