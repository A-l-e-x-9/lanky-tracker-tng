import { useDiddyCryptGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DiddyCrypt: React.FC = () => {
const doCheck = useDiddyCryptGb()
return (
  <CastleCheck
    id={7012}
    name="Castle Diddy Crypt"
    region="Castle Underground"
    canGetLogic={doCheck.in}
    canGetBreak={doCheck.out}
  />
)
}

export default DiddyCrypt
