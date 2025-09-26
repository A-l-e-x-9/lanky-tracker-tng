import Miniboss from '@renderer/components/pools/Miniboss'
import { useTinyTrashGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const TinyTrash: React.FC = () => {
  const trashGb = useTinyTrashGb()
  return (
  <Miniboss>
    <CastleCheck
      id={7031}
      name="Castle Tiny Trash Can"
      region="Castle Surroundings"
      canGetLogic={trashGb.in}
      canGetBreak={trashGb.out}
    />
  </Miniboss>
  )
}

export default TinyTrash
