import { AnimationKey } from '../interfaces/event-card.interface';
import { ACTIVE_THEME } from '../themes/active-theme';

const EVENT_CARD_ANIMATIONS = {
  rings: ACTIVE_THEME.animations.rings,
  party: ACTIVE_THEME.animations.party,
} satisfies Record<AnimationKey, object>;

export function eventCardAnimation(key: AnimationKey): object {
  return EVENT_CARD_ANIMATIONS[key];
}
