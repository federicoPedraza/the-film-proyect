import { FC } from 'react';
import { Tabs as MaterialTabs, Tab } from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router-dom';
export const Menu: FC = () => {
  const navigate = useNavigate();
  const handleTabChange = (path: string) => {
    navigate(path);
  };

    return (
   <div className="container">
      <MaterialTabs  orientation="vertical">
        {tabs.map(({label, path}) => (
          <Tab key={`${path}-tab-key`}
            value={path} label={label} 
            onClick={() => handleTabChange(path)}/>
        ))}
      </MaterialTabs>
    </div>
    );
}

const tabs = [
    { label: 'Overview', path: 'overview' },
    { label: 'Lists', path: 'lists' },
    { label: 'Settings', path: 'preferences' },
    { label: 'Ratings', path: 'ratings' },
    { label: 'Logout', path: 'logout' },
  ];