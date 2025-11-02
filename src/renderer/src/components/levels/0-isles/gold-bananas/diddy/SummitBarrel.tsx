import GBPool '@renderer/components/pools/GB'
import { useCheckDiddySummit } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const SummitBarrel: React.FC = () => {
  const summit = useCheckDiddySummit()
  return (
  <GBPool>
    <IslesCheck
      id={12}
      name="Diddy's Summit Barrel"
      region="DK Island"
      canGetLogic={summit.in}
      canGetBreak={summit.out}
    />
    </GBPool>
  )
}

export default SummitBarrel
