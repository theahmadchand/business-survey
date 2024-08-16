import { Button } from './Button';

type QuestionProps = {
  question: { id: string; text: string; options: string[] };
  handleAnswer: (answer: string) => void;
};

export const Question = (props: QuestionProps) => {
  const { question, handleAnswer } = props;

  return (
    <div>
      <h2 className="text-xl font-semibold">{question.text}</h2>
      <div className="flex justify-center gap-2 pt-3 w-full">
        {question.options.map((option) => (
          <Button key={option} text={option} onClick={() => handleAnswer(option)} />
        ))}
      </div>
    </div>
  );
};
