import React, { Component } from 'react';
import TeamMember from './TeamMember';
import img1 from './assets/img/mom.jpeg';
import img2 from './assets/img/son.jpg';

const teammember = [
    {
        name: 'Daniel Vo',
        position: 'Baker',
        image: img2
    },

    {
        name: 'Huyen Bui',
        position: 'Inspirer',
        image: img1
    }
];

class Team extends Component {
    render() {
        return (
            <section class="bg-light page-section" id="team">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">Those people behind the successful of my home-based bakery</h3>
                        </div>
                    </div>
                <div class="row">
                {teammember.map((item, index) => {
                        return <TeamMember {...item} key = {index} />
                })}
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                    <p class="large text-muted">I would like to say thank you from bottom of my heart to my lovely mon, who always encourage me to make cake whenever my passion is down</p>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Team;