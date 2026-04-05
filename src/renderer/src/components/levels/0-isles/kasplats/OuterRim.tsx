import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { useIslesFungiIsland, useCheckChunkyPound } from '@renderer/hooks/isles'
import { useAnyKong, useDive } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useAnyKong()
const canReachForestLobby = useIslesFungiIsland()
const canPoundTheX = useCheckChunkyPound()
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
const hasDiving = useDive()
  return (
    <KasplatPool>
      <IslesCheck
        id={50007}
        name="Shuffled Kasplat: Inside the big rock opened by pounding the X"
        region="Outer Isles"
        canGetLogic={canPoundTheX}
      />
      <IslesCheck
        id={50009}
        name="Shuffled Kasplat: On the X"
        region="Outer Isles"
        canGetLogic={isBreathing && !didCheck[42]}
        canGetBreak={isBreathing && didCheck[42] && hasDiving.out}
      />
      <IslesCheck
        id={50010}
        name="Shuffled Kasplat: Behind the Forest Lobby"
        region="Outer Isles"
        canGetLogic={canReachForestLobby}
      />
    </KasplatPool>
  )
}

const OuterKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default OuterKasplats
