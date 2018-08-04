import { LocationCard } from '../../components';
import React from 'react';

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [
                {
                    "name": "Ojo",
                    "zone": "Lagos State",
                    "region": "South West"
                },
                {
                    "name": "Ahiazu Mbaise",
                    "zone": "Imo State",
                    "region": "South East"
                },
                {
                    "name": "Akoko-Edo",
                    "zone": "Edo State",
                    "region": "South South"
                },
                {
                    "name": "Anka",
                    "zone": "Zamfara State",
                    "region": "North West"
                },
                {
                    "name": "Akwanga",
                    "zone": "Nasarawa State",
                    "region": "North Central"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <h2 className="text-center">"Locations"</h2>
                    </div>
                </div>
                <div>
                    {this.state.locations
                        .map(location =>
                            <LocationCard key={location.id} {...location} />
                        )}
                </div>
            </div>
        )
    }
}

export default Location;