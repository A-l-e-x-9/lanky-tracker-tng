import DropPool from '@renderer/components/pools/Drops'
import { useCastleTree } from '@renderer/hooks/castle'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import CastleCheck from '../check'

const TreeEnemies: React.FC = () => {
  const tree = useCastleTree()
  const bat = useDefeatZinger()
  return (
    <DropPool>
      <CastleCheck
        id={7370}
        name="Tree Enemy 0"
        region="Creepy Castle Main"
        canGetLogic={tree.in && bat.in}
        canGetBreak={tree.out && bat.out}
      />
      <CastleCheck
        id={7371}
        name="Tree Enemy 1"
        region="Creepy Castle Main"
        canGetLogic={tree.in && bat.in}
        canGetBreak={tree.out && bat.out}
      />
    </DropPool>
  )
}

export default TreeEnemies
