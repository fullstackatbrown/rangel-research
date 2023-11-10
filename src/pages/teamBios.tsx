import React from 'react';
import TeamMember from '../components/TeamMember';
import Member from '../interfaces/interfaces';

const team: Member[] = [
    {
        name: 'Serena Levin (she/her)',
        photo: '/photos/serena.jpeg',
        bio: 'Serena is a Senior from Westport, CT studying Education and International and public Affairs at Brown University. She has worked as a research assistant with Dr. Rangel since Fall 2021, examining how parental involvement is impacted by social class, race, and ethnicity. Because of this work, Serena is now working on her honors thesis with Dr. Rangel, aimed at understanding the intersections of race and social class concerning PTA involvement. Outside of research Serena’s interests include teaching, health education, policy reform, running, reading, and her dog!'
    },
    {
        name: 'John Bellaire (he/him)',
        photo: 'john.jpeg',
        bio: 'John (he/him) is a junior from Winchester, MA studying Education and International and Public Affairs at Brown University. John has worked as a research assistant with Dr. Rangel since Spring 2022 on projects examining parenting practices intersectionally. John’s interests include youth mentorship, secondary social studies instruction, legislative advocacy, backpacking, volleyball, and the color purple.'
    },
    {
        name: 'Anna Ryu (she/her)',
        photo: 'anna.jpeg',
        bio: 'Anna is a junior from Albany, NY studying Education and Chemistry at Brown University. Her interests in Education include teaching STEM at the secondary school level in more equitable, empathetic ways. She began working with Dr. Rangel in Spring 2023 and supports the team’s organizational and logistical work.'
    }
]

const TeamBioPage: React.FC = () => {
    return (
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-6">Team Bios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    );
  };

  export default TeamBioPage;