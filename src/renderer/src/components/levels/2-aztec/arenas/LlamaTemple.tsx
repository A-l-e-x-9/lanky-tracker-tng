import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useAztecLlamaTemple, useAztecLlamaLava } from '@renderer/hooks/aztec'
import { useGrape, useMini } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canReachLT = useAztecLlamaTemple()
const hasGrapes = useGrape()
const hasMiniMonkey = useMini()
const canReachLavaRoom = useAztecLlamaLava()
  return (
    <ArenaPool>
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Right of the Llama, lower"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Llama Temple entrance"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Right of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Left of the Llama, upper"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Left of the Llama, lower"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Fraternizing with Gene Rayburn"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasGrapes}
        canGetBreak={canReachLT.out && hasGrapes}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: LT Vanilla Warp 1, entrance left"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: LT Vanilla Warp 1, near the Match Game studio"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: LT Vanilla Warp 2, entrance right"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: LT Vanilla Warp 2, in Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLT.in && hasMiniMonkey}
        canGetBreak={canReachLT.out && hasMiniMonkey}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: DK's quicksand tunnel switch"
        region="Llama Temple"
        canGetLogic={canReachLT.in}
        canGetBreak={canReachLT.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Tiny's lava room"
        region="Llama Temple"
        canGetLogic={canReachLavaRoom.in}
        canGetBreak={canReachLavaRoom.out}
      />
    </ArenaPool>
  )
}

const LlamaArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default LlamaArenas
