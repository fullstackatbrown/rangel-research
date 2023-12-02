import React from 'react';
import Member from '../interfaces/interfaces';

interface TeamMemberProps {
    member: Member;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member } ) => {
    return (
        <div className="flex items-center mb-8 bg-white p-4">
            <img src={`/photos/${member.photo}`} alt={member.name} className ="mr-8 bg-white"/>
            <div>
                <h3 className="text-2xl text-medium-brown font-semibold bg-white">{member.name}</h3>
                {member.name === 'David Enrique Rangel, Ph.D' && (
                    <p className = "text-yellow-700 text-lg bg-white">Assistant Professor of Education - Brown University</p>
                )}
                
                <p className="text-gray-600 bg-white text-sm">{member.bio}</p>
            </div>
        </div>
    );
};

export default TeamMember;