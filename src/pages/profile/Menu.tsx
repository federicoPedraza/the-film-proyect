import { FC } from 'react';
import { Tabs as MaterialTabs, Tab } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
export const Menu: FC = () => {
  const navigate = useNavigate();
  const handleTabChange = (path: string) => {
    navigate(path);
  };

    return (
      <MaterialTabs  orientation="vertical">
        {tabs.map(({label, path}) => (
          <Tab key={`${path}-tab-key`}
            value={path} label={label} 
            onClick={() => handleTabChange(path)}/>
        ))}
      </MaterialTabs>
    );
}

const tabs = [
    { label: 'Overview', path: 'overview' },
    { label: 'Lists', path: 'lists' },
    { label: 'Logout', path: 'logout' },
  ];