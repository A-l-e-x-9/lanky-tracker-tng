import VultureArena from '../arenas/Vulture'
import TinySwimEnemies from '../enemies/TinySwim'
import FreeTiny from '../gold-bananas/diddy/FreeTiny'
import VultureShoot from '../gold-bananas/lanky/Vulture'
import TinyKlaptrap from '../gold-bananas/tiny/Klaptrap'
import TinyCage from '../gold-bananas/diddy/TinyCage'

const TinySwimChecks: React.FC = () => (
  <>
    <TinyKlaptrap />
    <TinyCage />
    <FreeTiny />
    <VultureShoot />
    <VultureArena />
    <TinySwimEnemies />
  </>
)

export default TinySwimChecks
