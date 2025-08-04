import Title from "./Title";
import Button from "./Button";
import Flex from "./Flex";

const TailwindPractice = () => {
  return <div>
    <Title
      message="Yoo this is the title"
      anotherMessage="This is another message"
      divStyle="text-sm text-slate-300 border-4 border-cyan-600"
    />
    <Title
      message="Yoo this is a diff title"
      anotherMessage="This is another diff message"
      divStyle="text-lg text-rose-300 bg-red-700 border-x-5 border-y-2 boarder-lime-700"
    >
      Hey My Child
    </Title>
    <Title
      message="Padding is between content and inside the border."
      divStyle="text-blue-500 px-4 py-2 border-2 border-black"
    />
    <Title
      message="Margin is the space outside border."
      divStyle="text-orange-500 border-black border-4 m-4"
    />
    <Button
      text="Submit"
      buttonStyle="border-2 border-green-600 text-green-400 px-8 py-2 m-4 rounded-md
      "
    />
    <Button
      text="Info"
      buttonStyle="bg-sky-400 text-white px-12 py-4 rounded-full text-lg m-4"
    />
    <Button
      text="Warning"
      buttonStyle="bg-violet-100 text-violet-600 px-8 py-2 rounded-lg text-sm m-4"
    />
    <Button
      text="Flip"
      buttonStyle="bg-cyan-700 text-cyan-200 p-5 rounded-lg text-sm m-4 hover:bg-cyan-200 hover:text-cyan-700"
    />
    <Button
      text="BOOL"
      buttonStyle={`${
        false ? "bg-cyan-700" : "bg-red-700"
      } text-cyan-200 p-5 rounded-lg text-sm m-4`}
    />
    <Flex flexStyle="h-50 flex border-5 border-cyan-400 p-5 m-3 justify-center items-center" />
    <Flex flexStyle="h-50 flex border-5 border-cyan-400 p-5 m-3 justify-around items-end" />
    <Flex flexStyle="h-50 flex border-5 border-cyan-400 p-5 m-3 justify-between items-center" />
    <Flex flexStyle="h-70 flex flex-col border-5 border-cyan-400 p-5 m-3 justify-around items-center" />
    Hello Friends
  </div>;
};

export default TailwindPractice;
