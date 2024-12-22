import React from 'react';

function Card() {
  const data = [
    { id: 1, title: 'Project Development Competition', by: 'AICTE Idea Lab' },
    { id: 2, title: 'Vultr Cloud Innovate Hackathon', by: 'GeeksforGeeks' },
    { id: 3, title: 'NITS 7.0', by: 'NIT Silchar' },
    { id: 4, title: 'Programming Contest', by: 'SSIPMT Raipur' },
    { id: 5, title: 'SQL Basic', by: 'HackerRank' },
    { id: 6, title: 'Codekaze (Round 1 & 2)', by: 'Coding Ninjas' },
    { id: 7, title: 'Intermediate in DSA', by: 'GreatLearning' },
    { id: 8, title: '3X 1st Position in IMO', by: 'JNV Raipur(School)' },
  ];

  return (
    <div
      className="bg-gradient-to-t from-gray-900 to-stone-700 m-4 
        border border-gray-700 rounded-xl p-5 shadow-2xl shadow-gray-600  
        text-white font-semibold max-w-4xl mx-auto"
    >
      <p className='text-2xl font-bold py-3'>My Certifications </p>
      <hr className='py-2'/>
      {/* Text Section */}
        <div
          className="text-sm text-justify lg:text-lg font-normal 
            text-gray-300 leading-relaxed  flex flex-col gap-6"
        >
          {data.map((item) => (
            <div key={item.id} className="mb-2">
              
              <p className="font-bold">{item.title}</p>
              <p>Issued by: {item.by}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card;
