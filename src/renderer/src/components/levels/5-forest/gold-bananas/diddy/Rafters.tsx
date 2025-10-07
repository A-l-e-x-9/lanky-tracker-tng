import { useDiddyRaftersGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const DarkRafters: React.FC = () => {
  const raftersGb = useDiddyRaftersGb()
  return (
    <ForestCheck
      id={5013}
      name="Diddy's Dark Rafters"
      region="Forest Area 1"
      canGetLogic={raftersGb.in}
      canGetBreak={raftersGb.out}
    />
  )
}

export default DarkRafters
