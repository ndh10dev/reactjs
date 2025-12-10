interface BannerProps {
  id: string;
  title: string;
  description: string;
}

function Banner({ id, title, description }: BannerProps) {
  return (
    <div style={{border: '1px solid #ccc', padding: '20px', margin: '10px 0'}}>
        <h1>{id}</h1>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Banner;
