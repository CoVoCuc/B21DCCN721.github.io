/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";
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

function MoTa({ detail }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {detail}
      </SoftTypography>
    </SoftBox>
  );
}

const quizzsCompleteData = {
  columns: [
    { name: "Tên bài thi", align: "left" },
    { name: "Mô tả", align: "left" },
    { name: "Điểm số", align: "center" },
  ],

  rows: [
    {
      "Tên bài thi": <Quizz image={logo} name="Tên bài thi" />,
      "Mô tả": <MoTa detail="Chi tiết môn thi" />,

      "Điểm số": (
        <SoftTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <SoftBox display="flex" flexDirection="column">
            <SoftTypography variant="caption" fontWeight="medium" color="text">
              Điểm
            </SoftTypography>
          </SoftBox>
        </SoftTypography>
      ),
    },
    {
      "Tên bài thi": <Quizz image={logo} name="Tên bài thi" />,
      "Mô tả": <MoTa detail="Chi tiết môn thi" />,

      "Điểm số": (
        <SoftTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <SoftBox display="flex" flexDirection="column">
            <SoftTypography variant="caption" fontWeight="medium" color="text">
              Điểm
            </SoftTypography>
          </SoftBox>
        </SoftTypography>
      ),
    },
  ],
};

export default quizzsCompleteData;
