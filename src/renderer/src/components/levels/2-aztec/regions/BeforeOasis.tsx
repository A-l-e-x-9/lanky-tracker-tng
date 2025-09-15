import BeforeOasisEnemies from '../enemies/BeforeOasis'
import VaseBanana from '../gold-bananas/chunky/Vase'
import DkKasplat from '../kasplats/Dk'
import CircleVase from '../boulders/CircleVase'
import ColonVase from '../boulders/ColonVase'
import PlusVase from '../boulders/PlusVase'
import TriangleVase from '../boulders/TriangleVase'

const BeforeOasisChecks: React.FC = () => (
  <>
    <CircleVase />
    <ColonVase />
    <PlusVase />
    <TriangleVase />
    <VaseBanana />
    <DkKasplat />
    <BeforeOasisEnemies />
  </>
)

export default BeforeOasisChecks
