import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import IsleChecks from './components/levels/0-isles'
import JapesChecks from './components/levels/1-japes'
import AztecChecks from './components/levels/2-aztec'
import FactoryChecks from './components/levels/3-factory'
import GalleonChecks from './components/levels/4-galleon'
import ForestChecks from './components/levels/5-forest'
import CavesChecks from './components/levels/6-caves'
import CastleChecks from './components/levels/7-castle'
import HelmChecks from './components/levels/8-helm'

const Checklist: React.FC = () => {
  return (
    <article>
      <Tabs>
        <TabList>
          <Tab>DK Isles</Tab>
          <Tab>Jungle Japes</Tab>
          <Tab>Angry Aztec</Tab>
          <Tab>Frantic Factory</Tab>
          <Tab>Gloomy Galleon</Tab>
          <Tab>Fungi Forest</Tab>
          <Tab>Crystal Caves</Tab>
          <Tab>Creepy Castle</Tab>
          <Tab>Hideout Helm</Tab>
        </TabList>
        <TabPanel>
          <IsleChecks />
        </TabPanel>
        <TabPanel>
          <JapesChecks />
        </TabPanel>
        <TabPanel>
          <AztecChecks />
        </TabPanel>
        <TabPanel>
          <FactoryChecks />
        </TabPanel>
        <TabPanel>
          <GalleonChecks />
        </TabPanel>
        <TabPanel>
          <ForestChecks />
        </TabPanel>
        <TabPanel>
          <CavesChecks />
        </TabPanel>
        <TabPanel>
          <CastleChecks />
        </TabPanel>
        <TabPanel>
          <HelmChecks />
        </TabPanel>
      </Tabs>
    </article>
  )
}

export default Checklist
