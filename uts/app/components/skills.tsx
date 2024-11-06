import React from 'react';

interface RowSkillProps {
    skill: string;
}

function RowSkill({ skill }: RowSkillProps) {
    return (
        <div className="border-2 border-indigo-400/75 rounded-lg bg-gray-300 p-2 my-5">
            <div className="container mx-auto">
                <div className="text-black">{skill}</div>
            </div>
        </div>
    );
}

const skills = ['JavaScript', 'React', 'CSS', 'HTML', 'TypeScript', 'Node.js'];

export default function SkillsSection() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-black font-bold">Skills</h2>
            {skills.map((skill, index) => (
                <RowSkill key={index} skill={skill} />
            ))}
        </div>
    );
}
