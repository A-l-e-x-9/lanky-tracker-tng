import { useDiddyStorageGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const StorageBarrel: React.FC = () => {
  const storageGb = useDiddyStorageGb()
  return (
    <FactoryCheck
      id={3012}
      name="Diddy's Storage Room Barrel"
      region="Storage and Arcade Area"
      canGetLogic={storageGb.in}
      canGetBreak={storageGb.out}
    />
  )
}

export default StorageBarrel
