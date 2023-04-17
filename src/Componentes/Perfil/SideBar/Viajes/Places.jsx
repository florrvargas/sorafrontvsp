import React from 'react';
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete';



export default function Places({placeholder, setOrigen, setDestino}) {

    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();
  
    const handleInput = (e) => {setValue(e.target.value);};
  
    const handleSelect = ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        clearSuggestions();
        // Get latitude and longitude via utility functions
        getGeocode({ address: description }).then((results) => {
          const { lat, lng } = getLatLng(results[0]);
          {setOrigen? setOrigen({ lat, lng}) : null}
          {setDestino? setDestino({ lat, lng}) : null}
        });
      };
  
    const renderSuggestions = () => data.map((suggestion) => {
        const { place_id, structured_formatting: { main_text, secondary_text }} = suggestion;
  
        return (
          <li id='li' key={place_id} onClick={handleSelect(suggestion)}>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
  
    return (
      <div >
        <input
          placeholder={placeholder} 
          class="input"
          value={value}
          onChange={handleInput}
          disabled={!ready}
        />
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>
    );
  };
