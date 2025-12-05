//- Tạo một component Our Reputation nhận dữ liệu task qua props và hiển thị thông tin task.
export const data = [
  { id: 0, icon: <img src="" alt="" />, title: "OurReputation 1", content: "test 1 content" },
  { id: 1, icon: <img src="" alt="" />, title: "OurReputation 2", content: "test 2 content" },
  { id: 2, icon: <img src="" alt="" />, title: "OurReputation 3", content: "test 3 content" },
];
export default function OurReputation({ data }) {
  return (
    <div className="reputation-wrapper" style={{ padding: '10px'}}>
      {data.map((item) => (
        <div key={item.id} className="reputation-item">
          <div className="icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}