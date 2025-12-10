      <CastleCheck
        id={7348}
        name="Enemy at Upper Cave Dungeon Entrance"
        region="Castle Dungeon"
        canGetLogic={inStage.in && anyKong && bat.in}
        canGetBreak={inStage.out && anyKong && bat.out}
      />
      <CastleCheck
        id={7350}
        name="Enemy at Upper Cave Lower Warp 1 Entrance"
        region="Castle Dungeon"
        canGetLogic={inStage.in && anyKong && bat.in}
        canGetBreak={inStage.out && anyKong && bat.out}
      />
      <CastleCheck
        id={7351}
        name="Enemy at Upper Cave Central Warp Area Entrance"
        region="Castle Dungeon"
        canGetLogic={inStage.in && anyKong}
      />
      <CastleCheck
        id={7319}
        name="Enemy in DK's Face Dungeon"
        region="Castle Dungeon"
        canGetLogic={inStage.in && dk && canSlam}
      />
      <CastleCheck
        id={7320}
        name="Enemy in Diddy's Chair Dungeon"
        region="Castle Dungeon"
        canGetLogic={inStage.in && diddy && canSlam && kosha.in}
        canGetBreak={inStage.out && diddy && canSlam && kosha.out}
      />
      <CastleCheck
        id={7321}
        name="Enemy Outside Lanky's Acid Dungeon"
        region="Castle Dungeon"
        canGetLogic={inStage.in && anyKong && kosha.in}
        canGetBreak={inStage.out && anyKong && kosha.out}
      />
