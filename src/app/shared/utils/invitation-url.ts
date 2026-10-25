import {
  APP_BASE_PATH,
  INVITATION_QUERY,
  PREVIEW_MODE_VALUE,
} from '../constants/invitation-query';

export function isPreviewMode(value: string | undefined): boolean {
  return value === PREVIEW_MODE_VALUE;
}

export function invitationPageUrl(origin: string, token: string): string {
  const url = new URL(APP_BASE_PATH, origin);
  url.searchParams.set(INVITATION_QUERY.token, token);
  return url.toString();
}

export function withPreviewQuery(url: string, origin: string): string {
  if (!url) {
    return '';
  }

  try {
    const parsed = new URL(url, origin);
    parsed.searchParams.set(INVITATION_QUERY.preview, PREVIEW_MODE_VALUE);
    return parsed.toString();
  } catch {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}${INVITATION_QUERY.preview}=${PREVIEW_MODE_VALUE}`;
  }
}
