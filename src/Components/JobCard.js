import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import {
  capitalizeFirstLetter,
  getExperienceString,
  getSalaryDetails,
} from "../helper";
import { profile1, profile2 } from "../Images";

const JobCard = ({
  logoUrl,
  companyName,
  location,
  minExp,
  maxExp,
  minJdSalary,
  maxJdSalary,
  salaryCurrencyCode,
  jobDetailsFromCompany,
  jobRole,
  jdLink,
}) => {
  return (
    <Card className="job-card">
      <Box className="badge-container">
        <Box className="badge">
          {/* Added static data as dynamic data not available */}
          <Typography variant="p" className="badge-text">
            ⏳ Posted 13 days ago
          </Typography>
        </Box>
      </Box>
      <CardContent>
        <Box className="company-section">
          <img src={logoUrl} alt="logo" width="25px" height="40px" />
          <Box>
            <div>
              <Typography className="bold">{companyName}</Typography>
              <Typography>{capitalizeFirstLetter(jobRole)}</Typography>
            </div>
            <p className="state">{capitalizeFirstLetter(location)}</p>
          </Box>
        </Box>
        <Typography variant="p" className="salary-section">
          {getSalaryDetails(minJdSalary, maxJdSalary, salaryCurrencyCode)}
          <span aria-label="Estimated by Weekday. Not provided by employer">
            ⚠️
          </span>
          <br></br>
        </Typography>
        <Box
          guttertop={10}
          height={"250px"}
          overflow={"hidden"}
          className="content"
        >
          <Typography variant="p" className="font-bold">
            About Company:
          </Typography>
          <Typography variant="p" className="font-semibold">
            About us:
          </Typography>
          <Box className="description">
            {/* Company Description will be added here  */}
          </Box>

          <Typography variant="p" className="font-semibold mt-10">
            About Role:
          </Typography>

          <Box className="job-description">{jobDetailsFromCompany}</Box>
        </Box>

        <Box className="show-more">
          <a href={jdLink}>View Job</a>
        </Box>

        <Box className="mt-10">
          <Typography className="bold">Minimum Experience</Typography>
          <Typography>{getExperienceString(minExp, maxExp)}</Typography>
        </Box>
      </CardContent>
      <Box className="card-footer">
        <Box className="footer-container">
          <Button className="button bg-secondary" type="button" id="custom-btn">
            ⚡ Easy Apply
          </Button>
        </Box>
        <Box className="footer-container">
          <Button
            className="button bg-primary"
            type="button"
            id="custom-btn"
            sx={{ gap: "0.5rem" }}
          >
            <Avatar
              alt="Profile Avatar"
              src={profile1}
              sx={{
                width: 32,
                height: 32,
                margin: "-4px 4px 0 -4px",
                filter: "blur(1px)",
              }}
            />
            <Avatar
              alt="Profile Avatar"
              src={profile2}
              sx={{
                width: 32,
                height: 32,
                margin: "-4px 4px 0 -4px",
                filter: "blur(1px)",
              }}
            />
            Unlock referral asks
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default JobCard;
