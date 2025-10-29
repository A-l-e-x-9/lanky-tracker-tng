import FairyPool from '@renderer/components/pools/Fairies'
import { useCheckBFIInitial } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

export const FairyReward: React.FC = () => {
  const checkBfi = useCheckBFIInitial()
  return (
  <FairyPool>
      <IslesCheck
        id={48}
        name="Banana Fairy Queen's Initial Reward"
        region="Outer Isles"
        canGetLogic={checkBfi}
      />
      </FairyPool>
  )
}

export default FairyReward
