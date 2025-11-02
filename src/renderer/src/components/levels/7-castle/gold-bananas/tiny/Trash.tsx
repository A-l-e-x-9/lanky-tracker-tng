import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useTinyTrashGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const TinyTrash: React.FC = () => {
  const trashGb = useTinyTrashGb()
  return (
  <GBPool>
  <Miniboss>
    <CastleCheck
      id={7031}
      name="Tiny's Trash Can"
      region="Creepy Castle Main"
      canGetLogic={trashGb.in}
      canGetBreak={trashGb.out}
    />
  </Miniboss>
  </GBPool>
  )
}

export default TinyTrash
