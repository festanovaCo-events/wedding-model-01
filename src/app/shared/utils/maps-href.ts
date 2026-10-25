const MAPS_SEARCH_URL = 'https://www.google.com/maps/search/?api=1&query=';

export function eventMapsHref(mapsUrl: string, location: string): string {
  if (mapsUrl) {
    return mapsUrl;
  }

  return `${MAPS_SEARCH_URL}${location}`;
}
