import CompanyPool from '@renderer/components/pools/Company'
import { useDkCoin } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const NintendoCoin: React.FC = () => {
const howHigh = useDkCoin()
return (
  <CompanyPool>
    <FactoryCheck
      id={3005}
      name="DK Arcade Round 2"
      region="Storage and Arcade Area"
      canGetLogic={howHigh.in}
      canGetBreak={howHigh.out}
    />
  </CompanyPool>
)
}

export default NintendoCoin
