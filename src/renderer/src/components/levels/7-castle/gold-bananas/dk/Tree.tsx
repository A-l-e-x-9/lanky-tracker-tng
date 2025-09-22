import { useDkTreeGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkTree: React.FC = () => (
    <CastleCheck
      id={7001}
      name="Castle DK Tree Sniping"
      region="Castle Surroundings"
      canGetLogic={useDkTreeGb()}
    />
)

export default DkTree
