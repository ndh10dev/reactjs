import React from "react";

export interface ReputationItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: string;
}

export const data: ReputationItem[] = [
  { id: 0, icon: <img src="" alt="" />, title: "OurReputation 1", content: "test 1 content" },
  { id: 1, icon: <img src="" alt="" />, title: "OurReputation 2", content: "test 2 content" },
  { id: 2, icon: <img src="" alt="" />, title: "OurReputation 3", content: "test 3 content" },
];

interface OurReputationProps {
  data: ReputationItem[];
}

export default function OurReputation({ data }: OurReputationProps) {
  return (
    <div className="reputation-wrapper" style={{ padding: "10px" }}>
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