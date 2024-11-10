import { Col, Input, Row, Select, Space, DatePicker } from 'antd';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { columnsCpeTable } from './columnsCpeTable.jsx';
import AutoCompleteAcc from '@/components/accord-ui/AutoCompleteAcc.jsx';
import ButtonAcc from '@/components/accord-ui/ButtonAcc.jsx';
import TableGrid from '../../components/TableGrid.jsx';
import { DATA_TABLE } from '@/@fake-db/dataTable.js';

const { RangePicker } = DatePicker;

const disabledDate = (current) => {};

const Dashboard = () => {
  return (
    <div className="grid overflow-auto">
      <section className="border-b border-slate-200">
        <Row className="py-3 px-3 xs:gap-y-3">
          <Col lg={12} xs={24} className="flex justify-start items-center px-2">
            <h1 className="font-semibold text-2xl text-slate-800">
              Control de CPE
            </h1>
          </Col>
          <Col lg={12} xs={24} className="flex justify-center px-2">
            <Space.Compact block>
              <AutoCompleteAcc />
              <ButtonAcc
                size="small"
                className="h-full w-12"
                type="primary"
                borderRadius="4px"
                title="Conectar"
              >
                <FontAwesomeIcon icon={faDatabase} className="text-lg" />
              </ButtonAcc>
            </Space.Compact>
          </Col>
        </Row>
        <Row className="py-3 px-3 border-t border-slate-200 xs:gap-y-3">
          <Col lg={6} xs={24} className="flex justify-center px-2">
            <Select
              placeholder="Sucursal"
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
              size="large"
              className="w-full text-start"
            />
          </Col>
          <Col lg={6} xs={24} className="flex justify-start items-center px-2">
            <RangePicker
              disabledDate={disabledDate}
              size="large"
              className="w-full"
            />
          </Col>
          <Col lg={4} xs={24} className="flex justify-center px-2">
            <Select
              placeholder="Estado"
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
              size="large"
              className="w-full min-w-[10px] text-start"
            />
          </Col>
          <Col lg={8} xs={24} className="flex justify-center px-2">
            <Input size="large" placeholder="Buscar..." />
          </Col>
        </Row>
      </section>
      <section className="overflow-auto">
        <TableGrid
          columnsFn={columnsCpeTable}
          api={'http://127.0.0.1:8000/api/pagos'}
        />
      </section>
    </div>
  );
};

export default Dashboard;
