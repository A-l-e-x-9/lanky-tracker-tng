import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing } from '@renderer/hooks/factory'
import FactoryCheck from '../check'
import StartKasplats from './Start'
import StarcadeKasplats from './Starcade'
import TestingKasplats from './Testing'
import RNDKasplats from './RND'
import ProdRoomKasplats from './ProdRoom'

const ShuffledKasplats: React.FC = () => {
const isBreathing = useGeneralThing()
  return (
    <KasplatPool>
      <StartKasplats />
      <StarcadeKasplats />
      <TestingKasplats />
      <RNDKasplats />
      <ProdRoomKasplats />
      <FactoryCheck
        id={53010}
        name="Shuffled Kasplat: Window shopping"
        region=""
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </KasplatPool>
  )
}

export default ShuffledKasplats
