import { PAGE_COPY } from '../constants/page-copy';
import { fillCopy } from './fill-copy';

export function partialQuotasMessage(count: number, maximum: number): string {
  return fillCopy(PAGE_COPY.messages.partialQuotas, { count, maximum });
}
