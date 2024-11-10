import { formatDate } from '@/utils/dateFormaters.js';
import ButtonsCpeTable from './ButtonsCpeTable.jsx';

export const columnsCpeTable = ({ sortedInfo }) => {
  const columns = [
    {
      title: () => <p className="text-center">Sucursal</p>,
      dataIndex: 'sucursal',
      key: 'sucursal',
      render: (text) => <p className="text-center">{text}</p>,
      sorter: (a, b) => a.sucursal.localeCompare(b.sucursal),
      sortOrder: sortedInfo.columnKey === 'sucursal' ? sortedInfo.order : null,
      width: 140,
    },
    {
      title: () => <p className="text-center">N° Venta</p>,
      dataIndex: 'num_venta',
      key: 'num_venta',
      render: (text) => <p className="text-center">{text}</p>,
      sorter: (a, b) => a.num_venta - b.num_venta,
      sortOrder: sortedInfo.columnKey === 'num_venta' ? sortedInfo.order : null,
      width: 120,
    },
    {
      title: () => <p className="text-center">Cliente</p>,
      dataIndex: 'cliente',
      key: 'cliente',
      render: (text) => <p>{text}</p>,
      sorter: (a, b) => a.cliente.localeCompare(b.cliente),
      sortOrder: sortedInfo.columnKey === 'cliente' ? sortedInfo.order : null,
    },
    {
      title: () => <p className="text-center">F. Emisión</p>,
      dataIndex: 'fecha_emision',
      key: 'fecha_emision',
      render: (text) => (
        <p className="text-center">
          {formatDate({ date: text, formatDT: 'DD-MM-YYYY HH:mm:ss' })}
        </p>
      ),
      sorter: (a, b) => new Date(a.fecha_emision) - new Date(b.fecha_emision),
      sortOrder:
        sortedInfo.columnKey === 'fecha_emision' ? sortedInfo.order : null,
      width: 160,
    },
    {
      title: () => <p className="text-right pr-2">Importe</p>,
      dataIndex: 'importe',
      key: 'importe',
      render: (text) => <p className="text-right">S/ {text}</p>,
      sorter: (a, b) => a.importe - b.importe,
      sortOrder: sortedInfo.columnKey === 'importe' ? sortedInfo.order : null,
      width: 140,
    },
    {
      title: () => <p className="text-center">Acción</p>,
      key: 'accion',
      render: (_, record) => <ButtonsCpeTable />,
      width: 250,
    },
  ];

  return columns;
};
