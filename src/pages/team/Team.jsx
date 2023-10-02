import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./team.css";
import Footer from "./../../components/footer/footer";
import { team_members } from "../../helpers/team.helpers";

export default function Team() {
  return (
    <div>
      <Navbar />

      <div className="teaminfo">
        {/* Brief description */}
        <div className="team-description">
          <span>The team</span>
          <h1>Meat our team of experts</h1>
          <h3>
            To be the company our customers want us to be, it takes an electric
            group of <br /> passionate operators. Get to know the people leading
            the way at BeeKissed
          </h3>
        </div>

        {/* Showcase the team's images */}
        <div className="allTeam">
          {team_members &&
            team_members.map((member, index) => {
              return (
                <div key={index}>
                  <img src={member.image} alt={member.image} />

                  <div className="member-info">
                    <strong>
                      <span>{member.name}</span>
                    </strong>
                    <span>{member.role}</span>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Open positions */}
        <div></div>
      </div>

      <Footer />
    </div>
  );
}
