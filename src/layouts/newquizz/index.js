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


// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


// Soft UI Dashboard React base styles


// Dashboard layout components




import TestCreationForm from "layouts/newquizz/components/CreateTest"

// Data


function NewQuizz() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <TestCreationForm/>
    </DashboardLayout>
  );
}

export default NewQuizz;
