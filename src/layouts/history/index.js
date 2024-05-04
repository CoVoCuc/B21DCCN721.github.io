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

// @mui material components


// Soft UI Dashboard React components


// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// VR dashboards components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import ListQuizz from "layouts/history/components/ListQuizz"

function History() {
  const { d1, h2, fontWeightMedium } = typography;

  return (
    <DashboardLayout>
    <DashboardNavbar />
    <ListQuizz/>
    </DashboardLayout>
  );
}

export default History;
