import React from 'react';
import SectionHeader from "./SectionHeader";
import StudentActivityCard from "./StudentActivityCard"
import { activity } from './data';

const StudentActivity = () => {
  return (
    <div className='w-full p-4'>
      <SectionHeader section_title="Student Activity" />

      <div className="w-full grid gap-2 mt-3">
        {activity.map((active ,index) => (
          <StudentActivityCard 
            img={active.img} 
            time={active.time} 
            title={active.title} 
            sub_title={active.subtitle} 
          />
        ))}
      </div>
    </div>
  )
}

export default StudentActivity