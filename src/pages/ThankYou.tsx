import { KeyValuePair, Question } from '../types';

interface ThankYouProps {
  questions: Question[];
  history: KeyValuePair;
}

export const ThankYou = (props: ThankYouProps) => {
  const { questions, history } = props;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">Thank You</h2>
      <ul>
        {Object.entries(history).map(([questionId, answer]) => (
          <li className="mb-2" key={questionId}>
            {questions.find((q) => q.id === questionId)?.text} <span className="italic font-semibold">{answer}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
