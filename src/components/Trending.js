import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Collection from "./Collection";
import {
  collectionItems1,
  collectionItems2,
  collectionItems3,
  collectionItems4,
} from "./Collection-items";

export default function Trending() {

  return (
    <section className="trending">
      <Tabs>
        <div className="trending__header">
          <TabList>
            <Tab>Trending</Tab>
            <Tab>Top</Tab>
          </TabList>

          <div className="trending__header-right">
            <button disabled>
              24h <i className="fa fa-chevron-down"></i>
            </button>
            <a href="#">View all</a>
          </div>
        </div>

        <TabPanel>
          <Collection
            items={collectionItems1}
          />
          <Collection
            items={collectionItems2}
          />
        </TabPanel>
        <TabPanel>
          <Collection
            items={collectionItems3}
          />
          <Collection
            items={collectionItems4}
          />
        </TabPanel>
      </Tabs>
    </section>
  );
}
