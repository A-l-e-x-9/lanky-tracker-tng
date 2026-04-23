import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useGeneralThing, useStorageKasplat, useFactoryHut } from '@renderer/hooks/factory'
import { usePunch } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const tinyVanillaKasplat = useStorageKasplat()
const canReachHut = useFactoryHut()
const hasPrimatePunch = usePunch()
  return (
    <KasplatPool>
      <FactoryCheck
        id={53003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (bottom of the pole to the Arcade)"
        region="Storage and Arcade Area"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <FactoryCheck
        id={53006}
        name="Shuffled Kasplat: In front of the Power Hut"
        region="Storage and Arcade Area"
        canGetLogic={canReachHut.in}
        canGetBreak={canReachHut.out}
      />
      <FactoryCheck
        id={53008}
        name="Shuffled Kasplat: In the Dark Room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <FactoryCheck
        id={53011}
        name="Shuffled Kasplat: Inside the Power Hut"
        region="Storage and Arcade Area"
        canGetLogic={canReachHut.in && hasCoconuts}
        canGetBreak={canReachHut.out && hasCoconuts}
      />
    </KasplatPool>
  )
}

const StarcadeKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default StarcadeKasplats
