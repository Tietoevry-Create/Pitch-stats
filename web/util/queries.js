export const blockContentQuery = 'blockContent[]{..., markDefs[]{ ...} }';

export const footerQuery =
  '{"footerData": *[_type == "footer" && _id == "footer"][0]{ footerLinks[]{_key, _type, label, linkReference->}}}';
