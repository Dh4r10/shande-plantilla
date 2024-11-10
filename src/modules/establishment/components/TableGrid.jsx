import { useEffect, useState } from 'react';
import { Table } from 'antd';

import PropTypes from 'prop-types';
import { getAxios } from '@/utils/methods.js';

const TablaGrid = ({ api, columnsFn }) => {
  const [sortedInfo, setSortedInfo] = useState({});

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = columnsFn({ sortedInfo });

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
    setPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
    };

    const url = `${api}/?page=${page}&page_size=${pageSize}`;

    getAxios(url, headers, setData, setLoading);
  }, [page, pageSize, api]);

  return (
    <Table
      columns={columns}
      rowKey="num_venta"
      dataSource={data?.results}
      pagination={{
        current: page,
        pageSize: pageSize,
        total: data?.total_elements,
        showSizeChanger: true,
        showTotal: (total) => `Total ${total} items`,
        responsive: true,
      }}
      loading={loading}
      onChange={handleChange}
    />
  );
};
export default TablaGrid;

TablaGrid.propTypes = {
  api: PropTypes.string,
  columnsFn: PropTypes.func,
};
