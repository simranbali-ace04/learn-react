import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      logo: "https://s3-alpha.figma.com/hub/file/2729744958/2a5758d6-4edb-4047-87bb-e6b94dbbbab0-cover.png",
      company: "Google",
      role: "Frontend Developer",
      type: "Full Time",
      level: "Intermediate",
      pay: "$120/hr",
      location: "Bangalore, India",
    },
    {
      logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      company: "Amazon",
      role: "Software Development Engineer",
      type: "Full Time",
      level: "Entry Level",
      pay: "$110/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://static.vecteezy.com/system/resources/previews/024/983/621/non_2x/microsoft-logo-transparent-free-png.png",
      company: "Microsoft",
      role: "Full Stack Developer",
      type: "Full Time",
      level: "Intermediate",
      pay: "$125/hr",
      location: "Bangalore, India",
    },
    {
      logo: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1024/https://turbologo.com/articles/wp-content/uploads/2019/08/netflix-short-version-logo.png",
      company: "Netflix",
      role: "Backend Engineer",
      type: "Full Time",
      level: "Senior",
      pay: "$150/hr",
      location: "Remote",
    },
    {
      logo: "https://tse4.mm.bing.net/th/id/OIP.pPSmbT_SV82uYvk5ZR5shQHaFK?rs=1&pid=ImgDetMain&o=7&rm=3",
      company: "PayPal",
      role: "Java Backend Developer",
      type: "Full Time",
      level: "Intermediate",
      pay: "$105/hr",
      location: "Chennai, India",
    },
    {
      logo: "https://www.pngall.com/wp-content/uploads/13/Adobe-Logo-PNG-Picture-180x180.png",
      company: "Adobe",
      role: "UI Engineer",
      type: "Full Time",
      level: "Entry Level",
      pay: "$100/hr",
      location: "Noida, India",
    },
    {
      logo: "https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Rewrite_IBM_Logo_Design_History_Evolution_7_1024x1024.jpg?v=1695273904",
      company: "IBM",
      role: "Cloud Engineer",
      type: "Full Time",
      level: "Intermediate",
      pay: "$95/hr",
      location: "Pune, India",
    },
    {
      logo: "https://tse1.mm.bing.net/th/id/OIP.jfgfWyF-Qv7T77BGZWx8NgHaEM?rs=1&pid=ImgDetMain&o=7&rm=3",  
      company: "Tesla",
      role: "Embedded Software Engineer",
      type: "Full Time",
      level: "Senior",
      pay: "$140/hr",
      location: "Austin, USA",
    },
    {
      logo: "https://th.bing.com/th/id/R.179af03fc01e5cccab135cccbb671796?rik=huIssZ5y2pCPxA&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2018%2f05%2fLogo-Spotify.png&ehk=w0gRWUDJKgAxWxbfNqJa%2b5KzHsPB4JUjIFwh38aZYUk%3d&risl=&pid=ImgRaw&r=0",
      company: "Spotify",
      role: "Android Developer",
      type: "Full Time",
      level: "Intermediate",
      pay: "$115/hr",
      location: "Remote",
    },
    {
      logo: "data:image/webp;base64,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",
      company: "Stripe",
      role: "Payments Infrastructure Engineer",
      type: "Full Time",
      level: "Senior",
      pay: "$160/hr",
      location: "Dublin, Ireland",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem, index) {
        return <div key={index}>
        <Card company={elem.company} logo={elem.logo} role={elem.role} type={elem.type} level={elem.level} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  );
};

export default App;
