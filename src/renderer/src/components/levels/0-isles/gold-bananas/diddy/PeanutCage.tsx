import GBPool from '@renderer/components/pools/GB'
import { useCheckDiddyCage } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

export const PeanutCage: React.FC = () => {
  const cage = useCheckDiddyCage()
  return (
  <GBPool>
    <IslesCheck
      id={11}
      name="Diddy's Peanut Cage"
      region="DK Island"
      canGetLogic={cage.in}
      canGetBreak={cage.out}
    />
    </GBPool>
  )
}

export default PeanutCage
