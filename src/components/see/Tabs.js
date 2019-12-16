import React, { Fragment } from 'react';

import Card from "./Card";
import CardGrid from "./CardGrid";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const BoxTab = () => {
    return (
        <Fragment>
            <Tabs>
                <TabList>
                    <Tab>Recent</Tab>
                    <Tab>History</Tab>
                </TabList>

                <TabPanel>
                    <Card />
                    <Card />
                </TabPanel>
                <TabPanel>
                   <CardGrid />
                </TabPanel>
            </Tabs>
        </Fragment>
    );
};

export default BoxTab;
