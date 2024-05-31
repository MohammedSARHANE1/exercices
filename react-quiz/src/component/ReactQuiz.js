import LoaderQuestions from "./LoaderQuestions";
import Loader from './Loader';
import Error from './Error';
import useFetch from './useFetch';
function ReactQuiz() {
  const { data, loading, error } = useFetch("http://localhost:8000/questions");
  const questions=data;
  console.log(data)
  return (
    <>
    {loading && <Loader  />}
      {error && <Error  />}
      {data && <LoaderQuestions questions={questions} />}
      </>
      
  );
}

export default ReactQuiz;





