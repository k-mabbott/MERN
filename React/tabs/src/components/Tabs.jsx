import React, {useState} from 'react'
import styles from './Tabs.module.css'



const Tabs = () => {

    const [curTab, setCurTab] = useState('')

    const [tabs, setTabs] = useState({
        tab1: 'This is tab 1',
        tab2: 'This is tab 2!!!',
        tab3: 'This is tab 3...'
    })

    const displayTab = (e) => {
        const tabName = e.target.id
        // const info = tabs.tabName
        console.log(tabName)
        setCurTab(tabName)
    }


    return (
        <>
        <ul>
            <li id='tab1' onClick={displayTab} >Tab 1</li>
            <li id='tab2' onClick={displayTab} >Tab 2</li>
            <li id='tab3' onClick={displayTab} >Tab 3</li>
        </ul>
        <p>{tabs[curTab]}</p>
        </>
    )
}

export default Tabs
