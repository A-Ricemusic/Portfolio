import {
  BookOpen,
  Check,
  Code2,
  Heart,
  Leaf,
  Sparkles,
  Sword,
  Terminal,
} from "lucide-react";
export function ProjectArt({ kind }: { kind: string }) {
  return (
    <div className={`project-art art-${kind}`} aria-hidden="true">
      <span className="art-grid" />
      {kind === "recall" && (
        <div className="mini-window recall-window">
          <div className="window-bar">
            <span className="mini-brand">↗ recall</span>
            <span>your practice, connected</span>
          </div>
          <div className="mini-content">
            <div className="mini-side">
              <span>Overview</span>
              <span className="selected">My journal</span>
              <span>Collections</span>
              <span>Progress</span>
            </div>
            <div className="mini-main">
              <small>MAKE A LITTLE PROGRESS</small>
              <h4>One problem at a time.</h4>
              {["Two Sum", "Valid Parentheses", "Binary Search"].map((x, i) => (
                <div className="problem" key={x}>
                  <span className="check-circle">
                    <Check size={10} />
                  </span>
                  <span>{x}</span>
                  <span className="problem-tag">
                    {i === 1 ? "Stack" : "Arrays"}
                  </span>
                </div>
              ))}
              <div className="activity">
                {Array.from({ length: 35 }, (_, i) => (
                  <i key={i} style={{ opacity: 0.2 + ((i * 7) % 10) / 12 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {kind === "care" && (
        <div className="care-scene">
          <div className="care-orbit orbit-one" />
          <div className="care-orbit orbit-two" />
          <div className="care-core">
            <Heart size={44} strokeWidth={1.3} />
          </div>
          <div className="floating-label care-label">
            <span className="tiny-dot" /> Connected care
          </div>
          <div className="care-chart">
            <span>Information into insight</span>
            <div>
              {[25, 43, 34, 61, 48, 75, 87, 68, 92].map((n, i) => (
                <i key={i} style={{ height: n + "%" }} />
              ))}
            </div>
          </div>
        </div>
      )}
      {kind === "tutor" && (
        <div className="tutor-sheet">
          <div className="tutor-heading">
            <BookOpen size={21} />
            <span>
              A little guidance.
              <br />
              <strong>A deeper understanding.</strong>
            </span>
            <Sparkles size={18} />
          </div>
          <div className="chat-bubble">How do I approach this problem?</div>
          <div className="tutor-response">
            <span>✳</span>
            <div>
              Let’s think it through together.
              <div className="text-line" />
              <div className="text-line short" />
            </div>
          </div>
          <div className="hint-chip">
            Think. Explore. Understand. <span>↗</span>
          </div>
        </div>
      )}
      {kind === "rpg" && (
        <div className="game-scene">
          <div className="island island-back" />
          <div className="island island-front" />
          <div className="sword-medallion">
            <Sword size={60} strokeWidth={1} />
          </div>
          <span className="game-caption">BUILD YOUR NEXT ADVENTURE</span>
          <span className="game-coordinate">WORLD_01 / READY</span>
        </div>
      )}
      {kind === "verse" && (
        <div className="verse-scene">
          <div className="arena arena-one" />
          <div className="arena arena-two" />
          <Code2 size={48} strokeWidth={1} />
          <span>gameplay.init()</span>
          <div className="verse-tags">
            <span>SPAWN</span>
            <span>PLAY</span>
            <span>REPEAT</span>
          </div>
        </div>
      )}
      {kind === "food" && (
        <div className="food-sheet">
          <div className="food-title">
            <Leaf size={20} />
            <strong>Daily nourishment</strong>
          </div>
          <div className="food-circle">
            <Leaf size={40} strokeWidth={1} />
          </div>
          <div className="food-bottom">
            <span>
              Little habits.
              <br />
              <strong>Everyday awareness.</strong>
            </span>
            <Terminal size={23} />
          </div>
        </div>
      )}
      <span className="illustration-label">PROJECT ILLUSTRATION</span>
    </div>
  );
}
