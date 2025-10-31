import GBPool from '@renderer/components/pools/GB'
import { useCheckLankyPrison } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

export const PrisonSprint: React.FC = () => {
  const prison = useCheckLankyPrison()
  return (
  <GBPool>
    <IslesCheck
      id={21}
      name="Lanky's Sprint Banana in K. Lumsy's Prison"
      region="K. Rool's Island"
      canGetLogic={prison.in}
      canGetBreak={prison.out}
    />
    </GBPool>
  )
}

export default PrisonSprint
