import Form from "components/Form";
import Result from "components/Result";

export default function Home() {
  return (
    <h1 className="flex flex-col items-center mt-4">
      <Form />
      <Result />
    </h1>
  );
}
