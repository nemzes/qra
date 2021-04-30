const DEFAULT_INTERPOLATION_MATCHER = /\{{(.*?)}}/g;
const ROUTING_INTERPOLATION_MATCHER = /:(.*?)(\/|$)/g;

type InterpolationMap = Record<
  string,
  string | number | ((token: string) => string)
>;

export function interpolate(
  s: string,
  obj: InterpolationMap,
  matcher: RegExp = DEFAULT_INTERPOLATION_MATCHER
): string {
  return s.replace(matcher, (_, token: string) => {
    const interpolateTo = obj[token];
    if (typeof interpolateTo === 'function') {
      return interpolateTo(token);
    }

    return obj[token].toString();
  });
}

export function routeInterpolate(route: string, obj: InterpolationMap): string {
  return interpolate(route, obj, ROUTING_INTERPOLATION_MATCHER);
}
