import KasplatPool from '@renderer/components/pools/Kasplats'
import StartKasplats from './Start'
import StarcadeKasplats from './Starcade'
import TestingKasplats from './Testing'
import RNDKasplats from './RND'
import ProdRoomKasplats from './ProdRoom'

const ShuffledKasplats: React.FC = () => {
  return (
    <KasplatPool>
      <StartKasplats />
      <StarcadeKasplats />
      <TestingKasplats />
      <RNDKasplats />
      <ProdRoomKasplats />
    </KasplatPool>
  )
}

export default ShuffledKasplats
