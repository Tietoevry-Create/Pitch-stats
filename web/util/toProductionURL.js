// checks references for type and routes to the corresponding folder in /pages/ with slug appended
export default function toProductionURL(document) {
  switch (document._type) {
    case 'frontPage':
      return '/';
    case 'category':
      return '/category/' + document.slug.current;
    case 'sitePage':
      return '/' + document.slug.current;
    case 'site':
      return '/site/' + document.slug.current;
    default:
      return '/404';
  }
}
