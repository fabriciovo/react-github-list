import { Fragment, FunctionComponent } from "react";
import { useQuery } from "react-query";
import { instanceAxios } from "../../Services/axios";

type Props = {
  userId: string;
};

type Starreds = {
  name: string;
  id: string;
  language:string;
  html_url:string;

};

const Starred: FunctionComponent<any> = ({ userId }) => {
  const { data, isFetching } = useQuery<Starreds[]>("starred", async () => {
    const { data } = await instanceAxios.get(`/users/${userId}/starred`);
    return data;
  });

  return (
    <Fragment>
      {!isFetching && (
        <Fragment>
              <div className="card">
                <div className="flex flex-wrap justify-center space-x-2 items-end">
                  {data?.map(({ name, id, language }: Starreds) => (
                    <span
                      key={id}
                      className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max m-4"
                    >
                      <img
                        className="rounded-full w-9 h-9 max-w-none"
                        alt="A"
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${language?.toLowerCase()}/${language?.toLowerCase()}-original.svg`}
                      />
                      <span className="flex items-center px-3 py-2">
                        {name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Starred;
