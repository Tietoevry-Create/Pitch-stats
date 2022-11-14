import { CustomLink } from '../CustomLink';

const SingleSite = ({ site, index, ...rest }) => {
  return (
    <tr>
      {[
        index + 1 + '.',
        site.title,
        site.type,
        site.results.carbon,
        site.results.accessibility,
        site.results.performance,
        site.results.seo
      ].map((val, keyIndex) => (
        <td key={keyIndex} className="text-center p-0 pt-2">
          <div
            className={
              (keyIndex === 0
                ? 'rounded-l border-t-2 border-b-2 border-l-2 '
                : 'rounded-none border-t-2 border-b-2 ') +
              'border-violet h-10 flex items-center justify-center'
            }>
            {val}
          </div>
        </td>
      ))}

      <td className="text-center p-0 pt-2">
        <div className="rounded-r border-t-2 border-b-2 border-r-2 border-violet h-10 flex items-center justify-center">
          <CustomLink to={site.slug}>
            <a className="rounded-full px-2 text-base bg-peach hover:bg-peach40 border-transparent border-2 hover:border-heroblue hover:border-solid">
              {'Se mer'}
            </a>
          </CustomLink>
        </div>
      </td>
    </tr>
  );
};

export default SingleSite;
