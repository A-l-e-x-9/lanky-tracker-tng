import DropPool from '@renderer/components/pools/Drops'
import { useAztecLlamaTemple } from '@renderer/hooks/aztec'
import { useDefeatPurpleKlaptrap } from '@renderer/hooks/enemies'
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
        name="Enemy at Music Pad to Free Lanky"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={llama.out && klaptrap}
      />
      <AztecCheck
        id={2355}
        name="Enemy at Music Pad to Raise Statues"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={llama.out && klaptrap}
      />
      <AztecCheck
        id={2356}
        name="Enemy 0 in the Matching Room"
        region="Llama Temple"
        canGetLogic={llama.in && hasGrapes}
        canGetBreak={llama.out && hasGrapes}
      />
      <AztecCheck
        id={2357}
        name="Enemy 1 in the Matching Room"
        region="Llama Temple"
        canGetLogic={llama.in && hasGrapes}
        canGetBreak={llama.out && hasGrapes}
      />
      <AztecCheck
        id={2358}
        name="Enemy at Right of Pool"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={llama.out}
      />
      <AztecCheck
        id={2359}
        name="Enemy at Left of Pool"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={llama.out}
      />
      <AztecCheck
        id={2360}
        name="Enemy at Melon Crate"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={llama.out && klaptrap}
      />
      <AztecCheck
        id={2361}
        name="Enemy at Quicksand Tunnel Opening Switch"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={llama.out && klaptrap}
      />
    </DropPool>
  )
}

export default LlamaTempleEnemies
