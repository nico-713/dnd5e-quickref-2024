data_movement = [
    {
        title: "Move",
        icon: "run",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft moved",
        reference: "PHB, pg. 24-25, 374.",
        bullets: [
            "If you have more than one speed, such as your walking speed and a flying speed, you can switch back and forth between your speeds during your move. Whenever you switch, subtract the distance you've already moved from the new speed.",
            "You can move through the space of an ally, a creature that has the <i>Incapacitated</i> condition, a Tiny creature or a creature that is two sizes larger or smaller than you.",
            "Another creature's space is difficult terrain for you unless that creature is Tiny or your ally.",
            "You can't willingly end your move in a space occupied by another creature. If you somehow end a turn in a space with another creature, you have the <i>Prone</i> condition, unless you are Tiny or are of a larger size than the other creature."
        ]
    },
    {
        title: "Climb",
        icon: "crags",
        subtitle: "Cost: +5ft per 5ft",
        description: "Movement cost: each foot of movement costs 1 extra foot",
        reference: "PHB, pg. 363.",
        bullets: [
            "Each foot of movement costs 1 extra foot of movement while climbing. If you have a climb speed, you ignore this extra cost.",
            "May involve a Strength (Athletics) check if the climb is difficult."
        ]
    },
    {
        title: "Swim",
        icon: "at-sea",
        subtitle: "Cost: +5ft per 5ft",
        description: "Movement cost: each foot of movement costs 1 extra foot",
        reference: "PHB, pg. 376.",
        bullets: [
            "Each foot of movement costs 1 extra foot of movement while swimming. If you have a swim speed, you ignore this extra cost.",
            "May involve a Strength (Athletics) check if you're swimming in rough waters."
        ]
    },
    {
        title: "Flying",
        icon: "angel-wings",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft flown",
        reference: "PHB, pg. 367.",
        bullets: [
            "While you have a fly speed, you can stay aloft until you land, fall or die.",
            "While flying, you fall if you have the <i>Incapacitated</i> or <i>Prone</i> condition or your fly speed is reduced to 0.",
            "You can stay aloft in those circumstances if you can hover."
        ]
    },
    {
        title: "Drop prone",
        icon: "falling",
        subtitle: "Cost: 0ft",
        description: "Movement cost: 0ft (free)",
        reference: "PHB, pgs. 25, 372.",
        bullets: [
            "You can drop prone without using any of your speed.",
            "To move while prone, you must crawl or use magic such as teleportation",
            "Dropping prone adds the <i>Prone</i> condition."
        ]
    },
    {
        title: "Crawl",
        icon: "crawl",
        subtitle: "Cost: +5ft per 5ft",
        description: "Movement cost: each foot of movement costs 1 extra foot",
        reference: "PHB, pg. 364.",
        bullets: [
            "Each foot of movement costs 1 extra foot of movement while crawling."
        ]
    },
    {
        title: "Stand up",
        icon: "strong",
        subtitle: "Cost: half movement speed",
        description: "Movement cost: half of your speed, rounded down.",
        reference: "PHB, pg. 372.",
        bullets: [
            "You can't stand up if you don't have enough movement left or if your speed is 0"
        ]
    },
    {
        title: "High jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft",
        description: "Movement cost: 5ft per 5ft jumped",
        reference: "PHB, pg. 368.",
        bullets: [
            "You leap into the air a number of feet equal to <b>3 + your Strength modifier</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing high jump, you can jump only half that distance.",
            "You can extend your arms half your height above yourself during the jump. Thus, you can reach a distance equal to the height of the jump plus 1.5 times your height.",
            "In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can."
        ]
    },
    {
        title: "Long jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft jumped",
        reference: "PHB, pg. 370.",
        bullets: [
            "You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing long jump, you can leap only half that distance",
            "If you land in difficult terrain, you must succeed on a DC 10 Dexterity (Acrobatics) check or have the <i>Prone</i> condition.",
            "May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check."
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any stunt not on this list",
        description: "Perform any movement or stunt you can imagine",
        bullets: [
            "When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    },
    {
        title: "Difficult terrain",
        icon: "stone-pile",
        subtitle: "Cost modifier: +5ft per 5ft",
        reference: "PHB, pg. 25, 366.",
        description: "Moving in difficult terrain costs an additional 5ft per 5ft of movement",
        bullets: [
            "Every foot of movement costs 1 extra foot.",
            "Difficult terrain isn't cumulative; either a space is difficult terrain or it isn't."
        ]
    },
    {
        title: "Grapple move",
        icon: "grab",
        subtitle: "Cost: +5ft per 5ft",
        description: "Drag or carry the grappled creature with you",
        reference: "PHB, pg. 367.",
        bullets: [
            "If you move while grappling another creature, every foot of movement costs 1 extra foot unless the grappled creature is Tiny or you are two or more sizes larger than it."
        ]
    },
    {
        title: "Travel Pace",
        icon: "run",
        subtitle: "Traveling outside of combat",
        description: "Travel Pace for Fast, Normal and Slow Travel outside of combat.",
        reference: "PHB, pg. 20",
        bullets: [
            "Establish a marching order while you travel.",
            "<table><tr><th style='text-align:left'>Pace</th><th></th><th></th><th>Minute</th><th></th><th></th><th>Hour</th><th></th><th></th><th>Day</th></tr><tr><td>Fast</td><td></td><td></td><td>400 feet</td><td></td><td></td><td>4 miles</td><td></td><td></td><td>30 miles</td></tr><tr><td>Normal</td><td></td><td></td><td>300 feet</td><td></td><td></td><td>3 miles</td><td></td><td></td><td>24 miles</td></tr><tr><td>Slow</td><td></td><td></td><td>200 feet</td><td></td><td></td><td>2 miles</td><td></td><td></td><td>18 miles</td></tr></table>",
            "<b>Fast Travel</b> imposes Disadvantage on a traveler's Wisdom (Perception or Survival) and Dexterity (Stealth) checks.",
            "<b>Normal Travel</b> imposes Disadvantage on Dexterity (Stealth) checks.",
            "<b>Slow Travel</b> grants Advantage on Wisdom (Perception or Survival) checks.",
            "Travelers in wagons, carriages or other land vehicles choose a pace as normal. Characters in a waterborne vessel are limited to the speed of the vessel and don't choose a pace."
        ]
    }
]
