import GBPool from '@renderer/components/pools/GB'
import { useCheckChunkyPound } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const PoundX: React.FC = () => {
  const pound = useCheckChunkyPound()
  return (
  <GBPool>
    <IslesCheck id={42} name="Pounding the X" region="Outer Isles" canGetLogic={pound} />
    </GBPool>
  )
}

export default PoundX
