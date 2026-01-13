import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import UnderCaves from '../dirt/UnderCaves'
import IslesMainEnemies from '../enemies/IslesMain'
import PineappleCage from '../gold-bananas/chunky/PineappleCage'
import JapesRock from '../gold-bananas/dk/JapesRock'

const IslesMainChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
  return (
  <>
    <div className="grid">
      <JapesRock />
      <PineappleCage />
      <UnderCaves />
    </div>
    <div className={`grid ${isKremKaptureSeed}`}>
      <IslesMainEnemies />
    </div>
    </>
  )
}

export default IslesMainChecks
