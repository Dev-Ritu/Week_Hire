import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Button,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchJobsList } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectJobsList } from "./redux/selectors";
import { actions } from "./redux/reducers";

const { setJobsLists } = actions;

const JobList = () => {
  const dispatch = useDispatch();
  const selectedJobList = useSelector(selectJobsList);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    setData(selectedJobList);
  }, [selectedJobList]);

  const fetchData = async () => {
    setIsLoading(true);
    dispatch(
      fetchJobsList({
        params: { limit, offset: page },
      })
    ).then((res) => {
      console.log("responseList", res.jdList);
      dispatch(setJobsLists(res.jdList));
      setPage((prev) => prev + 1);
    });

    setIsLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (
      scrollTop + clientHeight >= scrollHeight - 20 &&
      !isLoading &&
      hasMore
    ) {
      fetchData();
    }
  };
  console.log("+++++++++++++data", data);

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const getCurrencySymbol = (currencyCode) => {
    const currencySymbols = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      INR: "₹",
    };

    return currencySymbols[currencyCode] || "";
  };

  return (
    <>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {data.map(
            (
              {
                logoUrl,
                companyName,
                jobRole,
                jobDetailsFromCompany,
                location,
                minExp,
                maxExp,
                minJdSalary,
                maxJdSalary,
                jdUid,
                salaryCurrencyCode,
                jdLink,
              },
              index
            ) => (
              <Grid item xs={12} sm={6} md={4} key={`${jdUid}_${index}`}>
                <Card className="job-card">
                  <Box className="badge-container">
                    <Box className="badge">
                      <Typography type="p" className="badge-text">
                        {" "}
                        ⏳ Posted 13 days ago
                      </Typography>
                    </Box>
                  </Box>{" "}
                  <CardContent>
                    <Box className="company-section">
                      <img
                        src={logoUrl}
                        alt="logo"
                        width="25px"
                        height="40px"
                      />
                      <Box>
                        <div>
                          <Typography className="bold">
                            {companyName}
                          </Typography>
                          <Typography>
                            {capitalizeFirstLetter(jobRole)}
                          </Typography>
                        </div>
                        <p className="state">
                          {capitalizeFirstLetter(location)}
                        </p>
                      </Box>
                    </Box>
                    <Typography type="p" className="salary-section">
                      {`Estimated Salary: ${getCurrencySymbol(
                        salaryCurrencyCode
                      )} ${minJdSalary} - ${getCurrencySymbol(
                        salaryCurrencyCode
                      )} ${maxJdSalary}`}
                      <span aria-label="Estimated by Weekday. Not provided by employer">
                        ⚠️
                      </span>
                      <br></br>
                    </Typography>
                    <Box guttertop={10} height={"250px"} overflow={"hidden"}>
                      <Typography type="p" className="font-bold">
                        About Company:
                      </Typography>
                      <Box className="description">
                        We are a leading software conglomerate that empowers our
                        clients in different domains like healthcare, legal etc.
                        with our innovative solutions. Through our portfolio of
                        subsidiaries, we offer a wide range of cutting-edge
                        software products and services. Focusing on specialized
                        domains, while benefiting from the collective expertise
                        and resources of Float Group.
                      </Box>

                      <Typography type="p" className="font-bold mt-10">
                        About Role:
                      </Typography>

                      <Box className="job-description">
                        {jobDetailsFromCompany}
                      </Box>
                    </Box>

                    <Box className="show-more">
                      <a href={jdLink}>View Job</a>
                    </Box>

                    <Box className="mt-10">
                      <Typography type="h3" className="bold">
                        Minimum Experience
                      </Typography>
                      <Typography type="h2">{`${minExp}- ${maxExp} years`}</Typography>
                    </Box>
                  </CardContent>
                  <Box className="card-footer">
                    <Box className="footer-container">
                      <Button
                        className="apply-button"
                        type="button"
                        id="custom-btn"
                      >
                        ⚡ Easy Apply
                      </Button>
                    </Box>
                    <Box className="footer-container">
                      <Button
                        className="referal-button"
                        type="button"
                        id="custom-btn"
                      >
                        Unloack referal asks
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </>
  );
};

export default JobList;
