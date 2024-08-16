import { useState, useEffect } from 'react';
import { Question } from '../types';
import { questions as questionsData } from '../data/questions';

/** Mock implementation of fetch request, will be replaced with actual fetch request in the future */
export const useFetchQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setQuestions(questionsData);
          setIsLoading(false);
        }, 1000);
      } catch {
        setError('Failed to fetch questions!');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { questions, isLoading, error };
};
