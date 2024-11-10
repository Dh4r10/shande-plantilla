import { Space } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileCode,
  faQuestion,
  faFileSignature,
  faPaperPlane,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';

import ButtonAcc from '@/components/accord-ui/ButtonAcc.jsx';

import { GREEN_BUTTON } from '@/colors/tableButtons.js';

const ButtonsCpeTable = () => {
  return (
    <Space className="flex justify-center" size="small">
      <ButtonAcc
        size="small"
        type="primary"
        className="h-8 w-8"
        borderRadius="4px"
        propsComponentes={GREEN_BUTTON}
        disabled={true}
      >
        <FontAwesomeIcon className="text-lg" icon={faFileCode} />
      </ButtonAcc>
      <ButtonAcc
        size="small"
        type="primary"
        className="h-8 w-8"
        borderRadius="4px"
        propsComponentes={GREEN_BUTTON}
      >
        <FontAwesomeIcon className="text-lg" icon={faQuestion} />
      </ButtonAcc>
      <ButtonAcc
        size="small"
        type="primary"
        className="h-8 w-8"
        borderRadius="4px"
        propsComponentes={GREEN_BUTTON}
      >
        <FontAwesomeIcon className="text-lg" icon={faFileSignature} />
      </ButtonAcc>
      <ButtonAcc
        size="small"
        type="primary"
        className="h-8 w-8"
        borderRadius="4px"
        propsComponentes={GREEN_BUTTON}
        disabled={true}
      >
        <FontAwesomeIcon className="text-lg" icon={faPaperPlane} />
      </ButtonAcc>
      <ButtonAcc
        size="small"
        type="primary"
        className="h-8 w-8"
        borderRadius="4px"
      >
        <FontAwesomeIcon className="text-lg" icon={faFilePdf} />
      </ButtonAcc>
    </Space>
  );
};

export default ButtonsCpeTable;
