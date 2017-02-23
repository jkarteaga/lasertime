import mock from 'mock-require'

export function prefixLink(link) {
    return link;
}

mock('gatsby-helpers', {
    prefixLink
});
