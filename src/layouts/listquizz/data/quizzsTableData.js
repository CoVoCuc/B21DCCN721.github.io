/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import { Button } from "@mui/material";
// Images
import logo from "assets/images/logo-ptit.jpg";

function Quizz({ image, name }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

// function MoTa({ detail }) {
//   return (
//     <SoftBox display="flex" flexDirection="column">
//       <SoftTypography variant="caption" fontWeight="medium" color="text">
//         {detail}
//       </SoftTypography>
//     </SoftBox>
//   );
// }

const quizzsTableData = {
  columns: [
    { name: "Tên bài thi", align: "left" },
    { name: "Số lượt thích", align: "left" },
    { name: "Chi tiết bài thi", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      id: 1,
      "Tên bài thi": <Quizz image={logo} name="Tên bài thi" />,
      "Số lượt thích": 100,

      "Chi tiết bài thi": (
        <SoftTypography
          // component="a"
          // href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <Button variant="outlined" sx={{ borderColor: "#333" }} style={{ color: "#505759" }}>
            Chi tiết
          </Button>
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          // component="a"
          // href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <Button variant="outlined" sx={{ borderColor: "#0073e6" }} style={{ color: "#0073e6" }}>
            Thích
          </Button>
          <Button variant="outlined" sx={{ borderColor: "#d32f2f" }} style={{ color: "#d32f2f", marginLeft: "5px" }}>
            Tố cáo
          </Button>
        </SoftTypography>
      ),
    },
    {
      id: 2,
      "Tên bài thi": <Quizz image={logo} name="Tên bài thi" />,
      "Số lượt thích": 200,

      "Chi tiết bài thi": (
        <SoftTypography
          // component="a"
          // href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <Button variant="outlined" sx={{ borderColor: "#333" }} style={{ color: "#505759" }}>
            Chi tiết
          </Button>
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          // component="a"
          // href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <Button variant="outlined" sx={{ borderColor: "#0073e6" }} style={{ color: "#0073e6" }}>
            Thích
          </Button>
          <Button variant="outlined" sx={{ borderColor: "#d32f2f" }} style={{ color: "#d32f2f", marginLeft: "5px" }}>
            Tố cáo
          </Button>
        </SoftTypography>
      ),
    },
  ],
};

export default quizzsTableData;
