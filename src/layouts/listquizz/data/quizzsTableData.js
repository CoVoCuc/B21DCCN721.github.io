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

const quizzsTableData = {
  columns: [
    { name: "Tên bài thi", align: "left" },
    { name: "Mô tả", align: "left" },
    { name: "Làm bài", align: "center" },
    { name: "action", align: "center"}
  ],

  rows: [
    { 
      id: 1,
      "Tên bài thi": <Quizz image={logo} name="Tên bài thi"  />,
      "Mô tả": <MoTa detail="Chi tiết môn thi"/>,
      
      "Làm bài": (
        <SoftTypography
          // component="a"
          // href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <SoftButton >Làm bài</SoftButton>
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
          <SoftButton color="dark" onClick={()=>console.log('abc')}>Thích</SoftButton>
          <SoftButton color="error">Tố cáo</SoftButton>
        </SoftTypography>
      ),
    },
    {
      id: 2,
      "Tên bài thi": <Quizz image={logo} name="Tên bài thi"  />,
      "Mô tả": <MoTa detail="Chi tiết môn thi"/>,
      
      "Làm bài": (
        <SoftTypography
          // component="a"
          // href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <SoftButton >Làm bài</SoftButton>
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
          <SoftButton color="dark" onClick={()=> console.log(quizzsTableData.rows[0]["id"])}>Thích</SoftButton>
          <SoftButton color="error">Tố cáo</SoftButton>
        </SoftTypography>
      ),
    }
  ]
};

export default quizzsTableData;
