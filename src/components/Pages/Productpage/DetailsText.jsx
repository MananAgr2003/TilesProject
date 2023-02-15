import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const MAX_CHARS = 2000;

function DetailsText() {
  const [selected, setSelected] = useState("details");
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [showFullSpecs, setShowFullSpecs] = useState(false);

  const details =
    "This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.";

  const specs =
    "This is the specifications section. Sed iaculis metus et urna cursus, at interdum dui accumsan. Duis vulputate iaculis euismod. Sed vel tellus sed enim auctor sollicitudin. Pellentesque fringilla lorem non neque iaculis, in porttitor urna blandit.This is the specifications section. Sed iaculis metus et urna cursus, at interdum dui accumsan. Duis vulputate iaculis euismod. Sed vel tellus sed enim auctor sollicitudin. Pellentesque fringilla lorem non neque iaculis, in porttitor urna blandit.This is the specifications section. Sed iaculis metus et urna cursus, at interdum dui accumsan. Duis vulputate iaculis euismod. Sed vel tellus sed enim auctor sollicitudin. Pellentesque fringilla lorem non neque iaculis, in porttitor urna blandit.This is the specifications section. Sed iaculis metus et urna cursus, at interdum dui accumsan. Duis vulputate iaculis euismod. Sed vel tellus sed enim auctor sollicitudin. Pellentesque fringilla lorem non neque iaculis, in porttitor urna blandit.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.";

  const handleDetailsClick = () => {
    setSelected("details");
    setShowFullDetails(false);
  };

  const handleSpecsClick = () => {
    setSelected("specs");
    setShowFullSpecs(false);
  };

  const handleReadMoreClick = () => {
    if (selected === "details") {
      setShowFullDetails(true);
    } else {
      setShowFullSpecs(true);
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleDetailsClick}
          sx={{
            backgroundColor: selected === "details" ? "transparent" : "inherit",
            borderBottom: selected === "details" ? "2px solid #89A963" : "none",
            padding: "10px",
            marginRight: "10px",
            fontWeight: selected === "details" ? "bold" : "normal",
          }}
        >
          Details
        </Button>
        <Button
          onClick={handleSpecsClick}
          sx={{
            backgroundColor: selected === "specs" ? "transparent" : "inherit",
            borderBottom: selected === "specs" ? "2px solid #89A963" : "none",
            padding: "10px",
            marginRight: "10px",
            fontWeight: selected === "details" ? "bold" : "normal",
          }}
        >
          Specification
        </Button>
      </Box>
      <Box sx={{ width: "80%", marginTop: "20px", textAlign: "center" }}>
        <Typography variant="body1">
          {selected === "details"
            ? showFullDetails
              ? details
              : details.substring(0, MAX_CHARS)
            : showFullSpecs
            ? specs
            : specs.substring(0, MAX_CHARS)}
          {selected === "details" ? (
            !showFullDetails && details.length > MAX_CHARS ? (
              <Button onClick={handleReadMoreClick}>Read more</Button>
            ) : null
          ) : !showFullSpecs && specs.length > MAX_CHARS ? (
            <Button onClick={handleReadMoreClick}>Read more</Button>
          ) : null}
        </Typography>
      </Box>
    </Box>
  );
}

export default DetailsText;
