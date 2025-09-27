import "./ProfileCard.css";

function ProfileCard({ name, age, isStudent }) {
  return (
    <div className="profile-card">
      <h2>👤 {name} – {age} anos</h2>
      <p>{isStudent ? "É estudante" : "Não é estudante"}</p>
      <button onClick={() => alert(`Nome: ${name}`)}>Ver nome</button>
    </div>
  );
}

export default ProfileCard;
