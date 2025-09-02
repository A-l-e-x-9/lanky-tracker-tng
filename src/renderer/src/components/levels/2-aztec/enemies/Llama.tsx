import DropPool from '@renderer/components/pools/Drops'
import { useAztecLlamaTemple } from '@renderer/hooks/aztec'
import { useDefeatPurpleKlaptrap } from '@renderer/hooks/enemies'
import { logicBreak } from '@renderer/hooks/world'
import { useGrape, useCamera } from @'renderer/hooks/kongs'
import AztecCheck from '../check'

const LlamaTempleEnemies: React.FC = () => {
  const llama = useAztecLlamaTemple()
  const klaptrap = useDefeatPurpleKlaptrap()
  const hasGrapes = useGrape()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <AztecCheck
        id={2351}
        name="Aztec Enemy: Llama Kong Free Music"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2352}
        name="Aztec Enemy: Llama Dino Music"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2353}
        name="Aztec Enemy: Lanky Matching Room 0"
        region="Llama Temple"
        canGetLogic={llama.in && hasGrapes}
        canGetBreak={logicBreak(llama) && hasGrapes}
      />
      <AztecCheck
        id={2354}
        name="Aztec Enemy: Lanky Matching Room 1"
        region="Llama Temple"
        canGetLogic={llama.in && hasGrapes}
        canGetBreak={logicBreak(llama) && hasGrapes}
      />
      <AztecCheck
        id={2355}
        name="Aztec Enemy: Llama Right"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={logicBreak(llama)}
      />
      <AztecCheck
        id={2356}
        name="Aztec Enemy: Llama Left"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={logicBreak(llama)}
      />
      <AztecCheck
        id={2357}
        name="Aztec Enemy: Llama Melon Crate"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2358}
        name="Aztec Enemy: Llama Slam Switch"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2451}
        name="Aztec Enemy Photo: Llama Kong Free Music"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap && hasFairyCam}
        canGetBreak={logicBreak(llama) && klaptrap && hasFairyCam}
      />
      <AztecCheck
        id={2452}
        name="Aztec Enemy Photo: Llama Dino Music"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap && hasFairyCam}
        canGetBreak={logicBreak(llama) && klaptrap && hasFairyCam}
      />
      <AztecCheck
        id={2453}
        name="Aztec Enemy Photo: Lanky Matching Room 0"
        region="Llama Temple"
        canGetLogic={llama.in && hasGrapes && hasFairyCam}
        canGetBreak={logicBreak(llama) && hasGrapes && hasFairyCam}
      />
      <AztecCheck
        id={2454}
        name="Aztec Enemy Photo: Lanky Matching Room 1"
        region="Llama Temple"
        canGetLogic={llama.in && hasGrapes && hasFairyCam}
        canGetBreak={logicBreak(llama) && hasGrapes && hasFairyCam}
      />
      <AztecCheck
        id={2455}
        name="Aztec Enemy Photo: Llama Right"
        region="Llama Temple"
        canGetLogic={llama.in && hasFairyCam}
        canGetBreak={logicBreak(llama) && hasFairyCam}
      />
      <AztecCheck
        id={2456}
        name="Aztec Enemy Photo: Llama Left"
        region="Llama Temple"
        canGetLogic={llama.in && hasFairyCam}
        canGetBreak={logicBreak(llama) && hasFairyCam}
      />
      <AztecCheck
        id={2457}
        name="Aztec Enemy Photo: Llama Melon Crate"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap && hasFairyCam}
        canGetBreak={logicBreak(llama) && klaptrap && hasFairyCam}
      />
      <AztecCheck
        id={2458}
        name="Aztec Enemy Photo: Llama Slam Switch"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap && hasFairyCam}
        canGetBreak={logicBreak(llama) && klaptrap && hasFairyCam}
      />
    </DropPool>
  )
}

export default LlamaTempleEnemies
