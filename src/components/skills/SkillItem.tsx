import React from "react";
import { Skill } from "../../types/Skill";

const SkillItem: React.FC<Skill> = ({ name, level, icon }) => {
  return (
    <div className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg">
      {icon && <span className="text-2xl">{icon}</span>}
      <div className="flex-grow">
        <h4 className="font-semibold">{name}</h4>
        <div className="w-full bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
