import DropPool from '@renderer/src/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/src/hooks/enemies'
import { useForestMushroomRoof, usePlayForest, useSlamForest } from '@renderer/src/hooks/forest'
import { useChunky, useLanky, useCamera } from '@renderer/src/hooks/kongs'
import { logicBreak } from '@renderer/src/hooks/world'
import ForestCheck from '../check'

const MushInteriorEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const klump = useDefeatKlump()
  const zinger = useDefeatZinger()
  const lanky = useLanky()
  const chunky = useChunky()
  const roof = useForestMushroomRoof()
  const canSlam = useSlamForest()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <ForestCheck
        id={5348}
        name="Forest Enemy: Mushroom Night Door"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5349}
        name="Forest Enemy: Mushroom Path 0"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5350}
        name="Forest Enemy: Mushroom Path 1"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5354}
        name="Forest Enemy: Mushroom Leap 0"
        region="Giant Mushroom Insides"
        canGetLogic={roof.in && lanky && canSlam && zinger.in}
        canGetBreak={logicBreak(roof) && lanky && canSlam && zinger.out}
      />
      <ForestCheck
        id={5355}
        name="Forest Enemy: Mushroom Leap 1"
        region="Giant Mushroom Insides"
        canGetLogic={roof.in && lanky && canSlam && zinger.in}
        canGetBreak={logicBreak(roof) && lanky && canSlam && zinger.out}
      />
      <ForestCheck
        id={5356}
        name="Forest Enemy: Face Puzzle"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && chunky && canSlam && zinger.in}
        canGetBreak={inStage && chunky && canSlam && zinger.out}
      />
      <ForestCheck
        id={5448}
        name="Forest Enemy Photo: Mushroom Night Door"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && klump && hasFairyCam}
      />
      <ForestCheck
        id={5449}
        name="Forest Enemy Photo: Mushroom Path 0"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5450}
        name="Forest Enemy Photo: Mushroom Path 1"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5454}
        name="Forest Enemy Photo: Mushroom Leap 0"
        region="Giant Mushroom Insides"
        canGetLogic={roof.in && lanky && canSlam && hasFairyCam}
        canGetBreak={logicBreak(roof) && lanky && canSlam && hasFairyCam}
      />
      <ForestCheck
        id={5455}
        name="Forest Enemy Photo: Mushroom Leap 1"
        region="Giant Mushroom Insides"
        canGetLogic={roof.in && lanky && canSlam && hasFairyCam}
        canGetBreak={logicBreak(roof) && lanky && canSlam &&hasFairyCam}
      />
      <ForestCheck
        id={5456}
        name="Forest Enemy Photo: Face Puzzle"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && chunky && canSlam && hasFairyCam}
      />
    </DropPool>
  )
}

export default MushInteriorEnemies
