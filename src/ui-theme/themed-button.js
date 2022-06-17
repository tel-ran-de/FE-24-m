import { ThemeContext } from './theme-context';
import { useContext } from 'react';

function ThemedButton(props) {
  const children = props.children;
  const onClick = props.onClick;

  const theme = useContext(ThemeContext);
  return (
    <button
      style={{ background: theme.background, color: theme.foreground }}
      onClick={onClick}
    >
      {children ? children : 'button'}
    </button>
  );
}

export default ThemedButton;