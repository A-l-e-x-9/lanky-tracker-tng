import DropPool from '@renderer/src/components/pools/Drops'
import { useCastleTree } from '@renderer/src/hooks/castle'
import { useDefeatBat } from '@renderer/src/hooks/enemies'
import { useCamera } from '@renderer/src/hooks/kongs'
import CastleCheck from '../check'

const TreeEnemies: React.FC = () => {
  const tree = useCastleTree()
  const bat = useDefeatBat()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <CastleCheck
        id={7370}
        name="Castle Enemy: Tree Start 0"
        region="Castle Surroundings"
        canGetLogic={tree && bat.in}
        canGetBreak={tree && bat.out}
      />
      <CastleCheck
        id={7371}
        name="Castle Enemy: Tree Start 1"
        region="Castle Surroundings"
        canGetLogic={tree && bat.in}
        canGetBreak={tree && bat.out}
      />
      <CastleCheck
        id={7470}
        name="Castle Enemy Photo: Tree Start 0"
        region="Castle Surroundings"
        canGetLogic={tree && hasFairyCam}
      />
      <CastleCheck
        id={7471}
        name="Castle Enemy Photo: Tree Start 1"
        region="Castle Surroundings"
        canGetLogic={tree && hasFairyCam}
      />
    </DropPool>
  )
}

export default TreeEnemies
