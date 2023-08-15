import { EuiProvider,EuiFlexGroup,EuiFlexItem, EuiImage} from '@elastic/eui'
import React from 'react'
import animation  from "../assets/animation.gif"
import logo from "../assets/logo.png";

function Login() {
  return (
     <EuiProvider colorMode="dark">
        <EuiFlexGroup alignItems="center" justifyContent="center" style={{width:"100vw",height:"100vh"}}>

        <EuiFlexItem>
            <EuiImage src={animation} alt='logo'/>
        </EuiFlexItem>
        <EuiFlexItem>
            <EuiImage src={logo} alt='logo' size='230px'/> 
        </EuiFlexItem>
        </EuiFlexGroup>
     </EuiProvider>
  );
}

export default Login