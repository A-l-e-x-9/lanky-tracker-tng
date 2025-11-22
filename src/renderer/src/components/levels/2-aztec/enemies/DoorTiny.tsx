import DropPool from '@renderer/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useFeather } from '@renderer/hooks/kongs'
import AztecCheck from '../check'

const Tiny5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const feather = useFeather()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <AztecCheck
        id={2341}
        name="Tiny 5DT Start Left Front Enemy"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={door.out && feather && zinger.out}
      />
      <AztecCheck
        id={2342}
        name="Tiny 5DT Start Left Back Enemy"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={door.out && feather && zinger.out}
      />
      <AztecCheck
        id={2343}
        name="Tiny 5DT Start Right Back Enemy"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={door.out && feather && zinger.out}
      />
      <AztecCheck
        id={2344}
        name="Tiny 5DT Start Right Front Enemy"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={door.out && feather && zinger.out}
      />
      <AztecCheck
        id={2345}
        name="Tiny 5DT Dead End Enemy 0"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={door.out && feather && zinger.out}
      />
      <AztecCheck
        id={2346}
        name="Tiny 5DT Dead End Enemy 1"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={door.out && feather && zinger.out}
      />
      <AztecCheck
        id={2347}
        name="Tiny 5DT Reward Enemy 0"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={door.out && feather && zinger.out}
      />
      <AztecCheck
        id={2348}
        name="Tiny 5DT Reward Enemy 1"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={door.out && feather && zinger.out}
      />
    </DropPool>
  )
}

export default Tiny5Enemies
