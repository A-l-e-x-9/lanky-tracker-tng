import { useLankyMatchGb } from '@renderer/src/hooks/aztec'
import AztecCheck from '../../check'

const MatchGame: React.FC = () => {
  const matchGb = useLankyMatchGb()
  return (
    <AztecCheck
      id={2023}
      name="Aztec Lanky Matching Game"
      region="Llama Temple"
      canGetLogic={matchGb.in}
      canGetBreak={matchGb.out}
    />
  )
}

export default MatchGame
