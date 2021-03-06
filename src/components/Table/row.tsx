import type { Asset } from 'types';

import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = Pick<
  Asset,
  'id' | 'rank' | 'symbol' | 'name' | 'priceUsd' | 'marketCapUsd' | 'volumeUsd24Hr'
> & {
  changePercent24Hr: number;
};

const Row = ({
  id,
  rank,
  symbol,
  name,
  marketCapUsd,
  volumeUsd24Hr,
  priceUsd,
  changePercent24Hr,
}: Props): JSX.Element => {
  return (
    <tr>
      <td className="px-6 py-4 border-b border-gray-500">
        <div className="flex items-center">
          <div>
            <div className="text-sm leading-5 text-gray-800">#{rank}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 border-b border-gray-500">
        <Link to={`?coinDetail=${id}`}>
          <div className="text-sm leading-5 text-blue-900">{name}</div>
        </Link>
      </td>
      <td className="px-6 py-4 border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">{symbol}</div>
      </td>
      <td className="px-2 py-4 border-b truncate text-blue-900 border-gray-500 text-sm leading-5">
        $ {priceUsd}
      </td>
      <td className="px-6 py-4 border-b text-blue-900 border-gray-500 text-sm leading-5">
        <span className="relative inline-block px-3 py-1 font-semibold text-gray-700 leading-tight">
          <span
            aria-hidden
            className={classNames(
              'absolute inset-0 opacity-50 rounded-full',
              changePercent24Hr > 0 ? 'bg-green-200' : 'bg-red-200'
            )}
          ></span>
          <span className="relative text-xs">{changePercent24Hr}</span>
        </span>
      </td>
      <td className="px-6 py-4 border-b truncate text-blue-900 border-gray-500 text-sm leading-5">
        $ {marketCapUsd}
      </td>

      <td className="px-6 py-4 border-b truncate border-gray-500 text-blue-900 text-sm leading-5">
        $ {volumeUsd24Hr}
      </td>
      <td className="  px-6 py-4 border-b border-gray-500 text-sm leading-5">
        <Link
          to={`?coinDetail=${id}`}
          className="px-5 py-2  text-center border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
        >
          Details
        </Link>
      </td>
    </tr>
  );
};
export default Row;
