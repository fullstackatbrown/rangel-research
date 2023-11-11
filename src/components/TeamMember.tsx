import React from 'react';
import Member from '../interfaces/interfaces';

interface TeamMemberProps {
    member: Member;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member } ) => {
    return (
        <div className="flex flex-col items-center mb-8">
            <img src={`../images/${member.photo}`} alt={member.name} className ="w-32 h-32 rounded-full mb-4"/>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.bio}</p>
        </div>
    );
};

export default TeamMember;