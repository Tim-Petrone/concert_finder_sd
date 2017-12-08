import React, {Component} from 'react';

export default class Events extends Component {
  constructor(props){
    super(props)
    this.state = {
      apiURL:
      'http://api.eventful.com/yaml/events/search?app_key=SBL9c4NK96vvmZKQ',
      startDate: 'today',
      query: 'music',
      location: 'San+Diego',
      catagories: 'music',
      pageSize: '50',
      events: []
    }
  }

  componentWillMount(){

    var myHeaders = new Headers({
      'Access-Control-Allow-Origin':'*'
    });

    var myInit = {
      method: 'GET',
      bodyUsed: 'true',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      // accessControlAllowOrigin: '*' // Figure out how to add to header
    };

    fetch(`${this.state.apiURL}&q=${this.state.query}&l=${this.state.location}&t=${this.state.startDate}&c=${this.state.catagories}&page_size=${this.state.pageSize}`, myInit).then((rawResponse)=>{
      console.log(rawResponse)
      return rawResponse.json()
    }).then((parsedResponse) => {
      console.log(parsedResponse);
      let eventData = parsedResponse.events
      let newEvents = []
      Object.keys(eventData).forEach((d)=>{
        eventData[d].forEach((e)=>{
          newEvents.push({
            id: e.id,
            title: e.title,
            venueName: e.venue_name,
            startTime: e.start_time,
            venueAddress: e.venue_address,
            cityName: e.city_name,
            countryAbbr: e.country_abbr,
            postalCode: e.postal_code,
            description: e.description
          })
        })
      })
      this.setState({events: newEvents})
      console.log(this.state.events)
    })
  }

   render(){
     return(
      <div>
        <table>
          <thead className="thStyles">
            <tr>
              <th>Artist</th>
              <th>Venue</th>
              <th>Start Time</th>
              <th>Address</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className="tbStyles">
            {this.state.events.map((event)=>{
              return(
                <tr key={event.id}>
                  <td>{event.title}</td>
                  <td>{event.venue_name}</td>
                  <td>{event.start_time}</td>
                  <td>{event.venue_address} - {event.city_name} - {event.country_abbr} - {event.postal_code}</td>
                  <td>{event.description}</td>
                </tr>
              )}
            )}
          </tbody>
        </table>
      </div>
     )
   }
}
