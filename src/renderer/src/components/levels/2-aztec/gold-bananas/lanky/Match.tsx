import GBPool from '@renderer/components/pools/GB'
import { useLankyMatchGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const MatchGame: React.FC = () => {
  const matchGb = useLankyMatchGb()
  return (
  <GBPool>
    <AztecCheck
      id={2023}
      name="Match Game '64"
      region="Llama Temple"
      canGetLogic={matchGb.in}
      canGetBreak={matchGb.out}
    />
    </GBPool>
  )
}

export default MatchGame
