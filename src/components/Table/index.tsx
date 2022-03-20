interface Props {
  tableHeader: JSX.Element;
  tableRows?: () => Array<JSX.Element>;
}
import Header from './header';
import Row from './row';

const Frame = ({ tableHeader, tableRows }: Props): JSX.Element => {
  return (
    <table className="min-w-full">
      {tableHeader}
      <tbody className="bg-white">{tableRows && tableRows()}</tbody>
    </table>
  );
};
export default { Frame, Header, Row };
