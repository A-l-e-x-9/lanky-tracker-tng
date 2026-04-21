import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useAztecLlamaTemple, useAztecLlamaLava, useFreeLankySwitch } from '@renderer/hooks/aztec'
import { useDive, useGrape, useMini, useAnyGun, useOrange } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const hasDiving = useDive()
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

const LlamaCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default LlamaCrates
