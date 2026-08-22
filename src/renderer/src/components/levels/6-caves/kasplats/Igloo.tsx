import KasplatPool from '@renderer/components/pools/Kasplats'
import { useIglooKasplat, useCavesIgloo } from '@renderer/hooks/caves'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useGuitar } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const chunkyVanillaKasplat = useIglooKasplat()
const is5DIOpen = useCavesIgloo()
const hasGuitar = useGuitar()
  return (
    <KasplatPool>
      <CavesCheck
        id={56004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (top of the 5DI)"
        region="Caves Igloo"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <CavesCheck
        id={56016}
        name="Shuffled Kasplat: In Diddy's 5DI room"
        region="Caves Igloo"
        canGetLogic={is5DIOpen.in && hasGuitar}
        canGetBreak={is5DIOpen.out && hasGuitar}
      />
    </KasplatPool>
  )
}

const IglooKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default IglooKasplats
