import DropPool from '@renderer/components/pools/Drops'
import { useCastleTree } from '@renderer/hooks/castle'
import { useDefeatBat } from '@renderer/hooks/enemies'
import CastleCheck from '../check'

const TreeEnemies: React.FC = () => {
  const tree = useCastleTree()
  const bat = useDefeatBat()
  return (
    <DropPool>
      <CastleCheck
        id={7370}
        name="Tree Enemy 0"
        region="Creepy Castle Main"
        canGetLogic={tree && bat.in}
        canGetBreak={tree && bat.out}
      />
      <CastleCheck
        id={7371}
        name="Tree Enemy 1"
        region="Creepy Castle Main"
        canGetLogic={tree && bat.in}
        canGetBreak={tree && bat.out}
      />
    </DropPool>
  )
}

export default TreeEnemies
