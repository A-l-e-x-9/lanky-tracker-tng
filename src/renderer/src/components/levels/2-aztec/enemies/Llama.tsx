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
        id={2351}
        name="Enemy at Music Pad to Free Lanky"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2352}
        name="Enemy at Music Pad to Raise Statues"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2353}
        name="Enemy 0 in the Matching Room"
        region="Llama Temple"
        canGetLogic={llama.in && hasGrapes}
        canGetBreak={logicBreak(llama) && hasGrapes}
      />
      <AztecCheck
        id={2354}
        name="Enemy 1 in the Matching Room"
        region="Llama Temple"
        canGetLogic={llama.in && hasGrapes}
        canGetBreak={logicBreak(llama) && hasGrapes}
      />
      <AztecCheck
        id={2355}
        name="Enemy at Right of Pool"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={logicBreak(llama)}
      />
      <AztecCheck
        id={2356}
        name="Enemy at Left of Pool"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={logicBreak(llama)}
      />
      <AztecCheck
        id={2357}
        name="Enemy at Melon Crate"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2358}
        name="Enemy at Quicksand Tunnel Opening Switch"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
    </DropPool>
  )
}

export default LlamaTempleEnemies
