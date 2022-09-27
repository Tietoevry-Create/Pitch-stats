import toProductionURL from './toProductionURL';

// probably a better way to check if something is a link or just a plain reference
export default function linkResolver(to) {
    if (to?.href) {
        return to.href;
    } else if (to?.linkReference) {
        return toProductionURL(to.linkReference);
    } else if (to?.hasOwnProperty('slug')) {
        return toProductionURL(to);
    } else {
        return '/';
    }
};