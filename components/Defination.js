export default function Defination({ title, meaning }) {
  return (
    <div className="flex flex-col my-4">
      <span className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </span>
      <span className="font-normal text-gray-700 dark:text-gray-400">
        {meaning}
      </span>
    </div>
  );
}
