import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
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
import bananaMedalIcon from '../../assets/images/settings/bananamedal.gif'
import dropIcon from '../../assets/images/settings/beaver.png'
import bonusIcon from '../../assets/images/settings/bonus.png'
import bananaIcon from '../../assets/images/settings/bunch.png'
import shopIcon from '../../assets/images/settings/funky.png'
import hardShootIcon from '../../assets/images/settings/hard_shoot.png'
import melonIcon from '../../assets/images/settings/melon.png'
import toughBananaIcon from '../../assets/images/settings/rabbit.png'
import slamSwitchIcon from '../../assets/images/settings/slam_switch.png'
import switchsanityIcon from '../../assets/images/settings/switch.png'
import slamIcon from '../../assets/images/slam1.png'
import featherIcon from '../../assets/images/tiny_gun.png'
import wrinkly from '../../assets/images/wrinkly.png'
import diveIcon from '../../assets/images/diving.png'
import koshaHead from '../../assets/images/kosha.png'
import fairyCamIcon from '../../assets/images/filmwave1.png'
import crankyIcon from '../../assets/images/cranky.png'
import unknownIcon from '../../assets/images/unknown-small.png'
import kasplatIcon from '../../assets/images/settings/kasplat.png'
import funkyIcon from '../../assets/images/settings/funky.png'
import snideIcon from '../../assets/images/snide.png'
import candyIcon from '../../assets/images/candy.png'
import DKPortalIcon from '../../assets/images/dk-portal.png'
import LZRIcon from '../../assets/images/settings/butwherewasthekasplat.png'

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#004000',
    color: '#ffffff'
  }
}

const LoadingZoneRandomizer: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [setSetting, setBarrier, setFastCheck, setUi, setWinCondition, setIslesShops, setJapesCranky, setJapesFunky, setJapesSnide, setAztecCranky, setAztecFunky, setAztecCandy, setAztecSnide, setFactoryCranky, setFactoryFunky, setFactoryCandy, setFactorySnide, setGalleonCranky, setGalleonFunky, setGalleonCandy, setGalleonSnide, setForestCranky, setForestFunky, setForestSnide, setCavesCranky, setCavesFunky, setCavesCandy, setCavesSnide, setCastleCranky, setCastleFunky, setCastleCandy, setCastleSnide] = useDonkStore(
    useShallow((state) => [state.setSetting, state.setBarrier, state.setFastCheck, state.setUi, state.setWinCondition, state.setIslesShops, state.setJapesCranky, state.setJapesFunky, state.setJapesSnide, state.setAztecCranky, state.setAztecFunky, state.setAztecCandy, state.setAztecSnide, state.setFactoryCranky, state.setFactoryFunky, state.setFactoryCandy, state.setFactorySnide, state.setGalleonCranky, state.setGalleonFunky, state.setGalleonCandy, state.setGalleonSnide, state.setForestCranky, state.setForestFunky, state.setForestSnide, state.setCavesCranky, state.setCavesFunky, state.setCavesCandy, state.setCavesSnide, state.setCastleCranky, state.setCastleFunky, state.setCastleCandy, state.setCastleSnide])
  )

  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)
  const [isKeySeed, isKey8Seed, isKey38Seed, isKremKaptureSeed, isRapSeed, isChallengeSeed, isWabbitSeed, isGBSeed, isBPSeed, isCoCoinSeed, isMedalSeed, isCrownSeed, isFairySeed, isRainbowSeed, isBeanSeed, isPearlSeed, isBossSeed, isBonusSeed] = useDonkStore(useShallow((state) => [state.winCondition.bossKeys, state.winCondition.key8, state.winCondition.key3And8, state.winCondition.kremlingKapture, state.winCondition.takeItToTheFridge, state.winCondition.kRoolChallenge, state.winCondition.killTheWabbit, state.winCondition.goldBananas, state.winCondition.blueprints, state.winCondition.companyCoins, state.winCondition.bananaMedals, state.winCondition.crowns, state.winCondition.fairies, state.winCondition.rainbowCoins, state.winCondition.theBean, state.winCondition.pearls, state.winCondition.bosses, state.winCondition.bonuses]))

  const lzrShuffler = useDonkStore(useShallow((state) => state.settings.shuffleLoadingZones)) ? '' : 'lzr-shuffler'

  return (
    <span>
      <span className={`${lzrShuffler}`} onClick={openModal} title="Click to open the Loading Zone Randomizer.">
        ⚙️
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="LZR Settings"
        style={customStyles}
      >
        <section className="modal-settings">
        <h2>Loading Zone Randomizer</h2>
          <section className="pool">
            <p className="full-grid">Coming Soon™.</p>
            <p className="full-grid">And by "soon", I mean "when Satoru Iwata comes back to Nintendo". I absolutely HATE LZR, so this will probably be the last thing I ever do along with shuffling the colored bananas. =_=; If YOU have a solution, why don't you edit this damn thing yourself and make a pull request? -Alex</p>
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default LoadingZoneRandomizer
