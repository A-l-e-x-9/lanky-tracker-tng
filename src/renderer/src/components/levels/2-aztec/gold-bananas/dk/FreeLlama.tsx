import { useDkBlastGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const FreeLlama: React.FC = () => {
  const blastGb = useDkBlastGb()
  return (
    <AztecCheck
      id={2001}
      name="Freeing the Llama"
      region="Aztec Main Area"
      canGetLogic={blastGb.in}
      canGetBreak={blastGb.out}
    />
  )
}

export default FreeLlama
