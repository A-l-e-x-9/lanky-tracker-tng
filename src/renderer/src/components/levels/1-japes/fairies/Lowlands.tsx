import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useGeneralFairy } from '@renderer/hooks/japes'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralFairy()
  return (
    <FairyPool>
      <JapesCheck
        id={41004}
        name="Shuffled Fairy: Over Chunky's cave entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </FairyPool>
  )
}

const LowlandFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default LowlandFairies
