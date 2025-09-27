import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <ProfileCard name="Maria" age={21} isStudent={true} />
      <ProfileCard name="João" age={30} isStudent={false} />
      <ProfileCard name="Carla" age={25} isStudent={true} />
    </div>
  );
}

export default App;
