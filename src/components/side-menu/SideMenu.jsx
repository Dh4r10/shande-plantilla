import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import ButtonAcc from '@/components/accord-ui/ButtonAcc.jsx';
import { getLevelKeys, menuItemsRender, onOpenKeys } from './utils.js';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSidebarStore } from '../../store/sidebarStore.js';

const SideMenu = ({ collapsed }) => {
  const { getMenuItems, menuItems } = useSidebarStore();

  const MENU_ITEMS = menuItemsRender(menuItems);

  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

  const levelKeys = getLevelKeys(MENU_ITEMS);

  const onOpenChange = (openKeys) => {
    const newStateOpenKeys = onOpenKeys(openKeys, levelKeys, stateOpenKeys);
    setStateOpenKeys(newStateOpenKeys);
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <div>
      <Menu
        defaultSelectedKeys={['231']}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        mode="inline"
        items={MENU_ITEMS}
      />
      <div>
        <ButtonAcc
          className={`w-full h-10 ${!collapsed && 'flex justify-start px-7'}`}
          type="primary"
          danger={true}
        >
          <FontAwesomeIcon
            className="transform scale-x-[-1]"
            icon={faArrowRightFromBracket}
          />
          {!collapsed && 'Cerrar Sesión'}
        </ButtonAcc>
      </div>
    </div>
  );
};
export default SideMenu;

SideMenu.propTypes = {
  collapsed: PropTypes.bool,
};
