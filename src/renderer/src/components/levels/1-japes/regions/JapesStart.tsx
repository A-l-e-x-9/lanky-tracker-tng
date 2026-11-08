import JapesStartEnemies from '../enemies/JapesStart'
import Boulder from '../gold-bananas/chunky/Boulder'
import FloorCage from '../gold-bananas/dk/FloorCage'

const JapesStartChecks: React.FC = () => {
return (
  <>
    <FloorCage />
    <Boulder />
    <JapesStartEnemies />
  </>
)
}

export default JapesStartChecks
