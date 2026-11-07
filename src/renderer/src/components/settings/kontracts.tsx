/*              <p>Keys</p>
              <SimpleRadioIcon
                imgUrl={keyIcon}
                title="Highlights the keys next to the level icons in a red background."
                storeKey="bossKeys"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Get Key 8 only</p>
              <SimpleRadioIcon
                imgUrl={keyIcon}
                title="Highlights Key 8's icon in a red background."
                storeKey="key8"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Kremling Kapture</p>
              <SimpleRadioIcon
                imgUrl={fairyCamIcon}
                title="Highlights the Camera's icon in a red background and adds a &quot;Kremling Kapture&quot; tab to the navigation bar at the top."
                storeKey="kremlingKapture"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Complete the DK Rap</p>
              <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Highlights everything referenced in the DK Rap in a red background."
                storeKey="takeItToTheFridge"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Kill the Wabbit</p>
              <SimpleRadioIcon
                imgUrl={toughBananaIcon}
                title="Highlights Chunky's 5-Door Igloo Banana check in Crystal Caves in red text."
                storeKey="killTheWabbit"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Bananas</p>
              <SimpleRadioIcon
                imgUrl={gbIcon}
                title="Highlights Bananas in a red background."
                storeKey="goldBananas"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Blueprints</p>
              <SimpleRadioIcon
                imgUrl={blueprintIcon}
                title="Highlights the Blueprints and Snide in a red background and 'turn in Blueprint to Snide' checks in red text."
                storeKey="blueprints"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Company Coins</p>
              <SimpleRadioIcon
                imgUrl={companyCoinIcon}
                title="Highlights the Company Coins in a red background."
                storeKey="companyCoins"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Banana Medals</p>
              <SimpleRadioIcon
                imgUrl={bananaMedalIcon}
                title="Highlights Banana Medals in a red background."
                storeKey="bananaMedals"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Crowns</p>
              <SimpleRadioIcon
                imgUrl={crownIcon}
                title="Highlights Crowns in a red background."
                storeKey="crowns"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Fairies</p>
              <SimpleRadioIcon
                imgUrl={fairyIcon}
                title="Highlights Banana Fairies in a red background."
                storeKey="fairies"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Rainbow Coins</p>
              <SimpleRadioIcon
                imgUrl={rainbowCoinIcon}
                title="Highlights Rainbow Coins in a red background."
                storeKey="rainbowCoins"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>The Bean™</p>
              <SimpleRadioIcon
                imgUrl={beanIcon}
                title="Highlights The Bean™ in a red background."
                storeKey="theBean"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Pearls</p>
              <SimpleRadioIcon
                imgUrl={pearlIcon}
                title="Highlights Pearls in a red background."
                storeKey="pearls"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Bosses</p>
              <SimpleRadioIcon
                imgUrl={keyIcon}
                title="Highlights the boss checks in red text."
                storeKey="bosses"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Bonus Barrels</p>
              <SimpleRadioIcon
                imgUrl={bonusIcon}
                title="Highlights all Bonus Barrel checks in red text."
                storeKey="bonuses"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
            <p className="full-grid">&nbsp;</p>
            <p>Number of the indicated item needed:</p>
              <CountSelector
                imgUrl={(isKeySeed || isKey8Seed || isKey38Seed || isBossSeed) ? keyIcon : isKremKaptureSeed ? fairyCamIcon : isRapSeed ? crankyIcon : isChallengeSeed ? hardShootIcon : isWabbitSeed ? toughBananaIcon : isGBSeed ? gbIcon : isBPSeed ? blueprintIcon : isCoCoinSeed ? companyCoinIcon : isMedalSeed ? bananaMedalIcon : isCrownSeed ? crownIcon : isFairySeed ? fairyIcon : isRainbowSeed ? rainbowCoinIcon : isBeanSeed ? beanIcon : isPearlSeed ? pearlIcon : isBonusSeed ? bonusIcon : unknownIcon}
                title="Number of the indicated item needed."
                storeKey="winConItemCount"
                prefix="winCondition"
                setCount={setWinCondition}
                maxValue={isKeySeed ? 8 : isGBSeed ? (capRemoved ? 255 : 201) : isBPSeed ? 40 : isCoCoinSeed ? 2 : isMedalSeed ? (capRemoved ? 255 : 40): isCrownSeed ? (capRemoved ? 255 : 10) : isFairySeed ? (capRemoved ? 255 : 20) : isRainbowSeed ? (capRemoved ? 255 : 16) : isBeanSeed ? 1 : isPearlSeed ? (capRemoved ? 255 : 5) : isBossSeed ? 7 : isBonusSeed ? 43 : 0} //I know no good way of implementing Hideout Helm bonuses at this time, so the "Bonuses" win con caps out at 43 even though it can go to 53.
              />
            <p></p>
            <p></p>
*/
