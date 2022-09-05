import { groq } from 'next-sanity';
export const blockContentQuery = 'blockContent[]{..., markDefs[]{ ...} }';

export const footerQuery =
  '"footerData": *[_type == "footer" && _id == "footer"][0]{ footerLinks[]{_key, _type, href, label, linkReference->{...}}}';

export const menuQuery =
  '"menuData": *[_type == "navigation" && _id == "navigation"][0]{ menuLinks[]{_key, _type, href, label, linkReference->{...}}}';

export const siteQuery = `*[_type == "site" && slug.current == $slug][0]{title, webSiteUrl, ${blockContentQuery},  ...}`;
