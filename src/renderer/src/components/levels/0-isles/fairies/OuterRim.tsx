import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { useGeneralFairy } from '@renderer/hooks/isles'

const Shuffled: React.FC = () => {
  const isBreathing = useGeneralFairy()
  return (
    <FairyPool>
      <IslesCheck
        id={40000}
        name="Shuffled Fairy: Vanilla Location #1 (behind BFI)"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={40005}
        name="Shuffled Fairy: Behind Forest Lobby building"
        region="Outer Isles"
        canGetLogic={canReachForestLobby && hasCam}
      />
      <IslesCheck
        id={40006}
        name="Shuffled Fairy: On top of BFI itself"
        region="Outer Isles"
        canGetLogic={canReachForestLobby && canUseJetbarrel && hasJetbarrel && hasCam} //...Yeah, this one's pretty complex. FUN FACT: I didn't even know the top of BFI was reachable this way until I started doing this Randomizer stuff! D:
      />
      <IslesCheck
        id={40010}
        name="Shuffled Fairy: Flying above the Fairy Queen herself (LOL WUT)"
        region="Outer Isles"
        canGetLogic={canGoInBFI && hasCam}
      />
    </FairyPool>
  )
}

const OuterFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default OuterFairies
