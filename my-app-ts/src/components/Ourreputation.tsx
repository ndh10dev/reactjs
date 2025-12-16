import React from "react";

export interface ReputationItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: string;
}

export const data: ReputationItem[] = [
  { id: 0, icon: <img src="" alt="" />, title: "High Quality Code", 
    content: "We write clean, maintainable, and scalable code following best practices and industry standards." },
  { id: 1, icon: <img src="" alt="" />, title: "On-Time Delivery", 
    content: "We respect deadlines and ensure your project is delivered on time without compromising quality." },
  { id: 2, icon: <img src="" alt="" />, title: "Modern Technologies", 
    content: "We use the latest technologies like React, TypeScript, and modern UI frameworks." },
];

interface OurReputationProps {
  data: ReputationItem[];
}

export default function OurReputation({ data }: OurReputationProps) {
  return (
    <div className="reputation-wrapper">
      {data.map((item) => (
        <div key={item.id} className="card-our-repu">
          <div className="icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}