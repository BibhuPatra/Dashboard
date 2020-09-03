import React, { useState } from 'react';
import {fetchData} from './api/fetchData';
import AppDrawer from './AppDrawar';


export const App = () => {
  const [query, setQuery] = useState('');
  const [trackings, setTrackings] = useState({});

  const search = async (e) => {
      if(e.key === 'Enter')
      {
        const data = await fetchData(query)
        console.log(data);
        setTrackings(data);
        setQuery('');
      }

      
  }  
  return (
    <>
      <input className = 'search' type = 'text' placeholder = "Enter your tracking key" value = {query} onChange = {(e) => setQuery(e.target.value)} onKeyPress = {search}/>
        {trackings.data && (
          <div className = "list">
            <ul>
              <li>
            <h1> Create at max : {trackings.data.created_at_max}</h1>
            </li>
            <li>
            <h1>Create at min : {trackings.data.created_at_min}</h1>
            </li>
            <li>
            <h1>Destination Country : {trackings.data.courier_destination_country_iso3}</h1>
            </li>
            <li>
            <h1>Last Updated at: {trackings.data.last_updated_at}</h1>
            </li>
            <li>
            <h1>Page: {trackings.data.page}</h1>
            </li>
            <li>
            <h1>Limit: {trackings.data.limit}</h1>
            </li>
            </ul>
          </div>
        )}
        <AppDrawer />
    </>
  );
}


export default App;