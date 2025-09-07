import React, { useState } from "react";
import "./HelperQuiz.css";

const questions = [
  {
    q: "A peer tells you they feel overwhelmed with studies. What’s your response?",
    options: [
      "Brush it off, they'll be fine.",
      "Calmly listen and encourage them to share more.",
      "Tell them to stop complaining.",
    ],
    correct: 1,
  },
  {
    q: "Someone says they failed a test and feel like giving up. You should:",
    options: [
      "Remind them failure is part of learning and offer encouragement.",
      "Say 'just study harder'.",
      "Ignore them.",
    ],
    correct: 0,
  },
  {
    q: "A student says they feel lonely. What’s your approach?",
    options: [
      "Invite them to share how they feel and remind them they’re not alone.",
      "Say loneliness is normal, get over it.",
      "Avoid the topic.",
    ],
    correct: 0,
  },
  {
    q: "If a peer expresses anger or frustration, the best way is to:",
    options: [
      "Stay calm and let them vent safely.",
      "Argue back to prove your point.",
      "Tell them to stop being childish.",
    ],
    correct: 0,
  },
  {
    q: "A peer shares that they are anxious about exams. You:",
    options: [
      "Listen, validate their feelings, and suggest relaxation techniques.",
      "Say 'everyone feels anxious, nothing new'.",
      "Tell them to stop overthinking.",
    ],
    correct: 0,
  },
  {
    q: "If someone hints they feel life is pointless, you should:",
    options: [
      "Take it seriously, listen, and suggest professional help.",
      "Ignore it, they are exaggerating.",
      "Tell them to 'stay strong' and leave it at that.",
    ],
    correct: 0,
  },
  {
    q: "When a peer shares personal struggles, your role is to:",
    options: [
      "Listen and guide, not judge or gossip.",
      "Tell others what they said.",
      "Laugh it off.",
    ],
    correct: 0,
  },
  {
    q: "A peer says they’re struggling financially. You:",
    options: [
      "Acknowledge their challenge and share resources if you know any.",
      "Say it’s not your problem.",
      "Tell them to ‘just manage better’.",
    ],
    correct: 0,
  },
  {
    q: "If a peer asks for academic help you don’t know, you should:",
    options: [
      "Admit honestly and suggest resources or someone else who can help.",
      "Give random wrong info.",
      "Ignore them.",
    ],
    correct: 0,
  },
  {
    q: "The most important quality of a peer helper is:",
    options: [
      "Empathy and active listening.",
      "Ability to argue better.",
      "Being dismissive so they toughen up.",
    ],
    correct: 0,
  },
];

function HelperQuiz({ onPass }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (optionIndex) => {
    const updated = { ...answers, [current]: optionIndex };
    setAnswers(updated);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // quiz finished
      let score = 0;
      questions.forEach((q, idx) => {
        if (updated[idx] === q.correct) score++;
      });
      setSubmitted(true);
      onPass(score >= 7);
    }
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Peer Helper Questionnaire 📋</h2>

      {!submitted ? (
        <>
          {/* Progress Bar */}
          <div
            className="progress-container"
            title={`${Math.round(progress)}% completed`}
          >
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Show one question */}
          <div className="quiz-question">
            <p>
              {current + 1}. {questions[current].q}
            </p>
            <div className="quiz-options">
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  className="quiz-btn"
                  onClick={() => handleAnswer(idx)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="quiz-result">
          {Object.values(answers).filter(
            (ans, idx) => ans === questions[idx].correct
          ).length >= 7 ? (
            <h3 className="success">
              🌟 You passed! You’re now a Verified Peer.
            </h3>
          ) : (
            <h3 className="fail">
              ⚠️ Sorry, you didn’t qualify. Try again later.
            </h3>
          )}
        </div>
      )}
    </div>
  );
}

export default HelperQuiz;
