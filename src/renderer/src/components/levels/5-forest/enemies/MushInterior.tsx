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
        name="Forest Enemy: Mushroom Night Door"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5337}
        name="Forest Enemy: Mushroom Path 0"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5338}
        name="Forest Enemy: Mushroom Path 1"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5339}
        name="Forest Enemy: Mushroom Leap 0"
        region="Giant Mushroom Insides"
        canGetLogic={roof.in && lanky && canSlam && zinger.in}
        canGetBreak={logicBreak(roof) && lanky && canSlam && zinger.out}
      />
      <ForestCheck
        id={5340}
        name="Forest Enemy: Mushroom Leap 1"
        region="Giant Mushroom Insides"
        canGetLogic={roof.in && lanky && canSlam && zinger.in}
        canGetBreak={logicBreak(roof) && lanky && canSlam && zinger.out}
      />
      <ForestCheck
        id={5341}
        name="Forest Enemy: Face Puzzle"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && chunky && canSlam && zinger.in}
        canGetBreak={inStage && chunky && canSlam && zinger.out}
      />
    </DropPool>
  )
}

export default MushInteriorEnemies
