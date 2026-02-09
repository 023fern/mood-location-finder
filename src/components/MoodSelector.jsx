const moods = [
  { id: 1, emoji: "😊" },
  { id: 2, emoji: "😡" },
  { id: 3, emoji: "😐" },
  { id: 4, emoji: "😰" },
  { id: 5, emoji: "😢" },
]

export default function MoodSelector() {
  return (
    <div className="mood-list">
      {moods.map(m => (
        <button key={m.id} className="mood-btn">
          {m.emoji}
        </button>
      ))}
    </div>
  )
}
