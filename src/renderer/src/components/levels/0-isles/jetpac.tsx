import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import { RarewareCoinPool } from '@renderer/components/pools/Company'
import { useCurrentBananaMedalCount } from '@renderer/hooks/consumables'
import { useAnyKong, useCranky } from '@renderer/hooks/kongs'
import { useJetpacCount } from '@renderer/hooks/settings'
import IslesCheck from './check'

const JetpacCheck: React.FC = () => {
  const medals = useCurrentBananaMedalCount()
  const jetpacCount = useJetpacCount()
  const anyKong = useAnyKong()
  const cranky = useCranky()
  const shuffledShops = useDonkStore(useShallow((state) => state.shuffledIslesShops.islesSwitchUp))
  return (
    <RarewareCoinPool>
      <IslesCheck
        id={105}
        name="Jetpac"
        region=""
        canGetLogic={cranky && anyKong && medals >= jetpacCount}
      />
    </RarewareCoinPool>
  )
}

export default JetpacCheck
