
import { useParams } from 'react-router-dom';

import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import SoftTypography from 'components/SoftTypography';

function QuizzPage() {
  const { quizId } = useParams();

  return (
    <DashboardLayout>
      <SoftTypography>Lam bai thi so :{quizId}</SoftTypography>
    </DashboardLayout>
  );
}

export default QuizzPage;
