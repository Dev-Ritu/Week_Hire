import { Grid, Container, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchJobsList } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAppliedFilters, selectJobsList } from "./redux/selectors";
import { actions } from "./redux/reducers";
import JobCard from "./Components/JobCard";
import EmptyState from "./Components/EmptyState";

const { setJobsLists, setAppliedFilters } = actions;

const Loader = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
    <CircularProgress />
  </div>
);

const JobList = () => {
  const dispatch = useDispatch();
  const selectedJobList = useSelector(selectJobsList);
  const appliedFilters = useSelector(selectAppliedFilters);
  const [data, setData] = useState(selectedJobList);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [shouldFilter, setShouldFilter] = useState(false);

  const limit = 12;

  useEffect(() => {
    setData(selectedJobList);
  }, [selectedJobList]);

  const fetchData = async () => {
    setIsLoading(true); // Set loading state to true
    dispatch(
      fetchJobsList({
        params: { limit, offset: page }, // Fetch jobs list with specified limit and offset
      })
    ).then((res) => {
      dispatch(setJobsLists(res.jdList)); // Set fetched job list in state
      setPage((prev) => prev + 1); // Increment page for next fetch
      setIsLoading(false); // Set loading state to false after fetching
    });
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    // Check if user has scrolled to the bottom of the page within 20 pixels and not loading data
    if (scrollTop + clientHeight >= scrollHeight - 20 && !isLoading) {
      fetchData(); // Fetch more data when scrolled to the bottom
    }
  };

  useEffect(() => {
    // Cleanup: reset applied filters when component unmounts
    return () => dispatch(setAppliedFilters({}));
  }, [dispatch]);

  useEffect(() => {
    fetchData(); // Initial data fetch when component mounts
    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove scroll event listener on component unmount
    };
  });

  const filterData = (data, filters) => {
    return data?.filter((item) => {
      // Filter by job roles
      if (
        filters.roles?.length &&
        !filters.roles?.some((role) =>
          item.jobRole.toLowerCase().includes(role?.value.toLowerCase())
        )
      ) {
        return false;
      }
      // Filter by employees count can be added but no data related to it provided
      // Filter by experience
      if (
        filters.experience &&
        !(
          item.minExp < filters.experience?.value ||
          item.minExp === filters.experience?.value
        )
      ) {
        return false;
      }

      // Filter by job type
      if (
        (filters.jobType &&
          filters.jobType?.some(
            (type) =>
              type.value.toLowerCase() === "remote" &&
              type.value.toLowerCase() !== item.location.toLowerCase()
          )) ||
        filters.jobType?.some(
          (type) =>
            type.value.toLowerCase() === "inOffice" &&
            !item.location.toLowerCase().includes[("hybrid", "remote")]
        ) ||
        filters.jobType?.some(
          (type) =>
            type.value.toLowerCase() === "hybrid" &&
            item.location.toLowerCase() !== "hybrid"
        )
      ) {
        return false;
      }
      // filter by Minimum base pay
      if (
        filters.basePay &&
        item.minJdSalary &&
        item.minJdSalary < filters.basePay?.value
      ) {
        return false;
      }

      // Filter by company name
      if (
        filters.companyName &&
        item.companyName.toLowerCase() !== filters.companyName.toLowerCase()
      ) {
        return false;
      }

      return true;
    });
  };
  //Added setTimeout to call the filterData function after 1 sec to reduce the function call at every input change
  useEffect(() => {
    let timeoutId;

    if (!!selectedJobList.length && Object.keys(appliedFilters).length > 0) {
      timeoutId = setTimeout(() => {
        setShouldFilter(true);
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [appliedFilters, selectedJobList]);

  useEffect(() => {
    // data will be filtered only after 1 sec based on shouldFilter state
    if (shouldFilter) {
      const filteredData = filterData(selectedJobList, appliedFilters);
      setData(filteredData);
      setShouldFilter(false);
    }
  }, [appliedFilters, selectedJobList, shouldFilter]);

  return (
    <>
      <Container>
        {data.length === 0 && !!selectedJobList.length ? (
          <EmptyState />
        ) : (
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {data.map(({ jdUid, ...rest }, index) => (
              <Grid item xs={12} sm={6} md={4} key={`${jdUid}_${index}`}>
                <JobCard {...rest} />
              </Grid>
            ))}
          </Grid>
        )}
        {isLoading && <Loader />}
        {/* Show loader when isLoading is true */}
      </Container>
    </>
  );
};

export default JobList;
