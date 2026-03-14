import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GBPool from '@renderer/components/pools/GB'
import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDiddyOwlGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const OwlRace: React.FC = () => {
  const owlGb = useDiddyOwlGb()
  const [isBonusSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.bonuses, state.winCondition.kRoolChallenge]))
  if (isBonusSeed || isKRoolChallengeSeed) { //causes this check to display if you indicated you had a K. Rool's Challenge seed or one where you have to do Bonus Barrel checks to win, even if you have Tough GB's off. Because this check ends in a Bonus Barrel, it's mandatory for those two rulesets.
  return (
  <GBPool>
      <ForestCheck
        id={5011}
        name="Diddy's Owl Race"
        region="Forest Area 4"
        canGetLogic={owlGb.in}
        canGetBreak={owlGb.out}
      />
    </GBPool>
  )
  } else {
  return (
  <GBPool>
    <ToughGoldenBanana>
      <ForestCheck
        id={5011}
        name="Diddy's Owl Race"
        region="Forest Area 4"
        canGetLogic={owlGb.in}
        canGetBreak={owlGb.out}
      />
    </ToughGoldenBanana>
    </GBPool>
  )
  }
}

export default OwlRace
