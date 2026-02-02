import DropPool from '@renderer/components/pools/Drops'
import { useDefeatToughEnemy, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestOwl, useForestDay } from '@renderer/hooks/forest'
import { useMini, useSax } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const OwlEnemies: React.FC = () => {
  const owlTree = useForestOwl()
  const klump = useDefeatToughEnemy()
  const zinger = useDefeatZinger()
  const mini = useMini()
  const sax = useSax()
  const isDay = useForestDay()
  const isNight = useForestNight()
  return (
    <DropPool>
      <ForestCheck
        id={5342}
        name="Enemy 1 in the Yellow Tunnel"
        region="Forest Area 4"
        canGetLogic={owlTree.in && zinger.in}
        canGetBreak={owlTree.out && zinger.out}
      />
      <ForestCheck
        id={5343}
        name="Enemy 2 in the Yellow Tunnel"
        region="Forest Area 4"
        canGetLogic={owlTree.in && zinger.in}
        canGetBreak={owlTree.out && zinger.out}
      />
      <ForestCheck
        id={5344}
        name="Enemy 3 in the Yellow Tunnel"
        region="Forest Area 4"
        canGetLogic={owlTree.in && ((isDay.in && klump) || isNight.in)}
        canGetBreak={owlTree.out && ((isDay.out && klump) || isNight.out)}
      />
      <ForestCheck
        id={5345}
        name="Enemy 0 surrounding the big tree"
        region="Forest Area 4"
        canGetLogic={owlTree.in && ((isDay.in && klump) || isNight.in)}
        canGetBreak={owlTree.out && ((isDay.out && klump) || isNight.out)}
      />
      <ForestCheck
        id={5346}
        name="Enemy 1 surrounding the big tree"
        region="Forest Area 4"
        canGetLogic={owlTree.in && ((isDay.in && klump) || isNight.in)}
        canGetBreak={owlTree.out && ((isDay.out && klump) || isNight.out)}
      />
      <ForestCheck
        id={5347}
        name="Enemy at exit of yellow tunnel"
        region="Forest Area 4"
        canGetLogic={owlTree.in && zinger.in}
        canGetBreak={owlTree.out && zinger.out}
      />
      <ForestCheck
        id={5348}
        name="Enemy 0 at Melon Crate"
        region="Forest Area 4"
        canGetLogic={owlTree.in && zinger.in}
        canGetBreak={owlTree.out && zinger.out}
      />
      <ForestCheck
        id={5349}
        name="Enemy 1 at Melon Crate"
        region="Forest Area 4"
        canGetLogic={owlTree.in && zinger.in}
        canGetBreak={owlTree.out && zinger.out}
      />
      <ForestCheck
        id={5350}
        name="Enemy 2 at Melon Crate"
        region="Forest Area 4"
        canGetLogic={owlTree.in && zinger.in}
        canGetBreak={owlTree.out && zinger.out}
      />
      <ForestCheck
        id={5351}
        name="Enemy 0 in the tree stump's gauntlet"
        region="Forest Area 4"
        canGetLogic={owlTree.in && mini && sax}
        canGetBreak={owlTree.out && mini && sax}
      />
      <ForestCheck
        id={5352}
        name="Enemy 1 in the tree stump's gauntlet"
        region="Forest Area 4"
        canGetLogic={owlTree.in && mini && sax}
        canGetBreak={owlTree.out && mini && sax}
      />
      <ForestCheck
        id={5353}
        name="Enemy 2 in the tree stump's gauntlet"
        region="Forest Area 4"
        canGetLogic={owlTree.in && mini && sax}
        canGetBreak={owlTree.out && mini && sax}
      />
      <ForestCheck
        id={5354}
        name="Enemy 3 in the tree stump's gauntlet"
        region="Forest Area 4"
        canGetLogic={owlTree.in && mini && sax}
        canGetBreak={owlTree.out && mini && sax}
      />
    </DropPool>
  )
}

export default OwlEnemies
