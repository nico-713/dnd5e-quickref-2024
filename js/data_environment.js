data_environment_obscurance = [
    {
        title: "Lightly obscured",
        icon: "bleeding-eye",
        subtitle: "Disadvantage on Perception",
        description: "Dim light, patchy fog, moderate foliage.",
        reference: "PHB, pg. 19.",
        bullets: [
            "Creatures have <b>Disadvantage on Wisdom (Perception)</b> checks that rely on sight."
        ]
    },
    {
        title: "Heavily obscured",
        icon: "lightning-tear",
        subtitle: "Effectively blind",
        description: "Darkness, opaque fog, dense foliage",
        reference: "PHB, pg. 19.",
        bullets: [
            "Creatures have the <b>Blinded</b> condition, when trying to see something."
        ]
    }
]

data_environment_light = [
    {
        title: "Bright light",
        icon: "star-pupil",
        subtitle: "Normal vision",
        description: "Bright light lets most creatures see normally",
        reference: "PHB, pg. 19.",
        bullets: [
            "Gloomy days still provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius."
        ]
    },
    {
        title: "Dim light",
        icon: "semi-closed-eye",
        subtitle: "Lightly obscured",
        description: "Dim light, also called shadows",
        reference: "PHB, pg. 19.",
        bullets: [
            "Creates a <b>lightly obscured</b> area.",
            "An area of dim light is usually a boundary between a source of bright light, such as a torch, and surrounding darkness.",
            "The soft light of twilight and dawn also counts as dim light. A particularly brilliant full moon might bathe the land in dim light."
        ]
    },
    {
        title: "Darkness",
        icon: "worried-eyes",
        subtitle: "Heavily obscured",
        description: "Darkness creates a heavily obscured area",
        reference: "PHB, pg. 19.",
        bullets: [
            "Creates a <b>heavily obscured</b> area.",
            "Characters face darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon or a subterranean vault, or in an area of magical darkness."
        ]
    }
]

data_environment_vision = [
    {
        title: "Blindsight",
        icon: "one-eyed",
        subtitle: "Perceive without sight",
        description: "You can see within a specified range without relying on physical sight.",
        reference: "PHB, pg. 361.",
        bullets: [
            "You can see anything that isn't behind Total Cover even if you have the Blinded condition or are in Darkness.",
            "You can see something that has the Invisible condition.",
            "Creatures without eyes, such as oozes, and creatures with echolocation or heightened senses, such as bats and true dragons, have this sense."
        ]
    },
    {
        title: "Darkvision",
        icon: "semi-closed-eye",
        subtitle: "Limited vision in darkness",
        description: "A creature with Darkvision can see better in the dark or low light conditions, within a certain radius",
        reference: "PHB, pg. 365",
        bullets: [
            "Within a specified range, a creature with darkvision can see in Dim Light as if it were Bright Light and in Darkness as if it were Dim Light.",
            "However, the creature can’t discern color in darkness, only shades of gray.",
            "Many creatures in the worlds of D&D, especially those that dwell underground, have darkvision."
        ]
    },
    {
        title: "Tremorsense",
        icon: "semi-closed-eye",
        subtitle: "Sense vibrations",
        description: "pinpoint location of creatures in contact with the same surfaces you are",
        reference: "PHB, pg. 377.",
        bullets: [
            "Within a specified range, a creature with Tremorsense can pinpoint the location of creatures and moving objects, provided that the creature with Tremorsense and anything it is detecting are both in contact with the same surface or liquid.",
            "Tremorsense can't detect creatures in the air, and it doesn't count as a form of sight."
        ]
    },
    {
        title: "Truesight",
        icon: "eye-shield",
        subtitle: "See in darkness",
        description: "Your vision is enhanced within a specified range, it pierces the following",
        reference: "PHB, pg. 377.",
        bullets: [
            "You can see in normal and magical Darkness.",
            "You can see creatures and objects that have the Invisible condition.",
            "Visual illusions appear transparent to you, and you automatically succeed on saving throws against them.",
            "You discern the true form of any creature or object you see that has been transformed by magic.",
            "You see into the Ethereal Plane."
        ]
    }
]

data_environment_cover = [
    {
        title: "Half cover",
        icon: "broken-shield",
        subtitle: "Low wall, furniture, creatures",
        description: "A target has half cover if an obstacle blocks at least half of its body",
        reference: "PHB, pg. 25-26.",
        bullets: [
            "The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.",
            "A target with half cover has a <b>+2 bonus to AC and Dexterity saving throws</b>.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Three-quarters cover",
        icon: "cracked-shield",
        subtitle: "Portcullis, arrow slit",
        description: "A target has three-quarters cover if about three-quarters of it is covered by an obstacle",
        reference: "PHB, pg. 25-26.",
        bullets: [
            "The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.",
            "A target with three-quarters cover has a <b>+5 bonus to AC and Dexterity saving throws</b>.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Full cover",
        icon: "shield",
        subtitle: "Completely concealed",
        description: "A target has total cover if it is completely concealed by an obstacle",
        reference: "PHB, pg. 25-26.",
        bullets: [
            "A target with total cover <b>can’t be targeted directly</b> by an attack or a spell, although some spells can reach such a target by including it in an area of effect.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    }
]
