import React from 'react'
import Header from '../Org-Structure/Header/Header'
import Sidebar from '../layout/Sidebar/Sidebar'
import Login from '../login/Login'
import Organisation from '../Org-Structure/organisation'

const AppView = () => {
    const [activeSideTab, setActiveSideTab] = React.useState("org-chart");
    const [login, setLogin] = React.useState(false);
    React.useEffect(() => {
        setLogin(false)
    }, []);
    return (
        <>
            {login ?
                <div>
                    <div>
                        <Sidebar
                            setLogin={setLogin}
                            setActiveSideTab={setActiveSideTab}
                            activeSideTab={activeSideTab}
                        />
                    </div>
                    {activeSideTab === 'org-chart' ?
                        <div>
                            <Organisation />
                        </div> :
                        <div style={{margin:"3em 6em"}}>{activeSideTab}</div>}
                </div> :
                <Login login={login} setLogin={setLogin} />}

        </>
    )
}

export default AppView
