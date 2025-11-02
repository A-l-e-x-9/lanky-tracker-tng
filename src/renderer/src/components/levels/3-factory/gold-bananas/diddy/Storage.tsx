import GBPool '@renderer/components/pools/GB'
import { useDiddyStorageGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const StorageBarrel: React.FC = () => {
  const storageGb = useDiddyStorageGb()
  return (
  <GBPool>
    <FactoryCheck
      id={3012}
      name="Diddy's Storage Room Barrel"
      region="Storage and Arcade Area"
      canGetLogic={storageGb.in}
      canGetBreak={storageGb.out}
    />
    </GBPool>
  )
}

export default StorageBarrel
