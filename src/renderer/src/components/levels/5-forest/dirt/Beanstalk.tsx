import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useBeanDirt } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const BeanstalkDirt: React.FC = () => (
  <RainbowCoinPool>
    <VanillaDirt>
      <ForestCheck
        id={5070}
        name="Dirt in front of The Bean's patch"
        region="Forest Center And Beanstalk"
        canGetLogic={useBeanDirt()}
      />
    </VanillaDirt>
  </RainbowCoinPool>
)

export default BeanstalkDirt
