import GBPool from '@renderer/components/pools/GB'
import { useDiddyCryptGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DiddyCrypt: React.FC = () => {
const doCheck = useDiddyCryptGb()
return (
<GBPool>
  <CastleCheck
    id={7012}
    name="Diddy's Crypt"
    region="Castle Crypt and Dungeon"
    canGetLogic={doCheck.in}
    canGetBreak={doCheck.out}
  />
  </GBPool>
)
}

export default DiddyCrypt
