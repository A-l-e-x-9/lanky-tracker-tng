import DropPool from '@renderer/components/pools/Drops'
import { useAztecLlamaTemple } from '@renderer/hooks/aztec'
import { useDefeatPurpleKlaptrap } from '@renderer/hooks/enemies'
import { logicBreak } from '@renderer/hooks/world'
import { useGrape } from '@renderer/hooks/kongs'
import AztecCheck from '../check'

const LlamaTempleEnemies: React.FC = () => {
  const llama = useAztecLlamaTemple()
  const klaptrap = useDefeatPurpleKlaptrap()
  const hasGrapes = useGrape()
  return (
    <DropPool>
      <AztecCheck
        id={2354}
        name="Aztec Enemy: Llama Kong Free Music"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2355}
        name="Aztec Enemy: Llama Dino Music"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2356}
        name="Aztec Enemy: Lanky Matching Room 0"
        region="Llama Temple"
        canGetLogic={llama.in && hasGrapes}
        canGetBreak={logicBreak(llama) && hasGrapes}
      />
      <AztecCheck
        id={2357}
        name="Aztec Enemy: Lanky Matching Room 1"
        region="Llama Temple"
        canGetLogic={llama.in && hasGrapes}
        canGetBreak={logicBreak(llama) && hasGrapes}
      />
      <AztecCheck
        id={2358}
        name="Aztec Enemy: Llama Right"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={logicBreak(llama)}
      />
      <AztecCheck
        id={2359}
        name="Aztec Enemy: Llama Left"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={logicBreak(llama)}
      />
      <AztecCheck
        id={2360}
        name="Aztec Enemy: Llama Melon Crate"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2361}
        name="Aztec Enemy: Llama Slam Switch"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
    </DropPool>
  )
}

export default LlamaTempleEnemies
