import { FEATURE_FLAGS } from '../constants/feature-flags';
import { PAGE_COPY } from '../constants/page-copy';

export function visibleInstructionCards() {
  return PAGE_COPY.instructions.cards.filter((card) =>
    card.id === 'music' ? FEATURE_FLAGS.MUSIC_CARD : true,
  );
}

export type InstructionCard = ReturnType<typeof visibleInstructionCards>[number];
