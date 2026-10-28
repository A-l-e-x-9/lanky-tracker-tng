import BreakablePool from '@renderer/components/pools/Breakable'
import { usePlayFactory } from '@renderer/hooks/factory'
import { usePunch, useSlam } from '@renderer/hooks/kongs'
import FactoryCheck from './check'

const DarkRoomCrate: React.FC = () => {
  const canReachDarkRoom = usePlayFactory()
  const hasPunch = usePunch()
  const hasSlam = useSlam() //Unlike the Dark Room GB check, any Slam works on this crate
  return (
    <BreakablePool>
      <FactoryCheck
        id={36700}
        name="The ? crate in the Dark Room holding the switch to open the Dark Room GB"
        region="Storage and Arcade Area"
        canGetLogic={canReachDarkRoom.in && hasPunch && hasSlam}
        canGetBreak={canReachDarkRoom.out && hasPunch && hasSlam}
      />
    </BreakablePool>
  )
}

export default DarkRoomCrate
