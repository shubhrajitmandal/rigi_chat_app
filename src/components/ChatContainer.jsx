import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Box, Avatar, Typography, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const MessageArea = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ChatText = styled.div`
  max-width: 60%;
  margin: 8px 0;
  height: auto;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 20px;
`;

const RecievedChatText = styled(ChatText)`
  align-self: flex-start;
  background-color: #f2f4f2;
`;

const SentChatText = styled(ChatText)`
  align-self: flex-end;
  background-color: #6610f2;
  color: #fff;
`;

const StyledChatInput = styled(TextField)`
  && {
    .MuiInputBase-input {
      padding: 16px;
      font-size: 22px;
      min-height: 48px;
      background-color: #fff;
      border-top: 2px solid #bdbdbd;
    }
    .Mui-focused fieldset {
      opacity: 1;
    }
  }
`;

const ChatContainer = ({ selectedChatObj }) => {
  let chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current.scrollIntoView();
  }, [selectedChatObj]);

  return (
    <>
      <Box
        px={4}
        height="78px"
        display="flex"
        alignItems="center"
        justifyContet="space-between"
        sx={{ background: "#f6f6f6" }}
        borderBottom="2px solid #bdbdbd"
      >
        <Box display="flex" alignItems="center">
          <Avatar
            alt={selectedChatObj.user}
            src={selectedChatObj.imgURL}
            sx={{ mr: 1, width: 64, height: 64 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            {selectedChatObj.user}
          </Typography>
        </Box>
        <DeleteIcon
          sx={{ ml: "auto", color: "#787878", cursor: "pointer" }}
          fontSize="large"
        />
      </Box>

      <MessageArea>
        {selectedChatObj?.chat?.map((chatItem) =>
          chatItem.type === "sent"
            ? chatItem.messages?.map((msg) => (
                <SentChatText>{msg}</SentChatText>
              ))
            : chatItem.messages?.map((msg) => (
                <RecievedChatText>{msg}</RecievedChatText>
              ))
        )}
        <Box ref={chatEndRef} sx={{ opacity: 0 }} />
      </MessageArea>

      <Box
        height="78px"
        display="flex"
        alignItems="center"
        justifyContet="space-between"
        borderTop="2px solid #bdbdbd"
      >
        <StyledChatInput variant="filled" placeholder="Reply ..." fullWidth />
        <SendIcon
          color="primary"
          sx={{ px: 2, cursor: "pointer" }}
          fontSize="large"
        />
      </Box>
    </>
  );
};

export default ChatContainer;
