import SoftBox from "components/SoftBox";
import Card from "@mui/material/Card";
import SoftTypography from "components/SoftTypography";
import { colors } from "@mui/material";
import Divider from "@mui/material/Divider";

function ListQuizz(){
    return (
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Danh sách bài thi</SoftTypography>
            </SoftBox>
            <Divider/>
            <SoftBox>
              <ul>
                <li style={{ display: "flex", justifyContent: "space-around" }}>
                  <p>Tên bài thi: </p>
                  <p>Ngày thi: </p>
                  <p>Điểm số: </p>
                  <p>Thời gian làm bài: </p>
                </li>
              </ul>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
    );
}

export default ListQuizz;