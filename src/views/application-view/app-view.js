import React from 'react'
import Header from '../layout/Header/Header'
import Sidebar from '../layout/Sidebar/Sidebar'
import Organisation from '../Org-Structure/organisation'

const AppView = () => {
    const [activeSideTab, setActiveSideTab] = React.useState("org-chart")
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Sidebar
                    setActiveSideTab={setActiveSideTab}
                    activeSideTab={activeSideTab}
                />
            </div>
            {activeSideTab === 'org-chart' ?
                <div>
                    <Organisation />
                </div> : null}
                
        </div>
    )
}

export default AppView
