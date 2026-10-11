---
name: clean-code
description: >-
  Applies Clean Code guidelines when writing or reviewing code in this wedding
  invitation app. Use when implementing features, refactoring, fixing bugs, or
  reviewing changes, and when the user mentions clean code, SOLID, DRY, or
  maintainability. Keeps edits small and does not rewrite the architecture
  unless a real defect requires it.
---

# Clean Code Guidelines

## Constants Over Magic Numbers
- Replace hard-coded values with named constants
- Use descriptive constant names that explain the value's purpose
- Keep constants at the top of the file or in a dedicated constants file

## Meaningful Names
- Variables, functions, and classes should reveal their purpose
- Names should explain why something exists and how it's used
- Avoid abbreviations unless they're universally understood

## Smart Comments
- Don't comment on what the code does - make the code self-documenting
- Use comments to explain why something is done a certain way
- Document APIs, complex algorithms, and non-obvious side effects

## Single Responsibility
- Each function should do exactly one thing
- Functions should be small and focused
- If a function needs a comment to explain what it does, it should be split

## DRY (Don't Repeat Yourself)
- Extract repeated code into reusable functions
- Share common logic through proper abstraction
- Maintain single sources of truth

## Clean Structure
- Keep related code together
- Organize code in a logical hierarchy
- Use consistent file and folder naming conventions

## Encapsulation
- Hide implementation details
- Expose clear interfaces
- Move nested conditionals into well-named functions

## Code Quality Maintenance
- Refactor continuously
- Fix technical debt early
- Leave code cleaner than you found it

## Testing
- Write tests before fixing bugs
- Keep tests readable and maintainable
- Test edge cases and error conditions

## Version Control
- Write clear commit messages
- Make small, focused commits
- Use meaningful branch names

## Aplicación en este proyecto

Estas reglas se aplican así en esta invitación Angular (`features/model-01` y `features/shared`). El cambio se queda en el defecto; no se reescribe la arquitectura ni se añade otro modelo.

- Datos de la boda: textos, fechas y plazo salen de `WEDDING_INFO`. El tema visual (paleta, assets y animaciones) sale de `ACTIVE_THEME`. La visibilidad de secciones sale de `FEATURE_FLAGS`. No copies nombres, fechas ni el plazo dentro de un componente.
- Cupos: el tope del formulario es `available_seats` de la respuesta de info. `seats_reserved` es lo ya reservado en esa invitación, no el tope. No uses `7` como respaldo.
- Estado: confirmada es `InvitationStateService.isConfirmed()` (`status === 'ACCEPTED'`). Rechazada es `status === 'DECLINED'`; si hace falta un helper, vive junto a `isConfirmed()`. No inventes `hasResponded`. La expiración es solo `shouldShowExpiredInvitationPage`; el instante del plazo es `isConfirmationDeadlinePassed` con `WEDDING_INFO.confirmation.deadline`. `preview=1` no redirige a `/expired`.
- HTTP: el único acceso al API es `InvitationService`, con rutas en `API_ROUTES` y el cambio mock/real en `API_MOCK_FLAGS`. El token llega por el query `token`. No añadas un token de inyección, NgRx, una máquina de estados del RSVP ni un mapper por campo.
- Responsabilidad: `Model01PageComponent` y `WeddingExpiredPageComponent` cargan, redirigen y abren modales con `ModalFlowService`. El dominio no lleva copy de la interfaz. No partas un componente de menos de unas 30 líneas. Los de este modelo llevan el prefijo `m01-`.
- Deuda: borra lo que ninguna plantilla monta. No lo abstraigas.
- Tests: plazo, cupos, redirección a `/expired`, el modal de confirmación y el cambio mock/real de `InvitationService`. No un spec por cada sección visual.
- En un `switch` sobre uniones o enums, el `default` debe asignar el valor a `never`. Los imports van al inicio del archivo.
- Los commits son pequeños y el mensaje explica el porqué. Solo se crean cuando el usuario lo pide.
