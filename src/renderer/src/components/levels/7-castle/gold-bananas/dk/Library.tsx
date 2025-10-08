import { useDkRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkLibrary: React.FC = () => {
  const roomGb = useDkRoomGb()
  return (
    <CastleCheck
      id={7002}
      name="DK's Library"
      region="Various Castle Rooms"
      canGetLogic={roomGb.in}
      canGetBreak={roomGb.out}
    />
  )
}

export default DkLibrary
