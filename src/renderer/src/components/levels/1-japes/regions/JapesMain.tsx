import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FunkyArena from '../arenas/Funky'
import MountainCrate from '../crates/Mountain'
import PaintingHillDirt from '../dirt/PaintingHill'
import JapesMainEnemies from '../enemies/JapesMain'
import ChunkyTimedCage from '../gold-bananas/chunky/TimedCage'
import DiddyTimedCage from '../gold-bananas/diddy/TimedCage'
import FreeDiddy from '../gold-bananas/dk/FreeDiddy'
import FrontCage from '../gold-bananas/dk/FrontCage'
import LankyTimedCage from '../gold-bananas/lanky/TimedCage'
import TinyTimedCage from '../gold-bananas/tiny/TimedCage'
import DiddyCage from '../gold-bananas/dk/DiddyCage'

const JapesMainChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <FrontCage />
    <DiddyTimedCage />
    <LankyTimedCage />
    <TinyTimedCage />
    <ChunkyTimedCage />
    <DiddyCage />
    <FreeDiddy />
    <FunkyArena />
    <PaintingHillDirt />
    <MountainCrate />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <JapesMainEnemies />
  </div>
  </>
)
}

export default JapesMainChecks
