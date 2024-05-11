import { useParams } from "react-router-dom";
import { useState } from "react";

import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, CardActions, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";

import logo from "assets/images/logo-ptit.jpg";

function DetailQuizzPage() {
  const { quizzId } = useParams();

  const [checkComment, setCheckComment] = useState(false);
  const [checkFeedBack, setCheckFeedBack] = useState(false);

  return (
    <DashboardLayout>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tên bài thi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Thời gian làm bài, thông tin gì đấy....
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setCheckComment(false)}>
            Làm bài
          </Button>
          <Button size="small" onClick={() => setCheckComment(true)}>
            Thảo luận
          </Button>
        </CardActions>
        <Divider />
        <Alert severity="warning">Sẵn sàng làm bài?</Alert>
        <SoftButton style={{ color: "#17C1E8" }}>Bắt đầu</SoftButton>
      </Card>

      {checkComment && (
        <Card style={{ "margin-top": "20px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bình luận
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <SoftInput placeholder="Chia sẻ cảm nghĩ của bạn..." />
              </div>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                style={{ color: "black", marginLeft: "10px" }}
              >
                Gửi
              </Button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="PTIT" src={logo} style={{ marginTop: "10px", marginRight: "10px" }} />
              <div style={{ flex: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  Tên người dùng
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bình luận bla bla...
                </Typography>
                <Button onClick={() => setCheckFeedBack(!checkFeedBack)}>Phản hồi</Button>
                {checkFeedBack && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ flex: 1 }}>
                      <SoftInput placeholder="Chia sẻ cảm nghĩ của bạn..." />
                    </div>
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      style={{ color: "black", marginLeft: "10px" }}
                      onClick={() => setCheckFeedBack(false)}
                    >
                      Gửi
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </DashboardLayout>
  );
}

export default DetailQuizzPage;
