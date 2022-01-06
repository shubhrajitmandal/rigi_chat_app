import { useState } from "react";
import styled from "styled-components";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";

import MainLayout from "../layouts/MainLayout";
import chatData from "../chatData";
import ChatContainer from "./ChatContainer";

const ProfileSection = styled(Box)`
  min-width: 350px;
  height: 100%;
  background-color: #f6f6f6;
  border-right: 2px solid #bdbdbd;
`;

const ChatList = styled(Box)`
  min-width: 400px;
  background-color: #f6f6f6;
  border-right: 2px solid #bdbdbd;
`;

const ChatArea = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledListItemAvatar = styled(ListItemAvatar)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTextField = styled(TextField)`
  && {
    .MuiInputBase-input {
      padding: 16px;
      font-size: 22px;
      min-height: 48px;
    }
    .Mui-focused fieldset {
      border: 2px solid #6610f2;
      opacity: 1;
    }
  }
`;

const Dashboard = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchChat, setSearchChat] = useState("");

  const user = {
    name: "Rick Sanchez",
    detail: "Scientist",
    imgURL:
      "https://cdn.dribbble.com/users/6523406/screenshots/14702237/sahar_heumesser-rick_sanchez-dribbble_4x.png",
  };

  let data = chatData;
  if (searchChat) {
    data = data?.filter((item) =>
      new RegExp(`${searchChat.trim()}`, "i").test(item?.user || "")
    );
  }

  let selectedChatObj = data.find((item) => item.id === selectedChat) || {};

  return (
    <MainLayout>
      <Box display="flex" width="100%" height="calc(100vh - 64px)">
        <ProfileSection display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ flexGrow: 1 }}
          >
            <Avatar
              alt={user.name}
              src={user.imgURL}
              sx={{ width: 200, height: 200, mb: 2 }}
            />
            <Typography sx={{ fontSize: 24 }}>{user.name}</Typography>
            <Typography sx={{ color: "#646464", fontSize: 20 }}>
              {user.detail}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 2 }}>
            <List sx={{ mx: 2 }}>
              <ListItem sx={{ px: 5, mb: 2 }}>
                <StyledListItemAvatar>
                  <PersonIcon fontSize="large" sx={{ color: "#00a86b" }} />
                </StyledListItemAvatar>
                <ListItemText sx={{ fontSize: 24 }} primary="Profile" />
              </ListItem>
              <ListItem sx={{ px: 5, mb: 2, background: "#fff" }}>
                <StyledListItemAvatar>
                  <ChatIcon fontSize="large" sx={{ color: "red" }} />
                </StyledListItemAvatar>
                <ListItemText sx={{ fontSize: 24 }} primary="Messages" />
              </ListItem>
              <ListItem sx={{ px: 5, mb: 2 }}>
                <StyledListItemAvatar>
                  <SettingsIcon fontSize="large" sx={{ color: "purple" }} />
                </StyledListItemAvatar>
                <ListItemText sx={{ fontSize: 24 }} primary="Settings" />
              </ListItem>
            </List>
          </Box>
        </ProfileSection>

        <ChatList>
          <StyledTextField
            variant="filled"
            placeholder="Search Contact...  "
            fullWidth
            value={searchChat}
            onChange={(e) => setSearchChat(e.target.value)}
          />
          <Box>
            <List sx={{ py: 0 }}>
              {data.map((item) => (
                <ListItem
                  sx={{
                    px: 4,
                    minHeight: 120,
                    borderBottom: "2px solid #bdbdbd",
                    cursor: "pointer",
                    background: selectedChat === item.id ? "#fff" : "none",
                  }}
                  onClick={() => setSelectedChat(item.id)}
                >
                  <ListItemAvatar sx={{ mr: 2 }}>
                    <Avatar
                      alt={item.user}
                      src={item.imgURL}
                      sx={{ width: 80, height: 80 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.user}
                    secondary={
                      <Box display="flex" alignItems="center">
                        <Box
                          sx={{
                            mr: 1,
                            height: 16,
                            width: 16,
                            borderRadius: "50%",
                            background:
                              item.status === "online" ? "#00a86b" : "#f44336",
                          }}
                        />
                        {item.status}
                      </Box>
                    }
                    secondaryTypographyProps={{
                      sx: {
                        color: item.status === "online" ? "#00a86b" : "#f44336",
                        fontWeight: 500,
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </ChatList>

        <ChatArea>
          {selectedChat ? (
            <ChatContainer selectedChatObj={selectedChatObj} />
          ) : (
            <Typography
              sx={{ my: "auto", fontSize: 40, color: "#8F9FA6" }}
              align="center"
            >
              No chat selected ...{" "}
            </Typography>
          )}
        </ChatArea>
      </Box>
    </MainLayout>
  );
};

export default Dashboard;
