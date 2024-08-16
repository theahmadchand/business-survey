import { Button, Question } from '../components';
import { useQuestionActions } from '../hooks';
import { QuestionsSkeleton } from './QuestionsSkeleton';
import { ThankYou } from './ThankYou';

export const Questions = () => {
  const { questions, isLoadingQuestions, currentQuestionId, handleAnswer, handleBack, history } = useQuestionActions();

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  if (isLoadingQuestions) return <QuestionsSkeleton />;

  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-10">
        {currentQuestionId === 'END' ? (
          <ThankYou questions={questions} history={history} />
        ) : (
          <div className="flex flex-col space-y-4">
            {currentQuestion && <Question question={currentQuestion} handleAnswer={handleAnswer} />}
            <Button text="Back" onClick={handleBack} variant="secondary" disabled={Object.keys(history).length === 0} />
          </div>
        )}
      </div>
    </div>
  );
};
