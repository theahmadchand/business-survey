import { useState } from 'react';
import { useFetchQuestions } from './useFetchQuestions';
import { Question } from '../types';

export const useQuestionActions = () => {
  const [history, setHistory] = useState<{ [key: string]: string }>({});
  const [currentQuestionId, setCurrentQuestionId] = useState('1');
  const { questions, isLoading: isLoadingQuestions } = useFetchQuestions();

  const evaluateNextQuestionId = (nextQuestionId: string, nextQuestion?: Question): string => {
    const state = history[1];

    if (nextQuestion?.state && state && nextQuestion?.state !== state) {
      return `${Number(nextQuestionId) + 1}`;
    }

    return nextQuestionId;
  };

  const handleAnswer = (answer: string) => {
    const question = questions.find((question) => question.id === currentQuestionId);
    const nextQuestionId = question?.next?.[answer];
    const nextQuestion = questions.find((question) => question.id === nextQuestionId);

    const questionId = evaluateNextQuestionId(`${nextQuestionId}`, nextQuestion);
    setCurrentQuestionId(questionId);
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
