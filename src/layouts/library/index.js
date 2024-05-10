/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Link } from 'react-router-dom';

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from 'components/SoftButton';

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/Tables/Table";

// Data
import quizzUpTableData from './data/quizzUpTableData';



function Library() {
  const { columns, rows } = quizzUpTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Danh sách môn thi</SoftTypography>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table
                columns={columns}
                rows={rows.map((row, index) => ({
                  ...row,
                  action: (
                    <SoftTypography
                      // component="a"
                      // href="#"
                      variant="caption"
                      color="secondary"
                      fontWeight="medium"
                    >
                      <SoftButton color="error" onClick={() => alert("Xác nhận xóa")}>
                        Xóa
                      </SoftButton>
                      <Link to = {`/library/${quizzUpTableData.rows[index].id}`}><SoftButton color="dark">Sửa</SoftButton></Link>
                    </SoftTypography>
                  ),
                }))}
              />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}


export default Library;
