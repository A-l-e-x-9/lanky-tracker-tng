import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestMushroomRoof, usePlayForest, useSlamForest } from '@renderer/hooks/forest'
import { useChunky, useLanky } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import ForestCheck from '../check'

const MushInteriorEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const klump = useDefeatKlump()
  const zinger = useDefeatZinger()
  const lanky = useLanky()
  const chunky = useChunky()
  const roof = useForestMushroomRoof()
  const canSlam = useSlamForest()
  return (
    <DropPool>
      <ForestCheck
        id={5336}
        name="Enemy Near the Mushroom Night Door"
        region="Inside the Giant Mushroom"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5337}
        name="Enemy Near Kasplat 0"
        region="Inside the Giant Mushroom"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5338}
        name="Enemy Near Kasplat 1"
        region="Inside the Giant Mushroom"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5339}
        name="Enemy 0 in Lanky's Mushroom Bounce Room"
        region="Inside the Giant Mushroom"
        canGetLogic={roof.in && lanky && canSlam && zinger.in}
        canGetBreak={logicBreak(roof) && lanky && canSlam && zinger.out}
      />
      <ForestCheck
        id={5340}
        name="Enemy 1 in Lanky's Mushroom Bounce Room"
        region="Inside the Giant Mushroom"
        canGetLogic={roof.in && lanky && canSlam && zinger.in}
        canGetBreak={logicBreak(roof) && lanky && canSlam && zinger.out}
      />
      <ForestCheck
        id={5341}
        name="Enemy in Chunky's Face Puzzle Room"
        region="Inside the Giant Mushroom"
        canGetLogic={inStage && chunky && canSlam && zinger.in}
        canGetBreak={inStage && chunky && canSlam && zinger.out}
      />
    </DropPool>
  )
}

export default MushInteriorEnemies
