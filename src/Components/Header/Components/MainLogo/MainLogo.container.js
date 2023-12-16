// Modules
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import MainLogoView from './MainLogo.view';

export function MainLogoContainer() {
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <MainLogoView
      onClick={onClickHandler}
    />
  );
}

export default MainLogoContainer;
