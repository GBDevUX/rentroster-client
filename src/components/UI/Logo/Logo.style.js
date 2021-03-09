import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const LogoArea = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }

  img.icon {
    width: 60px;
  }
  img.naborly {
    width: 90px;
  }

  .container_row{
    display: flex;
    margin-top:20px;
  }

  .logo-top {
    width: 100%;
    margin-top:-20px;
  }

  .logo-bottom{
    width: 100%;
    margin-left: -100%;
  }

  h3 {
    color: ${themeGet('primary.0', '#008489')};
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 0 10px;
  }
`;

export default LogoArea;
