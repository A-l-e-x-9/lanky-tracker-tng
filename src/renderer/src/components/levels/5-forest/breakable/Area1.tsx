import BreakablePool from '@renderer/components/pools/Breakable'
import { useForestBarn, usePlayForest, useForestDay, useFrontMillPortal, useForestSpiderBoss } from '@renderer/hooks/forest'
import { useSlam } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

/*Version 6 of the Randomizer now allows you to have major rewards in miscellaneous breakable stuff, like so:*/
const Area1Boxes: React.FC = () => {
const canGetToThornvine = useForestBarn()
const isBreathing = usePlayForest()
const isDay = useForestDay()
const hasDKPortal = useFrontMillPortal()
const hasAnySlam = useSlam()
const canGetToBackMill = useForestSpiderBoss()
  return (
    <BreakablePool>
      <ForestCheck
        id={56700}
        name="? Box in Thornvine Barn containing the switch needed to activate DK's Bonus Barrel"
        region="Forest Area 1"
        canGetLogic={canGetToThornvine.in}
        canGetBreak={canGetToThornvine.out}
      />
      <ForestCheck
        id={56701}
        name="? Box in Front Mill containing switch to the lever room"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && (isDay.in || hasDKPortal) && hasAnySlam}
        canGetBreak={isBreathing.out && (isDay.out || hasDKPortal) && hasAnySlam}
      />
      <ForestCheck
        id={56702}
        name="? Crate in Back Mill containing the Triangle Pad"
        region="Forest Area 1"
        canGetLogic={canGetToBackMill.in}
        canGetBreak={canGetToBackMill.out}
      />
      <ForestCheck
        id={56703}
        name="? Crate in Back Mill blocking Tiny's secret night entrance"
        region="Forest Area 1"
        canGetLogic={canGetToBackMill.in}
        canGetBreak={canGetToBackMill.out}
      />
    </BreakablePool>
  )
}

export default Area1Boxes
