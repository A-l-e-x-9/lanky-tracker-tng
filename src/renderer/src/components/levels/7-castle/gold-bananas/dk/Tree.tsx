import { useDkTreeGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkTree: React.FC = () => (
    <CastleCheck
      id={7001}
      name="DK's Tree Sniping"
      region="Creepy Castle Main"
      canGetLogic={useDkTreeGb()}
    />
)

export default DkTree
