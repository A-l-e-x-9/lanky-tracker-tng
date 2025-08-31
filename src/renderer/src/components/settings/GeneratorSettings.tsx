import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import BananaportSelector from './BananaportSelector'
import CheckIcon from './CheckIcon'
import CountSelector from './CountSelector'
import HelmSelector from './HelmSelector'
import SimpleIcon from './SimpleIcon'
import SlamSelector from '../moves/SlamSelector'

import beanIcon from '../../assets/images/bean.png'
import chunkyIcon from '../../assets/images/chunky.png'
import crownIcon from '../../assets/images/crown.png'
import peanutIcon from '../../assets/images/diddy_gun.png'
import guitarIcon from '../../assets/images/diddy_inst.png'
import rocketIcon from '../../assets/images/diddybarrel.png'
import coconutIcon from '../../assets/images/dk_gun.png'
import grabIcon from '../../assets/images/dk_move.png'
import dkPadIcon from '../../assets/images/dkpad.png'
import lankyIcon from '../../assets/images/lanky.png'
import fairyIcon from '../../assets/images/fairy.png'
import keyIcon from '../../assets/images/key.png'
import blueprintIcon from '../../assets/images/lanky_bp.png'
import grapeIcon from '../../assets/images/lanky_gun.png'
import companyCoinIcon from '../../assets/images/n64rw_coin.png'
import pearlIcon from '../../assets/images/pearl.png'
import rainbowCoinIcon from '../../assets/images/rainbowcoin.png'
import arenaIcon from '../../assets/images/settings/arena.png'
import bananaMedalIcon from '../../assets/images/settings/bananamedal.gif'
import dropIcon from '../../assets/images/settings/beaver.png'
import bonusIcon from '../../assets/images/settings/bonus.png'
import bananaIcon from '../../assets/images/settings/bunch.png'
import dirtIcon from '../../assets/images/settings/dirt_patch.png'
import shopIcon from '../../assets/images/settings/funky.png'
import hardShootIcon from '../../assets/images/settings/hard_shoot.png'
import kasplatIcon from '../../assets/images/settings/kasplat.png'
import melonIcon from '../../assets/images/settings/melon.png'
import toughBananaIcon from '../../assets/images/settings/rabbit.png'
import slamSwitchIcon from '../../assets/images/settings/slam_switch.png'
import switchsanityIcon from '../../assets/images/settings/switch.png'
import slamIcon from '../../assets/images/slam1.png'
import featherIcon from '../../assets/images/tiny_gun.png'

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#002040',
    color: 'white'
  }
}

const GeneratorSettings: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [setSetting, setBarrier, setFastCheck, setUi] = useDonkStore(
    useShallow((state) => [state.setSetting, state.setBarrier, state.setFastCheck, state.setUi])
  )

  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)

  return (
    <span>
      <span onClick={openModal} title="Generator Settings">
        ⚙️
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Generator Settings"
        style={customStyles}
      >
        <section className="modal-settings">
        <h2>Tracker Settings</h2>
          <section className="pool">
            <h3>Items in Pool</h3>
            <>
              <p>Shops?</p>
              <SimpleIcon
                imgUrl={shopIcon}
                storeKey="poolShops"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Tough Golden Bananas?</p>
              <SimpleIcon
                imgUrl={toughBananaIcon}
                storeKey="poolToughBananas"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Battle Crowns?</p>
              <SimpleIcon
                imgUrl={crownIcon}
                storeKey="poolCrowns"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Blueprints?</p>
              <SimpleIcon
                imgUrl={blueprintIcon}
                storeKey="poolBlueprints"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Boss Keys?</p>
              <SimpleIcon
                imgUrl={keyIcon}
                storeKey="poolKeys"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Banana Medals?</p>
              <SimpleIcon
                imgUrl={bananaMedalIcon}
                storeKey="poolBananaMedals"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Company Coins?</p>
              <SimpleIcon
                imgUrl={companyCoinIcon}
                storeKey="poolCompanyCoins"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Banana Fairies?</p>
              <SimpleIcon
                imgUrl={fairyIcon}
                storeKey="poolFairies"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Rainbow Coins?</p>
              <SimpleIcon
                imgUrl={rainbowCoinIcon}
                storeKey="poolRainbowCoins"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Melon Crates?</p>
              <SimpleIcon
                imgUrl={melonIcon}
                storeKey="poolCrates"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Pearls & Bean?</p>
              <SimpleIcon
                imgUrl={beanIcon}
                storeKey="poolMisc"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Dropsanity?</p>
              <SimpleIcon
                imgUrl={dropIcon}
                storeKey="poolDrops"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Wrinkly Doors?</p>
              <SimpleIcon
                imgUrl={shopIcon}
                storeKey="poolWrinkly"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Boulders?</p>
              <SimpleIcon
                imgUrl={chunkyIcon}
                storeKey="poolBoulders"
                prefix="settings"
                updateItem={setSetting}
              />
            </>
            <h3>Consumable Settings</h3>
            <>
              <p>Medals needed for Jetpac?</p>
              <CountSelector
                imgUrl={bananaMedalIcon}
                storeKey="jetpacCount"
                prefix="settings"
                setCount={setSetting}
                maxValue={40}
              />
              <p>Colored bananas needed for medal?</p>
              <CountSelector
                imgUrl={bananaIcon}
                storeKey="cbCount"
                prefix="settings"
                setCount={setSetting}
                maxValue={100}
              />
              <p>
                Fairies needed for the Fairy's reward?
              </p>
              <CountSelector
                imgUrl={fairyIcon}
                storeKey="fairyCount"
                prefix="settings"
                setCount={setSetting}
                maxValue={20}
              />
            </>
            <h3>World Settings</h3>
            <>
              <p>Bananaports Active?</p>
              <BananaportSelector />
              <p>Switchsanity On?</p>
              <SimpleIcon
                imgUrl={switchsanityIcon}
                storeKey="isSwitchsanity"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Progressive Slams?</p>
              <SimpleIcon
                imgUrl={slamSwitchIcon}
                storeKey="progressiveSlams"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Helm Starting Area</p>
              <HelmSelector />
              <p>Auto-Finish Bonus Barrels?</p>
              <SimpleIcon
                imgUrl={bonusIcon}
                storeKey="autoBonus"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Hard Shooting?</p>
              <SimpleIcon
                imgUrl={hardShootIcon}
                storeKey="hardShooting"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Open Lobbies?</p>
              <SimpleIcon
                imgUrl={keyIcon}
                storeKey="openLobbies"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Does DK phase of K. Rool require Blast?</p>
              <SimpleIcon
                imgUrl={slamIcon}
                storeKey="balancedRoolPhases"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Slam level required for Chunky phase of K. Rool</p>
              <SlamSelector />
            </>
            <h3>Fast Barrier Settings</h3>
            <>
              <p>Japes Tunnel Gates?</p>
              <SimpleIcon
                imgUrl={coconutIcon}
                storeKey="japesCoconutGates"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Japes Hive Gate?</p>
              <SimpleIcon
                imgUrl={featherIcon}
                storeKey="japesHiveGate"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Tiny Temple Ice?</p>
              <SimpleIcon
                imgUrl={guitarIcon}
                storeKey="aztecIce"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Aztec Back Access?</p>
              <SimpleIcon
                imgUrl={guitarIcon}
                storeKey="aztecBack"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Aztec 5 Door Temple?</p>
              <SimpleIcon
                imgUrl={rocketIcon}
                storeKey="aztec5DoorTemple"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Aztec Llama Temple?</p>
              <SimpleIcon
                imgUrl={coconutIcon}
                storeKey="aztecLlamaTemple"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Factory Production Power?</p>
              <SimpleIcon
                imgUrl={grabIcon}
                storeKey="factoryProduction"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Factory Testing Area?</p>
              <SimpleIcon
                imgUrl={slamIcon}
                storeKey="factoryTesting"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Galleon Lighthouse Area?</p>
              <SimpleIcon
                imgUrl={coconutIcon}
                storeKey="galleonLighthouse"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Galleon Lighthouse Power?</p>
              <SimpleIcon
                imgUrl={grabIcon}
                storeKey="galleonSeasick"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Galleon Outskirts Area?</p>
              <SimpleIcon
                imgUrl={peanutIcon}
                storeKey="galleonOutskirts"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Treasure Room?</p>
              <SimpleIcon
                imgUrl={lankyIcon}
                storeKey="galleonTreasureRoom"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Forest Beanstalk Area?</p>
              <SimpleIcon
                imgUrl={beanIcon}
                storeKey="forestBeanstalk"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Forest Owl Tree?</p>
              <SimpleIcon
                imgUrl={grapeIcon}
                storeKey="forestOwlTree"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Caves Igloo Insides?</p>
              <SimpleIcon
                imgUrl={rocketIcon}
                storeKey="cavesIgloo"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Ice walls in Caves pre-punched?</p>
              <SimpleIcon
                imgUrl={chunkyIcon}
                storeKey="cavesWalls"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Castle Crypt rooms pre-opened?</p>
              <SimpleIcon
                imgUrl={hardShootIcon}
                storeKey="castleCrypt"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
            </>
            <h3>Fast Check Settings</h3>
            <>
              <p>Fast Factory Arcade?</p>
              <SimpleIcon
                imgUrl={dkPadIcon}
                storeKey="factoryArcade"
                prefix="fastChecks"
                updateItem={setFastCheck}
              />
              <p>Number of pearls the Mermaid requires:</p>
              <CountSelector
                storeKey="galleonMermaid"
                imgUrl={pearlIcon}
                prefix="fastChecks"
                setCount={setFastCheck}
                maxValue={5}
              />
            </>
            <h3>UI Settings</h3>
            <>
              <p>Group by Regions?</p>
              <CheckIcon storeKey="groupByRegion" prefix="ui" updateItem={setUi} />
            </>
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default GeneratorSettings
