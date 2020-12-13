import { Route, UrlMatcher, UrlSegment, UrlSegmentGroup } from '@angular/router';

export function endsWith(prefix: string): UrlMatcher {
    return (url: UrlSegment[]) => {
        const fullUrl = url.map(u => u.path).join('/');
        if (fullUrl.endsWith(prefix)) {
            return ({ consumed: url});
        }
        return null;
    };
}

export function ignoreSegments(mfePrefix: string): UrlMatcher {
    return (url: UrlSegment[], group: UrlSegmentGroup, route: Route) => {
      const fullUrl = url.map(u => u.path).join('/');
      if (fullUrl.startsWith(mfePrefix)) {
        return ({ consumed: [ url[0] ] });
      }
      return null;
    };
  }