import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import { createContext, useContext } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg, { autoClose: 2000 });
    return error;
  }
};

const AllJobsContext = createContext();

const AllJobs = () => {
  const { jobs } = useLoaderData();
  console.log(jobs);

  return (
    <AllJobsContext.Provider value={{ jobs }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};
export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
