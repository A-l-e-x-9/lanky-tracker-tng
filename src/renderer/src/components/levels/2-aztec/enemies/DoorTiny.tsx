import DropPool from '@renderer/src/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/src/hooks/aztec'
import { useDefeatZinger } from '@renderer/src/hooks/enemies'
import { useFeather, useCamera } from '@renderer/src/hooks/kongs'
import { logicBreak } from '@renderer/src/hooks/world'
import AztecCheck from '../check'

const Tiny5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const feather = useFeather()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <AztecCheck
        id={2338}
        name="Aztec Enemy: Tiny 5DT Start Right Front"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={logicBreak(door) && feather && zinger.out}
      />
      <AztecCheck
        id={2339}
        name="Aztec Enemy: Tiny 5DT Start Left Back"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={logicBreak(door) && feather && zinger.out}
      />
      <AztecCheck
        id={2340}
        name="Aztec Enemy: Tiny 5DT Start Right Back"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={logicBreak(door) && feather && zinger.out}
      />
      <AztecCheck
        id={2341}
        name="Aztec Enemy: Tiny 5DT Start Left Front"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={logicBreak(door) && feather && zinger.out}
      />
      <AztecCheck
        id={2342}
        name="Aztec Enemy: Tiny 5DT Reward 0"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={logicBreak(door) && feather && zinger.out}
      />
      <AztecCheck
        id={2343}
        name="Aztec Enemy: Tiny 5DT Reward 1"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={logicBreak(door) && feather && zinger.out}
      />
      <AztecCheck
        id={2344}
        name="Aztec Enemy: Tiny 5DT Dead End 0"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={logicBreak(door) && feather && zinger.out}
      />
      <AztecCheck
        id={2345}
        name="Aztec Enemy: Tiny 5DT Dead End 1"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger.in}
        canGetBreak={logicBreak(door) && feather && zinger.out}
      />
      <AztecCheck
        id={2438}
        name="Aztec Enemy Photo: Tiny 5DT Start Right Front"
        region="5 Door Temple"
        canGetLogic={door.in && feather && hasFairyCam}
        canGetBreak={logicBreak(door) && feather && hasFairyCam}
      />
      <AztecCheck
        id={2439}
        name="Aztec Enemy Photo: Tiny 5DT Start Left Back"
        region="5 Door Temple"
        canGetLogic={door.in && feather && hasFairyCam}
        canGetBreak={logicBreak(door) && feather && hasFairyCam}
      />
      <AztecCheck
        id={2440}
        name="Aztec Enemy Photo: Tiny 5DT Start Right Back"
        region="5 Door Temple"
        canGetLogic={door.in && feather && hasFairyCam}
        canGetBreak={logicBreak(door) && feather && hasFairyCam}
      />
      <AztecCheck
        id={2441}
        name="Aztec Enemy Photo: Tiny 5DT Start Left Front"
        region="5 Door Temple"
        canGetLogic={door.in && feather && hasFairyCam}
        canGetBreak={logicBreak(door) && feather && hasFairyCam}
      />
      <AztecCheck
        id={2442}
        name="Aztec Enemy Photo: Tiny 5DT Reward 0"
        region="5 Door Temple"
        canGetLogic={door.in && feather && hasFairyCam}
        canGetBreak={logicBreak(door) && feather && hasFairyCam}
      />
      <AztecCheck
        id={2443}
        name="Aztec Enemy Photo: Tiny 5DT Reward 1"
        region="5 Door Temple"
        canGetLogic={door.in && feather && hasFairyCam}
        canGetBreak={logicBreak(door) && feather && hasFairyCam}
      />
      <AztecCheck
        id={2444}
        name="Aztec Enemy Photo: Tiny 5DT Dead End 0"
        region="5 Door Temple"
        canGetLogic={door.in && feather && hasFairyCam}
        canGetBreak={logicBreak(door) && feather && hasFairyCam}
      />
      <AztecCheck
        id={2445}
        name="Aztec Enemy Photo: Tiny 5DT Dead End 1"
        region="5 Door Temple"
        canGetLogic={door.in && feather && hasFairyCam}
        canGetBreak={logicBreak(door) && feather && hasFairyCam}
      />
    </DropPool>
  )
}

export default Tiny5Enemies
