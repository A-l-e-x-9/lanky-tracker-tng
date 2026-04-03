import IslesCheck from '../check'
import { useGeneralFairy, useIslesUpper } from '@renderer/hooks/isles'

const DKIslandFairies: React.FC = () => {
  const isBreathing = useGeneralFairy()
  const canReachAztecLobby = useIslesUpper()
    return (
    <>
      <IslesCheck
        id={40004}
        name="Shuffled Fairy: Aztec Roof"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in && hasCam}
        canGetBreak={canReachAztecLobby.out && hasCam}
      />
      <IslesCheck
        id={40015}
        name="Shuffled Fairy: At the exit to DK's Treehouse area"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={40016}
        name="Shuffled Fairy: 'Hidden mountain' in between Training Grounds and Cranky's"
        region="DK Island"
        canGetLogic={hasClimbing && hasCam}
        canGetBreak={isBreathing}
      />
      <IslesCheck
        id={40017}
        name="Shuffled Fairy: Looking out the windows in DK's Treehouse"
        region="DK Island"
        canGetLogic={hasClimbing && hasCam}
      />
    </>
    )
}

export default DKIslandFairies
