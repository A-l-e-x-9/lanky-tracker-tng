import VultureArena from '../arenas/Vulture'
import TinySwimEnemies from '../enemies/TinySwim'
import FreeTiny from '../gold-bananas/diddy/FreeTiny'
import VultureShoot from '../gold-bananas/lanky/Vulture'
import TinyKlaptrap from '../gold-bananas/tiny/Klaptrap'
import TinyCage from '../gold-bananas/diddy/TinyCage'
import TTBalloons from '../balloons/TinyTemple'

const TinySwimChecks: React.FC = () => {
return (
  <>
    <TinyKlaptrap />
    <TinyCage />
    <FreeTiny />
    <VultureShoot />
    <VultureArena />
    <TTBalloons />
    <TinySwimEnemies />
  </>
)
}

export default TinySwimChecks
