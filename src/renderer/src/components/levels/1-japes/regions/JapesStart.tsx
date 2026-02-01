import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import JapesStartEnemies from '../enemies/JapesStart'
import Boulder from '../gold-bananas/chunky/Boulder'
import FloorCage from '../gold-bananas/dk/FloorCage'

const JapesStartChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <FloorCage />
    <Boulder />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <JapesStartEnemies />
  </div>
  </>
)
}

export default JapesStartChecks
