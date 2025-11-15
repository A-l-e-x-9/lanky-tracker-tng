import MuseumEnemies from '../enemies/Museum'
import BoulderCheck from '../boulder'
import ChunkyMuseum from '../gold-bananas/chunky/Museum'

const MuseumChecks: React.FC = () => (
  <>
    <BoulderCheck />
    <ChunkyMuseum />
    <MuseumEnemies />
  </>
)

export default MuseumChecks
