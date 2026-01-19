## UML Class Diagram - Turn-Based RPG Game (Mermaid)

````mermaid
classDiagram
    %% --- Classes ---
    class Character {
        <<abstract>>
        -name: String
        -level: int
        -currentHealth: int
        -maxHealth: int
        -baseAttack: int
        -baseDefense: int
        -speed: int
        +takeDamage(amount: int)
        +isAlive(): bool
        +chooseAction(context)
    }

    class Player {
        -exp: int
        -currentResource: int
        -maxResource: int
        -inventory: Inventory
        -equipment: Equipment
        -playerClass: PlayerClass
        +gainExperience(xp: int)
        +levelUp()
        +useItem(obj: ConsumableItem)
    }

    class Enemy {
        -type: String
        -behavior: AIBehavior
        +chooseAction(context)
    }

    Character <|-- Player
    Character <|-- Enemy

    %% --- Player classes / polymorphism ---
    class PlayerClass {
        <<interface>>
        +calculateBaseDamage(origin, target)
        +abilityCost(h)
        +modifyStats(stats)
    }

    class Rogue {
        -stealth: bool
        -comboPoints: int
        -criticalChance: float
        -dodgeBonus: int
        +enterStealth()
        +backstab(target)
        +addComboPoint()
    }
    class Warlock {
        -soulShards: int
        -maxSoulShards: int
        -corruptionActive: bool
        -hasPet: bool
        -petType: String
        +drainSoul(target)
        +summonPet(type)
        +applyCurse(target)
    }
    class Paladin {
        -holyPower: int
        -maxHolyPower: int
        -divineShieldActive: bool
        -righteousFury: bool
        -faithBonus: int
        +layOnHands(target)
        +divineShield()
        +smite(target)
    }
    PlayerClass <|.. Rogue
    PlayerClass <|.. Warlock
    PlayerClass <|.. Paladin
    Player --> PlayerClass : playerClass 1

    %% --- Actions and abilities ---
    class Action {
        <<abstract>>
        +execute(origin, target)
    }
    class AttackAction
    class UseAbilityAction
    class UseItemAction
    Action <|-- AttackAction
    Action <|-- UseAbilityAction
    Action <|-- UseItemAction

    class Ability {
        -name: String
        -resourceCost: int
        -damageType: String
        -power: int
        -target: String
        -cooldown: int
        -currentCooldown: int
        -isAreaOfEffect: bool
        -range: int
        -statusEffect: String
        +apply(origin, target)
        +isAvailable(): bool
        +reduceCooldown()
        +getTargets(state): List
    }

    %% --- Items, equipment and inventory ---
    class Item {
        <<abstract>>
        -name: String
        -weight: float
    }
    class ConsumableItem {
        -effectDescription: String
        +applyEffect(target)
    }
    Item <|-- ConsumableItem

    class Equipment {
        -weapon: Weapon
        -armor: Armor
    }
    class Weapon {
        -attackBonus: int
        -type: String
    }
    class Armor {
        -defenseBonus: int
        -slot: String
    }

    Item <|-- Weapon
    Item <|-- Armor

    Player o-- "1" Equipment
    Equipment o-- "0..1" Weapon
    Equipment o-- "0..1" Armor
    Player o-- "1" Inventory

    class Inventory {
        +add(item)
        +remove(item)
        +searchByName(name)
    }

    %% --- Combat and services ---
    class CombatState {
        -participants: List[Character]
        CombatState "1..*" o-- "1" Character : participants
        -currentTurn: int
        -roundNumber: int
        -turnOrder: List[Character]
        -eventLog: List[CombatEvent]
        -combatStartTime: DateTime
        -isActive: bool
        +nextTurn()
        +getLivingTargets()
        +isFinished(): bool
        +sortBySpeed()
        +addEvent(event)
        +getCurrentCharacter(): Character
    }

    class DamageCalculator {
        -baseDamageMultiplier: float
        -criticalMultiplier: float
        -armorReductionFactor: float
        +calculate(origin, target, ability, weapon): int
        +calculateCritical(baseDamage, critChance): int
        +applyArmorReduction(damage, defense): int
        +calculateElementalBonus(damageType, target): float
        +calculateFinalDamage(rawDamage, modifiers): int
    }

    class AIBehavior {
        <<interface>>
        +decideAction(enemy, state)
    }
    class AggressiveAI
    class CautiousAI
    AIBehavior <|.. AggressiveAI
    AIBehavior <|.. CautiousAI
    Enemy --> AIBehavior : behavior

```mermaid
````
