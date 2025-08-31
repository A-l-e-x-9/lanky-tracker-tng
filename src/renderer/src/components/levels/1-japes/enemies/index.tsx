import CaveEnemies from './Caves'
import HiveInteriorEnemies from './HiveInterior'
import HiveOutsideEnemies from './HiveOutside'
import HiveTunnelEnemies from './HiveTunnel'
import JapesMainEnemies from './JapesMain'
import JapesStartEnemies from './JapesStart'
import PeanutGateEnemies from './PeanutGate'
import StormyTunnelEnemies from './StormyTunnel'

const EnemyLocations: React.FC = () => {
  return (
    <>
      <JapesStartEnemies />
      <PeanutGateEnemies />
      <JapesMainEnemies />
      <HiveTunnelEnemies />
      <HiveOutsideEnemies />
      <HiveInteriorEnemies />
      <StormyTunnelEnemies />
      {/* Painting Gauntlet might go here if the DK64 Rando peeps make them eligible for Dropsanity... */}
      <CaveEnemies />
    </>
  )
}

export default EnemyLocations
