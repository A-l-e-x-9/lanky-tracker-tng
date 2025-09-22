import BoulderPool from '@renderer/components/pools/Boulders'
import { useTunnelBoulder } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the giant boulder in the halfway point at Aztec, used to reveal the giant Bonus Barrel.*/
const TunnelBoulder: React.FC = () => {
  const hasLogic = useTunnelBoulder()
  return (
    <BoulderPool>
        <AztecCheck
          id={2106}
          name="Aztec Boulder: Giant Boulder"
          region="Various Aztec Tunnels"
          canGetLogic={hasLogic.in}
          canGetBreak={hasLogic.out}
        />
    </BoulderPool>
  )
}

export default TunnelBoulder
