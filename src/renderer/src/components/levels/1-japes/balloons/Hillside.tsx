import BalloonPool from '@renderer/components/pools/Balloons'
import { useBananaportAll } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useArena, useJapesPaintingOutside, useGeneralThing, useMtnCrate, useDkFreebieGb, useJapesMine } from '@renderer/hooks/japes'
import { useClimbing, useVine } from '@renderer/hooks/kongs'

const HillsideBalloons: React.FC = () => {
const canReachFunky = useArena()
const canReachPaintingRoom = useJapesPaintingOutside()
const isBreathing = useGeneralThing()
const canDoVanillaCrate1 = useMtnCrate()
const canReachDiddyCage = useDkFreebieGb()
const canReachMtn = useJapesMine()
const hasClimbing = useClimbing()
const hasVines = useVine()
const [didGB] = useDonkStore(useShallow((state) => [state.checks]))
const hasAllBananaports = useBananaportAll()
  return (
    <BalloonPool>
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Vanilla Arena (what a Funky's!)"
        region="Japes Hillside"
        canGetLogic={canReachFunky.in}
        canGetBreak={canReachFunky.out}
      />
    </ArenaPool>
  )
}

export default HillsideBalloons
