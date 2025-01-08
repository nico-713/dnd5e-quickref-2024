data_condition = [
    {
        title: "Blinded",
        icon: "one-eyed",
        subtitle: "You can't see",
        description: "You can't see",
        reference: "PHB, pg. 361.",
        bullets: [
            "You automatically fail any ability check that requires sight.",
            "You have Disadvantage on attack rolls.",
            "Attack rolls against you have Advantage."
        ]
    },
    {
        title: "Charmed",
        icon: "smitten",
        subtitle: "You are charmed",
        description: "You are charmed by another creature",
        reference: "PHB, pg. 363.",
        bullets: [
            "You can't attack the charmer or target them with damaging abilities or magical effects.",
            "The charmer has Advantage on ability checks to interact with you socially."
        ]
    },
    {
        title: "Deafened",
        icon: "elf-ear",
        subtitle: "You can't hear",
        description: "You can't hear",
        reference: "PHB, pg. 365.",
        bullets: [
            "You automatically fail any ability check that requires hearing."
        ]
    },
    {
        title: "Exhaustion",
        icon: "crawl",
        subtitle: "You are exhausted",
        description: "Exhaustion is measured in six levels",
        reference: "PHB, pg. 366.",
        bullets: [
            "<table><tr><th>Level</th><th></th><th></th><th style='text-align:left'>D20 Tests</th><th></th><th></th><th>Speed</th></tr><tr><td>1</td><td></td><td></td><td>-2</td><td></td><td></td><td>-5 ft.</td></tr><tr><td>2</td><td></td><td></td><td>-4</td><td></td><td></td><td>-10 ft.</td></tr><tr><td>3</td><td></td><td></td><td>-6</td><td></td><td></td><td>-15 ft.</td></tr><tr><td>4</td><td></td><td></td><td>-8</td><td></td><td></td><td>-20 ft.</td></tr><tr><td>5</td><td></td><td></td><td>-10</td><td></td><td></td><td>-25 ft.</td></tr><tr><td>6</td><td></td><td></td><td>Death</td><td></td><td></td><td>Death</td></tr></table>",
            "This condition is cumulative. Each time you receive it, you gain 1 Exhaustion level. You die if your Exhaustion level is 6.",
            "Finishing a long rest reduces your exhaustion level by 1. When your Exhaustion level reaches 0, the condition ends."
        ]
    },
    {
        title: "Frightened",
        icon: "sharp-smile",
        subtitle: "You are frightened",
        description: "You are frightened",
        reference: "PHB, pg. 367.",
        bullets: [
            "You have Disadvantage on ability checks and attack rolls while the source of fear is within line of sight.",
            "You can't willingly move closer to the source of fear."
        ]
    },
    {
        title: "Grappled",
        icon: "grab",
        subtitle: "You are grappled",
        description: "You are grappled",
        reference: "PHB, pg. 367.",
        bullets: [
            "Your speed is 0 and can't increase.",
            "You have Disadvantage on attack rolls against any target other than the grappler.",
            "The grappler can drag or carry you when it moves, but every foot of movement costs 1 extra foot unless you are Tiny or 2 or more sizes smaller."
        ]
    },
    {
        title: "Incapacitated",
        icon: "internal-injury",
        subtitle: "You can't take actions or reactions",
        description: "You can't take actions or reactions",
        reference: "PHB, pg. 369.",
        bullets: [
            "Your Concentration is broken.",
            "You can't speak.",
            "You have Disadvantage on Initiative rolls."
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "You can't be seen",
        description: "You can't be seen without the aid of magic or a special sense",
        reference: "PHB, pg. 370.",
        bullets: [
            "You have Advantage on Initiative rolls and attack rolls unless your target can somehow see you.",
            "Attack rolls against you have Disadvantage, unless your attacker can somehow see you",
            "You aren't affected by any effect that requires its target to be seen unless the effect's creator can somehow see you. Any equipment you are wearing or carrying is also concealed."
        ]
    },
    {
        title: "Paralyzed",
        icon: "internal-injury",
        subtitle: "You are paralyzed",
        description: "You can't do anything",
        reference: "PHB, pg. 371.",
        bullets: [
            "You have the Incapacitated condition.",
            "Your speed is 0 and can't increase.",
            "Attack rolls against you have Advantage and any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Petrified",
        icon: "stone-pile",
        subtitle: "You are transformed into stone",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
        reference: "PHB, pg. 372.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You have the Incapacitated condition.",
            "Your speed is 0 and can't increase.",
            "Attack rolls against you have Advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You have Immunity to the Poisoned condition."
        ]
    },
    {
        title: "Poisoned",
        icon: "deathcab",
        subtitle: "You are poisoned",
        description: "You are poisoned",
        reference: "PHB, pg. 372.",
        bullets: [
            "You have Disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Prone",
        icon: "crawl",
        subtitle: "You are prone",
        description: "You are prone",
        reference: "PHB, pg. 372.",
        bullets: [
            "Your only movement option is to crawl, unless you stand up. If your speed is 0, you can't stand up.",
            "You have Disadvantage on attack rolls.",
            "Attack rolls against you have Advantage if the attacker is within 5 feet of you, otherwise the attack roll has Disadvantage."
        ]
    },
    {
        title: "Restrained",
        icon: "imprisoned",
        subtitle: "You are restrained",
        description: "You are restrained",
        reference: "PHB, pg. 373.",
        bullets: [
            "Your speed is 0 and can't increase.",
            "You have Disadvantage on attack rolls.",
            "Attack rolls against you have Advantage.",
            "You have Disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Stunned",
        icon: "internal-injury",
        subtitle: "You are stunned",
        description: "You are stunned",
        reference: "PHB, pg. 376.",
        bullets: [
            "You have the Incapacitated condition.",
            "Attack rolls against you have Advantage.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Unconscious",
        icon: "coma",
        subtitle: "You are unconscious",
        description: "You are unconscious",
        reference: "PHB, pg. 377.",
        bullets: [
            "You have the Incapacitated and Prone conditions and you drop whatever you're holding.",
            "Your speed is 0 and can't increase.",
            "Attack rolls against you have Advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws.",
        ]
    },
    {
        title: "Dying",
        icon: "dead-head",
        subtitle: "You are dying",
        description: "You have been dropped to zero hit points and are dying",
        reference: "PHB, pg. 197.",
        bullets: [
            "If you are reduced to 0 hit points by damage that fails to kill you, you fall unconscious and are dying.",
            "If you receive any healing you immediately regain consciousness and are no longer dying.",
            "When you start your turn with 0 hit points, you must make a Death Saving Throw without modifiers.",
            "10 or higher is a success, 9 or lower is a failure.",
            "On your third success, you become stable.",
            "On your third failure, you die.",
            "Rolling a 1 counts as two failures.",
            "Rolling a 20 immediately causes you to regain 1 hit point.",
            "If you take damage while dying, you suffer a failure. If it's from a critical hit, you suffer 2 failures.",
            "You can be stabilized by an ally taking the Help (Stabilize) action and succeeding on a DC 10 Wisdom (Medicine) check.",
            "Once stable, you are at 0 HP, still unconcious, but no longer dying. you regain 1 hit point after 1d4 hours if not healed."
        ]
    }
]
