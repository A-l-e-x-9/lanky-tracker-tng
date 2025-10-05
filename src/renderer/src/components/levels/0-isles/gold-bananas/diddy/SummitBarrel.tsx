import { useCheckDiddySummit } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const SummitBarrel: React.FC = () => {
  const summit = useCheckDiddySummit()
  return (
    <IslesCheck
      id={12}
      name="Diddy's Summit Barrel"
      region="DK Island"
      canGetLogic={summit.in}
      canGetBreak={summit.out}
    />
  )
}

export default SummitBarrel
