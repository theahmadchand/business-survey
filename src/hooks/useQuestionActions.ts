import { useState } from 'react';
import { useFetchQuestions } from './useFetchQuestions';

export const useQuestionActions = () => {
  const [history, setHistory] = useState<{ [key: string]: string }>({});
  const [currentQuestionId, setCurrentQuestionId] = useState('1');
  const { questions, isLoading: isLoadingQuestions } = useFetchQuestions();

  const handleAnswer = (answer: string) => {
    const nextQuestion = questions.find((question) => question.id === currentQuestionId);
    const nextQuestionId = nextQuestion?.next?.[answer];

    setCurrentQuestionId(`${nextQuestionId}`);
    setHistory({ ...history, [currentQuestionId]: answer });
  };

  const handleBack = () => {
    const lastQuestionId = Object.keys(history).slice(-1)[0];
    if (lastQuestionId) {
      setCurrentQuestionId(lastQuestionId);
      const updatedHistory = { ...history };
      delete updatedHistory[lastQuestionId];
      setHistory(updatedHistory);
    }
  };
  return {
    questions,
    isLoadingQuestions,
    currentQuestionId,
    handleAnswer,
    handleBack,
    history,
  };
};
