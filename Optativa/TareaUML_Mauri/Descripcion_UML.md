## Descripción del Diagrama UML

### 1️⃣ Justificación de patrones

- **Patrón Estrategia (PlayerClass):**  
  Permite que cada jugador tenga una clase distinta (Rogue, Warlock, Paladin) sin modificar la clase base `Player`. Cada clase implementa su propia lógica de daño y habilidades únicas. Facilita añadir nuevas clases sin alterar el código existente.

- **Patrón Estrategia (AIBehavior):**  
  Los enemigos pueden tener comportamientos distintos (AggressiveAI, CautiousAI) sin modificar la clase `Enemy`. Esto permite extender comportamientos de IA nuevos de forma independiente.

- **Servicio (DamageCalculator):**  
  La lógica de cálculo de daño se separa de los personajes y del combate, evitando duplicar código. Esto permite modificar las fórmulas de daño, críticos y reducción por armadura de forma centralizada.

- **Polimorfismo (Character):**  
  Tanto `Player` como `Enemy` heredan de `Character`, compartiendo atributos comunes como vida, ataque y defensa. Los métodos como `chooseAction()` se implementan de forma específica en cada subclase.

---

### 2️⃣ Decisiones de encapsulación

- **Atributos privados:**

  - `currentHealth` y `maxHealth` se ocultan para proteger la integridad de los personajes.
  - `exp`, `currentResource` y `inventory` dentro de `Player` son privados para controlar el acceso mediante métodos específicos.
  - Recursos únicos de cada clase (`comboPoints` en Rogue, `soulShards` en Warlock, `holyPower` en Paladin) son privados para evitar estados inválidos.

- **Métodos públicos:**

  - Solo se exponen las operaciones necesarias para la interacción:  
    `takeDamage()`, `isAlive()`, `gainExperience()`, `levelUp()`, `useItem()`, `execute()` de acciones.
  - Cada clase tiene métodos específicos como `enterStealth()`, `backstab()` para Rogue o `drainSoul()`, `summonPet()` para Warlock.

- **Composición vs Agregación:**

  - `Player` tiene composición con `Equipment` e `Inventory`, porque estos componentes pertenecen exclusivamente al jugador.
  - `CombatState` tiene agregación con los `Character` participantes, porque los personajes existen independientemente del combate.

- **Resultado:**
  - La encapsulación protege la coherencia interna de los objetos y permite controlar las reglas del juego, evitando modificaciones directas de atributos críticos.

---

### 3️⃣ Flujo de caso de uso: "Combate Rogue vs Enemigo"

1. **Inicio del combate:**

   - `CombatState` ordena a los participantes por velocidad. Shadow (Rogue) actúa primero que Grok (Enemigo).

2. **Turno 1 - Rogue activa Stealth:**

   - El jugador selecciona la acción `UseAbilityAction` con la habilidad "Stealth".
   - Se valida el coste de recurso mediante `playerClass.abilityCost()`.
   - `Rogue.enterStealth()` activa el estado `stealth = true` y consume energía.

3. **Turno 2 - Enemigo ataca:**

   - `AIBehavior.decideAction()` decide atacar al jugador.
   - `DamageCalculator.calculate()` calcula el daño según ataque del enemigo, arma equipada y defensa del Rogue.
   - Se considera el bonus de esquiva del Rogue, pero falla.
   - `Shadow.takeDamage(15)` actualiza la vida del jugador.

4. **Turno 3 - Rogue usa Backstab:**

   - El jugador selecciona `UseAbilityAction` con "Backstab".
   - Como `stealth == true`, se aplica bonus de crítico aumentado.
   - `DamageCalculator.calculateCritical()` aplica multiplicador de 2.5.
   - `Rogue.addComboPoint()` incrementa los puntos combo.
   - El sigilo se desactiva automáticamente después del ataque.
   - `Grok.takeDamage(85)` reduce la vida del enemigo a 0.

5. **Fin de combate:**
   - `CombatState.isFinished()` detecta que no quedan enemigos vivos.
   - `Shadow.gainExperience(150)` añade experiencia.
   - Se ejecuta automáticamente `levelUp()` si se alcanza el nivel necesario, recalculando estadísticas.
   - Se añaden objetos al inventario mediante `inventory.add()`.

> Este flujo refleja la interacción completa de combate por turnos, respetando las reglas de encapsulación, polimorfismo y patrones de diseño implementados.

---
