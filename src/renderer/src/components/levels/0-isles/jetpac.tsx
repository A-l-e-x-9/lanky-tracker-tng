import CompanyPool from '@renderer/components/pools/Company'
import { useCurrentBananaMedalCount } from '@renderer/hooks/consumables'
import { useAnyKong, useCranky } from '@renderer/hooks/kongs'
import { useJetpacCount } from '@renderer/hooks/settings'
import IslesCheck from './check'

const JetpacCheck: React.FC = () => {
  const medals = useCurrentBananaMedalCount()
  const jetpacCount = useJetpacCount()
  const anyKong = useAnyKong()
  const cranky = useCranky()
  return (
    <CompanyPool>
      <IslesCheck
        id={105}
        name="Jetpac"
        region="Shops"
        canGetLogic={cranky && anyKong && medals >= jetpacCount}
      />
    </CompanyPool>
  )
}

export default JetpacCheck
