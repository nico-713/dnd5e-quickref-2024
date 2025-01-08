data_action = [
    {
        title: "Attack",
        icon: "crossed-swords",
        subtitle: "Melee or ranged attack",
        description: "Perform an attack roll with a weapon or an unarmed strike.",
        reference: "PHB, pgs. 12, 361.",
        bullets: [
            "You can either equip or unequip one weapon when you make an attack as part of this action. You do so before or after the attack.",
            "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.",
            "When you attack with a light melee weapon, you can use a bonus action to attack with another light melee weapon in your other hand (see the <i>Offhand attack</i> bonus action).",
            "You may use an unarmed strike to <i>Grapple</i>, <i>Shove</i> or deal damage to an opponent. To deal damage, make an attack roll against the target with a bonus of your Strength Modifier plus your Proficiency Bonus and deal (1 + STR Modifier) Bludgeoning damage.",
            "Some conditions give Advantage on the attack: attacks against blinded, paralyzed, petrified, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.",
            "Some conditions give Disadvantage on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers."
        ]
    },
    {
        title: "Grapple",
        icon: "grab",
        subtitle: "Special unarmed attack",
        description: "Attempt to grab a creature or wrestle with it",
        reference: "PHB, pg. 377.",
        bullets: [
            "You can use the <i>Attack</i> action to make a special unarmed attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your grapple must be no more than one size larger than you, and you have to have a hand free to grab the target.",
            "The target must succeed on a Strength or Dexterity saving throw (it chooses which), or it has the <i>Grappled</i> condition. The DC for the saving throw and any escape attempts is 8 + STR Modifier + Proficiency Bonus of the attacker."
        ]
    },
    {
        title: "Shove",
        icon: "hand",
        subtitle: "Special unarmed attack",
        description: "Shove a creature, either to knock it prone or push it away from you",
        reference: "PHB, pg. 377.",
        bullets: [
            "You can use the <i>Attack</i> action to make a special unarmed attack, a shove. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you.",
            "The target must succeed on a Strength or Dexterity saving throw (it chooses which), or it will either be pushed 5 feet or knocked prone (attacker chooses which). The DC for the saving throw is 8 + STR Modifier + Proficiency Bonus of the attacker."
        ]
    },
    {
        title: "Cast a spell",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 action",
        description: "Cast a spell with a casting time of 1 action",
        reference: "PHB, pg. 235-238, 363.",
        bullets: [
            "On a turn, you can expend only one spell slot to cast a spell. You can't, for example, cast a spell with a spell slot as your action and another one using your bonus action on the same turn.",
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher, up to a maximum of 30."
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Double movement speed",
        description: "Gain extra movement for the current turn",
        reference: "PHB, pg. 365.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "PHB, pg. 366.",
        bullets: [
        ]
    },
    {
        title: "Dodge",
        icon: "aura",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 366.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has Disadvantage if you can see the attacker, and you make Dexterity saving throws with Advantage.",
            "You lose this benefit if you are <i>Incapacitated</i> or if your speed is 0."
        ]
    },
    {
        title: "Escape",
        icon: "manacles",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 367.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check against the grapple's escape DC.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Help",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "PHB, pg. 368.",
        bullets: [
            "You can choose one of your skill or tool proficiencies and one ally who is near enough for you to assist verbally or physically when they make an ability check. That ally has Advantage on the next ability check they make with the chosen skill or tool.",
            "Alternatively, you can choose to distract an enemy within 5 feet of you, giving Advantage to the next attack roll against that enemy.",
            "The Advantage expires, if it is not used by the start of your next turn."
        ]
    },
    {
        title: "Utilize",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
        description: "Interact with an object or use special object abilities",
        reference: "PHB, pg. 377.",
        bullets: [
            "You normally interact with an object while doing something else, such as when you draw a sword as part of the attack action.",
            "When an object requires an action for its use, you take the <i>Utilize</i> action."
        ]
    },
    {
        title: "Use shield",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. .",
        bullets: [
            "Shields require the <i>Utilize</i> action to Don or Doff.",
            "Armor takes several minutes to equip or unequip.",
            "You gain the Armor Class benefit of a Shield only if you have training with it."
        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "Try to conceal yourself",
        description: "Try to conceal yourself",
        reference: "PHB, pg. 368.",
        bullets: [
            "You must succeed on a DC 15 Dexterity (Stealth) check while you're Heavily Obscured or behind at least Three-Quarters Cover and must be out of any enemy's line of sight.",
            "If you can see a creature, you can discern whether it can see you.",
            "On a successful check, you have the <i>Invisible</i> condition. Make note of your check's total, which is the DC for a creature to find you with a Wisdom (Perception) check.",
            "The condition ends immediately after you make a sound louder than a whisper, an enemy finds you, you make an attack roll or you cast a spell with a Verbal Component."
        ]
    },
    {
        title: "Influence",
        icon: "magnifying-glass",
        subtitle: "Urge a monster to do something.",
        description: "Urge a monster to do something.",
        reference: "PHB, pg. 369.",
        bullets: [
            "Describe or roleplay how you're communication with the creature. Trying to deceive, intimidate, amuse or persuade?",
            "Your DM determines if an ability check is necessary."
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "Discern something, that isn't obvious.",
        description: "Discern something, that isn't obvious.",
        reference: "PHB, pg. 373.",
        bullets: [
            "You make a Wisdom check to discern something that isn't obvious.",
            "E.g. Creature's state of mind = Insight, Creature's ailment or cause of death = Medicine, Concealed creature or object = Perception, Tracks or Food = Survival",
            "Your DM may request checks using other Abilities like Intellect."
        ]
    },
    {
        title: "Study",
        icon: "magnifying-glass",
        subtitle: "Study your memory, a book or a clue.",
        description: "Study your memory, a book or a clue.",
        reference: "PHB, pg. 375.",
        bullets: [
            "You make an intelligence check to study a source of knowledge and call to mind an important piece of information about it."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Wait for a particular circumstance.",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 372.",
        bullets: [
            "You take the <i>Ready</i> action on your turn, which lets you act by taking a Reaction before the start of your next turn.",
            "Decide, what perceivable circumstance will trigger your Reaction.",
            "Choose the action you will take in response to that trigger, or choose to move up to your Speed in response to it.",
            "When the trigger occurs, you can either take your Reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration."
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilize a creature",
        icon: "first-aid",
        subtitle: "Stabilize a dying creature.",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "PHB, pg. 29.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10.",
            "On a success, the creature is stable and no longer needs to make death saving throws even though it has 0 Hit Points.",
            "if it takes damage, it stops being stable and has to make death saving throws again.",
            "A stable creature regains 1 hit point after 1d4 hours if it isn't healed."
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 15.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
