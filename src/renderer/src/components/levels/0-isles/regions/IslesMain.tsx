import UnderCaves from '../dirt/UnderCaves'
import IslesMainEnemies from '../enemies/IslesMain'
import PineappleCage from '../gold-bananas/chunky/PineappleCage'
import JapesRock from '../gold-bananas/dk/JapesRock'

const IslesMainChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
  return (
  <>
      <JapesRock />
      <PineappleCage />
      <UnderCaves />
      <IslesMainEnemies />
    </>
  )
}

export default IslesMainChecks
