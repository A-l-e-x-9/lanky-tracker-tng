import CompanyPool from '@renderer/src/components/pools/Company'
import { useCurrentBananaMedalCount } from '@renderer/src/hooks/consumables'
import { useAnyKong, useCranky } from '@renderer/src/hooks/kongs'
import { useJetpacCount } from '@renderer/src/hooks/settings'
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
        canGetLogic={cranky && anyKong && medals >= jetpacCount}
      />
    </CompanyPool>
  )
}

export default JetpacCheck
